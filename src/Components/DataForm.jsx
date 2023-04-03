import React from "react";
import { useState } from "react";
import { Inference } from "../Services/Inference";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

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

      <header>
        <div className='p-5 text-center bg-light'>
          <h1 className='mb-3'>Scoring Crediticio</h1>
          <h4 className='mb-3'>Consulte aquí</h4>
        </div>
      </header>

      <form onSubmit={handleSubmit}>
        <MDBRow>
          <MDBCol>
            <MDBInput 
              className="mb-4" 
              type="number"
              value={values.Edad} 
              name="Edad"
              label="Edad"
              onChange={handleChange}
              required
            />
          </MDBCol>
          <MDBCol>
            <select className="form-select" aria-label="Default select example" type="number" value={values.ocupacion} onChange={handleChange} name="ocupacion" required>
                <option value="">Seleccione una ocupación</option>
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
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <MDBInput 
              className="mb-4" 
              type="number"
              value={values.ingresosAnuales} 
              name="ingresosAnuales"
              label="Ingresos Anuales"
              onChange={handleChange}
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput 
              className="mb-4" 
              type="number"
              value={values.salarioNetoMensual} 
              name="salarioNetoMensual"
              label="Salario Neto Mensual"
              onChange={handleChange}
              required
            />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <MDBInput 
              className="mb-4" 
              type="number"
              value={values.cantidadCuentasBancarias} 
              name="cantidadCuentasBancarias"
              label="Cantidad de Cuentas Bancarias"
              onChange={handleChange}
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput 
              className="mb-4" 
              type="number"
              value={values.cantidadTarjetasCredito} 
              name="cantidadTarjetasCredito"
              label="Total de tarjetas de Crédito"
              onChange={handleChange}
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput 
              className="mb-4" 
              type="number"
              value={values.tasaInteres} 
              name="tasaInteres"
              label="Tasa de Interés"
              onChange={handleChange}
              required
            />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <MDBInput 
              className="mb-4" 
              type="number"
              value={values.cantidadPrestamos} 
              name="cantidadPrestamos"
              label="Total de Préstamos"
              onChange={handleChange}
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput 
              className="mb-4" 
              type="number"
              value={values.cantidadRetrasosDias} 
              name="cantidadRetrasosDias"
              label="Dias de Retrasos de Pagos"
              onChange={handleChange}
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput 
              className="mb-4" 
              type="number"
              value={values.cantidadPagosRetrasados} 
              name="cantidadPagosRetrasados"
              label="Total de Pagos Retrasados"
              onChange={handleChange}
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput 
              className="mb-4" 
              type="number"
              value={values.consultasCredito} 
              name="consultasCredito"
              label="Total de Consultas de Crédito"
              onChange={handleChange}
              required
            />
          </MDBCol>
        </MDBRow>
        
        <MDBRow>
          <MDBCol>
            <MDBInput 
              className="mb-4" 
              type="number"
              value={values.deudaPendiente} 
              name="deudaPendiente"
              label="Monto de Deuda Pendiente"
              onChange={handleChange}
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput 
              className="mb-4" 
              type="number"
              value={values.ratioUtilizacionCredito} 
              name="ratioUtilizacionCredito"
              label="Ratio de Utilización de Crédito"
              onChange={handleChange}
              required
            />
          </MDBCol>
          <MDBCol>
            <select className="form-select" aria-label="Default select example" type="number" value={values.pagoMinimo} onChange={handleChange} name="pagoMinimo" required>
                <option value="">Pago mínimo</option>
                <option value="1">Si</option>
                <option value="0">No</option>
            </select>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <MDBInput 
              className="mb-4" 
              type="number"
              value={values.cuotaMensualEquivalente} 
              name="cuotaMensualEquivalente"
              label="Cuota Mensual Equivalente (EMI)"
              onChange={handleChange}
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput 
              className="mb-4" 
              type="number"
              value={values.inversionMensual} 
              name="inversionMensual"
              label="Monto de Inversión Mensual"
              onChange={handleChange}
              required
          />
          </MDBCol>
          <MDBCol>
            <MDBInput 
              className="mb-4" 
              type="number"
              value={values.balanceMensual} 
              name="balanceMensual"
              label="Balance Mensual"
              onChange={handleChange}
              required
            />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <MDBBtn type='submit' block color="success">
              Consultar Scoring
            </MDBBtn>
          </MDBCol>
        </MDBRow>

      </form>

      <div>
          {scoreResult.map((score, index) => (
            <div key={index}>
              <div class="alert alert-primary" role="alert">
                <div>RESULTADO: {predictedResult}</div>
                Valor {index}: {score}
              </div>
            </div>
          ))}
      </div>

    </div>
  );
};

export default DataForm;