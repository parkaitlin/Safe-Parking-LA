import React from 'react'
import ReactDOM from 'react-dom'
import App from './components'
import { BrowserRouter as Router } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

ReactDOM.render(
  <Router>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </Router>,
  document.querySelector('#root')
)
