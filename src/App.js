import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [country, setCountry] = useState([])

  useEffect(()=>{
    const getCountry = async()=>{
      const data = await axios.get("https://restcountries.com/v3.1/all")
      setCountry(data)

    }
    getCountry()
  }
  ,[])
  console.log(country)


  return (
      <div>
        {
          country?.data?.map((dt,i)=>(
            <div key={i}>
              country name =     
              {dt.name.common}

              

            </div>
          ))
}


          
        
      </div>
  );
}

export default App;
