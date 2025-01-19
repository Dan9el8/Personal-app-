import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-img'>
            <img src={profile} alt="" />
        </div>      
      <h1><span>I'm Daniel Kuboi,</span> fullstack developer based in Nairobi Kenya.</h1>
      <p>I am a fullstack developer from Nairobi, kenya with over four years of expirience in multiple companies like Ubuntu Portal, Hotels.ng and Google</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
