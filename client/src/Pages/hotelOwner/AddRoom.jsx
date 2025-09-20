import React, { useState } from 'react'
import Title from '../../components/Title';
import { assets } from '../../assets/assets';

function AddRoom() {

  const [images , setImages] = useState({
    1:null,
    2:null,
    3:null,
    4:null,
  });

  const [inputs , setInputs] = useState({
    roomType:"",
    pricePerNight:0,
    amenities: {
      'Free Wifi' : false,
      'Free Breakdfast' : false,
      'Free Service' : false,
      'Mountain View' : false,
      'Pool Access' : false,
    }
  })


  return (
    <form>
      <Title align='left' font='outfit' title='Add Room' subTitle="Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience."/>

      {/* upload area for image  */}

      <p className='text-gray-800 mt-10'>Images</p>

      <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`}  key={key} className=''>
            <img src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea} alt="images" className='max-h-13 cursor-pointer opacity-80'/>

            <input type="file" accept='image/*' id={`roomImage${key}`} hidden onChange={e => setImages({...images , [key] : e.target.files[0]})}/>
          </label>

        ))}
      </div>

      <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
        <div className='flex-1 max-w-48'>
          <p>Room Type</p>
          <select
          onChange={e => setInputs({...inputs , roomType : e.target.value})}
          value={inputs.roomType}
          className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full'>
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>

        <div>
          <p className='text-gray-800'>
            Price <span className='text-xs'>/night</span>
          </p>
          <input type="number" placeholder='0' className='border border-gray-300 mt-1 rounded p-2 w-24' value={inputs.pricePerNight} onChange={e => setInputs({...inputs , pricePerNight : e.target.value})}/>
        </div>
      </div>

      <p className='text-gray-800 mt-4'>Amenities</p>
      <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm'>

        {
          Object.keys(inputs.amenities).map((amenity , index) => (
            <div key={index}>
              <input type="checkbox" id={`amenitites${index+1}`} checked={inputs.amenities[amenity]} onChange={() => setInputs({...inputs , amenities : {...inputs.amenities , [amenity] : !inputs.amenities[amenity]}})}/>

              <label htmlFor={`amenitites${index+1}`}> {amenity}</label>


            </div>
          ))
        }

      </div>

      <button className='bg-primary text-white px-8 py-2 rounded mt-8 cursor-pointer'>Add Room</button>

    </form>
  )
}

export default AddRoom
