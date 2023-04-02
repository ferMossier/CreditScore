import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Inference } from "../Services/Inference";

const Data = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await Inference([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
      ]);
      const datos = JSON.parse(response);
      console.log(datos);
      const score = datos.predictions[0].predicted_label;
      setData(score);
    };
    getData();
  }, []);

  console.log(data);
  return <div>{data}</div>;
};

export default Data;
