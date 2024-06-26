
// packages & libraries 
import { useState } from 'react'

// components
import ResumeEntryList from './ResumeEntryList.jsx'
import InputForm from './InputForm.jsx'
import ResumeHeader from './ResumeHeader.jsx';
import ResumeSection from './ResumeSection.jsx';

// styling
import '../styles/App.css';

// input data 
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

const examplePersonalData = {
    name: "Test Name",
    email: "testaddress@gmail.com",
    phone: "(123) 456-7890",
    address: "City, Country" 
}

const exampleEducationData = [
    {
        school: 'University of Southern California',
        degree: 'Mechanical Engineering',
        startDate: '8/2019',
        endDate: '4/2023',
        location: 'Los Angeles, California'
    }
]

const exampleExperienceData = [
    {
        company: 'Apple',
        position: 'Quality Assurance Engineer',
        startDate: '5/2023',
        endDate: 'present',
        location: 'Cupertino, California',
        desc: `Conduct material analysis of product hardware to investigate 
               causes of failure and to ensure products adhere to expected
               parameters. Decreased errors in manufacturing by 20%`
    },
    {
        company: 'Microsoft',
        position: 'Quality Assurance Intern',
        startDate: '5/2022',
        endDate: '7/2022',
        location: 'Redmont, Washington',
        desc: `Conduct material analysis of product hardware to investigate 
               causes of failure and to ensure products adhere to expected
               parameters. Decreased errors in manufacturing by 20%`
    }
]

function App() {
    // react states for resume info
    const [personalInfo, setPersonalInfo] = useState(examplePersonalData);
    const [educationEntries, setEducationEntries] = useState(exampleEducationData);
    const [experienceEntries, setExperienceEntries] = useState(exampleExperienceData);

    // react states for conditional rendering
    const [eduFormShowing, setEduFormShowing] = useState(false);
    const [expFormShowing, setExpFormShowing] = useState(false);

    // updatePersonalInfo: personal info form submission handling
    // - create a new object with the form data
    // - then set it as the new state
    const updatePersonalInfo = function updatePersonalInfo(event) {
        event.preventDefault();

        const newPersonalInfo = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            address: event.target.address.value
        }

        setPersonalInfo(newPersonalInfo)
    }

    // updateEducationEntries: education info form submission handling
    // - create a new object with the form data
    // - create a new list of entries from the current state and the new data 
    // - then set the state with the new list of entries
    // - hide the form and show the entry list
    const updateEducationEntries = function updateEducationEntries(event) {
        event.preventDefault();

        const newEducationEntry = {
            school: event.target.school.value,
            degree: event.target.degree.value,
            startDate: event.target.startDate.value,
            endDate: event.target.endDate.value,
            location: event.target.location.value
        }

        setEducationEntries([...educationEntries, newEducationEntry])
        setEduFormShowing(false)
    }

    // updateExperienceEntries: experience info form submission handling
    // - create a new object with the form data
    // - create a new list of entries from the current state and the new data 
    // - then set the state with the new list of entries
    // - hide the form and show the entry list
    const updateExperienceEntries = function updateExperienceEntries(event) {
        event.preventDefault();

        const newExperienceEntry = {
            company: event.target.company.value,
            position: event.target.position.value,
            startDate: event.target.startDate.value,
            endDate: event.target.endDate.value,
            location: event.target.location.value,
            desc: event.target.desc.value
        }

        setExperienceEntries([...experienceEntries, newExperienceEntry])
        setExpFormShowing(false)
    }

    return (
        <>
            <div className="dashboard">
                <InputForm 
                    title="Personal Details" 
                    inputs={personalInputs} 
                    onSubmit={updatePersonalInfo}
                />
                {eduFormShowing ? (
                    <InputForm 
                        title="Education" 
                        inputs={educationInputs}
                        onSubmit={updateEducationEntries} 
                    /> 
                ) : (
                    <ResumeEntryList 
                        type="Education"
                        entries={educationEntries}
                        onClick={() => setEduFormShowing(true)}
                    />
                )}
                {expFormShowing ? (
                    <InputForm 
                        title="Work Experience" 
                        inputs={experienceInputs} 
                        onSubmit={updateExperienceEntries} 
                    /> 
                ) : (
                    <ResumeEntryList 
                        type="Work Experience"
                        entries={experienceEntries}
                        onClick={() => setExpFormShowing(true)}
                    />
                )}
            </div>
            <div className='resume'>
                <ResumeHeader personalInfo={personalInfo} />
                <ResumeSection 
                    type="Education"
                    entries={educationEntries}
                />
                <ResumeSection 
                    type="Work Experience"
                    entries={experienceEntries}
                />
            </div>
        </>
    )
}

export default App;