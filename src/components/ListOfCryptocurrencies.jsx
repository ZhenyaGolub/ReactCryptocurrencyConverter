import React from 'react'
import { useSelector } from 'react-redux'

function ListOfCryptocurrencies() {

  const cryptocurrencies = useSelector(({cryptocurrencies}) => cryptocurrencies);

    return (
        <div className="converter__list">
      <div className="converter__currency-list">
        <table className="table">
          <thead>
          <tr>
          <th></th>
    <th>Name</th>
    <th>FullName</th>
    <th>Price</th>
    <th>Volume24Hour</th>
   </tr>
          </thead>
          <tbody>
          {
          cryptocurrencies && cryptocurrencies.map((item) => <tr key={item.name}><td><img style={{width:'30px', height:'30px'}} src={item.imageUrl} alt="#"/></td><td>{item.name}</td><td>{item.fullName}</td><td>${item.price}</td><td>${item.volume24Hour}</td></tr>)
        }
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default ListOfCryptocurrencies
