
import React from 'react'

const About = () => (

    <div className="about-section">
        <h2 className="about-title">About Fushick Kitchen  <i className="fas fa-cookie-bite fa-1x"></i></h2>
        <div className="about-text">
            <p> Fushik Kitchen is a great place to find a delicious meal, you can cook or order - the choice is in your hand. <br></br>

                Here you can search for recipes from all over the world, enjoy a variety of options and variety of all ethnic communities.
There is also the possibility of ordering freshly prepared food to your home</p>
            <img className='photo' src="data:image/png;base64,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" alt="" />

        </div>
    </div>
)

export default About;


