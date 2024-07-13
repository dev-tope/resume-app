import { useState } from "react";
import { Input } from "./Input";
import '../styles/panel.css';

export default function Personal({ formData, setFormData, setIsPersonalSaved }) {
  
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [isFormActive, setIsFormActive] = useState(false);

  function handleFormExpand() {
    setIsFormActive(prevState => !prevState)
  }

  function handleFormSubmit(e) {
    setIsFormSubmitted(true)
    setIsPersonalSaved(true)
    handleFormExpand()
    e.preventDefault()
  }

  const expandImg = isFormActive ? 'content-collapse.png' : 'content-expand.png'

  return (
    <div className="panel">
      <div className="upper-panel">
        <h1>Personal Information</h1>
        <img 
          src={`src/assets/${expandImg}`}
          alt="" 
          width="40px" 
          height="40px" 
          onClick={handleFormExpand} 
        />
      </div>
      <div className="lower-panel">
        {isFormActive && <Form 
          formData={formData} 
          setFormData={setFormData}
          handleFormSubmit={handleFormSubmit}
          setIsFormSubmitted={setIsFormSubmitted}
        />}

        {isFormSubmitted && <PersonalSubPanel formData={formData} handleEditBtn={handleFormExpand}/>}
      </div>

    </div>
  )
}




const Form = ({formData = {}, setFormData, handleFormSubmit}) => {
  
  const { personalInfo } = formData
  // console.log(educationInfo)


  const updatePersonalInfo = (e) => {
    const {name, value} = e.target
    setFormData(prevData => ({
      ...prevData, 
      personalInfo: {
        ...prevData.personalInfo, 
        [name] : value,
      } 
    }))
  }

  // const handleSubmit = (e) => {
  //   console.log(formData);
  //   setIsFormSubmitted(true)
  //   handleFormExpand();
  //   e.preventDefault();
  // }

  return (
    <form onSubmit={handleFormSubmit}>
      <Input 
        label="First Name" 
        name="firstName" 
        type="text" 
        value={personalInfo.firstName} 
        handleChange={updatePersonalInfo}
      />
      <Input 
        label="Last Name" 
        name="lastName" 
        type="text" 
        value={personalInfo.lastName} 
        handleChange={updatePersonalInfo}
      />
      <Input 
        label="Email" 
        name="email" 
        type="text" 
        value={personalInfo.email} 
        handleChange={updatePersonalInfo}
      />
      <Input 
        label="Phone Number" 
        name="phoneNumber" 
        type="text" 
        value={personalInfo.phoneNumber} 
        handleChange={updatePersonalInfo}
      />
      <Input 
        label="Website" 
        name="website" 
        type="text" 
        value={personalInfo.website} 
        handleChange={updatePersonalInfo}
      />
      <Input 
        label="Address" 
        name="address" 
        type="text" 
        value={personalInfo.address} 
        handleChange={updatePersonalInfo}
      />

      <button type="submit">Save</button>
    </form>
  )
}

const PersonalSubPanel = ({formData = {}, handleEditBtn}) => {
  const { personalInfo } = formData
  // console.log("personalInfo in PersonalSubPanel", personalInfo)
  
  return (
    <div>
      <p>School Name: {personalInfo.firstName}</p>
      <p>Degree: {personalInfo.lastName}</p>
      <p>Email: {personalInfo.email}</p>
      <p>Phone Num: {personalInfo.phoneNumber}</p>
      <p>Website: {personalInfo.website}</p>
      <p>Address: {personalInfo.address}</p>
      <button onClick={handleEditBtn}>Edit</button>
    </div>
  )
}