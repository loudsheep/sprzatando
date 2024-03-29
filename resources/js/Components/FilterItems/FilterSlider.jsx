import { useState, useEffect } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { offersActions } from "@/store/filter-logic";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  color: ${({ theme }) => theme.colors.darkGrey};
  align-self: start;
`;

function valuetext(value) {
  return `${value} zł`;
}

const FilterSlider = () => {
  const prices = useSelector((state) => state.filterItems.prices);
  const classes = useStyles();
  const [value, setValue] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setValue(prices);
  }, [prices]);

  const sliderValueChangeHandler = (event, value) => {
    setValue(value);
    dispatch(
      offersActions.setPriceFilter({
        value,
      })
    );
    dispatch(offersActions.filterOffers());
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#7F39F9",
      },
    },
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
        Cena: {value[0]}zł - {value[1]}zł
      </SliderLabel>
      <ThemeProvider theme={theme}>
        <Slider
          className={classes.slider}
          value={value}
          onChange={sliderValueChangeHandler}
          getAriaValueText={valuetext}
          min={prices[0]}
          max={prices[1]}
          color="primary"
          sx={{
            width: 0.95,
          }}
        />
      </ThemeProvider>
    </Box>
  );
};

export default FilterSlider;
