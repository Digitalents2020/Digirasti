import React, { useState } from "react";
import "../Email/common-form.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Form from "./Form";
//form is imported from its own separate module

const Eform = () => {
  const [submitted, setSubmitted] = useState(false);

  const [newFirstName, setFirstName] = useState("");
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const [newLastName, setLastName] = useState("");
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const [newEmail, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const [newNumber, setNumber] = useState("");
  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const [newWork1, setWork1] = useState("");
  const handleWork1Change = (event) => {
    setWork1(event.target.value);
  };

  const [newWork2, setWork2] = useState("");
  const handleWork2Change = (event) => {
    setWork2(event.target.value);
  };

  const [newDegree, setDegree] = useState("");
  const handleDegreeChange = (event) => {
    setDegree(event.target.value);
  };

  const [newDegreeName, setDegreeName] = useState("");
  const handleDegreeNameChange = (event) => {
    setDegreeName(event.target.value);
  };

  const [newAbout, setAbout] = useState("");
  const handleAboutChange = (event) => {
    setAbout(event.target.value);
  };

  //The Register handles the input and the "required: true" is for validation and error purposes.
  //The "CriteriaMode: all" below means that all errors for the field are displayed at once

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const submitForm = () => {
    setSubmitted(true);
  };

  //If form is submited succesfully the "success" message below is rendered

  if (submitted) {
    return (
      <div className="form-box">
        <div className="success">
          <h2 className="little-header">Onnistuit!</h2>
          <p>
            Hienoa! Näin kirjoitat ja lähetät sähköisen lomakkeen! Voit nyt
            siirtyä seuraavaan tehtävään tai odottaa ohjaajan antamia ohjeita
          </p>
        </div>
        <Link to="/Tehtava1" className="NextPrac" role="button">
          Seuraava tehtävä
        </Link>
      </div>
    );
  }

  return (
    <div className="form-box">
      <h5 className="exercise-header">Sähköinen lomake</h5>
      <div className="instructions">
        <h2 className="instruction-header">Ohje:</h2>
        <p>
          Tässä tehtävässä opetellaan sähköisen lomakkeen täyttämistä ja
          lähettämistä. Sähköisiä lomakkeita on monenlaisia, mutta tässä
          harjoitellaan täyttämään mahdollisesti työnhaun yhteydessä vastaan
          tulevaa lomaketta. Huomaathan, että tähdellä merkityt kentät ovat
          pakollisia. Ei huolta, tässäkään tehtävässä ei oikeasti lähetetä
          mitään minnekkään!
        </p>
      </div>
      <h2 className="little-header">Hakulomake</h2>
      <br></br>
      <div className="field">
        <Form
          newFirstName={newFirstName}
          handleFirstNameChange={handleFirstNameChange}
          newLastName={newLastName}
          handleLastNameChange={handleLastNameChange}
          newEmail={newEmail}
          handleEmailChange={handleEmailChange}
          newNumber={newNumber}
          handleNumberChange={handleNumberChange}
          newWork1={newWork1}
          handleWork1Change={handleWork1Change}
          newWork2={newWork2}
          handleWork2Change={handleWork2Change}
          newDegree={newDegree}
          handleDegreeChange={handleDegreeChange}
          newDegreeName={newDegreeName}
          handleDegreeNameChange={handleDegreeNameChange}
          newAbout={newAbout}
          handleAboutChange={handleAboutChange}
          submitForm={handleSubmit(submitForm)}
          register={register}
          errors={errors}
        />
        <br></br>
      </div>
    </div>
  );
};

export default Eform;
