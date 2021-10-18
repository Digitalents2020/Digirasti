import React, { useState } from "react";
import "./common-form.css";

const recipient = "esimerkki.makkonen@example.com";

const Email = () => {
  const [newRecipient, setRecipient] = useState("");
  const [newHeader, setHeader] = useState("");
  const [newMessage, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleHeaderChange = (event) => {
    setHeader(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const submitMessage = (event) => {
    event.preventDefault();
    if (newRecipient === recipient && newHeader !== "" && newMessage !== "") {
      setSubmitted(true);
    } else {
      alert(
        "Lähettäjä on syötetty väärin tai jokin kenttä on jäänyt tyhjäksi."
      );
    }
  };

  if (submitted) {
    return (
      <div className="form-box">
        <p>
          Hienoa! Näin kirjoitat ja lähetät sähköpostin ja lisäät siihen
          liitteen! Voit nyt siirtyä seuraavaan tehtävään tai odottaa ohjaajan
          antamia ohjeita
        </p>
      </div>
    );
  }

  return (
    <div className="form-box">
      <p>
        Tässä tehtävässä opetellaan sähköpostin kirjoittamista ja
        liittetiedoston liittämistä. Sähköpostissa on aina kolme eri osaa:
        Vastaanottaja, aihe ja itse viesti. Joskus tarpeen on neljäs osa joka on
        liitetiedosto. Tehtävänäsi on kirjoittaa pienimuotoinen työhakemus
        vastaanottajalle {recipient} ja muistathan myös liittää CV:si
        sähköpostin liitteeksi!
      </p>
      <p>
        Huomioitavaa: Joskus sähköpostien liitteen nappulassa on vain
        paperiliittimen eli klemmarin kuva, älä siis hätäänny, jos tässä
        tehtävässä käytettävää nappia ei tosielämän sähköposteista löydy.
      </p>
      <p>Ei huolta, kirjoittamasi hakemus ei oikeasti lähde mihinkään</p>
      <h5>Sähköposti</h5>
      <br></br>
      <div className="field">
        <form onSubmit={submitMessage}>
          <label>vastaanottaja</label>
          <input
            type="email"
            value={newRecipient}
            onChange={handleRecipientChange}
          ></input>
          <label>Aihe</label>
          <input
            type="text"
            value={newHeader}
            onChange={handleHeaderChange}
            className={newHeader ? "" : "red-border"}
          ></input>
          <label>Viesti</label>
          <textarea
            type="text"
            value={newMessage}
            onChange={handleMessageChange}
            className={newMessage ? "" : "red-border"}
          ></textarea>
          <label>Lataa liite</label>
          <input type="file"></input>
          <button type="submit">Lähetä</button>
        </form>
        <br></br>
      </div>
    </div>
  );
};

export default Email;
