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
          html: "Olet aloittamassa kyselyn"
        }
      ]
    }, {
      questions: [
        {
          type: "radiogroup",
          name: "tietokone",
          title: "Testi",
          choices: [
            "Kyllä", "Ei"
          ],
          "correctAnswer": "Kyllä"
        }
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