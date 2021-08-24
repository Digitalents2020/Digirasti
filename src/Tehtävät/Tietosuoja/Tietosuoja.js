import React from 'react'
import * as Survey from 'survey-react'
import "survey-react/survey.css";
import './Tietosuoja.css'

Survey
  .StylesManager
  .applyTheme("winterstone")

var json = {
  title: "Tietosuojakysely",
  showProgressBar: "bottom",
  firstPageIsStarted: true,
  startSurveryText: "Aloita kysely",
  pages : [
    {
      questions: [
        {
          type: "html",
          html: "Olet aloittamassa tietoturvakyselyn"
        }
      ]
    }, {
      questions: [
        {
          type: "radiogroup",
          name: "kysymys_1",
          title: "Mitä tietoturvalla tarkoitetaan?",
          choices: [
            "Tietoturva tarkoittaa turvalliseksi luokiteltua tietoa.", "Tietoturva tarkoittaa yrityksen tai palveluntarjoajan tietojen suojaamista ulkopuolisilta."
          ],
          "correctAnswer": "Tietoturva tarkoittaa yrityksen tai palveluntarjoajan tietojen suojaamista ulkopuolisilta."
        },
        {
          type: "radiogroup",
          name: "kysymys_2",
          title: "Mitä tietosuojalla tarkoitetaan?",
          choices: [
            "Tietosuoja tarkoittaa paikkaa, jossa tieto pysyy suojassa muilta.", "Tietosuoja tarkoittaa toimenpiteitä, joilla pyritään varmistamaan henkilötietojen asianmukainen käsittely ja yksityisyyden säilyminen."
          ],
          "correctAnswer": "Tietosuoja tarkoittaa toimenpiteitä, joilla pyritään varmistamaan henkilötietojen asianmukainen käsittely ja yksityisyyden säilyminen."
        },
        {
          type: "radiogroup",
          name: "kysymys_3",
          title: "Minun täytyy itse huolehtia tietosuojastani.",
          choices: [
            "Kyllä.", "Ei."
          ],
          "correctAnswer": "Kyllä."
        },
        {
          type: "radiogroup",
          name: "kysymys_4",
          title: "Pari eri salasanaa riittää kaikille eri käyttäjätileille (esim. sähköpostiin, sosiaalisen median kanaville, foorumeille, työnhaun sivustoille jne).",
          choices: [
            "Kyllä", "Ei"
          ],
          "correctAnswer": "Ei"
        },
        {
          type: "radiogroup",
          name: "kysymys_5",
          title: "Pankkivirkailija pyytää sinulta sähköpostilla käyttäjätunnusta ja salasanaa pankkipalveluun, jotta hän voi tehdä sinulle ylimääräisen talletuksen. Voitko antaa ne?",
          choices: [
            "Kyllä", "Ei"
          ],
          "correctAnswer": "Ei"
        },
      ]
    }
  ],
  completedHtml: "<h4>Olet vastannut oikein <b>{correctedAnswers}</b> kysymykseen, kysymyksien määrä: {questionCount}"
};

const survey = new Survey.Model(json);


const Tietosuoja = () => {

  return (
    <>
      <Survey.Survey 
        model={survey}
      />
    </>
  )
}

export default Tietosuoja