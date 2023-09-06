import './App.css';
import Form from './Form'
import JobsContainer from './JobsContainer'
import Divider from '@mui/material/Divider';

import {useState} from 'react'

function App() {

const inputType = "job"
const [job,setJob] = useState("")
const [jobs,setJobs] = useState([])


const onInputChange = (e) => {
  setJob(e)
}

const submitInput = (e) => {
  e.preventDefault()
  setJobs([...jobs,job.toUpperCase()])
  setJob("")
}

const deleteJob = (job) => {
  let newJobsArray = []
  jobs.filter(j=>{
    if(j!==job){
      newJobsArray.push(j)
    }
    return false
  })
  setJobs(newJobsArray)
}



  return (
    <div className="App">
      <Form
        inputType={inputType}
        onInputChange={(e)=>onInputChange(e)}
        submitInput={(e)=>submitInput(e)}
        value={job}
      />
      {
        jobs.length !== 0
        ?
        <>
          <Divider variant="middle" />
          <JobsContainer
            jobs={jobs}
            deleteJob={(e)=>deleteJob(e)}
          />
        </>

        :
        null
      }

    </div>

  );
}

export default App;
