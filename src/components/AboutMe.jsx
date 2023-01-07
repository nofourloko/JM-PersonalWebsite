import React from 'react'
import '../styles/AboutMe.css'
import Header from './Header'

export default function AboutMe() {
    return(
        <div className='aboutMeContainer'>
            <Header />
            <div className='AboutMeAll'>
            <div className='aboutMe'>
                <div className='aboutMePhoto'>
                </div>
                <div className='aboutMeInfo'>
                <p className='aboutMeName'>Jakub Miśta</p>
                    <p className='aboutMeInfoText'>
                        I'm a Frontend developer with a strong passion about accesibility and testing.
                        I'm incredibly passionate about building and contributing to Web Applications 
                        that matter. I am currently working with HTML5, CSS3, JavaScript ES6 ,
                        ReactJS and learning Typescript, i also used and  worked in FireBase with FireStore, ServerLess Functions with Netlify,
                        Stripe library and some other JavaScript libraries and APIs. I'm currently at the programing profile in 
                        Zespół Szkół Elektronicznych i Informatycznych in Sosnowiec, where i'm getting knowledge 
                        about OOP programing with Java and C++ , Frontend Applications With ReactJS , Mobile Apps with XML and Kotlin, 
                        BackEnd Applications with PHP and Data Bases MySQL. In two years i will get my degree on programing. 
                        I'm a hardworking and passionate person who loves learning and giving himself new challenges
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}
