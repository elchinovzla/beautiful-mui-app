import { Autocomplete, Button, FormControl, FormControlLabel, FormGroup, FormLabel, ListItemText, MenuItem, Paper, Radio, RadioGroup, Select, Stack, TextField } from "@mui/material";
import React from "react"
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

const ROLES = ['React', 'Angular', 'Java', 'Redux', 'SQL','Manual testing', 'Selenium'];
const SKILLS = ['Dev', 'QA', 'PM', 'Designer', 'DM'];
const minWidth = 300;

export default function ContactForm() {
    return (
        <Paper>
            <form>
                <FormControl>
                    <FormGroup
                    row
                    sx={{
                        padding: 2,
                        justifyContent:'space-between'
                    }}
                    >
                        <TextField 
                        id='contact-form-name'
                        name='name'
                        label='Name'
                        variant="outlined"
                        sx={{minWidth: minWidth, marginRight: 2}}
                        />
                        <Autocomplete
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
                        sx={{minWidth: minWidth}}
                        />
                    </FormGroup>
                    <FormGroup 
                    row
                    sx={{
                        padding: 2,
                        justifyContent:'space-between'
                    }}
                    >
                        <Select 
                        id="skill-select" 
                        renderValue={(select: string[]) => select.join(", ")}
                        sx={{minWidth: minWidth, marginRight: 2}}
                        >
                            {SKILLS.map((skill)=> 
                            <MenuItem value={skill} key={skill}>
                                <ListItemText primary={skill}/>
                            </MenuItem>
                            )}
                        </Select>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker 
                                    label='Date'
                                    format='MM/DD/YYYY'
                                    value='abc'
                                    onChange={()=>{}}
                                    sx={{minWidth:minWidth}}
                                />
                            </LocalizationProvider>
                    </FormGroup>
                    <FormGroup
                    row
                    sx={{
                        padding: 2,
                        justifyContent:'space-between'
                    }}
                    >
                        <FormGroup sx={{minWidth: minWidth, marginRight: 2}}>
                            <FormLabel component="legend">
                                Work Preference
                            </FormLabel>
                            <RadioGroup 
                            id="preference-type-radio"
                            name="preference"
                            value="WFH"
                            >
                                <FormControlLabel 
                                control={<Radio/>} 
                                label="Work From Home"
                                value="WFH"
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
                        <Stack>
                            <Button>Submit</Button>
                            <Button>Clear</Button>
                        </Stack>
                    </FormGroup>
                </FormControl>
            </form>
        </Paper>
    )
}