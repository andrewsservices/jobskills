import Form from './Form'
import SkillList from './SkillList'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import DeleteButton from './DeleteButton'

import {useState} from 'react'

function Job({job,deleteJob}) {



  const requiredSkillInput = "Required"
  const deleteType = "job"
  const [requiredSkill,setRequiredSkill] = useState("")
  const [requiredSkills,setRequiredSkills] = useState([])

  const [skillsAndCount,setSkillsAndCount] = useState([])


  const niceToHaveSkillInput = "Nice To Have"
  const [niceToHaveSkill,setNiceToHaveSkill] = useState("")
  const [niceToHaveSkills,setNiceToHaveSkills] = useState([])



  const onRequiredSkillChange = (s) => {
    setRequiredSkill(s)
  }

  const onNiceToHaveSkillChange = (s) => {
    setNiceToHaveSkill(s)
  }


  // SUBMIT REQUIRED SKILL
  const submitRequiredSKill = (e) => {
    e.preventDefault()
    if(requiredSkill.length > 0){
      setRequiredSkills([...requiredSkills,requiredSkill.toUpperCase()])
    }
    setRequiredSkill("")
  }




  // SUBMIT SKILL WITH COUNT

  const sendSkillsandCount = (e) => {
    setSkillsAndCount([...skillsAndCount,e])
  }

  const submitSkillWithCount = () => {
    let myArr = []
    requiredSkills.map((s)=>{
      let skArray = []
      let largestInArray = ''
      skillsAndCount.filter((sk)=>{
        if(s===sk[0]){
          skArray.push(sk)
          largestInArray = skArray[skArray.length-1]
        }
        return largestInArray
      })
      myArr = [...myArr,largestInArray]
      return myArr
    })
    const sortedArr = myArr.sort((a,b)=>b[1]-a[1])
    let sortedSkillsArr = []
    sortedArr.map((s)=>{
      sortedSkillsArr.push(s[0])
      return sortedSkillsArr
    })
    setRequiredSkills(sortedSkillsArr)
  }





  // SUBMIT NICE TO HAVE SKILL
  const submitNiceToHaveSkill = (e) => {
    e.preventDefault()
    if(niceToHaveSkill.length > 0){
      setNiceToHaveSkills([...niceToHaveSkills,niceToHaveSkill.toUpperCase()])
    }
    setNiceToHaveSkill("")
  }

  // DELETE REQUIRED SKILL
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

  // DELETE NICE TO HAVE SKILL
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




  // DELETE
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
        sendSkillsandCount={(e)=>sendSkillsandCount(e)}
      />

      <Button variant="contained" color="success"
        onClick={(e)=>submitSkillWithCount(e)}
      >
        Sort
      </Button>

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

      <DeleteButton
          deleteType={deleteType}
          onDelete={()=>onDelete()}
        />

    </Box>


  );
}

export default Job;
