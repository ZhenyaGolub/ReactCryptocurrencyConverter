(this["webpackJsonpreact-converter"]=this["webpackJsonpreact-converter"]||[]).push([[0],{21:function(e,t,n){e.exports=n(50)},43:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(5),u=n.n(r),i=n(6),o=n.n(i),l=(n(43),n(2));var m=function(){var e=Object(l.c)((function(e){return e.cryptocurrencies}));return a.a.createElement("div",{className:"converter__list"},a.a.createElement("div",{className:"converter__currency-list"},a.a.createElement("table",{className:"table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null),a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"FullName"),a.a.createElement("th",null,"Price"),a.a.createElement("th",null,"Volume24Hour"))),a.a.createElement("tbody",null,e&&e.map((function(e){return a.a.createElement("tr",{key:e.name},a.a.createElement("td",null,a.a.createElement("img",{style:{width:"30px",height:"30px"},src:e.imageUrl,alt:"#"})),a.a.createElement("td",null,e.name),a.a.createElement("td",null,e.fullName),a.a.createElement("td",null,"$",e.price),a.a.createElement("td",null,"$",e.volume24Hour))}))))))};var p=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.cryptocurrencies})),n=Object(l.c)((function(e){return e.unitCost})),c=Object(l.c)((function(e){return e.firstActiveItem})),r=Object(l.c)((function(e){return e.secondActiveItem})),u=Object(l.c)((function(e){return e.firstInputValue})),i=Object(l.c)((function(e){return e.secondInputValue}));return a.a.createElement("div",{className:"converter__exchange"},a.a.createElement("div",{className:"converter__exchange-block"},a.a.createElement("input",{value:u,onInput:function(t){return n=Number(t.target.value),e(function(e){return{type:"CHANGE_FIRST_INPUT",payload:e}}(n)),void e({type:"CHANGE_FIRST_INPUT_VALUE"});var n},type:"number",className:"converter__input"}),a.a.createElement("select",{className:"converter__select",onChange:function(t){return n=t.target.value,e(function(e){return{type:"CHANGE_FIRST_SELECT",payload:e}}(n)),e({type:"CHANGE_UNIT_VALUE"}),void e({type:"CHANGE_SECOND_INPUT_VALUE"});var n}},t.map((function(e){return a.a.createElement("option",{selected:c===e.name,key:e.name,value:e.name},e.name)})))),a.a.createElement("div",{className:"converter__exchange-block"},a.a.createElement("input",{value:i,onInput:function(t){return n=Number(t.target.value),e(function(e){return{type:"CHANGE_SECOND_INPUT",payload:e}}(n)),void e({type:"CHANGE_SECOND_INPUT_VALUE"});var n},type:"number",className:"converter__input"}),a.a.createElement("select",{className:"converter__select",onChange:function(t){return n=t.target.value,e(function(e){return{type:"CHANGE_SECOND_SELECT",payload:e}}(n)),e({type:"CHANGE_UNIT_VALUE"}),void e({type:"CHANGE_FIRST_INPUT_VALUE"});var n}},t.map((function(e){return a.a.createElement("option",{selected:r===e.name,key:e.name,value:e.name},e.name)})))),a.a.createElement("h2",{className:"unit"},n))},s=function(e){return{type:"SET_CRYPTOCURRENCIES",payload:e}};var E=function(){var e=Object(l.b)();return Object(c.useEffect)((function(){e((function(e){o.a.get("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD").then((function(t){var n=t.data.Data.map((function(e,t){return{name:e.CoinInfo.Name,fullName:e.CoinInfo.FullName,imageUrl:"https://cryptocompare.com/".concat(e.CoinInfo.ImageUrl),price:e.RAW.USD.PRICE.toFixed(3),volume24Hour:parseInt(e.RAW.USD.VOLUME24HOUR)}}));e(s(n))}))}))}),[]),a.a.createElement("div",{className:"main__block"},a.a.createElement("section",{className:"converter"},a.a.createElement(m,null),a.a.createElement(p,null)))},d=n(4),f=n(1),_={cryptocurrencies:[],isLoaded:!1,firstInputValue:1,secondInputValue:1,firstActiveItem:"BTC",secondActiveItem:"ETH",unitCost:0},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,n=function(){return(e.cryptocurrencies.find((function(t){return t.name===e.firstActiveItem})).price/e.cryptocurrencies.find((function(t){return t.name===e.secondActiveItem})).price).toFixed(2)+" "+e.cryptocurrencies.find((function(t){return t.name===e.secondActiveItem})).fullName};return"SET_CRYPTOCURRENCIES"===t.type?Object(f.a)(Object(f.a)({},e),{},{cryptocurrencies:t.payload,isLoaded:!0,unitCost:(t.payload[0].price/t.payload[1].price).toFixed(2)+" "+t.payload.find((function(t){return t.name===e.secondActiveItem})).fullName,secondInputValue:(t.payload[0].price/t.payload[1].price).toFixed(2)}):"CHANGE_FIRST_INPUT"===t.type?Object(f.a)(Object(f.a)({},e),{},{firstInputValue:t.payload,secondInputValue:(e.cryptocurrencies.find((function(t){return t.name===e.firstActiveItem})).price/e.cryptocurrencies.find((function(t){return t.name===e.secondActiveItem})).price).toFixed(2)*e.firstInputValue}):"CHANGE_SECOND_INPUT"===t.type?Object(f.a)(Object(f.a)({},e),{},{secondInputValue:t.payload}):"CHANGE_FIRST_INPUT_VALUE"===t.type?Object(f.a)(Object(f.a)({},e),{},{secondInputValue:(e.cryptocurrencies.find((function(t){return t.name===e.firstActiveItem})).price/e.cryptocurrencies.find((function(t){return t.name===e.secondActiveItem})).price*e.firstInputValue).toFixed(3)}):"CHANGE_SECOND_INPUT_VALUE"===t.type?Object(f.a)(Object(f.a)({},e),{},{firstInputValue:(e.cryptocurrencies.find((function(t){return t.name===e.secondActiveItem})).price/e.cryptocurrencies.find((function(t){return t.name===e.firstActiveItem})).price*e.secondInputValue).toFixed(3)}):"CHANGE_FIRST_SELECT"===t.type?Object(f.a)(Object(f.a)({},e),{},{firstActiveItem:t.payload}):"CHANGE_SECOND_SELECT"===t.type?Object(f.a)(Object(f.a)({},e),{},{secondActiveItem:t.payload}):"CHANGE_UNIT_VALUE"===t.type?Object(f.a)(Object(f.a)({},e),{},{unitCost:n()}):e},N=n(20),I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.c,y=Object(d.d)(v,I(Object(d.a)(N.a)));u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,{store:y},a.a.createElement(E,null))),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.9f5e1d73.chunk.js.map