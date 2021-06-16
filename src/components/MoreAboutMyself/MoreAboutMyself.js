import React from 'react'
import './MoreAboutMyself.css'
const MoreAboutMyself = ({ aboutMeRef }) => {
  return (
    <div ref={aboutMeRef}>
      <h1 className='about-myself-header'>About me.</h1>
      <div className='whole-div-about-myself'>
        <p className='about-myself-content'>
          Hello! I`m Denitsa Georgieva, A Software Engeneer living in Boulder,
          CO. After studing with a law in university, I ve tried to develop my
          attorney carrer in Bulgaria when i realized that although I still had
          a love for studing and develop myself to somtehning new and really
          interesting for me. After dabbling with some introductory JavaScript
          courses on the internet and exploring programming through
          self-teaching, I decided to take a leap of faith and made a switch in
          careers into tech. I have developed a strong understanding of
          JavaScript (ES5 & ES6), React, Redux, HTML5, and CSS3. As a developer,
          I find a lot of joy and excitement utilizing my skills to help
          troubleshoot bugs and pushing projects forward. I enjoy learning new
          technologies and growing in a field that is constantly being pushed to
          new boundaries. Feel free to connect with me! Let's talk about web
          dev, tech, sports, karate, cooking, or how I can be of help to your
          team or business! I'd love to get to know more developers and expand
          my network. I also know a thing or two about beer.
        </p>
      </div>
    </div>
  )
}

export default MoreAboutMyself
