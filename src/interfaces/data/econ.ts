export enum foodProductionSeasons {
    SPRING = 1,
    SUMMER = 1.2,
    FALL = 1,
    WINTER = 0.8,
}

export enum resourceType {
    OIL = 'oil',
    LEAD = 'lead',
    BAUXITE = 'bauxite',
    URANIUM = 'uranium',
    COAL = 'coal',
    IRON = 'iron',
    STEEL = 'steel',
    ALUMINUM = 'aluminum',
    GASOLINE = 'gasoline',
    MUNITIONS = 'munitions',
}

export type cityCosts = {
    cityPrice: number;
    resourcePrice: number;
    lead: number;
    iron: number;
    steel: number;
    bauxite: number;
    aluminum: number;
}

export type resourcePrices = {
    coal: number;
    oil: number;
    uranium: number;
    iron: number;
    bauxite: number;
    lead: number;
    gasoline: number;
    munitions: number;
    steel: number;
    aluminum: number;
    food: number;
}

export enum projects {
    AC = 'activity Center',
    AUP = 'Advanced Urban Planning',
    AEC = 'Advanced Engineering Corps',
    ALA = 'Arable Land Agency',
    AS = 'Arms Stockpile',
    BW = 'Bauxite Works',
    CoCE = 'Center of Civil Engineering',
    CRC = 'Clinical Research Center',
    EGR = 'Emergency Gasoline Reserve',
    FS = 'Fallout Shelter',
    GT = 'Green Technologies',
    GSA = 'Governemtn Support Agency',
    IA = 'Intelligence Agency',
    ITC = 'International Trade Center',
    ID = 'Iron Dome',
    IW = 'Iron Works',
    MI = 'Mass Irrigation',
    MP = 'Metropolitan Planning',
    MS = 'Military Salvage',
    MLP = 'Missile Launch Pad',
    ML = 'Moon Landing',
    NRF = 'Nuclear Research Facility',
    PE = 'Pirate Economy',
    PB = 'Propaganda Bureau',
    RI = 'Recycling Initiative',
    RnD = 'Research and Development Center',
    SP = 'Space Program',
    SPTP = 'Specialized Police Training Program',
    SS = 'Spy Satellite',
    TS = 'Telecommunications Satellite',
    UEP = 'Uranium Enrichment Program',
    UP = 'Urban Planning',
    VDS = 'Vital Defense System',
}