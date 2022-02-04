import { httpcryptocurrencies, httpbingnews } from "../../httpCommon";

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

    getCoinsNews(queryparams: any) :Promise<any> { 
        return httpbingnews.get(`/search`,{ params: queryparams});
    }
}

export default new CoinsApi();