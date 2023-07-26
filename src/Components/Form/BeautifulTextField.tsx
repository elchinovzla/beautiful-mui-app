import { TextField, TextFieldProps } from "@mui/material";
import { MIN_WIDTH } from "./ContactForm";

const BeautifulTextField = (props: TextFieldProps) => {
  return (
    <TextField
      {...props}
      id="contact-form-name"
      name="name"
      label="Name"
      variant="outlined"
      sx={{
        minWidth: MIN_WIDTH,
        marginRight: 2,
        marginBottom: { xs: 2, md: 0 },
        zIndex: "drawer",
        // "& .MuiInputBase-root": { height: 80 },
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": { borderColor: "primary.dark" },
        },
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: "orange",
          },
        },
      }}
    />
  );
};

export default BeautifulTextField;
