import React from 'react'

const List = ({ listItems }) => {
  return (
    <ul>
        {listItems.map((item) => <li key={item.id}>{JSON.stringify(item)}</li>)}
        </ul>
  )
}

export default List