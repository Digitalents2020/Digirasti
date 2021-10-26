import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./common-form.css";

const recipient = "esimerkki.makkonen@example.com";

const Email = () => {
  const [newRecipient, setRecipient] = useState("");
  const [newHeader, setHeader] = useState("");
  const [newMessage, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  //CriteriaMode all means that all validation checks are on

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleHeaderChange = (event) => {
    setHeader(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const submitMessage = () => {
    setSubmitted(true);
  };

  //If form is submited succesfully the "success" message below is rendered

  if (submitted) {
    return (
      <div className="form-box">
        <div className="success">
          <h2 className="little-header">Onnistuit!</h2>
          <p>
            Hienoa! Näin kirjoitat ja lähetät sähköpostin ja lisäät siihen
            liitteen! Voit nyt siirtyä seuraavaan tehtävään tai odottaa ohjaajan
            antamia ohjeita
          </p>
        </div>
      </div>
    );
  }

  //Form validation is made by using React Hook Form library

  //{...register("Vastaanottaja", { required: true })} The Register handles the input and the required is a tag for the validation
  //{errors.Vastaanottaja?.type === "required" && (<p className="error-message"> Vastaanottajaa ei voi jättää tyhjäksi </p>

  return (
    <div className="form-box">
      <h2 className="exercise-header">Sähköposti</h2>
      <div className="instructions">
        <h2 className="instruction-header">Ohje:</h2>
        <p>
          Tässä tehtävässä opetellaan sähköpostin kirjoittamista ja
          liittetiedoston liittämistä. Sähköpostissa on aina kolme eri osaa:
          Vastaanottaja, aihe ja itse viesti. Joskus tarpeen on neljäs osa joka
          on liitetiedosto. Tehtävänäsi on kirjoittaa pienimuotoinen työhakemus
          vastaanottajalle {recipient} ja muistathan myös liittää CV:si
          sähköpostin liitteeksi!{" "}
        </p>
      </div>
      <p className="instructions">
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
            {...register("Vastaanottaja", { required: true })}
            type="email"
            value={newRecipient}
            onChange={handleRecipientChange}
          />
          {errors.Vastaanottaja?.type === "required" && (
            <p className="error-message">
              Vastaanottajaa ei voi jättää tyhjäksi
            </p>
          )}
          <label>Aihe</label>
          <input
            {...register("Aihe", { required: true })}
            type="text"
            value={newHeader}
            onChange={handleHeaderChange}
            className={newHeader}
          />
          {errors.Aihe?.type === "required" && (
            <p className="error-message">Aihetta ei voi jättää tyhjäksi</p>
          )}
          <label>Viesti</label>
          <textarea
            {...register("Viesti", { required: true })}
            type="text"
            value={newMessage}
            onChange={handleMessageChange}
            className={newMessage}
          />
          {errors.Viesti?.type === "required" && (
            <p className="error-message">
              Viestikenttää ei voi jättää tyhjäksi
            </p>
          )}
          <label>Lataa liite</label>
          <input type="file"></input>
          <button type="submit">Lähetä</button>
        </form>
      </div>
    </div>
  );
};

export default Email;
