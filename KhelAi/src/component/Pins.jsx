import React from 'react'
import ModalImg from '../assets/ModalImg.png'

export const pinsData = [
  { id: 1, top: '50%', left: '20%', img: ModalImg, name: 'Virat', subname: 'Play Cricket' },
  { id: 2, top: '45%', left: '55%', img: ModalImg, name: 'Rohit', subname: 'Play Cricket' },
  { id: 3, top: '49%', left: '38%', img: ModalImg, name: 'Ronaldo', subname: 'Play Football' },
  { id: 4, top: '40%', left: '65%', img: ModalImg, name: 'Messi', subname: 'Play Football' },
  { id: 5, top: '23%', left: '55%', img: ModalImg, name: 'Rajat', subname: 'Do Coding' },
]

function Pins({ onPinEnter, onPinLeave }) {
  return (
    <>
      {pinsData.map(pin => (
        <div
          key={pin.id}
          className="pin"
          style={{
            top: pin.top,
            left: pin.left,
          }}
          onMouseEnter={() => onPinEnter(pin.id)}
          onMouseLeave={onPinLeave}
        >
          <img
            src="https://img.icons8.com/color/48/map-pin.png"
            alt={`Pin ${pin.id}`}
            className="pin-icon"
          />
        </div>
      ))}
    </>
  )
}

export default Pins
