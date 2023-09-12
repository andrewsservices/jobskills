import './App.css';
import './Background.css'
import magnifyingGlass from './search.png'
import Form from './Form'
import JobsContainer from './JobsContainer'

import {useState} from 'react'

function App() {


const [jobs,setJobs] = useState([])


const submitInput = (e) => {
  setJobs([...jobs,e.toUpperCase()])
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
    <>
      <div className="background">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className='foreground'>
      <div class="job-form">
        <h2>Job Skills App</h2>
        <img src={magnifyingGlass} alt="logo"/>
        <Form
          inputType="job"
          sendInput={(e)=>submitInput(e)}
        />
      </div>

      {
        jobs.length !== 0
        ?
          <JobsContainer
            jobs={jobs}
            deleteJob={(e)=>deleteJob(e)}
          />
        :
        null
      }
    </div>
    </>


  );
}

export default App;
