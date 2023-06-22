import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import { DATE_FORMAT, MIN_WIDTH } from "./ContactForm";

const popperSX = {
  "& .MuiPaper-root": {
    color: "yellow",
  },
  "& [role=grid]": {
    backgroundColor: "green",
    "& button": {
      backgroundColor: "red",
    },
  },
};

const BeautifulDesktopDatePicker = (props: {
  value?: Dayjs;
  onChange: (value: Dayjs | null) => void;
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        {...props}
        label="Date"
        format={DATE_FORMAT}
        sx={{ minWidth: MIN_WIDTH }}
        views={["day"]}
        slots={{
          openPickerIcon: CalendarMonthIcon,
        }}
        slotProps={{
          textField: {
            InputProps: {
              sx: { "& .MuiSvgIcon-root": { color: "primary.main" } },
            },
          },
          popper: {
            sx: popperSX,
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default BeautifulDesktopDatePicker;
