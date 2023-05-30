import FormGroup from "@mui/material/FormGroup"
import { DEFAULT_PREFERENCE, MIN_WIDTH } from "./ContactForm"
import FormLabel from "@mui/material/FormLabel"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Radio from "@mui/material/Radio"

const PreferenceRadios = (
    props: {
        preference?: string,
        handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void
    }
) => {
    return (
        <FormGroup 
            sx={{
                minWidth: MIN_WIDTH, 
                marginRight: {md: 2},
                marginBottom: {xs: 2, md: 0}
            }}>
            <FormLabel component="legend" htmlFor="preference-type-radio">
                Work Preference
            </FormLabel>
            <RadioGroup 
            aria-label="preference"
            id="preference-type-radio"
            name="preference"
            value={props.preference}
            onChange={props.handleRadioChange}
            >
                <FormControlLabel 
                control={<Radio/>} 
                label="Work From Home"
                value={DEFAULT_PREFERENCE}
                />
                <FormControlLabel 
                control={<Radio/>} 
                label="Hybrid"
                value="Hybrid"
                />
                <FormControlLabel 
                control={<Radio/>} 
                label="Return To Office"
                value="RTO"
                />
            </RadioGroup>
        </FormGroup>
    )
}

export default PreferenceRadios;