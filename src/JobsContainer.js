import Job from './Job'
import Box from '@mui/material/Box';


const JobsContainer = ({jobs,deleteJob}) => {

    const uniqueJobs = [...new Set(jobs)]


    return(
        <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
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
        </Box>
    )
}

export default JobsContainer