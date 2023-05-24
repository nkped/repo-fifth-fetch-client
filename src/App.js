import List from "./List";
import Form from "./Form";
import { useEffect, useState } from "react";
import Table from "./Table";

function App() {

  const API_URL = 'https://jsonplaceholder.typicode.com'


  const [ listItems, setListItems ] = useState([])
  const [ reqType, setReqType ] = useState('users')


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}/${reqType}`)
        if (!response.ok) throw new Error('wuuups!! data fetch failed...')
        const data = await response.json()
        setListItems(data)
      } catch(err) {console.warn(err.message)}
    }
    fetchItems()
  }, [reqType])

  
  return (
  <div>
    <Form 
      reqType={reqType} 
      setReqType={setReqType}
     />
     <Table 
      listItems={listItems} 
      />
  </div>
  )
}

export default App;