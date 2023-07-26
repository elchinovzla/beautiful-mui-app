import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ReactNode, useEffect, useRef, useState } from "react";
import { MIN_WIDTH } from "./ContactForm";

const SkillSelect = (props: {
  value?: string[];
  onChange: (event: SelectChangeEvent<string[]>, child: ReactNode) => void;
  children: ReactNode[];
}) => {
  const selectInputComponent = useRef<HTMLInputElement>(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setPosition(
      //   selectInputComponent.current?.getBoundingClientRect()?.left ? +20 : 0
      selectInputComponent.current
        ? selectInputComponent.current.getBoundingClientRect()?.left + 20
        : 0
    );
  }, [selectInputComponent]);

  return (
    <Select
      ref={selectInputComponent}
      {...props}
      id="skill-select"
      renderValue={(select: string[]) => select.join(", ")}
      sx={{
        minWidth: MIN_WIDTH,
        marginRight: 2,
        marginBottom: { xs: 2, md: 0 },
      }}
      multiple
      MenuProps={{
        PaperProps: {
          sx: {
            left: `${position}px !important`,
            maxHeight: 180,
          },
        },
      }}
    >
      {props.children}
    </Select>
  );
};

export default SkillSelect;
