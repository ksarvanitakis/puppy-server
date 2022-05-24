import React from 'react'

const Add = () => {

  const handleSubmit = () => {

  }

  return (
    <>
    <h1> Add your puppy </h1>
    <form>
      
      <input type="submit" onClick={handleSubmit} placeholder='Add your puppy'/>
    </form>
    </>
  )
}

export default Add