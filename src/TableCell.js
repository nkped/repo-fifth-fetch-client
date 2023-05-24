import React from 'react'

const TableCell = ({ key, value }) => {
  return (
    <td>{JSON.stringify(value)}</td>
  )
}

export default TableCell