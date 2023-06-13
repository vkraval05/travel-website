import React from 'react'
import { Button } from '../Button/Button';
import Video from '../../videos/video-1.mp4';
import './HeroSection.css';
import { useSelector } from 'react-redux';

const HeroSection = () => {

  const user = useSelector((state) => state.user.user);

  return (
    <div className='hero-container'>
      <video src={Video} autoPlay loop muted />

      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for <span className='name'>{user && user.name}</span> ?</p>
      <div className="hero-btns">
        <Button to={'services'} className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
        <Button to={'products'} className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i className="far fa-play-circle"></i></Button>

      </div>
    </div>
  )
}

export default HeroSection
