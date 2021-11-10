import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./tietoturva.css";
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
        <div className="success">
          <h2 className="little-header">Tulokset</h2>
          <p>{points}/5 vastausta oikein.</p>

          <h1>Oikeat vastaukset</h1>
          <p>Kysymys 1: A koska x</p>
          <p>Kysymys 2: B koska x</p>
          <p>Kysymys 3: B koska x</p>
          <p>Kysymys 4: B koska x</p>
          <p>Kysymys 5: B koska x</p>
        </div>
        <Link to="/Eform" className="NextPrac" role="button">
          Seuraava tehtävä
        </Link>
      </div>
    );
  }

  return (
    <div className="form-box">
      <h2 className="exercise-header">Tietoturva kysely</h2>
      <div className="instructions">
        <h2 className="instruction-header">Ohje:</h2>
        <p>
          Tässä kyselyssä Vastaat viiteen tietoturvaan liittyvään kysymykseen.
        </p>
      </div>
      <br></br>
      <br></br>
      <div className="field">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Mitä tietoturvalla tarkoitetaan?</label>
          <p className="answer">
            Tietoturva tarkoittaa turvalliseksi luokiteltua tietoa.
          </p>
          <input
            {...register("kysymys1", { required: true })}
            name="kysymys1"
            type="radio"
            value="A"
          />
          <p className="answer">
            Tietoturva tarkoittaa yrityksen tai palveluntarjoajan tietojen
            suojaamista ulkopuolisilta.
          </p>
          <input
            {...register("kysymys1", { required: true })}
            name="kysymys1"
            type="radio"
            value="B"
          />
          <label>Mitä tietosuojalla tarkoitetaan?</label>
          <p className="answer">
            Tietosuoja tarkoittaa paikkaa, jossa tieto pysyy suojassa muilta.
          </p>
          <input
            {...register("kysymys2", { required: true })}
            name="kysymys2"
            type="radio"
            value="A"
          />
          <p className="answer">
            Tietosuoja tarkoittaa toimenpiteitä, joilla pyritään varmistamaan
            henkilötietojen asianmukainen käsittely ja yksityisyyden säilyminen.
          </p>
          <input
            {...register("kysymys2", { required: true })}
            name="kysymys2"
            type="radio"
            value="B"
          />
          <label>Minun täytyy itse huolehtia tietosuojastani</label>
          <p className="answer">Ei</p>
          <input
            {...register("kysymys3", { required: true })}
            name="kysymys3"
            type="radio"
            value="A"
          />
          <p className="answer">Kyllä</p>
          <input
            {...register("kysymys3", { required: true })}
            name="kysymys3"
            type="radio"
            value="B"
          />
          <label>
            Pankkivirkailija pyytää sinulta sähköpostilla käyttäjätunnusta ja
            salasanaa pankkipalveluun, jotta hän voi tehdä sinulle ylimääräisen
            talletuksen. Voitko antaa ne?
          </label>
          <p className="answer">Ei</p>
          <input
            {...register("kysymys4", { required: true })}
            name="kysymys4"
            type="radio"
            value="A"
          />
          <p className="answer">Kyllä</p>
          <input
            {...register("kysymys4", { required: true })}
            name="kysymys4"
            type="radio"
            value="B"
          />
          <label>
            Pari eri salasanaa riittää kaikille eri käyttäjätileille (esim.
            sähköpostiin, sosiaalisen median kanaville, foorumeille, työnhaun
            sivustoille jne)
          </label>
          <p className="answer">Ei</p>
          <input
            {...register("kysymys5", { required: true })}
            name="kysymys5"
            type="radio"
            value="A"
          />
          <p className="answer">Kyllä</p>
          <input
            {...register("kysymys5", { required: true })}
            name="kysymys5"
            type="radio"
            value="B"
          />
          <button type="submit">Lähetä vastaukset</button>
        </form>
      </div>
    </div>
  );
};

export default Tietoturva;
