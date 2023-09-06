import Form from './Form'
import SkillList from './SkillList'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import SortListButton from './SortListButton';
import DeleteButton from './DeleteButton'

import {useState} from 'react'

function Job({job,deleteJob}) {



  const requiredSkillInput = "Required"
  const deleteType = "job"
  const [requiredSkill,setRequiredSkill] = useState("")
  const [requiredSkills,setRequiredSkills] = useState([])

  const niceToHaveSkillInput = "Nice To Have"
  const [niceToHaveSkill,setNiceToHaveSkill] = useState("")
  const [niceToHaveSkills,setNiceToHaveSkills] = useState([])


  const onRequiredSkillChange = (s) => {
    setRequiredSkill(s)
  }

  const onNiceToHaveSkillChange = (s) => {
    setNiceToHaveSkill(s)
  }

  const submitRequiredSKill = (e) => {
    e.preventDefault()
    if(requiredSkill.length > 0){
      setRequiredSkills([...requiredSkills,requiredSkill.toUpperCase()])
    }
    setRequiredSkill("")
  }

  const submitNiceToHaveSkill = (e) => {
    e.preventDefault()
    if(niceToHaveSkill.length > 0){
      setNiceToHaveSkills([...niceToHaveSkills,niceToHaveSkill.toUpperCase()])
    }
    setNiceToHaveSkill("")
  }

  const deleteRequiredSkill = (requiredSkill) => {
    let newRequiredSkillsArray = []
    requiredSkills.filter((s)=>{
      if(s !== requiredSkill){
         newRequiredSkillsArray.push(s)
      }
      return false
    })
     setRequiredSkills(newRequiredSkillsArray)
  }

  const deleteNiceToHaveSkill = (niceToHaveSkill) => {
    let newNiceToHaveSkillsArray = []
    niceToHaveSkills.filter((s)=>{
      if(s !== niceToHaveSkill){
        newNiceToHaveSkillsArray.push(s)
      }
      return false
    })
    setNiceToHaveSkills(newNiceToHaveSkillsArray)
  }

  const onDelete = () => {
    deleteJob(job)
  }






  return (
    <Box className="job" component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <h1>{job}</h1>

       {/* REQUIRED */}
      <h2>Required</h2>
      <Form
        inputType={requiredSkillInput}
        onInputChange={(e)=>onRequiredSkillChange(e)}
        submitInput={(e)=>submitRequiredSKill(e)}
        value={requiredSkill}
      />
      <SkillList
        skillArray={requiredSkills}
        deleteSkill={(e)=>deleteRequiredSkill(e)}
      />


      <Divider variant="middle" />

      {/* NICE TO HAVE */}
      <h2>Nice To Have</h2>
      <Form
        inputType={niceToHaveSkillInput}
        onInputChange={(e)=>onNiceToHaveSkillChange(e)}
        submitInput={(e)=>submitNiceToHaveSkill(e)}
        value={niceToHaveSkill}
      />
      <SkillList
        skillArray={niceToHaveSkills}
        deleteSkill={(e)=>deleteNiceToHaveSkill(e)}
      />

      <Divider variant="middle" />

      <div className="job-buttons">
        <SortListButton

        />
        <DeleteButton
          deleteType={deleteType}
          onDelete={()=>onDelete()}
        />
      </div>

    </Box>


  );
}

export default Job;
