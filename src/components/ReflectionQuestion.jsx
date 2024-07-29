import { Slider } from "@mui/material";

const ReflectionQuestion = ({ children, id, value, onChange }) => {
  const handleChange = (event, newValue) => {
    onChange(id, newValue);
  };

  const valuetext = (value) => {
    return value.toString();
  };

  return (
    <>
      <div className="bg-primary-subtle border border-primary p-3">
        <p>{children}</p>
      </div>
      <br />
      <br />
      <div className="w-100">
        <Slider
          aria-label="Reflection"
          value={value}
          onChange={handleChange}
          step={1}
          marks
          min={1}
          max={5}
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
        />
      </div>
      <div className="d-flex justify-content-between">
        <span className="text-start text-wrap w-6">Strongly disagree</span>
        <span className="text-wrap w-6">Disagree</span>
        <span className="text-wrap w-6 text-center">Neutral</span>
        <span className="text-wrap w-6 text-end">Agree</span>
        <span className="text-wrap w-6 text-end">Strongly agree</span>
      </div>
      <br />
    </>
  );
};

export default ReflectionQuestion;
