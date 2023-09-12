import Button from '@mui/material/Button';

import {useState} from 'react'
export default function Skill({skill,deleteSkill,updateCount}) {

  const [count,setCount] = useState(0)

  const onDelete = () => {
    deleteSkill(skill)
  }

  const increaseCount = () => {
    setCount(count+1)
  }

  if(count > 0){
    updateCount([skill,count])
  }

  return (

      <div className="skill">
        <Button variant="contained"
          onClick={()=>increaseCount()}
        >
          {skill}
        </Button>
        <div className="count-and-close">
          {
            count > 0
            ?
            <h2>{count}</h2>
            :
            ""
          }
          <Button
              onClick={()=>onDelete()}
              style={{color:'red'}}>X
          </Button>
        </div>
      </div>


  );
}