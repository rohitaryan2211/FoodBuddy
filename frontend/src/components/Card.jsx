import React from 'react'

const Card = () => {
  return (
    <div className="card m-2 mt-3" style={{'width': '18rem', 'maxHeight':'600px'}}>
        <img src="https://www.yummytummyaarthi.com/wp-content/uploads/2021/12/1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="container w-100">
            <select className="m-2 h-100 rounded">
              {Array.from(Array(6), (e,i)=>{
                return (
                  <option key={i+1} value={i+1}>{i+1}</option>
                )
              })}
            </select>
            <div className='d-inline h-100 fs-5'>
              Total Price
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card