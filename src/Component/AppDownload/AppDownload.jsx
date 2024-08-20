import React from 'react'
import "./AppDownload.css"
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='App-download' id='App-download'>
      <p>For better Experience Download <br /> Tomato App</p>
        <div className='App-download-platform'>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>  
    </div>
  )
}


export default AppDownload
