import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DATE_FORMAT, MIN_WIDTH } from "./ContactForm"
import { Dayjs } from "dayjs"

const BeautifulDesktopDatePicker = (
    props: {
        value?: Dayjs,
        onChange: (value: Dayjs | null) => void
    }
) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker 
                {...props}
                label='Date'
                format={DATE_FORMAT}
                sx={{minWidth:MIN_WIDTH}}
            />
        </LocalizationProvider>
    )
}

export default BeautifulDesktopDatePicker;