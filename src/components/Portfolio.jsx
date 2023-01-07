import React, {useState} from 'react'
import Header from './Header'
import '../styles/portfolio.css'
import Project1Image from '../assets/Project1.png'
import back from '../assets/left-chevron.png'
import forward from '../assets/right-chevron.png'
import Projekt2 from "../assets/Projekt2.png"
export default function Portfolio({page}) {
  const [displayInfo, setDisplayInfo] = useState(false)
  console.log(displayInfo)
  const [projects, setProjects] = useState([
    {
      title : "Games Planet",
      desc : ` 
      Games Planet is a website with three games 
      such as BlackJack, Hangman and Tic Tac Toe build with ReactJS.
      It has a stripe payment method to buy points and
      uses FireBase to register and store user data`,
      link : "https://gamesplanet.netlify.app",
      img : Project1Image
    },
    {
      title : "Speed Typing",
      desc : ` 
      It is an app build with ReactJS, which counts how many word you typed in a period of time`,
      link : "https://speedtypingjm.netlify.app/",
      img: Projekt2
    }
  ])
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    if(currentProject === projects.length - 1){
      setCurrentProject(0)
    }else 
      setCurrentProject(prevValue => prevValue + 1)
  }
  const prevProject = () => {
    if(currentProject === 0){
      setCurrentProject(projects.length - 1)
    }else 
      setCurrentProject(prevValue => prevValue - 1)
  }
  return (
    <div className='PortfolioContainer'>
      <Header />
      <p className='portfolioTittle'>Portfolio</p>
      <div className='ProjectsPortfolio'>
        <p className='ProjectTittle'>{projects[currentProject].title}</p>
        <div className='PortfolioImageContainer'>
          <img 
            src={back}
            onClick = {prevProject}  
          />
          <div>
        {!displayInfo ?
        <div 
        onMouseEnter={() => setDisplayInfo(true)}
        >

        <img
          src={projects[currentProject].img} 
          alt = "Project" 
          className='ProjectImage'
          />
          </div>:
              <div className='ProjectImageInfo' onMouseLeave={() => setDisplayInfo(false)}>
                <p>
                  {projects[currentProject].desc}
                </p>
              </div>
            }
        </div>
          <img 
            src = {forward} 
            onClick = {nextProject}    
          />
        </div>
        <a href={projects[currentProject].link} target= '_blank'>Visit Website</a>
      </div>
    </div>
  )
}
