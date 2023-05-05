import './App.css';

import Product from '../Product/Product';

import { useEffect, useState } from 'react';


function App() {

  // const category = "men's%20clothing";

  const [ecomCat, setEcomcat] = useState([]); 

  useEffect (() => { async function fetchEcom(){
      const response = await fetch(`https://fakestoreapi.com/products`)
      const ecomData = await response.json();
      setEcomcat(ecomData)
  }
   fetchEcom();
  }, []);

  console.log(ecomCat);


  return (
    <div className="">
      <Product ecomCat={ecomCat}/>
      {ecomCat.map((item) => {
        return <p key={item.id}>{item.category}</p>;
      })}
    </div>
  );
}

export default App;
