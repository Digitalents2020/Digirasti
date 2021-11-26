import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../App.css";
//React Form Hook library documentation: https://github.com/react-hook-form/react-hook-form

const Tietoturva = () => {
  const [submitted, setSubmitted] = useState(false);
  const [points, setPoints] = useState(0);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  //The above "CriteriaMode: all" means that all errors for the field are displayed at once

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);

    let sum = 0;

    if (data.kysymys1 === "B") {
      console.log("Oikein");
      sum += 1;
    } else {
      console.log("Väärin");
    }

    if (data.kysymys2 === "B") {
      console.log("Oikein");
      sum += 1;
    } else {
      console.log("Väärin");
    }

    if (data.kysymys3 === "B") {
      sum += 1;
    } else {
      console.log("Väärin");
    }
    if (data.kysymys4 === "A") {
      console.log("Oikein");
      sum += 1;
    } else {
      console.log("Väärin");
    }
    if (data.kysymys5 === "A") {
      console.log("Oikein");
      sum += 1;
    } else {
      console.log("Väärin");
    }
    setPoints(sum);
    setSubmitted(true);
  };

  //If form is submited succesfully the "success" message below is rendered

  if (submitted) {
    return (
      <div className="form-box">
        <div className="pageContentFrame">
          <h2 className="infoHeader">Tulokset</h2>

          <h3>Oikeat vastaukset</h3>
          <br />
          <p>{points}/5 vastausta oikein.</p>
          <br />
          <p>Kysymys 1: A koska x</p>
          <p>Kysymys 2: B koska x</p>
          <p>Kysymys 3: B koska x</p>
          <p>Kysymys 4: B koska x</p>
          <p>Kysymys 5: B koska x</p>
        </div>
        <Link to="/tippuvat_kirjaimet" className="nextPracButton" role="button">
          Seuraava tehtävä
        </Link>
      </div>
    );
  }

  return (
    <div className="mainPageFrame">
      <h1 className="pageHeader">Tietoturvatehtävä</h1>
      <div className="pageContentFrame">
        <h2 className="infoHeader">Ohje:</h2>
        <p>
          Tässä kyselyssä vastaat viiteen tietoturvaan liittyvään kysymykseen.
        </p>
      </div>
      <div className="pageContentFrame formTietoturva">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Mitä tietoturvalla tarkoitetaan?</h3>
          <ul>
            <li>
              <input
                {...register("kysymys1", { required: true })}
                name="kysymys1"
                type="radio"
                value="A"
                id="kysymys1A"
              />
              <label htmlFor="kysymys1A" className="answer">
                Tietoturva tarkoittaa turvalliseksi luokiteltua tietoa.
              </label>
            </li>
            <li>
              <input
                {...register("kysymys1", { required: true })}
                name="kysymys1"
                type="radio"
                value="B"
                id="kysymys1B"
              />
              <label htmlFor="kysymys1B" className="answer">
                Tietoturva tarkoittaa yrityksen tai palveluntarjoajan tietojen
                suojaamista ulkopuolisilta.
              </label>
            </li>
          </ul>
          <br />

          <h3>Mitä tietosuojalla tarkoitetaan?</h3>
          <ul>
            <li>
              <input
                {...register("kysymys2", { required: true })}
                name="kysymys2"
                type="radio"
                value="A"
                id="kysymys2A"
              />
              <label htmlFor="kysymys2A" className="answer">
                Tietosuoja tarkoittaa paikkaa, jossa tieto pysyy suojassa
                muilta.
              </label>
            </li>
            <li>
              <input
                {...register("kysymys2", { required: true })}
                name="kysymys2"
                type="radio"
                value="B"
                id="kysymys2B"
              />
              <label htmlFor="kysymys2B" className="answer">
                Tietosuoja tarkoittaa toimenpiteitä, joilla pyritään
                varmistamaan henkilötietojen asianmukainen käsittely ja
                yksityisyyden säilyminen.
              </label>
            </li>
          </ul>
          <br />
          
          <h3>Minun täytyy itse huolehtia tietosuojastani</h3>
          <ul>
            <li>
              <input
                {...register("kysymys3", { required: true })}
                name="kysymys3"
                type="radio"
                value="A"
                id="kysymys3A"
              />
              <label htmlFor="kysymys3A" className="answer">
                Ei
              </label>
            </li>
            <li>
              <input
                {...register("kysymys3", { required: true })}
                name="kysymys3"
                type="radio"
                value="B"
                id="kysymys3B"
              />
              <label htmlFor="kysymys3B" className="answer">
                Kyllä
              </label>
            </li>
          </ul>
          <br />

          <h3>
            Pankkivirkailija pyytää sinulta sähköpostilla käyttäjätunnusta ja
            salasanaa pankkipalveluun, jotta hän voi tehdä sinulle ylimääräisen
            talletuksen. Voitko antaa ne?
          </h3>
          <ul>
            <li>
              <input
                {...register("kysymys4", { required: true })}
                name="kysymys4"
                type="radio"
                value="A"
                id="kysymys4A"
              />
              <label htmlFor="kysymys4A" className="answer">
                Ei
              </label>
            </li>
            <li>
              <input
                {...register("kysymys4", { required: true })}
                name="kysymys4"
                type="radio"
                value="B"
                id="kysymys4B"
              />
              <label htmlFor="kysymys4B" className="answer">
                Kyllä
              </label>
            </li>
          </ul>
          <br />

          <h3>
            Pari eri salasanaa riittää kaikille eri käyttäjätileille (esim.
            sähköpostiin, sosiaalisen median kanaville, foorumeille, työnhaun
            sivustoille jne)
          </h3>
          <ul>
            <li>
              <input
                {...register("kysymys5", { required: true })}
                name="kysymys5"
                type="radio"
                value="A"
                id="kysymys5A"
              />
              <label htmlFor="kysymys5A" className="answer">
                Ei
              </label>
            </li>
            <li>
              <input
                {...register("kysymys5", { required: true })}
                name="kysymys5"
                type="radio"
                value="B"
                id="kysymys5B"
              />
              <label htmlFor="kysymys5B" className="answer">
                Kyllä
              </label>
            </li>
          </ul>
          <button className="actionButton" type="submit">Lähetä vastaukset</button>
        </form>
      </div>
    </div>
  );
};

export default Tietoturva;
