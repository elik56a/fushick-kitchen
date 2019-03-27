import React from 'react'

const BuyFood = () => (

    <div className="invitations">
        <h2 className="invitations-title">Order Food From Fushick <i className="fas fa-utensils fa-1x"></i>
        </h2>
        <p className="invitations-text">
            If you do not feel like cooking today, fill out the form with the recipe you want - and today you'll get it home, hot and fresh!
        </p>

        <div name="contact" claseName="form-container">
            <form method="POST" data-netlify="true" >
                <div claseName="row">
                    <input className="user-name" type="text" id="fname" name="firstname" placeholder="Your Full Name" />
                </div>
                <div class="row">
                    <textarea id="subject" name="subject" placeholder="Enter your order details here..."></textarea>
                </div>
                <div class="row">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>





    </div>
)

export default BuyFood;





