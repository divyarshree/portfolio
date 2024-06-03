import React from 'react'

function Contact() {
  return (
    <div className='contact common-padding' id="contact">
      <div className='container'>
        <h2>Contact Me</h2>
        <div className='row'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
                <div className='contacts'>
                    <a href='https://www.google.com/maps'>
                    <img src='./address.svg' alt="address" />
                    <h3>Where to find me</h3>
                    <p>Bangalore, Karnataka</p>
                    </a>
                </div>
            
          </div>
          <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
                <div className='contacts'>
                    <a href="tel:9902920094">
                    <img src='./phone.svg' alt="phone" />
                    <h3>Call me at</h3>
                    <p>9902920094</p>
                    </a>
                </div>
            
          </div>
          <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
                 <div className='contacts'>
                 <a href="mailto:divyashree@pinklemonade.in">
                    <img src='./mail.svg' alt="mail" />
                    <h3>Email me at</h3>
                    <p>divyashree@gmail.com</p>
                  </a>
                </div>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Contact
