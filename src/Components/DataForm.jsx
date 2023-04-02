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
              type="number"
              value={values.Edad}
              name="Edad"
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Ocupación:
            <select
              type="number"
              value={values.ocupacion}
              name="ocupacion"
              onChange={handleChange}
              required
            >
              <option value="1">Científico</option>
              <option value="2">Profesor</option>
              <option value="3">Ingeniero</option>
              <option value="4">Emprendedor</option>
              <option value="5">Desarrollador</option>
              <option value="6">Abogado</option>
              <option value="7">Media Manager</option>
              <option value="8">Médico</option>
              <option value="9">Periodista</option>
              <option value="10">Manager</option>
              <option value="11">Contador</option>
              <option value="12">Musico</option>
              <option value="13">Mecánico</option>
              <option value="14">Escritor</option>
              <option value="15">Arquitecto</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Ingresos Anuales:
            <input
              type="number"
              value={values.ingresosAnuales}
              name="ingresosAnuales"
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Salario Neto Mensual:
            <input
              type="number"
              value={values.salarioNetoMensual}
              name="salarioNetoMensual"
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Cantidad de Cuentas Bancarias:
            <input
              type="number"
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
              type="number"
              value={values.cantidadTarjetasCredito}
              name="cantidadTarjetasCredito"
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Tasa de Interés:
            <input
              type="number"
              value={values.tasaInteres}
              name="tasaInteres"
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Total de Préstamos:
            <input
              type="number"
              value={values.cantidadPrestamos}
              name="cantidadPrestamos"
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Dias de Retrasos de Pagos :
            <input
              type="number"
              value={values.cantidadRetrasosDias}
              name="cantidadRetrasosDias"
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Total de Pagos Retrasados:
            <input
              type="number"
              value={values.cantidadPagosRetrasados}
              name="cantidadPagosRetrasados"
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Total de Consultas de Crédito:
            <input
              type="number"
              value={values.consultasCredito}
              name="consultasCredito"
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Monto de Deuda Pendiente:
            <input
              type="number"
              value={values.deudaPendiente}
              name="deudaPendiente"
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Ratio de Utilización de Crédito:
            <input
              type="number"
              value={values.ratioUtilizacionCredito}
              name="ratioUtilizacionCredito"
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Pago Mínimo:
            <select
              type="number"
              value={values.pagoMinimo}
              name="pagoMinimo"
              onChange={handleChange}
              required
            >
              <option value="1">Si</option>
              <option value="0">No</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Cuota Mensual Equivalente (EMI):
            <input
              type="number"
              value={values.cuotaMensualEquivalente}
              name="cuotaMensualEquivalente"
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Monto de Inversión Mensual:
            <input
              type="number"
              value={values.inversionMensual}
              name="inversionMensual"
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Balance Mensual:
            <input
              type="number"
              value={values.balanceMensual}
              name="balanceMensual"
              onChange={handleChange}
              required
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
