import { httpcryptocurrencies } from "../../httpCommon";

class CoinsApi  { 
    get(queryParams: any) : Promise<any> { 
        return httpcryptocurrencies.get('/coins',{ params : queryParams})
    }
}

export default new CoinsApi();