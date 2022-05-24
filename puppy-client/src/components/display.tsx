import React, { useState, useEffect } from 'react';
import { getPuppies } from '../api/index';
import { Puppies, Puppy } from '../ts-utils/interfaces'

const Display = () => {
  const [puppies, setPuppies] = useState<Puppies>([] as Puppies);

  useEffect(() => {
    getPuppies().then(res=>{
      setPuppies(res);
    });
  }, [])

  return (
    <>

    {puppies.length === 0 ? (
      <div className="text-lg font-bold p-4">No items found!</div>
    ) : (
      puppies.map((puppy) => (
        <div key={puppy.id}>{puppy.name}</div>
      ))
    )}
    </>
  )
}

export default Display
