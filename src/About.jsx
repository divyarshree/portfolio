import React from 'react'

function About() {
  return (
    <div className='aboutsec common-padding' id="about">
      <div className='container'>
        <div className='row'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                <h2>About me</h2>
                <p>Welcome! I'm Divyashree.R , a seasoned Full Stack Developer specializing in crafting dynamic and innovative digital solutions. With a robust foundation in HTML5, CSS, Sass, JavaScript, and jQuery, I meticulously engineer responsive and visually captivating front-end interfaces that captivate audiences and elevate user experiences.</p>
                <p>My proficiency extends to the realm of backend development, where I harness the power of WordPress to architect scalable and customizable websites, seamlessly integrating themes and plugins to meet diverse client needs. Moreover, my mastery of REST API facilitates seamless communication between server and client, ensuring efficient data exchange and dynamic content delivery. </p>
                <p>Beyond traditional web development, I am passionate about exploring the frontiers of technology, with a keen interest in AI-driven solutions.  Let's collaborate to transform your digital vision into reality.</p>
                
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                <div className='imgab'>
                    <img src="./lap.jpg" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
