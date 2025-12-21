import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'



const TikTok = () => {
  return (
    <FontAwesomeIcon
      icon={faTiktok}
      className="w-5 h-5"
    />
  )
}

export default TikTok

// <FontAwesomeIcon icon={faTiktok} />