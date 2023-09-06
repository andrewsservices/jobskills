import Job from './Job'



const JobsContainer = ({jobs,deleteJob}) => {

    const uniqueJobs = [...new Set(jobs)]


    return(
        <div className="jobsContainer">

            {
                uniqueJobs.map((job)=>{
                    return(
                        <Job
                            job={job}
                            key={job}
                            deleteJob={(e)=>deleteJob(e)}
                        />
                    )
                })
            }

        </div>

    )
}

export default JobsContainer