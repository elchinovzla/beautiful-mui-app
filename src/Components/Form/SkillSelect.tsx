import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MIN_WIDTH } from "./ContactForm";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";

const SKILLS = ['React', 'Angular', 'Java', 'Redux', 'SQL','Manual testing', 'Selenium'];

const SkillSelect = (
    props: {
        value?: string[]
        onChange: (event: SelectChangeEvent<string[]>, child: React.ReactNode) => void
    }
) => {

    return (
        <Select
        {...props}
        id="skill-select" 
        renderValue={(select: string[]) => select.join(", ")}
        sx={{minWidth: MIN_WIDTH, marginRight: 2}}
        multiple
        >
            {SKILLS.map((skill)=> 
            <MenuItem value={skill} key={skill}>
                <ListItemText primary={skill}/>
            </MenuItem>
            )}
        </Select>
    )   
}

export default SkillSelect;