import { TextField, TextFieldProps } from "@mui/material";
import { MIN_WIDTH } from "./ContactForm";

const BeautifulTextField = (props: TextFieldProps) => {
    return (
        <TextField 
            {...props}
            id='contact-form-name'
            name='name'
            label='Name'
            variant="outlined"
            sx={{minWidth: MIN_WIDTH, marginRight: 2}}
        />
    )
}

export default BeautifulTextField;