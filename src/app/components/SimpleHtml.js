"use client"
import React from 'react'

const SimpleHtml = () => {
  return (
    <div>
        <h3>This is a simple html page</h3>
        <button onClick={() => alert('click working')}>Click me</button>
    </div>
  )
}

export default SimpleHtml