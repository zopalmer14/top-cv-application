import React from 'react'
import ReactDOM from 'react-dom/client'
import Section from './components/Section.jsx'
import './index.css'

const personalInputs = [
  {
    type: 'text',
    label: 'Full Name',
    name: 'name',
    placeholder: 'First and Last Name',
    optText: ''
  },
  {
    type: 'email',
    label: 'Email',
    name: 'email',
    placeholder: 'Enter Email',
    optText: 'recommended'
  },
  {
    type: 'tel',
    label: 'Phone Number',
    name: 'phone',
    placeholder: 'Enter Phone Number',
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

const educationInputs = [
  {
    type: 'text',
    label: 'School',
    name: 'school',
    placeholder: 'Enter School / University',
    optText: ''
  },
  {
    type: 'text',
    label: 'Degree',
    name: 'degree',
    placeholder: 'Enter Degree / Field of Study',
    optText: ''
  },
  {
    type: 'date',
    label: 'Start Date',
    name: 'startDate',
    placeholder: 'Enter Start Date',
    optText: ''
  },
  {
    type: 'date',
    label: 'End Date',
    name: 'endDate',
    placeholder: 'Enter End Date',
    optText: ''
  },
  {
    type: 'text',
    label: 'Location',
    name: 'location',
    placeholder: 'City, Country',
    optText: 'optional'
  }
]

const experienceInputs = [
  {
    type: 'text',
    label: 'Company Name',
    name: 'company',
    placeholder: 'Enter Company Name',
    optText: ''
  },
  {
    type: 'text',
    label: 'Position Title',
    name: 'position',
    placeholder: 'Enter Position Title',
    optText: ''
  },
  {
    type: 'date',
    label: 'Start Date',
    name: 'startDate',
    placeholder: 'Enter Start Date',
    optText: ''
  },
  {
    type: 'date',
    label: 'End Date',
    name: 'endDate',
    placeholder: 'Enter End Date',
    optText: ''
  },
  {
    type: 'text',
    label: 'Location',
    name: 'location',
    placeholder: 'City, Country',
    optText: 'optional'
  },
  {
    type: 'textarea',
    label: 'Description',
    name: 'desc',
    placeholder: 'Enter Description',
    optText: 'optional'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Section title="Personal Details" inputs={personalInputs} />
    <Section title="Education" inputs={educationInputs} />
    <Section title="Work Experience" inputs={experienceInputs} />
  </React.StrictMode>,
)
