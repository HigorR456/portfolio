import { useState } from 'react'
import gifPokeStore from './media_projects/gif/gifpokestore.gif'
import gifTaskApp from './media_projects/gif/giftaskapp.gif'
import gifClickTest from './media_projects/gif/gifclicktest.gif'
import gifDictionaryApp from './media_projects/gif/gifdictionaryapp.gif'

import jpegPokeStore from './media_projects/jpeg/jpegpokestore.jpg'
import jpegTaskApp from './media_projects/jpeg/jpegtaskapp.jpg'
import jpegClickTest from './media_projects/jpeg/jpegclicktest.jpg'
import jpegDictionaryApp from './media_projects/jpeg/jpegdictionaryapp.jpg'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faCode, faWindowMaximize} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'


import './App.scss'

function App() {
  const [showLinks, setShowLinks] = useState<string>('anchor-links-hide')

  const handleShowLinks = () => {
    if (showLinks === 'anchor-links-hide') {
      setShowLinks('anchor-links-show');
    } else setShowLinks('anchor-links-hide');
  }

  return (
    <>
      <header>
        <a href='#home'>Home</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </header>

      <main>
        <section id='home' className='personal-info-wrap'>
          <div className='img-wrap'>
            <img src='https://media.licdn.com/dms/image/D4D03AQHPh9SX7AOQ9w/profile-displayphoto-shrink_800_800/0/1677678739033?e=1683763200&v=beta&t=NXvB4huuMu65D-ChfQ2FqlVI9aw37UiSjlR0BG9TStc' alt='Higor photo'></img>
          </div>
          
          <div className='desc-wrap'>
            <p>Hello I am Higor.</p>
            <p>A passionate frontend developer from Brazil!</p>
          </div>
        </section>

        <section id='projects' className='projects-wrap'>
          <div className='box-wrap' onClick={handleShowLinks}>
            <img className='static' src={jpegPokeStore} alt='pokestore jpeg'></img>
            <img src={gifPokeStore} alt='Poke Store gif'></img>
            
            <div>
              <div>
                <p>Poke Store</p>
                <img src='https://skillicons.dev/icons?i=react,typescript,redux,next,sass&theme=dark' alt='Poke Store Skills'></img>
              </div>

              <div className={showLinks}>
                <div>
                  <a href='https://poke-store456.netlify.app/'>
                    <FontAwesomeIcon icon={faWindowMaximize} /> See project</a>
                  <a href='https://github.com/HigorR456/poke-store'>
                  <FontAwesomeIcon icon={faCode} /> Repository</a>
                </div>
                
              </div>
            </div>
          </div>

          <div className='box-wrap'>
            <img className='static' src={jpegTaskApp} alt='pokestore jpeg'></img>
            <img src={gifTaskApp} alt='Task App gif'></img>

            <div>
              <div>
                <p>Task App</p>
                <img src='https://skillicons.dev/icons?i=react,typescript,styledcomponents&theme=dark' alt='Task App Skills'></img>
              </div>

              <a href=''>See project</a>
              <a href=''>Repository</a>
            </div>
          </div>
          
          <div className='box-wrap'>
            <img className='static' src={jpegClickTest} alt='pokestore jpeg'></img>
            <img src={gifClickTest} alt='Click Test gif'></img>

              <div>
                <div>
                  <p>Click Test</p>
                  <img src='https://skillicons.dev/icons?i=react,typescript&theme=dark' alt='Click Test Skills'></img>
                </div>

                <a href=''>See project</a>
                <a href=''>Repository</a>
              </div>
          </div>

          <div className='box-wrap'>
            <img className='static' src={jpegDictionaryApp} alt='pokestore jpeg'></img>
            <img src={gifDictionaryApp} alt='Dictionary App gif'></img>
              <div>
                <div>
                  <p>Dictionary App</p>
                  <img src='https://skillicons.dev/icons?i=javascript,html,css&theme=dark' alt='Dictionary App Skills'></img>
                </div>

                <a href=''>See project</a>
                <a href=''>Repository</a>
              </div>
          </div>
          
        </section>

        <section id='contact' className='contact-wrap'>

          <a href='https://www.linkedin.com/in/higor456dev/'>
            <FontAwesomeIcon icon={faLinkedin} /> Linkedin
          </a>
          
          <a href='https://github.com/HigorR456'>
            <FontAwesomeIcon icon={faGithub} /> Github
          </a>

          <a href='mailto:higor456dev@gmail.com'>
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>

        </section>
      </main>
    </>
  )
}

export default App
