import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';


function App() {

  const[isLoading,setIsLoading]=useState(true);
  const[tours,setTours]=useState([]);

  const url="https://mocki.io/v1/1c5a896e-491c-440a-a741-25be50765994";

  const removeTour=(id)=>{
    const newTours=tours.filter((tour)=>tour.id !==id)
    setTours(newTours)
  }

  const fetchTours =async()=>{
    setIsLoading(true)
    try {
      const response= await fetch(url);
      console.log(response)
      const tours=await response.json();
      console.log(tours)
      setIsLoading(false)
      setTours(tours)
      
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      
    }


  }

  useEffect(() => {
    fetchTours();
  
  },[]);
  



if(isLoading){
  return (
   <Loading/>
  );
}
return(
  <main>
    <Tours tours={tours}/>
  </main>
)
}

export default App;
