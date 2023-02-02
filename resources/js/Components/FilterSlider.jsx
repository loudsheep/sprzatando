import { useState, useEffect } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const SliderLabel = styled.label`
  color: #fff;
  align-self: start;
`;

function valuetext(value) {
  return `${value} zł`;
}

const FilterSlider = (props) => {
  const min = props.prices[0];
  const max = props.prices[1];
  const [value, setValue] = useState([min, max]);
  const [minPrice, setMinPrice] = useState(min);
  const [maxPrice, setMaxPrice] = useState(max);

  const sliderValueChangeHandler = (event, value) => {
    setValue(value);
  };

  useEffect(() => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 1,
        mb: 1.9,
      }}
    >
      <SliderLabel>
        Cena: {minPrice}zł - {maxPrice}zł
      </SliderLabel>
      <Slider
        value={value}
        onChange={sliderValueChangeHandler}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={min}
        max={max}
        sx={{
          width: 0.95,
        }}
      />
    </Box>
  );
};

export default FilterSlider;
