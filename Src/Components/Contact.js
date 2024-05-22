import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl m-4 p-4">Contact us </h1>
      <div>
        <input type='text' placeholder='name' className='border border-black'></input>
        <input type='text' placeholder='problem' className='border border-black'></input>
        <button className='rounded-lg bg-gray-200 '>sumbit</button>
      </div>
    </div>
  )
}

export default Contact;