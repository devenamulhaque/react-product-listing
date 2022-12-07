import React from 'react'
import { useParams } from 'react-router-dom';
const category = () => {
    const { category } = useParams();
  return (
    <div>
        <h2>category show {category}</h2>
    </div>
  )
}

export default category
