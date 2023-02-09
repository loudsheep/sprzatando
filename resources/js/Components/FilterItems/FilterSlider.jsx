import { useState, useEffect } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  slider: {
    height: "3px",
    // backgroundColor: "white",
    track: {
      backgroundColor: "green",
    },
    rail: {
      backgroundColor: "yellow",
    },
  },
});

const SliderLabel = styled.label`
  color: ${({theme}) => theme.colors.darkGrey};
  align-self: start;
`;

function valuetext(value) {
  return `${value} zł`;
}

const FilterSlider = () => {
  const prices = useSelector((state) => state.filterItems.prices);
  const classes = useStyles();
  const [value, setValue] = useState([]);

  useEffect(() => {
    setValue(prices)
  }, [prices])

  const sliderValueChangeHandler = (event, value) => {
    setValue(value);
  };

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
        Cena: {value[0]}zł - {value[1]}zł
      </SliderLabel>
      <Slider
        className={classes.slider}
        value={value}
        onChange={sliderValueChangeHandler}
        getAriaValueText={valuetext}
        min={prices[0]}
        max={prices[1]}
        sx={{
          width: 0.95,
        }}
      />
    </Box>
  );
};

export default FilterSlider;
