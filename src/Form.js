import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const Form = ({inputType,onInputChange,submitInput,value}) => {


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
            <TextField
                id="outlined-basic" label={inputType} variant="outlined"
                onChange = {(e)=>onInputChange(e.target.value)}
                onKeyPress={(e) => { e.key === 'Enter' && submitInput(e) }}
                value={value}
            />
            <Button
                onClick={(e)=>submitInput(e)}
            >+
            </Button>
        </Box>

    )
}

export default Form