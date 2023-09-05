import Form from './Form'
import SkillList from './SkillList'
import Divider from '@mui/material/Divider';
import DeleteButton from './DeleteButton'

import {useState} from 'react'

function Job({job,deleteJob}) {



  const inputType = "skill"
  const deleteType = "job"
  const [skill,setSkill] = useState("")
  const [skills,setSkills] = useState([])


  const onInputChange = (s) => {
    setSkill(s)
  }

  const submitInput = (e) => {
    e.preventDefault()
    if(skill.length > 0){
      setSkills([...skills,skill.toUpperCase()])
    }
    setSkill("")
  }

  const onDelete = () => {
    deleteJob(job)
  }

  const deleteSkill = (skill) => {
    let newSkillsArray = []
    skills.filter((s)=>{
      if(s !== skill){
        newSkillsArray.push(s)
      }
    })
    setSkills(newSkillsArray)
  }



  return (
    <div className="job">
      <h2>{job}</h2>
      <Form
        inputType={inputType}
        onInputChange={(e)=>onInputChange(e)}
        submitInput={(e)=>submitInput(e)}
        value={skill}
      />
      <SkillList
        skillArray={skills}
        deleteSkill={(e)=>deleteSkill(e)}
      />
      <Divider variant="middle" />
      <div className="job-buttons">
        <DeleteButton
          deleteType={deleteType}
          onDelete={()=>onDelete()}
        />
      </div>

    </div>


  );
}

export default Job;
