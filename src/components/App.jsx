
import Section from './Section.jsx'
import ResumeHeader from './ResumeHeader.jsx';
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
    return (
        <>
            <div className="dashboard">
                <Section 
                    title="Personal Details" 
                    inputs={personalInputs} 
                />
                <Section 
                    title="Education" 
                    inputs={educationInputs} 
                />
                <Section 
                    title="Work Experience" 
                    inputs={experienceInputs} 
                />
            </div>
            <div className='resume'>
                <ResumeHeader 
                    name="Test Name"
                    email="testaddress@gmail.com"
                    phone="(123) 456-7890"
                    address="City, Country" 
                />
                <ResumeSection 
                    type="Education"
                    entries={exampleEducationData}
                />
                <ResumeSection 
                    type="Professional Experience"
                    entries={exampleExperienceData}
                />
            </div>
        </>
    )
}

export default App;