import { Alert, AlertTitle, Button, Dialog, FormControl, FormGroup, Paper, SelectChangeEvent, Stack } from "@mui/material";
import React, { useState } from "react"
import { contactData, FormValues } from "../../Data/ContactData";
import dayjs from "dayjs";
import BeautifulTextField from "./BeautifulTextField";
import RolesAutoComplete from "./RolesAutoComplete";
import SkillSelect from "./SkillSelect";
import BeautifulDesktopDatePicker from "./BeautifulDesktopDatePicker";
import PreferenceRadios from "./PreferenceRadios";

export const MIN_WIDTH = 300;
export const DATE_FORMAT = 'MM/DD/YYYY';
export const DEFAULT_PREFERENCE = "WFH";
const today = new Date();

export default function ContactForm() {
    const getDefaultFormValues = () => {
        const formattedToday = new Intl.DateTimeFormat(
            'en-US', 
            {
                month: '2-digit', 
                day:'2-digit', 
                year:'numeric'}
        ).format(today);

        return {
            id: contactData.length + 1, 
            name: "", 
            skills:['React'], 
            startDate: formattedToday, 
            preference: DEFAULT_PREFERENCE
        }
    }

    const [formValues, setFormValues] = useState<FormValues>(
        getDefaultFormValues()
    );
    const [alertOpen, setAlertOpen] = useState(false);

    const handleTextFieldChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleAutoCompleteChange = (
        event: React.SyntheticEvent<Element, Event>, 
        value: string
    ) => {
        setFormValues({
            ...formValues,
            role: value || ''
        }
        )
    } 

    const handleSelectChange = (
        event: SelectChangeEvent<string[]>,
        child: React.ReactNode
    ) => {
        const { target: {value}} = event;
        setFormValues({
            ...formValues,
            skills: typeof value === "string" ? value.split(", ") : value
        })
    }

    const handleDatePickerChange = (
        value: dayjs.Dayjs | null
    ) => {
        setFormValues({
            ...formValues,
            startDate: value?.format(DATE_FORMAT)
        })
    }

    const handleRadioChange = (
        event: React.ChangeEvent<HTMLInputElement>, 
        value: string
    ) => {
        const { name } = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleSubmitClick = () => {
        contactData.push(formValues);
        setAlertOpen(true);
        clearValues();
    }

    const handleClearClick = () => {
        clearValues();
    }

    const clearValues = () => {
        setFormValues({...getDefaultFormValues()});
    }

    const handleAlertClick = () => {
        setAlertOpen(false);
    }

    return (
        <>
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
                        <BeautifulTextField
                        value={formValues.name}
                        onChange={handleTextFieldChange}
                        />
                        <RolesAutoComplete
                        value={formValues.role ?? ''}
                        onInputChange={handleAutoCompleteChange}
                        />
                    </FormGroup>
                    <FormGroup 
                    row
                    sx={{
                        padding: 2,
                        justifyContent:'space-between'
                    }}
                    >
                        <SkillSelect
                        value={formValues.skills || ''}
                        onChange={handleSelectChange}
                        />
                        <BeautifulDesktopDatePicker
                        value={dayjs(formValues.startDate)}
                        onChange={handleDatePickerChange}
                        />
                    </FormGroup>
                    <FormGroup
                    row
                    sx={{
                        padding: 2,
                        justifyContent:'space-between'
                    }}
                    >
                        <PreferenceRadios
                            preference={formValues.preference}
                            handleRadioChange={handleRadioChange}
                        />
                        <Stack>
                            <Button onClick={handleSubmitClick}>Submit</Button>
                            <Button onClick={handleClearClick}>Clear</Button>
                        </Stack>
                    </FormGroup>
                </FormControl>
            </form>
        </Paper>
        <Dialog open={alertOpen} onClose={handleAlertClick}>
            <Alert>
                <AlertTitle>
                    Success!
                </AlertTitle>
                Form submitted
            </Alert>
        </Dialog>
        </>
    )
}