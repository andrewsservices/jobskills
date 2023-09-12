import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {useState} from 'react'

const Form = ({inputType,sendInput,sendSkillandCount}) => {

const [input,setInput] = useState('')

const onChange = (e) => {
    setInput(e.target.value)
}

let count = 0

const submitInput = (e) => {
    e.preventDefault()
    if(inputType === "skill"){
        sendSkillandCount([input.toUpperCase(),count])
    } else {
        sendInput(input)
    }
    setInput('')
}



    return(
        <Box
            className="inputForm"
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                {
                    input.length === 0
                    ?
                    <>
                        <TextField
                        id="outlined-basic" label={inputType} variant="outlined"
                        onChange = {onChange}
                        value={input}
                        />
                        <Button
                            disabled
                        >+
                        </Button>
                    </>
                    :
                    <>
                        <TextField
                        id="outlined-basic" label={inputType} variant="outlined"
                        onChange = {onChange}
                        onKeyPress={(e) => { e.key === 'Enter' && submitInput(e) }}
                        value={input}
                        />
                        <Button
                            onClick={(e)=>submitInput(e)}
                        >+
                        </Button>
                    </>

                }
        </Box>

    )
}

export default Form