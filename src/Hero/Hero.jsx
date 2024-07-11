import React from 'react';
import about from '../Assets/7 1.png';
import next from '../Assets/My-img/marq.png';
import myphoto from '../Assets/My-img/me.jpg';
import project from '../Assets/projects.png';
import newsletter from '../Assets/9 1.png';
import './Hero.css';
import github from '../Assets/github-logo.png';
import linkedin from '../Assets/linkedin-logo (1).png';
import icon5 from '../Assets/My-img/bolt.png';
const Hero = () => {
  return (
    <div className='full-content'>
      <div className='hero-element'>
        <div className='hero'>
          <div className='heroimg'>
            <img src={myphoto} alt='myphoto' id='myphoto'></img>
          </div>
          <div className="herotext">
            <h1 id='name'>Sai Sidharthan H</h1>
            <h3 id='desig'>3rd Year Computer Science Engineering
              Student at Sri Krishna College of Engineering
              And Technology</h3>
            <div className='nextbutton'>
              <a href="/Aboutme" className="link-button">
                <img src={icon5} alt='next' id='next'></img>
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
          <div className='about-project-container'>
            <div className='about'>
              <img src={about} alt='about-img' id='aboutimg'></img>
              <div className='about-content-container'>
                <div className='about-content'>
                  <div className='about-text'>
                    <p id='about-text-01'>MORE ABOUT ME</p>
                    <p id='about-text-02'>Credentials</p>
                  </div>
                </div>
                <div className='aboutbutton'>
                  <a href="/Aboutme" className="about-button">
                    <img src={icon5} alt='next'></img>
                  </a>
                </div>
              </div>
            </div>
            <div className='project'>
              <img src={project} alt='project-img' id='projectimg'></img>
              <div className='project-content-container'>
                <div className='project-content'>
                  <div className='project-text'>
                    <p id='project-text-01'>SHOWCASE</p>
                    <p id='project-text-02'>Projects</p>
                  </div>
                </div>
                <div className='projectbutton'>
                  <a href="/Contactme" className='project-button'>
                    <img src={icon5} alt='nxt'></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='hero-element-02'>
        <div className='herosection-03'>
          <div className='newsletter'>
            <img src={newsletter} alt='newsletter-img' id='newsletterimg'></img>
            <div className='newsletter-content-container'>
              <div className='newsletter-content'>
                <div className='newsletter-text'>
                  <p id='news-text-01'>READ</p>
                  <p id='news-text-02'>NewsLetter</p>
                </div>
              </div>
              <div className='newsbutton'>
                <a href="/Projects" className='news-button'>
                  <img src={icon5} alt='nxt'></img>
                </a>
              </div>
            </div>
          </div>
          <div className='github'>
            <img src={github} alt='github-img' id='githubimage'></img>
            <div className='github-content-container'>
              <div className='github-content'>
                <div className='github-text'>
                <p id='github-text-01'>View MY Projects in</p>
                <p id='github-text-02'>GitHub</p>
                </div>
              </div>
              <div className='gitbutton'>
                <a href="https://github.com/Saisidharthan" className='git-button'>
                  <img src={icon5} alt='nxt'></img>
                </a>
              </div>
            </div>
          </div>
          <div className='linkedin'>
          <img src={linkedin} alt='github-img' id='githubimage'></img>
            <div className='github-content-container'>
              <div className='github-content'>
                <div className='github-text'>
                <p id='github-text-01'>Stay With Me in</p>
                <p id='github-text-02'>Linkedin</p>
                </div>
              </div>
              <div className='gitbutton'>
                <a href="https://www.linkedin.com/in/saisidharthan/" className='git-button'>
                  <img src={icon5} alt='nxt'></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
