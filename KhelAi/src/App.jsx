


import React from 'react'
import Globe from './component/Globe.jsx'
import './style/App.css'

const App = () => {
  return (
    <div className="page-container">
      {/* Globe viewport */}
      <main className="globe-viewport">
        <Globe />
      </main>

      {/* Scrollable content */}
      <section className="scrollable-content">
        <div className="content-wrapper">
          {/* Your info cards or other content here */}
          <h2>Hire Me</h2>
          <p>
            I am available for hire as a developer. With expertise in making web applications. Let's collaborate to create engaging digital experiences.
          </p>
          {/* Add more content as needed */}
        </div>
      </section>
    </div>
  )
}

export default App


