import React from 'react'
import Tour from './Tour'

const Tours = ({tours}) => {
  console.log(tours)

  return (
    <section>

    <div className='title'>
      <h1>Tours</h1>
    </div>
            <div className="underline"></div>
            <div>
               {tours.map((tour) => {
          return <Tour key={tour.id} {...tour}  />;
        })}
            </div>
            {/* {tours.map((tour)=>{
              <Tour {...tour}/>
            })} */}

    </section>
  )
}

export default Tours
