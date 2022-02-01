import axios from "axios";

export const httpcryptocurrencies = axios.create({
    baseURL: 'https://coinranking1.p.rapidapi.com',
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '54fbd4fd47msh20388683fbbe893p14f539jsn2e371e677342'
    }
});

