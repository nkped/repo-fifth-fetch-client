import React from 'react'
import TableCell from './TableCell'

const Row = ({ item }) => {
  return (
    <tr>{Object.entries(item).map(([key, value]) => <TableCell key={key} value={value} /> )} </tr>
  )
}

export default Row