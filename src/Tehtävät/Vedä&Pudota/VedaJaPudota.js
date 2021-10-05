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

export default function DragAndDrop(){
    const [state, setState] = useState(0);
    const constraintsRef = useRef(null)

    function pysahdys(dragOb,keyNum){
        const dragObject = document.getElementById(dragOb);
        var left=dragObject.getBoundingClientRect().left - (window.innerWidth/4) - 100;
        var top=dragObject.getBoundingClientRect().top - 50;
        console.log(left,top,keyNum)
          if((left>=380 & left<=480) & (top>=400 & top <=480)){
              if(keyNum==="1"){
                eka = 1
                alert('Omena lisätty koriin')
              }else if(keyNum==="2"){
                toka = 1
                alert('Omena lisätty koriin')
              }else if(keyNum==="3"){
                kolmas = 1
                alert('Omena lisätty koriin')
              }else if(keyNum==="4"){
                neljas = 1
                alert('Omena lisätty koriin')
              }else if(keyNum==="5"){
                viides = 1
                alert('Päärynä ei kuulu koriin')
              }else if(keyNum==="6"){
                kuudes = 1
                alert('Päärynä ei kuulu koriin')
              }else if(keyNum==="7"){
                seiska = 1
                alert('Päärynä ei kuulu koriin')
              }
              console.log(eka,toka,kolmas,neljas)
              setState(state+1)
          }
        }

    function nextPract(){
          if(eka + toka + kolmas + neljas === 4 & 
            viides + kuudes + seiska === 0){
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
       }

return(
    <div>
      {console.log("yhteensä", eka+toka+kolmas+neljas)}
      <motion.div ref={constraintsRef} className="canvas">
        <div className="basket1" >
          <div id="basketImg" width="100" 
            height="100">
          </div>
        </div>
        <RaahattavaObjekti pysahdys={pysahdys} int={eka} constraintsRef={constraintsRef}
          className="dragObject" id="dragObject" keyNum="1" />
        <RaahattavaObjekti pysahdys={pysahdys} int={toka} constraintsRef={constraintsRef}
          className="dragObject1" id="dragObject1" keyNum="2" />
        <RaahattavaObjekti pysahdys={pysahdys} int={kolmas} constraintsRef={constraintsRef}
          className="dragObject2" id="dragObject2" keyNum="3" />
        <RaahattavaObjekti pysahdys={pysahdys} int={neljas} constraintsRef={constraintsRef}
          className="dragObject3" id="dragObject3" keyNum="4" />
        <RaahattavaObjekti pysahdys={pysahdys} int={viides} constraintsRef={constraintsRef}
          className="dragObject4" id="dragObject4" keyNum="5" />
        <RaahattavaObjekti pysahdys={pysahdys} int={kuudes} constraintsRef={constraintsRef}
          className="dragObject5" id="dragObject5" keyNum="6" />
        <RaahattavaObjekti pysahdys={pysahdys} int={seiska} constraintsRef={constraintsRef}
          className="dragObject6" id="dragObject6" keyNum="7" />
        </motion.div>
      {nextPract()}
    </div>
)
}