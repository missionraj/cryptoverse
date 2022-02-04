export interface Coins {
    status: string;
    data:   Data;
}

export interface Data {
    stats: Stats;
    coins: Coin[];
}

export interface Coin {
    uuid:           string;
    symbol:         string;
    name:           string;
    color:          null | string;
    iconUrl:        string;
    marketCap:      string;
    price:          string;
    listedAt:       number;
    tier:           number;
    change:         string;
    rank:           number;
    sparkline:      string[];
    lowVolume:      boolean;
    coinrankingUrl: string;
    "24hVolume":    string;
    btcPrice:       string;
}

export interface Stats {
    total:          number;
    totalCoins:     number;
    totalMarkets:   number;
    totalExchanges: number;
    totalMarketCap: string;
    total24hVolume: string;
}


export interface News {
    _type:         string;
    name:          string;
    url:           string;
    image:         Image;
    description:   string;
    provider:      Provider[];
    datePublished: Date;
}

export interface Image {
    _type:     string;
    thumbnail: Thumbnail;
}

export interface Thumbnail {
    _type:      string;
    contentUrl: string;
    width:      number;
    height:     number;
}

export interface Provider {
    _type: string;
    name:  string;
}