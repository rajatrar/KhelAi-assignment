
import React, { useState } from 'react'
import globeImg from '../assets/GlobeImg.png'
import Pins, { pinsData } from './Pins'
import '../style/Globe.css'

const transitionDuration = 300 // ms for animations

function Globe() {
  const [hoveredPin, setHoveredPin] = useState(null)
  const [showCard, setShowCard] = useState(false)

  const currentPin = pinsData.find(pin => pin.id === hoveredPin)

  const handlePinEnter = id => {
    setHoveredPin(id)
    setShowCard(true)
  }
  
  const handlePinLeave = () => {
    setShowCard(false)
    setTimeout(() => setHoveredPin(null), transitionDuration)
  }

  return (
    <div className="globe-container">
      {/* Globe Image */}
      <img
        src={globeImg}
        alt="Globe"
        className="globe-image"
      />

      {/* Pins Component */}
      <Pins
        onPinEnter={handlePinEnter}
        onPinLeave={handlePinLeave}
      />

      {/* Popup card */}
      {currentPin && (
        <div
          className={`popup-card ${showCard ? 'visible' : 'hidden'}`}
          style={{
            top: currentPin.top,
            left: currentPin.left,
            transition: `opacity ${transitionDuration}ms ease, transform ${transitionDuration}ms ease`,
          }}
        >
          <a href="#" className="popup-card-image-link">
            <img
              src={currentPin.img}
              alt={currentPin.name}
              className="popup-card-image"
            />
          </a>
          <div className="popup-card-content">
            <h5 className="popup-card-title">
              {currentPin.name}
            </h5>
            <p className="popup-card-subtitle">
              {currentPin.subname}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Globe
