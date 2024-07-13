import { useState } from "react";
import { Input } from "./Input";
import '../styles/panel.css';

export default function Professional({ formData, setFormData, setIsProSaved }) {
  
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [isFormActive, setIsFormActive] = useState(false);

  function handleFormExpand() {
    setIsFormActive(prevState => !prevState)
  }

  function handleFormSubmit(e) {
    setIsFormSubmitted(true)
    setIsProSaved(true)
    handleFormExpand()
    e.preventDefault()
  }

 


  const expandImg = isFormActive ? 'content-collapse.png' : 'content-expand.png'

  return (
    <div className="panel">
      <div className="upper-panel">
        <h1>Professional Info</h1>
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

        {isFormSubmitted && <ProSubPanel formData={formData} handleEditBtn={handleFormExpand}/>}
      </div>

    </div>
  )
}




const Form = ({formData = {}, setFormData, handleFormSubmit}) => {
  
  const { professionalInfo } = formData
  // console.log(professionalInfo)


  const updateProfessionalInfo = (e) => {
    const {name, value} = e.target
    setFormData(prevData => ({
      ...prevData, 
      professionalInfo: {
        ...prevData.professionalInfo, 
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
        label="Company Name" 
        name="companyName" 
        type="text" 
        value={professionalInfo.companyName} 
        handleChange={updateProfessionalInfo}
      />
      <Input 
        label="Position" 
        name="position" 
        type="text" 
        value={professionalInfo.position} 
        handleChange={updateProfessionalInfo}
      />
      <Input 
        label="Start Date" 
        name="startDate" 
        type="date" 
        value={professionalInfo.startDate} 
        handleChange={updateProfessionalInfo}
      />
      <Input 
        label="End Date" 
        name="endDate" 
        type="date" 
        value={professionalInfo.endDate} 
        handleChange={updateProfessionalInfo}
      />
      <label htmlFor="remarks">Remarks</label>
      <textarea
        id="remarks"
        name="remarks" 
        type="text" 
        value={professionalInfo.remarks} 
        onChange={updateProfessionalInfo}
      />
      <br />
      <button type="submit">Save</button>
    </form>
  )
}

const ProSubPanel = ({formData = {}, handleEditBtn}) => {
  const { professionalInfo } = formData
  // console.log("professionalInfo in ProSubPanel", professionalInfo)
  
  return (
    <div>
      <p>School Name: {professionalInfo.companyName}</p>
      <p>Degree: {professionalInfo.position}</p>
      <p>Start Date: {professionalInfo.startDate}</p>
      <p>End Date: {professionalInfo.endDate}</p>
      <p>Remarks: {professionalInfo.remarks}</p>
      <button onClick={handleEditBtn}>Edit</button>
    </div>
  )
}


 
