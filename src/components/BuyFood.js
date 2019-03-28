import React from 'react'

const BuyFood = () => (

    <div className="invitations">
        <h2 className="invitations-title">Order Food From Fushick <i className="fas fa-utensils fa-1x"></i>
        </h2>
        <p className="invitations-text">
            If you do not feel like cooking today, fill out the form with the recipe you want - and today you'll get it home, hot and fresh!
        </p>

        <div className="form-container">
            <form name="contact" netlify-honeypot="bot-field" data-netlify="true">
                <p class="hidden">
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>
                <div className="row">
                    <input className="user-name" type="text" id="fname" name="userName" placeholder="Your Full Name" />
                </div>
                <div className="row">
                    <textarea id="subject" name="subject" placeholder="Enter your order details here..."></textarea>
                </div>
                <div className="row">
                    <input type="submit" value="Submit" name='submit' />
                </div>
            </form>
        </div>





    </div>
)

export default BuyFood;





