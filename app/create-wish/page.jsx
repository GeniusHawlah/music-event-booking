import React from 'react'
import CreateWishForm from './CreateWishForm'

function CreateWish() {
  return (
    <div className='gen-padding'>
         {/*//> HEADING */}
         <div className="my-10">
        <p className="font-bold text-header-color text-3xl  ">
          Add a Wish
        </p>
      </div>

      <CreateWishForm />
    </div>
  )
}

export default CreateWish