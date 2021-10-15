import React from "react";
import { motion } from "framer-motion";
import './VedaJaPudota.css';
import { useState, useRef } from "react";
import RaahattavaObjekti from './RaahattavaObjekti';
import {Link } from "react-router-dom";


var eka = 0
var toka = 0
var kolmas = 0
var neljas = 0
var viides = 0
var kuudes = 0
var seiska = 0
var kasi = 0
var ysi = 0
var kymppi = 0
var all = 0

export default function DragAndDrop(){
    const [state, setState] = useState(0);
    const constraintsRef = useRef(null)

    function pysahdys(dragOb,keyNum){
      const basket = document.getElementById('basket1');
      var topBasket = basket.getBoundingClientRect().top;
      var leftBasket = basket.getBoundingClientRect().left;
      const dragObject = document.getElementById(dragOb);
      var left=dragObject.getBoundingClientRect().left
      var top=dragObject.getBoundingClientRect().top;
      console.log(top,left,keyNum,'topB',topBasket,'leftB',leftBasket)
        if(((left >= leftBasket) & left <= (leftBasket + 180)) & ((top >= topBasket) & (top <= topBasket+100))){
              if(keyNum==="1"){
                eka = 1
                all++
                alert('Omena lisätty koriin')
              }else if(keyNum==="2"){
                toka = 1
                all++
                alert('Omena lisätty koriin')
              }else if(keyNum==="3"){
                kolmas = 1
                all++
                alert('Omena lisätty koriin')
              }else if(keyNum==="4"){
                neljas = 1
                all++
                alert('Omena lisätty koriin')
              }else if(keyNum==="5"){
                viides = 1
                all++
                alert('Päärynä lisätty koriin')
              }else if(keyNum==="6"){
                kuudes = 1
                all++
                alert('Päärynä lisätty koriin')
              }else if(keyNum==="7"){
                seiska = 1
                all++
                alert('Päärynä lisätty koriin')
              }else if(keyNum==="8"){
                kasi = 1
                alert('Porkkana ei kuulu koriin')
              }else if(keyNum==="9"){
                ysi = 1
                alert('Porkkana ei kuulu koriin')
              }else if(keyNum==="10"){
                kymppi = 1
                alert('Porkkana ei kuulu koriin')
              }
              console.log(eka,toka,kolmas,neljas,viides,kuudes,seiska)
              setState(state+1)
          }else{
            if(keyNum==="8" & kasi===1){
              kasi = 0
              alert('Porkkana poistettu korista')
            }else if(keyNum==="9" & ysi===1){
              ysi = 0
              alert('Porkkana poistettu korista')
            }else if(keyNum==="10" & kymppi===1){
              kymppi = 0
              alert('Porkkana poistettu korista')
          }setState(state+1) }
        }

    function nextPract(){
          if(all === 7 & kasi + ysi + kymppi === 0){
              alert('Onneksi Olkoon Voitit!!!')
            return (
              <Link to="/Email" className="NextPrac" role="button" onClick={ClearVariables()}>Seuraava tehtävä</Link>
            )
          }
        }

      function ClearVariables(){
        eka = 0 
        toka = 0
        kolmas = 0
        neljas = 0
        viides = 0
        kuudes = 0
        seiska = 0
        kasi = 0
        ysi = 0
        kymppi = 0
        all = 0
       }

       /*function victory(){
        {victory()}
         if(all===7){
          return(
        <motion.div initial={{scale:1}} className="victoryClass"
        animate={{ rotate: 360, scale: 5 }}
        transition={{ duration: 2 }} />)}
       }*/

return(
    <div className ="dragCont">
       <h1 className="headlineDrag">Vedä Ja Pudota</h1>
       <div className="ohjeDrag">
            <h2 className="ohjetxtDrag">Ohje:</h2>
            <p>Tehtävänäsi on raahata kaikki <strong>hedelmät</strong> koriin.
            </p>
          </div>
      {console.log("yhteensä", eka+toka+kolmas+neljas)}
      <motion.div ref={constraintsRef} className="canvas">
        <div className="basket1" id="basket1">
          <div id="basketImg" width="100" 
            height="100">
          </div>
        </div>
        <RaahattavaObjekti pysahdys={pysahdys} int={eka} constraintsRef={constraintsRef}
          className="dragObject1" id="dragObject1" keyNum="1" all={all}/>
        <RaahattavaObjekti pysahdys={pysahdys} int={toka} constraintsRef={constraintsRef}
          className="dragObject2" id="dragObject2" keyNum="2" all={all}/>
        <RaahattavaObjekti pysahdys={pysahdys} int={kolmas} constraintsRef={constraintsRef}
          className="dragObject3" id="dragObject3" keyNum="3" all={all}/>
        <RaahattavaObjekti pysahdys={pysahdys} int={neljas} constraintsRef={constraintsRef}
          className="dragObject4" id="dragObject4" keyNum="4" all={all}/>
        <RaahattavaObjekti pysahdys={pysahdys} int={viides} constraintsRef={constraintsRef}
          className="dragObject5" id="dragObject5" keyNum="5" all={all}/>
        <RaahattavaObjekti pysahdys={pysahdys} int={kuudes} constraintsRef={constraintsRef}
          className="dragObject6" id="dragObject6" keyNum="6" all={all}/>
        <RaahattavaObjekti pysahdys={pysahdys} int={seiska} constraintsRef={constraintsRef}
          className="dragObject7" id="dragObject7" keyNum="7" all={all}/>
        <RaahattavaObjekti pysahdys={pysahdys} int={kasi} constraintsRef={constraintsRef}
          className="dragObject8" id="dragObject8" keyNum="8" />
        <RaahattavaObjekti pysahdys={pysahdys} int={ysi} constraintsRef={constraintsRef}
          className="dragObject9" id="dragObject9" keyNum="9" />
        <RaahattavaObjekti pysahdys={pysahdys} int={kymppi} constraintsRef={constraintsRef}
          className="dragObject10" id="dragObject10" keyNum="10" />
        </motion.div>
      {nextPract()}
    </div>
)
}