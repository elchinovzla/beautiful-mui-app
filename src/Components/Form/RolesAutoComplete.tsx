import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { MIN_WIDTH } from "./ContactForm";

const ROLES = ["Dev", "QA", "PM", "Designer", "DM"];

const RolesAutoComplete = (props: {
  value: string;
  onInputChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => void;
}) => {
  return (
    <Autocomplete
      {...props}
      options={ROLES}
      renderInput={(params) => {
        return (
          <TextField
            name="role"
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused": { color: "primary.dark" },
            }}
            {...params}
          />
        );
      }}
      getOptionLabel={(roleOption) => `${roleOption}`}
      renderOption={(props, option) => {
        return <li {...props}>{`${option}`}</li>;
      }}
      sx={{ minWidth: MIN_WIDTH }}
      isOptionEqualToValue={(option, value) => option === value || value === ""}
      ListboxProps={{
        sx: {
          height: 100,
          color: "primary.dark",
          "& li.MuiAutocomplete-option:nth-child(even)": {
            backgroundColor: "green",
          },
          "& li.MuiAutocomplete-option:nth-child(odd)": {
            backgroundColor: "gold",
          },
          "& li.MuiAutocomplete-option[aria-selected='true'].Mui-focused": {
            backgroundColor: "purple",
          },
        },
      }}
    />
  );
};

export default RolesAutoComplete;
