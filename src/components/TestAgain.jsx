import React, { useState } from 'react'
import '../styles/TestAgain.css'
import image1 from '../images/img1.jpeg'
import image2 from '../images/img2.jpeg'
import image3 from '../images/img3.jpeg'
import image4 from '../images/img4.jpeg'
import image5 from '../images/img5.jpeg'
import image6 from '../images/img6.jpeg'
import image7 from '../images/img7.jpeg'
import image8 from '../images/img8.jpeg'
import image9 from '../images/img9.jpeg'
import image10 from '../images/img10.jpg'

const TestAgain = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const myArray = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

const nextImg = () =>{
  if(currentImg === myArray.length -1){
    setCurrentImg(0)
  }else{
    setCurrentImg(currentImg + 1)
  }
}

const prevImg = () =>{
  if(currentImg === 0){
    setCurrentImg(myArray.length-1)
  }else{
    setCurrentImg(currentImg - 1)
  }
}
  
  return (
    <div className='d-flex vw-100 vh-50 justify-content-center align-items-center bg-light mt-2'>
     <button className="button btn btn-outline-primary mx-5 " onClick={prevImg}>Previous</button>
     <div className="image-container">
      <img className='zoom' src={myArray[currentImg]} alt="Images" height="550px" width="100%" />
     </div>
     <button className="button btn btn-outline-primary mx-5 " onClick={nextImg}>Next</button>
    </div>
  )
}
export default TestAgain
