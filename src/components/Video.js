import React from 'react'

const Video = () => (
    <div className="video-container" id='video-container'>
        <h2 className="video-title">Check Out Our New Recipe!</h2>
        <iframe className='iframe' src="https://www.youtube.com/embed/7jyJZkVvyzo" frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
    </div>
)

export default Video;


