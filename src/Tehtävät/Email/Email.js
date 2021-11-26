import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../App.css";
//React Form Hook library documentation: https://github.com/react-hook-form/react-hook-form

const Email = () => {
  const [submitted, setSubmitted] = useState(false);
  const [attached, setAttached] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  //The above "CriteriaMode: all" means that all errors for the field are displayed at once

  const submitMessage = (data) => {
    if (data.Attachment.length !== 0) {
      setAttached(true);
    }
    setSubmitted(true);
  };

  //Try again button reloads the page back to its original state
  function refreshPage() {
    window.location.reload();
  }

  //If form is submited succesfully the "success" message below is rendered

  if (submitted) {
    return (
      <div className="form-box">
        <div className="success">
          <h2 className="infoHeader">Onnistuit!</h2>
          <p>
            Hienoa! Näin kirjoitat ja lähetät sähköpostin ja lisäät siihen
            liitteen! Voit nyt siirtyä seuraavaan tehtävään tai odottaa ohjaajan
            antamia ohjeita
          </p>
          <br></br>
          {!attached && (
            <>
              <h2 className="infoHeader">...Mutta</h2>
              <p>
                Sinulta taisi unohtua liitetiedosto. Ei hätää, voit silti
                halutessasi yrittää uudelleen tai klikata "seuraava tehtävä"
                painiketta.
              </p>
              <button className="nextPracButton" type="button" onClick={refreshPage}>
                {" "}
                <span>Yritä uudelleen</span>{" "}
              </button>
            </>
          )}
        </div>
        <Link to="/Eform" className="nextPracButton" role="button">
          Seuraava tehtävä
        </Link>
      </div>
    );
  }

  //Form validation is made by using React Hook Form library

  //{...register("Vastaanottaja", { required: true })} The Register handles the input and the "required: true" is for validation and error purposes.
  //{errors.Vastaanottaja?.type === "required" && (<p className="error-message"> Vastaanottajaa ei voi jättää tyhjäksi </p> In this part we define the type of error and an error message for it, in this case the field cannot be left empty.

  return (
    <div className="form-box">
      <h1 className="pageHeader">Sähköposti</h1>
      <div className="pageContentFrame">
        <h2 className="infoHeader">Ohje:</h2>
        <p>
          Tässä tehtävässä opetellaan sähköpostin kirjoittamista ja
          liittetiedoston liittämistä. Sähköpostissa on aina kolme eri osaa:
          Vastaanottaja, aihe ja itse viesti. Joskus tarpeen on neljäs osa joka
          on liitetiedosto. Tehtävänäsi on kirjoittaa pienimuotoinen työhakemus
          vastaanottajalle esimerkki.makkonen@example.com ja muistathan myös
          liittää CV:si sähköpostin liitteeksi!
        </p>
      </div>
      <p className="pageContentFrame">
        Huomioitavaa: Joskus sähköpostien liitteen nappulassa on vain
        paperiliittimen eli klemmarin kuva, älä siis hätäänny, jos tässä
        tehtävässä käytettävää nappia ei tosielämän sähköposteista löydy. Ei
        huolta, kirjoittamasi hakemus ei oikeasti lähde mihinkään!
      </p>
      <br></br>
      <div className="field">
        <form onSubmit={handleSubmit(submitMessage)}>
          <label>Vastaanottaja</label>
          <input
            {...register("Vastaanottaja", {
              required: true,
              pattern: /esimerkki\.makkonen@example\.com/,
            })}
          />
          {errors.Vastaanottaja?.type === "pattern" && (
            <p className="error-message">
              Tarkistathan kirjoittamasi osoitteen
            </p>
          )}
          {errors.Vastaanottaja?.type === "required" && (
            <p className="error-message">
              Vastaanottajaa ei voi jättää tyhjäksi
            </p>
          )}
          <label>Aihe</label>
          <input {...register("Aihe", { required: true })} type="text" />
          {errors.Aihe?.type === "required" && (
            <p className="error-message">Aihetta ei voi jättää tyhjäksi</p>
          )}
          <label>Viesti</label>
          <textarea {...register("Viesti", { required: true })} type="text" />
          {errors.Viesti?.type === "required" && (
            <p className="error-message">
              Viestikenttää ei voi jättää tyhjäksi
            </p>
          )}
          <label>Lataa liite</label>
          <input {...register("Attachment")} type="file"></input>
          <button className="actionButton" type="submit">Lähetä</button>
        </form>
      </div>
    </div>
  );
};

export default Email;
