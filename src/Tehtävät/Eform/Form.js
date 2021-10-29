// The form for eform exercise is constructed here as its own separate module

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
  register,
  errors,
}) => {
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="FirstName">Etunimi *</label>
      <input
        {...register("FirstName", { required: true })}
        id="FirstName"
        value={newFirstName}
        onChange={handleFirstNameChange}
        type="text"
      />
      {errors.FirstName?.type === "required" && (
        <p className="error-message">Etunimi on pakollinen tieto</p>
      )}
      <label htmlFor="LastName">Sukunimi *</label>
      <input
        {...register("LastName", { required: true })}
        id="LastName"
        value={newLastName}
        onChange={handleLastNameChange}
        type="text"
      ></input>
      {errors.LastName?.type === "required" && (
        <p className="error-message">Sukunimi on pakollinen tieto</p>
      )}
      <label htmlFor="Email">Sähköposti *</label>
      <input
        {...register("Email", { required: true })}
        id="Email"
        value={newEmail}
        onChange={handleEmailChange}
        type="email"
      ></input>
      {errors.Email?.type === "required" && (
        <p className="error-message">Sähköpostiosoite on pakollinen tieto</p>
      )}
      <label htmlFor="Number">Puhelinnumero *</label>
      <input
        {...register("Number", { required: true })}
        id="Number"
        value={newNumber}
        onChange={handleNumberChange}
        type="text"
      ></input>
      {errors.Number?.type === "required" && (
        <p className="error-message">Puhelinnumero on pakollinen tieto</p>
      )}
      <label htmlFor="Work1">Työkokemus 1</label>
      <textarea
        id="Work1"
        value={newWork1}
        onChange={handleWork1Change}
      ></textarea>
      <label htmlFor="Work2">Työkokemus 2</label>
      <textarea
        id="Work2"
        value={newWork2}
        onChange={handleWork2Change}
      ></textarea>
      <label htmlFor="degree">Korkein koulutusaste</label>
      <select
        className="degree"
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
      <label htmlFor="degree-name">Tutkintonimike</label>
      <input
        id="degree-name"
        value={newDegreeName}
        onChange={handleDegreeNameChange}
        type="text"
      ></input>
      <br></br>
      <label htmlFor="About">
        Kerro kolmella lauseella, millainen työntekijä olisit *
      </label>
      <textarea
        {...register("About", { required: true })}
        id="About"
        value={newAbout}
        onChange={handleAboutChange}
      ></textarea>
      {errors.Number?.type === "required" && (
        <p className="error-message">Esittely on pakollinen tieto</p>
      )}
      <label htmlFor="Attachment">Lataa liite</label>
      <input {...register("Attachment")} type="file"></input>
      <button type="submit">Lähetä</button>
    </form>
  );
};

export default Form;
