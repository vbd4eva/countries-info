import { useRef, useEffect } from "react";
// import PropTypes from 'prop-types'
import { ReactComponent as Map } from "./Fuller_projection_with_largest_countries_edited.svg";
// import resCountries from "../../API/resCountries/allCountries.json";
// import mapJSON from "../../API/resCountries/map.json";
// import apiJSON from "../../API/resCountries/api.json";

import s from "./WordCountriesMap.module.css";

function WordCountriesMap(props) {
  const svgMapRef = useRef(null);

  useEffect(() => {
    // console.log("svgMapRef");
    // console.log("mapCountries");
    // const mapCountries = [...svgMapRef.current.querySelectorAll(".country")];
    // const mapCompare = mapCountries.map(({ id }) => id);
    // const apiCompare = resCountries.map(
    //   ({ cca3, name }) => `${cca3} ${name.common}`
    // );
    //
  }, []);

  function onMapClick({ target }) {
    const countryId = target.parentElement.id;
    console.log(countryId);
  }

  return (
    <div className={s.wrapper}>
      <Map ref={svgMapRef} onClick={onMapClick} />
    </div>
  );
}

// WordCountriesMap.propTypes = {}

export default WordCountriesMap;
