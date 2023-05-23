import List from "./List";
import { useEffect, useState } from "react";

function App() {

  const API_URL = 'https://jsonplaceholder.typicode.com/users'


  const [ listItems, setListItems ] = useState([])


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw new Error('wuuups!! data fetch failed...')
        const data = await response.json()
        setListItems(data)
      } catch(err) {console.warn(err.message)}
    }
    fetchItems()
  }, [])

 
  
  return (
  <div className="App">
    <List listItems={listItems} />
  </div>
  )
}

export default App;
