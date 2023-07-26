import {
  Alert,
  AlertTitle,
  Button,
  Checkbox,
  Dialog,
  ListItemText,
  MenuItem,
  Paper,
  SelectChangeEvent,
  Stack,
  useTheme,
} from "@mui/material";
import dayjs from "dayjs";
import React, { useState } from "react";
import { FormValues, contactData } from "../../Data/ContactData";
import BeautifulDesktopDatePicker from "./BeautifulDesktopDatePicker";
import BeautifulTextField from "./BeautifulTextField";
import PreferenceRadios from "./PreferenceRadios";
import RolesAutoComplete from "./RolesAutoComplete";
import SkillSelect from "./SkillSelect";
import { StyledFormGroup } from "./StyledFormGroup";

export const MIN_WIDTH = 300;
export const DATE_FORMAT = "MM/DD/YYYY";
export const DEFAULT_PREFERENCE = "WFH";
const today = new Date();

const SKILLS = [
  "React",
  "Angular",
  "Java",
  "Redux",
  "SQL",
  "Manual testing",
  "Selenium",
];

const paperInputStyle = {
  "& .MuiOutlinedInput-root": {
    "& >fieldset": {
      border: "1px solid",
      borderColor: "primary.main",
    },
    "&:hover": {
      "& >fieldset": {
        borderColor: "primary.light",
      },
    },
  },
  "& .MuiFormLabel-root": {
    color: "primary.dark",
  },
};

export default function ContactForm() {
  const theme = useTheme();

  const getDefaultFormValues = () => {
    const formattedToday = new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }).format(today);

    return {
      id: contactData.length + 1,
      name: "",
      skills: [],
      startDate: formattedToday,
      preference: DEFAULT_PREFERENCE,
    };
  };

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
      [name]: value,
    });
  };

  const handleAutoCompleteChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setFormValues({
      ...formValues,
      role: value || "",
    });
  };

  const handleSelectChange = (
    event: SelectChangeEvent<string[]>,
    child: React.ReactNode
  ) => {
    const {
      target: { value },
    } = event;
    setFormValues({
      ...formValues,
      skills: typeof value === "string" ? value.split(", ") : value,
    });
  };

  const handleDatePickerChange = (value: dayjs.Dayjs | null) => {
    setFormValues({
      ...formValues,
      startDate: value?.format(DATE_FORMAT),
    });
  };

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    const { name } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmitClick = () => {
    contactData.push(formValues);
    setAlertOpen(true);
    clearValues();
  };

  const handleClearClick = () => {
    clearValues();
  };

  const clearValues = () => {
    setFormValues({ ...getDefaultFormValues() });
  };

  const handleAlertClick = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <Paper
        sx={{
          ...paperInputStyle,
          margin: { xs: 1, sm: 2 },
          zIndex: theme.zIndex.appBar + 1,
          "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" },
          backgroundColor: "grid.dark",
        }}
      >
        <form>
          <StyledFormGroup row paddingtop={10}>
            <BeautifulTextField
              value={formValues.name}
              onChange={handleTextFieldChange}
            />
            <RolesAutoComplete
              value={formValues.role ?? ""}
              onInputChange={handleAutoCompleteChange}
            />
          </StyledFormGroup>
          <StyledFormGroup row>
            <SkillSelect
              value={formValues.skills || ""}
              onChange={handleSelectChange}
            >
              {SKILLS.map((skill) => {
                return (
                  <MenuItem value={skill} key={skill}>
                    <Checkbox checked={formValues.skills?.includes(skill)} />
                    <ListItemText primary={skill} />
                  </MenuItem>
                );
              })}
            </SkillSelect>
            <BeautifulDesktopDatePicker
              value={dayjs(formValues.startDate)}
              onChange={handleDatePickerChange}
            />
          </StyledFormGroup>
          <StyledFormGroup row>
            <PreferenceRadios
              preference={formValues.preference}
              handleRadioChange={handleRadioChange}
            />
            <Stack
              justifyContent="space-around"
              alignItems="center"
              sx={{ minWidth: MIN_WIDTH }}
            >
              <Button
                variant="contained"
                sx={{ height: 56, width: 100 }}
                onClick={handleSubmitClick}
              >
                Submit
              </Button>
              <Button
                variant="beautiful"
                sx={{ height: 56, width: 100 }}
                onClick={handleClearClick}
              >
                Clear
              </Button>
            </Stack>
          </StyledFormGroup>
        </form>
      </Paper>
      <Dialog open={alertOpen} onClose={handleAlertClick}>
        <Alert>
          <AlertTitle>Success!</AlertTitle>
          Form submitted
        </Alert>
      </Dialog>
    </>
  );
}
