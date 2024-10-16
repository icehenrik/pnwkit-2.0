import Pusher, { Channel } from "pusher-js";
import { Kit } from "../..";
import { subscriptionEvent, bankRecSubscriptionFilters } from "../../interfaces/subscriptions";
import { bankrec } from "../../interfaces/queries/bank";
import superagent from "superagent";

/**
 * Subscribe to get bank records in real time
 * @param {subscriptionEvent} event What type of event you want
 * @param {Function} callback Your callback function
 * @param {bankRecSubscriptionFilters} filters Filter the bank records
 * @return {Channel} The channel the subscription is running on
 */
export default async function bankRecSubscription(this: Kit, event: subscriptionEvent, callback: Function, filters?: bankRecSubscriptionFilters) {
    if (!this.apiKey) throw new Error('SubscriptionService: Cannot make a call without an API key!');

    let linkFilter = ``;

    if (filters) {
        let k: keyof typeof filters;
        for (k in filters) {

            (Array.isArray(filters[k])) ? linkFilter += `&${k}=${filters[k]?.toString()}` : linkFilter += `&${k}=${filters[k]}`
        }
    }

    const res = await superagent.get(`https://api.politicsandwar.com/subscriptions/v1/subscribe/bankrec/${event}?api_key=${this.apiKey}${linkFilter}`)
        .accept('json')
        .then()
        .catch((e: Error) => {
            throw new Error(`Subscriptions: Failed to make api call, ${e}`);
        });


    const pusher = new Pusher("a22734a47847a64386c8", {
        cluster: 'us2',
        wsHost: "socket.politicsandwar.com",
        disableStats: true,
        authEndpoint: "https://api.politicsandwar.com/subscriptions/v1/auth",
    });


    const channel = pusher.subscribe(res.body.channel);

    channel.bind(`BULK_BANKREC_${event.toUpperCase()}`, function (data: bankrec[]) {

        callback(data);
        return;
    });

    pusher.connection.bind('disconnected', () => {
        console.log(`bruh`)
    });

    return channel;
}