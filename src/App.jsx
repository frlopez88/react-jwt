import { useState, useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const [data, setData] = useState([]);

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJmcmxvcGV6IiwicGFzcyI6IkhvbGExMiIsImNvcnJlbyI6ImZybG9wZXpAdW5pdGVjLmVkdSIsImlhdCI6MTcxODA3MjQwMCwiZXhwIjoxNzE4MDc2MDAwfQ.lUCnEZYohnCNfzp2Cq9ciqJFRR1lDCwEMNsNUMeWgwc';

  const getAnimales = async () => {

    const url = 'http://localhost:3000/api/animal';

    const result = await axios.get(url, {
      headers: {
        'Authorization': `Bear ${token}`
      }
    });

    const resultData = (await result).data;
    setData(resultData);

  }

  useEffect(()=>{
    getAnimales();
  }, []);

  return (
    <>
      <ul>
      {
        data.map( item => (
          <li key={item.id} > {item.nombre} </li>
        )) 
      }
      </ul>
    </>
  )
}

export default App
