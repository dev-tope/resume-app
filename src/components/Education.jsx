import { useState } from "react";
import { Input } from "./Input";
import '../styles/panel.css';

export default function Education({ formData, setFormData, setIsEduSaved }) {
  
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [isFormActive, setIsFormActive] = useState(false);

  function handleFormExpand() {
    setIsFormActive(prevState => !prevState)
  }

  function handleFormSubmit(e) {
    setIsFormSubmitted(true)
    setIsEduSaved(true)
    handleFormExpand()
    e.preventDefault()
  }

 


  const expandImg = isFormActive ? 'content-collapse.svg' : 'content-expand.svg'

  return (
    <div className="panel">
      <div className="upper-panel">
        <h1>Education</h1>
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

        {isFormSubmitted && <EduSubPanel formData={formData} handleEditBtn={handleFormExpand}/>}
      </div>

    </div>
  )
}




const Form = ({formData = {}, setFormData, handleFormSubmit}) => {
  
  const { educationInfo } = formData
  // console.log(educationInfo)


  const updateEducationInfo = (e) => {
    const {name, value} = e.target
    setFormData(prevData => ({
      ...prevData, 
      educationInfo: {
        ...prevData.educationInfo, 
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
        label="School Name" 
        name="schoolName" 
        type="text" 
        value={educationInfo.schoolName} 
        handleChange={updateEducationInfo}
      />
      <Input 
        label="Degree" 
        name="degree" 
        type="text" 
        value={educationInfo.degree} 
        handleChange={updateEducationInfo}
      />
      <Input 
        label="Start Date" 
        name="startDate" 
        type="date" 
        value={educationInfo.startDate} 
        handleChange={updateEducationInfo}
      />
      <Input 
        label="End Date" 
        name="endDate" 
        type="date" 
        value={educationInfo.endDate} 
        handleChange={updateEducationInfo}
      />
      <button type="submit">Save</button>
    </form>
  )
}

const EduSubPanel = ({formData = {}, handleEditBtn}) => {
  const { educationInfo } = formData
  // console.log("educationInfo in EduSubPanel", educationInfo)
  
  return (
    <div>
      <p>School Name: {educationInfo.schoolName}</p>
      <p>Degree: {educationInfo.degree}</p>
      <p>Start Date: {educationInfo.startDate}</p>
      <p>End Date: {educationInfo.endDate}</p>
      <button onClick={handleEditBtn}>Edit</button>
    </div>
  )
}


 
