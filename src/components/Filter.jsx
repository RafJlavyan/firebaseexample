import { Slider } from "@mui/material";

const Filter = (props) => {
  return (
    <div>
      <Slider
        size="large"
        value={props.currentValue}
        valueLabelDisplay="auto"
        max={50000}
        step={1000}
        onChange={props.onChange}
      />
      <p>Minimum price: ${props.currentValue}</p>
    </div>
  );
};

export default Filter;
