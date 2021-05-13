import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFirstInput, changeSecondInput } from '../redux/actions/changeInput';
import { changeFirstSelect, changeSecondSelect } from '../redux/actions/changeSelect';
import { changeUnitValue } from '../redux/actions/changeUnitValue';
import { changeFirstInputValue, changeSecondInputValue } from '../redux/actions/changeInputValue';

function CurrencyExchange() {

  const dispatch = useDispatch();

  const cryptocurrenciesNames = useSelector(({cryptocurrencies}) => cryptocurrencies);
  const unitCost = useSelector(({unitCost}) => unitCost);
  const firstActiveItem = useSelector(({firstActiveItem}) => firstActiveItem);
  const secondActiveItem = useSelector(({secondActiveItem}) => secondActiveItem);
  const firstInputValue = useSelector(({firstInputValue}) => firstInputValue);
  const secondInputValue = useSelector(({secondInputValue}) => secondInputValue);

  const handleChangeFirstInput = (value) => {
    dispatch(changeFirstInput(value));
    dispatch(changeFirstInputValue());
  }

  const handleChangeSecondInput = (value) => {
    dispatch(changeSecondInput(value));
    dispatch(changeSecondInputValue());
  }

  const handleChangeFirstSelect = (value) => {
    dispatch(changeFirstSelect(value));
    dispatch(changeUnitValue());
    dispatch(changeSecondInputValue());
  }

  const handleChangeSecondSelect = (value) => {
    dispatch(changeSecondSelect(value));
    dispatch(changeUnitValue());
    dispatch(changeFirstInputValue());
  }

    return (
        <div className="converter__exchange">
      <div className="converter__exchange-block">
        <input value={firstInputValue} onInput={(e) => handleChangeFirstInput(Number(e.target.value))} type="number" className="converter__input"/>
        <select className="converter__select" onChange={(e) => handleChangeFirstSelect(e.target.value)}>
          {
            cryptocurrenciesNames.map((item) => <option selected={firstActiveItem === item.name ? true : false} key={item.name} value={item.name}>{item.name}</option>)
          }
        </select>
      </div>
      <div className="converter__exchange-block">
        <input value={secondInputValue} onInput={(e) => handleChangeSecondInput(Number(e.target.value))} type="number" className="converter__input"/>
        <select className="converter__select" onChange={(e) => handleChangeSecondSelect(e.target.value)}>
        {
            cryptocurrenciesNames.map((item) => <option selected={secondActiveItem === item.name ? true : false} key={item.name} value={item.name}>{item.name}</option>)
          }
        </select>
      </div>
        <h2 className="unit">{unitCost}</h2>
    </div>
    )
}

export default CurrencyExchange
