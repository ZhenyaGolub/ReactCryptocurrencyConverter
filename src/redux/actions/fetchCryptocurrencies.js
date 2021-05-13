import axios from "axios";

export const fetchCryptocurrencies = () => (dispatch) => {
  axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD').then(({data}) => {
    const coins = data.Data.map((item, index) => {
      const obj = {
        name:item.CoinInfo.Name,
        fullName:item.CoinInfo.FullName,
        imageUrl:`https://cryptocompare.com/${item.CoinInfo.ImageUrl}`,
        price:item.RAW.USD.PRICE.toFixed(3),
        volume24Hour:parseInt(item.RAW.USD.VOLUME24HOUR)
      }
      return obj;
    })
    dispatch(setCryptocurrenciesList(coins));
  });
  };
  
export const setCryptocurrenciesList = (cryptocurrencies) => ({
  type: "SET_CRYPTOCURRENCIES",
  payload: cryptocurrencies,
});