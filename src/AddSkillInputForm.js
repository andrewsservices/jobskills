import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {useState} from 'react'

const InputForm = ({inputType}) => {


    const [skill,setSkill] = useState("")


    const addToSkillList = (e) => {
        e.preventDefault()
        if(skill !== ""){
            addSkill(skill)
            setSkill("")
        }
    }



    return(

        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField
                id="outlined-basic" label="Skill" variant="outlined"
                onChange = {(e)=>setSkill(e.target.value)}
                value={skill}
                onKeyPress={(e) => { e.key === 'Enter' && addToSkillList(e) }}
            />
            <Button
                onClick={(e)=>addToSkillList(e)}
                variant="text"
            >Add Skill
            </Button>
        </Box>

    )
}

export default InputForm