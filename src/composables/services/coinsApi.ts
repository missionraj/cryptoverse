import { httpcryptocurrencies } from "../../httpCommon";

class CoinsApi  { 
    get(queryParams: any) : Promise<any> { 
        return httpcryptocurrencies.get('/coins',{ params : queryParams})
    }

    getCoinsdetail(currecnyId: string, queryParams: any) : Promise<any>{
        return  httpcryptocurrencies.get(`/coin/${currecnyId}`,{ params : queryParams})
    }

    getCoinsPriceHistory(currecnyId: string, queryParams: any) : Promise<any>{
        return  httpcryptocurrencies.get(`/coin/${currecnyId}/history`, { params : queryParams})
    }
}

export default new CoinsApi();