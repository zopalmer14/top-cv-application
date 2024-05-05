import React from 'react'
import ReactDOM from 'react-dom/client'
import Section from './components/Section.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Section title="Personal Details" />
    <Section title="Education" />
    <Section title="Work Experience" />
  </React.StrictMode>,
)
