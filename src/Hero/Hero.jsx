import React from 'react'
import './Hero.css'
import myphoto from '../Assets/my-photo.jpg'
import next from '../Assets/icon4.png';
import icon2 from '../Assets/icon2.png'
const Hero = () => {
  return (
    <div className='hero-element'>
      <div  className='hero'>
        <div className='heroimg'>
          <img src={myphoto} alt='myphoto' id='myphoto'>
          </img>
        </div>
        <div className="herotext">
            <h1 id='name'>Sai Sidharthan H</h1>
            <h3 id='desig'>3rd Year Computer Science Engineering
              Student at Sri Krishna College of Engineering
              And Technology</h3>
            <div className='nextbutton'>
              <a href="/Aboutme" class="link-button">
                <img src={icon2} alt='next' id='next'></img>
              </a>
            </div>
        </div>
      </div>
      <div className='hero2'>
        <div className='marquee-box'>
          <div className='marquee'>
            <marquee><span id='text'> Contact Me for <b> Collaburation</b> <img src={next} alt='button' id='button'></img> Contact Me for <b> Hackathon Advice</b> <img src={next} alt='button' id='button'></img> Contact Me for <b> Project Help</b> <img src={next} alt='button' id='button'></img> Contact Me for <b> Collaburation</b> <img src={next} alt='button' id='button'></img> </span></marquee>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero