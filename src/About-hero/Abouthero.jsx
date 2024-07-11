import React from 'react'
import './Abouthero.css';
import profile from '../Assets/My-img/port-img.png';
import heroimg from '../Assets/My-img/hero-img-02.png';
import arrow from '../Assets/My-img/arrow.png';
import next from '../Assets/My-img/marq.png';
import react from '../Assets/skills/React.png';
import html from '../Assets/skills/html.png';
import tcss from '../Assets/skills/tailwind.png';
import openai from '../Assets/skills/chatgpt.jpg';
import java from '../Assets/skills/java.png';
import mysql from '../Assets/skills/mysql.jpg';
import css from '../Assets/skills/css.jpg';
import python from '../Assets/skills/python.jpg';
const Abouthero = () => {
  return (
    <div className='aboutheropage'>
      <div className='abouthero'>
        <div className='abouthero-01'>
          <h1 id='hlo'>Hello , I'm</h1>
          <h1 id='name-abt'>Sai Sidharthan H</h1>
          <h2 id='desig-abt'>
            Full Stack Web Developer & <br></br>Gen AI Developer
          </h2>
          <p id='quote-abt'>
          Combining web development and generative AI,<br></br> I create innovative, user-friendly digital experiences
          </p>
          <div className='abt-btn'>
            <button>
              <a href="https://www.linkedin.com/in/saisidharthan/">
                Hire Me
              </a>
            </button>
            <button>
              <a href="https://drive.google.com/file/d/1V4MWkffUuS_HWwJQ1kN9HvEj-iqHX6vP/view">
                  My Resume
              </a>
            </button>
          </div>
        </div>
        <div className='abouthero-02'>
          <img src={profile} alt='myimage'></img>
        </div>
        <div className='abouthero-03'>
          <h2>2+</h2>
          <h3>Experience</h3>
          <hr></hr>
          <h2>10+</h2>
          <h3>Projects</h3>
          <hr></hr>
          <h2>15+</h2>
          <h3>Hackathons</h3>
          <hr></hr>
          <h2>8.5 +</h2>
          <h3>CGPA</h3>
        </div>
      </div>
      <div className='abt-marquee-box'>
        <div className='abt-marquee'>
        <marquee><span id='marq-text'> Front - End <img src={next} alt='button' id='maq-button'></img> Back-End <img src={next} alt='button' id='maq-button'></img> Mern-Stack <img src={next} alt='button' id='maq-button'></img> Gen-AI <img src={next} alt='button' id='maq-button'></img> LangChain <img src={next} alt='button' id='maq-button'></img> C++ <img src={next} alt='button' id='maq-button'></img> JAVA <img src={next} alt='button' id='maq-button'></img> DataBase <img src={next} alt='button' id='maq-button'></img> Testing <img src={next} alt='button' id='maq-button'></img> </span></marquee>
        </div>
      </div>


      <div className='abouthero-4'>
        <div className='abouthero-4-0'>
          <h3>My Skills</h3>
          <h1>Let’s Explore my<span class="abthero-4-high">Skills & Experience</span> </h1>
          <h3>Welcome to my skills showcase! I specialize in crafting visually stunning websites, mastering in front-end development. With expertise in UI/UX design, HTML/CSS, JavaScript, and CMS development, I bring your digital visions to life with seamless functionality and engaging user experiences.</h3>
          <button><a href="https://github.com/Saisidharthan/"> Learn More <img src={next} alt='button' id='maq-button'></img></a></button>
        </div>
        <div className='abouthero-4-1'>
          <div className='abouthero-4-1-1'>
            <div className='abouthero-4-1-0'>
              <img src={react} alt='react'></img>
              <h2>React</h2>
              <h3>98%</h3>
            </div>
            <div className='abouthero-4-1-0'>
              <img src={html} alt='react'></img>
              <h2>HTML</h2>
              <h3>100%</h3>
            </div>
            <div className='abouthero-4-1-0'>
              <img src={css} alt='react'></img>
              <h2>CSS</h2>
              <h3>78%</h3>
            </div>
            <div className='abouthero-4-1-0'>
              <img src={java} alt='react'></img>
              <h2>JAVA</h2>
              <h3>78%</h3>
            </div>
          </div>
          <div className='abouthero-4-1-2'>
            <div className='abouthero-4-1-0'>
              <img src={openai} alt='react'></img>
              <h2>GEN-AI</h2>
              <h3>80%</h3>
            </div>
            <div className='abouthero-4-1-0'>
              <img src={python} alt='react'></img>
              <h2>PYTHON</h2>
              <h3>75%</h3>
            </div>
            <div className='abouthero-4-1-0'>
              <img src={tcss} alt='react'></img>
              <h2>Tailwind CSS</h2>
              <h3>60%</h3>
            </div>
            <div className='abouthero-4-1-0'>
              <img src={mysql} alt='react'></img>
              <h2>MYSQL</h2>
              <h3>80%</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='abouthero-1'>
        <div className='abouthero-10'>
          <div className='abouthero-10-cont'>
            <h1>ENGAGED IN <span class="highlight">15 + HACKATHONS</span> ACROSS DIVERSE LOCALES, BLENDING ONLINE AND OFFLINE FORMATS. </h1>
            <h2>I'm seasoned in hackathons, having participated in over 15 events, both online and offline, across various states. With each competition, I've honed my problem-solving skills and fostered innovation, consistently delivering impactful solutions under pressure.</h2>
          </div>
          <div className='abouthero-10-part'>
            <div className='ah-10-hackathon'>
              <h1>Hackathons</h1>
              <h2>15 + hacks</h2>
            </div>
            <div className='ah-10-events'>
              <h1>Events</h1>
              <h2>20 + tech-events</h2>
            </div>
            <div className='ah-10-duration'>
              <h1>Duration</h1>
              <h2>2022-2024</h2>
            </div>

          </div>
        </div>
        <div className='abouthero-11'>
          <img src={heroimg} alt='my-img'></img>
        </div>
      </div>
      <div className='abt-marquee-box'>
        <div className='abt-marquee'>
        <marquee><span id='marq-text'> Hackathon <img src={next} alt='button' id='maq-button'></img> Innovation <img src={next} alt='button' id='maq-button'></img> Problem-Solving <img src={next} alt='button' id='maq-button'></img> Creativity <img src={next} alt='button' id='maq-button'></img> Teamwork <img src={next} alt='button' id='maq-button'></img> Technology <img src={next} alt='button' id='maq-button'></img> Coding <img src={next} alt='button' id='maq-button'></img> Innovative Solutions <img src={next} alt='button' id='maq-button'></img> Adaptive <img src={next} alt='button' id='maq-button'></img> </span></marquee>
        </div>
      </div>
      <div className='abouthero-2'>
        <div className='abouthero-20'>
          <h3>Hackathon Projects</h3>
          <h1>EXPLORE MY HACKATHON</h1>
        </div>
        <div className='abouthero-21'>
          <div className='abouthero-21-1'>
            <div className='abouthero-21-1-1'>
              <h1>Gen AI Websitetool</h1>
            </div>
            <div className='abouthero-21-1-2'>
              <div class="vl"></div>
              <h3>We developed JobFit AI for the GenAI Connect Mini Hackathon to streamline hiring with GenAI and machine learning, providing personalized resume insights, self-assessment tools, and job matching algorithms.</h3>
            </div>
            <div className='abouthero-21-1-3'>
                <h3>Gen-AI</h3>
                <h3>Langchain</h3>
                <h3>Stremlit</h3>
            </div>
            <div className='abouthero-21-1-4'>
                <a href="https://github.com/Saisidharthan/JobFit-AI" className='go-to-next'>
                  <img src={arrow} alt='nxt'></img>
                </a>
            </div>
          </div>
          <hr id='inbet-abouthero'></hr>
          <div className='abouthero-21-2'>
              <div className='abouthero-21-1-1'>
                <h1>Freelance Pro</h1>
              </div>
              <div className='abouthero-21-1-2'>
              <div class="vl"></div>
              <h3>We developed Freelance Pro for HackBangalore Hackathon. Using Django and AI, it enhances productivity with dynamic pricing and optimized job matching.</h3>
              </div>
              <div className='abouthero-21-1-3'>
                <h3>Front-end design</h3>
                <h3>GEN-AI</h3>
                <h3>Website</h3>
              </div>
              <div className='abouthero-21-1-4'>
                <a href="https://github.com/Saisidharthan/FreelanceGo" className='go-to-next'>
                  <img src={arrow} alt='nxt'></img>
                </a>
            </div>
          </div>
          <hr id='inbet-abouthero'></hr>
          <div className='abouthero-21-3'>
              <div className='abouthero-21-1-1'>
                <h1>Law Advisor</h1>
              </div>
              <div className='abouthero-21-1-2'>
                <div class="vl"></div>
                <h3>We built a website for the Smart India Hackathon 2023 to simplify Indian law and offer top legal suggestions for Common People.</h3>
              </div>
              <div className='abouthero-21-1-3'>
                <h3>UI/UX design</h3>
                <h3>JavaScript</h3>
                <h3>Website</h3>
              </div>
              <div className='abouthero-21-1-4'>
                <a href="https://github.com/Saisidharthan/LawAdvisor" className='go-to-next'>
                  <img src={arrow} alt='nxt'></img>
                </a>
            </div>
          </div>
        </div>
        <div className='abouthero-20'>
          <h3>.... DO CHECK OTHERS IN MY GITHUB ....</h3>
        </div>
      </div>
    </div>
  )
}

export default Abouthero