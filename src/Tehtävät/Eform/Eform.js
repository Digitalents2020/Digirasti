import React, { useState } from "react";
import "../Email/common-form.css";
import Form from "./Form";

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

  const submitForm = (event) => {
    event.preventDefault();
    const allFields = [
      newFirstName,
      newLastName,
      newEmail,
      newNumber,
      newWork1,
      newWork2,
      newDegree,
      newDegreeName,
      newAbout,
    ];
    if (allFields.every((field) => field !== "")) {
      setSubmitted(true);
    } else {
      alert("Tarkistathan että olet täyttänyt kaikki kentät");
    }
  };

  if (submitted) {
    return (
      <div className="form-box">
        <p>
          Hienoa! Näin kirjoitat ja lähetät sähköisen lomakkeen! Voit nyt
          siirtyä seuraavaan tehtävään tai odottaa ohjaajan antamia ohjeita
        </p>
      </div>
    );
  }

  return (
    <div className="form-box">
      <h5 className="exercise-header">Sähköinen lomake</h5>
      <p className="instructions">
        <h2 className="instruction-header">Ohje:</h2>
        <b></b>
        Tässä tehtävässä opetellaan sähköisen lomakkeen täyttämistä ja
        lähettämistä. Sähköisiä lomakkeita on monenlaisia, mutta tässä
        harjoitellaan täyttämään mahdollisesti työnhaun yhteydessä vastaan
        tulevaa lomaketta. Ei huolta, tässäkään tehtävässä ei oikeasti lähetetä
        mitään minnekkään!
      </p>
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
          submitForm={submitForm}
        />
        <br></br>
      </div>
    </div>
  );
};

export default Eform;
