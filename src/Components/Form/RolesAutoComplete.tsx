import Autocomplete from "@mui/material/Autocomplete";
import { MIN_WIDTH } from "./ContactForm";
import TextField from "@mui/material/TextField";

const ROLES = ['Dev', 'QA', 'PM', 'Designer', 'DM'];

const RolesAutoComplete = (
    props: {
        value: string,
        onInputChange: (event: React.SyntheticEvent<Element, Event>, value: string) => void
    }
    ) => {
        
    return (
        <Autocomplete
        {...props}
        options={ROLES}
        renderInput={(params)=> {
            return (
                <TextField name="role" {...params}/>
            )
        }}
        getOptionLabel={(roleOption)=>`${roleOption}`}
        renderOption={(props, option) => {
            return (
                <li {...props}>
                    {`${option}`}
                </li>
            )
        }}
        sx={{minWidth: MIN_WIDTH}}
        isOptionEqualToValue={(option, value) => option === value || value === ""}
        />
    );
}

export default RolesAutoComplete;