import { Kit } from '../..';
import { gameInfo } from '../../interfaces/queries/gameInfo';
import GraphQL from '../../services/GraphQL';

/**
 * Gets the details on certain game information
 * @param {string} query The graphql query to get info with
 * @return {Promise<gameInfo>}
 */
export default async function gameInfoQuery(
    this: Kit,
    query: string,
): Promise<gameInfo> {
    const res = await GraphQL.makeCall(`
    {
       game_info {
        ${query}
      }
    }
  `, this.apiKey);

    this.setRateLimit(res.rateLimit);

    return res.data.game_info as gameInfo;
}
