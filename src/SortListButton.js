import Button from '@mui/material/Button';

const SortListButton = ({sortList}) => {


    return(
        <Button variant="contained" color="success"
            onClick={()=>{sortList()}}
        >
            Sort
        </Button>
    )
}

export default SortListButton