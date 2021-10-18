const Form = ({
  newFirstName,
  handleFirstNameChange,
  newLastName,
  handleLastNameChange,
  newEmail,
  handleEmailChange,
  newNumber,
  handleNumberChange,
  newWork1,
  handleWork1Change,
  newWork2,
  handleWork2Change,
  newDegree,
  handleDegreeChange,
  newDegreeName,
  handleDegreeNameChange,
  newAbout,
  handleAboutChange,
  submitForm,
}) => {
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="FirstName">Etunimi</label>
      <input
        id="FirstName"
        value={newFirstName}
        onChange={handleFirstNameChange}
        type="text"
        required
      ></input>
      <label htmlFor="LastName">Sukunimi</label>
      <input
        id="LastName"
        value={newLastName}
        onChange={handleLastNameChange}
        type="text"
        required
      ></input>
      <label htmlFor="Email">Sähköposti</label>
      <input
        id="Email"
        value={newEmail}
        onChange={handleEmailChange}
        type="email"
        required
      ></input>
      <label htmlFor="Number">Puhelinnumero</label>
      <input
        id="Number"
        value={newNumber}
        onChange={handleNumberChange}
        type="text"
        required
      ></input>
      <label htmlFor="Work1">Työkokemus 1</label>
      <textarea
        id="Work1"
        value={newWork1}
        onChange={handleWork1Change}
        required
      ></textarea>
      <label htmlFor="Work2">Työkokemus 2</label>
      <textarea
        id="Work2"
        value={newWork2}
        onChange={handleWork2Change}
        required
      ></textarea>
      <label htmlFor="Degree">Korkein koulutusaste</label>
      <select
        className="Degree"
        value={newDegree}
        onChange={handleDegreeChange}
      >
        <option>Valitse koulutusaste...</option>
        <option>Kansakoulu</option>
        <option>Peruskoulu</option>
        <option>Ammattikoulu</option>
        <option>Opisto</option>
        <option>Ylioppilastutkinto</option>
        <option>Alempi korkeakoulututkinto</option>
        <option>Ylempi korkeakoulututkinto</option>
        <option>Ei mikään näistä (Selitä alempana tarkemmin)</option>
      </select>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <label htmlFor="DegreeName">Tutkintonimike</label>
      <input
        id="DegreeName"
        value={newDegreeName}
        onChange={handleDegreeNameChange}
        type="text"
        required
      ></input>
      <br></br>
      <label htmlFor="About">
        Kerro kolmella lauseella, millainen työntekijä olisit
      </label>
      <textarea
        id="About"
        value={newAbout}
        onChange={handleAboutChange}
        required
      ></textarea>
      <label htmlFor="Attachment">Lataa liite</label>
      <input id="Attachment" type="file"></input>
      <button type="submit">Lähetä</button>
    </form>
  );
};

export default Form;
