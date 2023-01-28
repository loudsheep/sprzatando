import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value} zł`;
}

const FilterSlider = () => {
  const [value, setValue] = useState([1, 100]);

  const sliderValueChangeHandler = (event, value) => { 
    setValue(value)
   }

  return (
    <Box
      sx={{
        width: 1,
      }}
    >
      <Slider
        value={value}
        onChange={sliderValueChangeHandler}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
};

export default FilterSlider;
