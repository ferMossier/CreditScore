import React from "react";
import { useState } from "react";
import { Inference } from "../Services/Inference";

const DataForm = () => {
  const [values, setValues] = useState({
    value0: "",
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: "",
    value6: "",
    value7: "",
    value8: "",
    value9: "",
    value10: "",
    value11: "",
    value12: "",
    value13: "",
    value14: "",
    value15: "",
    value16: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    console.log("Form submitted: ", values);
    const arr = Object.values(values).map((value) => parseFloat(value));
    Inference(arr);
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Value 0:
            <input
              type="text"
              value={values.value0}
              name="value0"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Value 1:
            <input
              type="text"
              value={values.value1}
              name="value1"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Value 2:
            <input
              type="text"
              value={values.value2}
              name="value2"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Value 3:
            <input
              type="text"
              value={values.value3}
              name="value3"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Value 4:
            <input
              type="text"
              value={values.value4}
              name="value4"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Value 5:
            <input
              type="text"
              value={values.value5}
              name="value5"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Value 6:
            <input
              type="text"
              value={values.value6}
              name="value6"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Value 7:
            <input
              type="text"
              value={values.value7}
              name="value7"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Value 8:
            <input
              type="text"
              value={values.value8}
              name="value8"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Value 9:
            <input
              type="text"
              value={values.value9}
              name="value9"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Value 10:
            <input
              type="text"
              value={values.value10}
              name="value10"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Value 11:
            <input
              type="text"
              value={values.value11}
              name="value11"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Value 12:
            <input
              type="text"
              value={values.value12}
              name="value12"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Value 13:
            <input
              type="text"
              value={values.value13}
              name="value13"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Value 14:
            <input
              type="text"
              value={values.value14}
              name="value14"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Value 15:
            <input
              type="text"
              value={values.value15}
              name="value15"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Value 16:
            <input
              type="text"
              value={values.value16}
              name="value16"
              onChange={handleChange}
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default DataForm;
