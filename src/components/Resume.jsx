import { useState } from 'react';

import '../styles/resume.css'

export default function Resume({ formData, isPersonalSaved, isEduSaved, isProSaved }) {
  return (
    <div className='resume'>
      {isPersonalSaved && <PersonalSection formData={formData} />}
      {isEduSaved && <EduSection formData={formData} />}
      {isProSaved && <ProSection formData={formData} />}
    </div>
  )
}

const PersonalSection = ({formData}) => {
  const { personalInfo } = formData

  return (
    <div className='personal'>
      <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.phoneNumber}</p>
      <p>{personalInfo.website}</p>
      <p>{personalInfo.address}</p>
    </div>
  )
}

const EduSection = ({formData}) => {
  const { educationInfo } = formData

  return (
    <div className='education'>
      <h1>Educational Background</h1>
      <div className='lower-edu'>
        <div>
          <h2>{educationInfo.degree}</h2>
          <p>{educationInfo.schoolName}</p>
        </div>
        <div>
          <p>{educationInfo.startDate}</p>
          <p>{educationInfo.endDate}</p>
        </div>
      </div>
    </div>
  )
}

const ProSection = ({formData}) => {
  const { professionalInfo } = formData

  return (
    <div className='professional'>
      <h1>Professional Experience</h1>
      <div className='lower-pro'>
        <div>
          <h2>{professionalInfo.position}</h2>
          <p>{professionalInfo.companyName}</p>
          <p>{professionalInfo.remarks}</p>
        </div>
      <div>
        <p>{professionalInfo.startDate}</p>
        <p>{professionalInfo.endDate}</p>
      </div>
      </div>
    </div>
  )
}


