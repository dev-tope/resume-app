import { useState } from "react";

import Education from "./Education";
import Personal from "./Personal";
import Professional from "./Professional";
import Resume from "./Resume";

export default function App(){
  const [formData, setFormData] = useState({
    personalInfo : {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      website: '',
      address: '',
    },
    educationInfo : {
      schoolName: '',
      degree: '',
      startDate: '',
      endDate: '',
    },
    professionalInfo : {
      companyName: '',
      position: '',
      startDate: '',
      endDate: '',
      remarks: '',
    }
  })

  const [isPersonalSaved, setIsPersonalSaved] = useState(false);

  const [isEduSaved, setIsEduSaved] = useState(false);

  const [isProSaved, setIsProSaved] = useState(false);

  return (
    <div>
      <Resume formData={formData} isPersonalSaved={isPersonalSaved} isEduSaved={isEduSaved} isProSaved={isProSaved} />
      <Personal formData={formData} setFormData={setFormData} setIsPersonalSaved={setIsPersonalSaved} />
      <Education formData={formData} setFormData={setFormData} setIsEduSaved={setIsEduSaved}/>
      <Professional formData={formData} setFormData={setFormData} setIsProSaved={setIsProSaved} />
    </div>
  )
}