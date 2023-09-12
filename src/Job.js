import Form from './Form'
import SkillList from './SkillList'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteButton from './DeleteButton'

import {useState} from 'react'

function Job({job,deleteJob}) {


  const deleteType = "job"

  const [skillAndCountArray,setSkillAndCountArray] = useState([])
  const [skillArray,setSkillArray] = useState([])


  let skill = ""
  let skillAndCount = []

  // SUBMIT SKILL WITH COUNT

  console.log("skill array ", skillArray)
  console.log("skill and count array ", skillAndCountArray)


  const addToSkillList = (e) => {
    skill = e[0]
    skillAndCount = e
    console.log(skill)
    setSkillArray([...skillArray, skill])
    setSkillAndCountArray([...skillAndCountArray,skillAndCount])
  }


  const sortSkills = () => {
      let myArr = []
      skillArray.map((s)=>{
      let skArray = []
      let largestInArray = ''

      skillAndCountArray.filter((sk)=>{
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

    let sortedskillArrayArr = []
    sortedArr.map((s)=>{
      sortedskillArrayArr.push(s[0])
      return sortedskillArrayArr
    })
    setSkillArray(sortedskillArrayArr)

  }

  const updateCount = (e) => {
    skillAndCountArray.push(e)
  }



  // DELETE REQUIRED SKILL
  const deleteskill = (skill) => {
    let newArray = []
    skillArray.filter((r)=>{
      if(r !== skill){
        newArray.push(r)
      }
      return false
    })
    setSkillArray(newArray)
  }




  // DELETE
  const onDelete = () => {
    deleteJob(job)
  }



  return (
    <Box className="job" component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <h1>{job}</h1>
      <h2>Required Skills</h2>
      <Form
        inputType="skill"
        value={skill}
        sendSkillandCount={(e)=>addToSkillList(e)}
      />
      <SkillList
        skillArray={skillArray}
        deleteSkill={(e)=>deleteskill(e)}
        updateCount={(e)=>updateCount(e)}
      />
      <div className="buttons">

      {
        skillArray.length > 1
        ?
        <Button variant="contained" color="success"
          onClick={(e)=>sortSkills(e)}
        >
          Sort
        </Button>
        :
        ""
      }
        <DeleteButton
            deleteType={deleteType}
            onDelete={()=>onDelete()}
        />


      </div>


    </Box>


  );
}

export default Job;
