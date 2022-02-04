import { createRouter, createWebHashHistory} from "vue-router"
import { CryptoCurrencies, Exchanges, Home, News, CurrenyDetails } from "../pages"

const routes = [
    { 
        path: '/', 
        name:'Home',
        component: Home 
    },
    { 
        path: '/currencies', 
        name:'currency',
        component: CryptoCurrencies 
    },
    { 
        path: '/crypto/:id', 
        name:'currencydetail',
        component: CurrenyDetails 
    },
    { 
        path: '/exchanges', 
        name:'Exchange',
        component: Exchanges 
    },
    { 
        path: '/news', 
        name:'News',
        component: News 
    },

]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

 
export default router;  