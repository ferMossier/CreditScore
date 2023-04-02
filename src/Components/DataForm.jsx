import React from "react";
import { useState } from "react";
import { Inference } from "../Services/Inference";

const DataForm = () => {
  const [values, setValues] = useState({
    Edad: "",
    ocupacion: "",
    ingresosAnuales: "",
    salarioNetoMensual: "",
    cantidadCuentasBancarias: "",
    cantidadTarjetasCredito: "",
    tasaInteres: "",
    cantidadPrestamos: "",
    cantidadRetrasosDias: "",
    cantidadPagosRetrasados: "",
    consultasCredito: "",
    deudaPendiente: "",
    ratioUtilizacionCredito: "",
    pagoMinimo: "",
    cuotaMensualEquivalente: "",
    inversionMensual: "",
    balanceMensual: "",
  });
  const [predictedResult, setPredictedResult] = useState();
  const [scoreResult, setScoreResult] = useState([]);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setValues({
      ...values,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted: ", values);
    const arr = Object.values(values).map((value) => parseFloat(value));
    try {
      const result = await Inference(arr);
      setPredictedResult(JSON.parse(result).predictions[0].predicted_label);
      setScoreResult(JSON.parse(result).predictions[0].score);
      console.log("AC", JSON.parse(result));
    } catch (error) {
      console.log("ACAA", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Edad:
            <input
              type="text"
              value={values.Edad}
              name="Edad"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Ocupación:
            <input
              type="text"
              value={values.ocupacion}
              name="ocupacion"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Ingresos Anuales:
            <input
              type="text"
              value={values.ingresosAnuales}
              name="ingresosAnuales"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Salario Neto Mensual:
            <input
              type="text"
              value={values.salarioNetoMensual}
              name="salarioNetoMensual"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Cantidad de Cuentas Bancarias:
            <input
              type="text"
              value={values.cantidadCuentasBancarias}
              name="cantidadCuentasBancarias"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Total de tarjetas de Crédito:
            <input
              type="text"
              value={values.cantidadTarjetasCredito}
              name="cantidadTarjetasCredito"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Tasa de Interés:
            <input
              type="text"
              value={values.tasaInteres}
              name="tasaInteres"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Total de Préstamos:
            <input
              type="text"
              value={values.cantidadPrestamos}
              name="cantidadPrestamos"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Dias de Retrasos de Pagos :
            <input
              type="text"
              value={values.cantidadRetrasosDias}
              name="cantidadRetrasosDias"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Total de Pagos Retrasados:
            <input
              type="text"
              value={values.cantidadPagosRetrasados}
              name="cantidadPagosRetrasados"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Total de Consultas de Crédito:
            <input
              type="text"
              value={values.consultasCredito}
              name="consultasCredito"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Monto de Deuda Pendiente:
            <input
              type="text"
              value={values.deudaPendiente}
              name="deudaPendiente"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Ratio de Utilización de Crédito:
            <input
              type="text"
              value={values.ratioUtilizacionCredito}
              name="ratioUtilizacionCredito"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Pago Mínimo:
            <input
              type="text"
              value={values.pagoMinimo}
              name="pagoMinimo"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Cuota Mensual Equivalente (EMI):
            <input
              type="text"
              value={values.cuotaMensualEquivalente}
              name="cuotaMensualEquivalente"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Monto de Inversión Mensual:
            <input
              type="text"
              value={values.inversionMensual}
              name="inversionMensual"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Balance Mensual:
            <input
              type="text"
              value={values.balanceMensual}
              name="balanceMensual"
              onChange={handleChange}
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <div>RESULTADO: {predictedResult}</div>
      <div>
        {scoreResult.map((score, index) => (
          <div key={index}>
            Valor {index}: {score}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataForm;
