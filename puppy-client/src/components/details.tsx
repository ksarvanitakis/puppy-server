import React, { useState } from 'react'
import { Puppy, Puppies } from '../ts-utils/interfaces';


const Details = ({ puppy }: { puppy:Puppy })=> {
  const [visibility, setVisibility] = useState(false);

  const handleClick = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      <h3 onClick={handleClick} > { puppy.name }</h3>
      <section className={visibility ? 'visible':'hidden'}>
        <div> { puppy.breed }</div>
        <div> { puppy.birthdate }</div>
      </section>
    </>
  )
}

export default Details;