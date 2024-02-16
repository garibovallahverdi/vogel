import React from 'react'
import Celebrty from '../CelebrtyComponent/Celebrty'
import Events from '../EventsComponent/Events'
import './WhatsHappening.css'

const WhatsHappening = () => {
  return (
    <div className='whats-happening'>
        <h2>What's happening</h2>
         <Celebrty/>
          <Events/>
          <Events/>
          <Events/>

        <p className='see-more'>See more...</p>
    </div>
  )
}

export default WhatsHappening
