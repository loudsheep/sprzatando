import { useEffect } from "react";
import { Fragment } from "react";
import FilterSelect from "./FilterSelect";
import FilterSlider from "./FilterSlider";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

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
  const categories = useSelector((state) => state.filterItems.categories);
  const cities = useSelector((state) => state.filterItems.cities);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <FilterSelect
        filters={categories}
        type="cleaning"
        title="Wybierz rodzaj sprzątania"
      />
      <FilterSelect
        filters={cities}
        type="location"
        title="Wybierz lokalizacje"
        handleChange={(e) =>
          dispatch(offersActions.filterByCity(e.target.value))
        }
      />
      <FilterSlider />
    </Fragment>
  );
};

export default Filters;
