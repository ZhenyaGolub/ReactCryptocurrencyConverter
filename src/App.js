import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './scss/style.scss';
import ListOfCryptocurrencies from './components/ListOfCryptocurrencies';
import CurrencyExchange from './components/CurrencyExchange';
import { useDispatch } from 'react-redux';
import {fetchCryptocurrencies} from './redux/actions/fetchCryptocurrencies';

function App() {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchCryptocurrencies());
  },[]);

  return (
    <div className="main__block">
  <section className="converter">
   <ListOfCryptocurrencies/>
    <CurrencyExchange/>
  </section>
    </div>
  );
}

export default App;
