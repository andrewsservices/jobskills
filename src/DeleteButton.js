import Button from '@mui/material/Button';

const DeleteButton = ({deleteType,onDelete}) => {


    return(
        <Button
            variant="outlined" color="error"
            onClick={()=>onDelete()}
            >
            Delete {deleteType}
        </Button>
    )
}

export default DeleteButton