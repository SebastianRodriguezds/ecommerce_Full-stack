import React from 'react'
import {Link} from 'react-router-dom'
import bannerImg from "../../assets/header.png"

export const Banner = () => {
  return (
    <div className='section__container header__container'>
        <div className='header__content z-30'>
            <h4 className='uppercase'>UP TO 20% Discount on</h4>
            <h1>Girl's Fashion</h1>     
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam asperiores debitis exercitationem itaque adipisci impedit modi esse cumque inventore iusto laudantium rerum perspiciatis vel eos vitae id dolores, harum odit?</p>
            <button><Link to={"/shop"} className="btn">EXPLORE NOW</Link></button>
        </div>
        <div className='header__image'>
            <img src={bannerImg} alt="banner image" />
        </div>
    </div>
  )
}

export default Banner;