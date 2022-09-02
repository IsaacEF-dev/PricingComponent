import React from 'react'

export const ListsPricing = ({prices}) => {

  return (
    <div className="  d-flex justify-content-center">
        <div className="col-11">
            <div className=" card-group">
                <div className="col mb-4 mb-md-0">
                    <div className="card m-0 card__basic">
                        <div className="card-body">
                            <h5 className='type my-3'>Basic</h5>
                            <p className="pricing my-3"><span className='dollar'>$</span> {prices[0].price}</p>
                            <hr />
                            <p className="characters">500 GB Storage</p>
                            <hr />
                            <p className="characters">2 Users Allowed</p>
                            <hr />
                            <p className="characters">Send up to 3 GB</p>
                            <hr />
                            
                            <button className='btn-pricing w-100 btn__more '>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="card mb-4 mb-md-0 m-0 card__basic card__middle">
                        <div className="card-body color__white">
                            <h5 className='type my-3 color__white'>Master</h5>
                            <p className="pricing my-3 color__white"><span className='dollar'>$</span> {prices[1].price}</p>
                            <hr />
                            <p className="characters">2 TB Storage</p>
                            <hr />
                            <p className="characters">10 Users Allowed</p>
                            <hr />
                            <p className="characters">Send up to 20 GB</p>
                            <hr />
                            
                            <button className=' w-100 btn__middle'>Learn More</button>
                        </div>
                </div>
                <div className="card m-0 card__basic">
                        <div className="card-body">
                            <h5 className='type my-3'>Master</h5>
                            <p className="pricing my-3"><span className='dollar'>$</span> {prices[2].price}</p>
                            <hr />
                            <p className="characters">2 TB Storage</p>
                            <hr />
                            <p className="characters">10 Users Allowed</p>
                            <hr />
                            <p className="characters">Send up to 20 GB</p>
                            <hr />
                            
                            <button className=' w-100 btn__more '>Learn More</button>
                        </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
