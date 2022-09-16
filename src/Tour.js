import React, { useState } from 'react';


const Tour = ({id,name,image,price,info,removeTour}) => {
  const[readMore,setReadMore]=useState(true)
  console.log(id,name)
  return (
    <article className='single-our'>
      <img src={image} alt={image}></img>
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
          <p>{readMore ?info :`${info.substring(0,200)}...`}
           <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
          </p>
          {/* <button onClick={setReadMore(!readMore)}>
            {readMore ? 'show less':'show more'} </button> */}
             <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
        </div>
      </footer>
    </article>
  )
}

export default Tour
