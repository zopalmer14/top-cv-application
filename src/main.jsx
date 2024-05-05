import React from 'react'
import ReactDOM from 'react-dom/client'
import Section from './components/Section.jsx'
import './index.css'

const inputList = [
  {
    type: 'text',
    label: 'Full Name',
    name: 'name',
    placeholder: 'First and last name',
    optText: ''
  },
  {
    type: 'email',
    label: 'Email',
    name: 'email',
    placeholder: 'Enter email',
    optText: 'recommended'
  },
  {
    type: 'tel',
    label: 'Phone number',
    name: 'phone',
    placeholder: 'Enter phone number',
    optText: 'recommended'
  },
  {
    type: 'text',
    label: 'Address',
    name: 'address',
    placeholder: 'City, Country',
    optText: 'recommended'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Section title="Personal Details" inputs={inputList} />
    <Section title="Education" />
    <Section title="Work Experience" />
  </React.StrictMode>,
)
