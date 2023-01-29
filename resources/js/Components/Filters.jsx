import { Fragment } from "react";
import FilterSelect from "./FilterSelect";
import FilterSlider from "./FilterSlider";


const DUMMY_FILTERS_TYPES = [
  {
    id: "f1",
    name: "cleaning",
    title: "Wybierz rodzaj sprzątania",
    type: [
      "Sprzątanie mieszkań i domów",
      "Mycie okien",
      "Wywóz śmieci",
      "Wywóz gruzu",
    ],
  },
  {
    id: "f2",
    name: "location",
    title: "Wybierz lokalizacje",
    type: ["Opole", "Wrocław", "Warszawa", "Poznań"],
  },
];

const Filters = () => {
  return (
    <Fragment>
      {DUMMY_FILTERS_TYPES.map((filter,i) => (
        <FilterSelect data={filter} key={i}/>
      ))}
      <FilterSlider />
    </Fragment>
  );
};

export default Filters;
