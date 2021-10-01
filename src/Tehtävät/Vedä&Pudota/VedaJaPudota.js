import React from "react";
import { motion } from "framer-motion";
import './VedaJaPudota.css';
import { useState, useRef } from "react";
import RaahattavaObjekti from './RaahattavaObjekti';
import sb from './Pictures/sb.png'


var eka = 0
var toka = 0
var kolmas = 0
var neljas = 0

export default function DragAndDrop(){
    const [state, setState] = useState(0);
    const constraintsRef = useRef(null)

    function pysahdys(dragOb,keyNum){
        const dragObject = document.getElementById(dragOb);
        var left=dragObject.getBoundingClientRect().left - (window.innerWidth/4) - 100;
        var top=dragObject.getBoundingClientRect().top - 50;
        console.log(left,top,keyNum)
          if((left>=400 & left<=480) & (top>=400 & top <=480)){
              alert('jee ' + keyNum)
              if(keyNum==="1"){
                eka = 1
              }else if(keyNum==="2"){
                toka = 1
              }else if(keyNum==="3"){
                kolmas = 1
              }else if(keyNum==="4"){
                neljas = 1
              }
              console.log(eka,toka,kolmas,neljas)
              setState(state+1)
          }
        }
if(eka === 1 & toka === 1 & kolmas === 1 & neljas === 1){
  alert('Onneksi Olkoon Voitit!!!')
}
return(
    <div>
      <motion.div ref={constraintsRef} className="canvas">
      <div className="basket1" ><motion.img id="basketImg" src={sb} width="100" height="100" alt="Basket"/></div>
      <RaahattavaObjekti pysahdys={pysahdys} int={eka} constraintsRef={constraintsRef}
      className="dragObject" id="dragObject" keyNum="1" />
      <RaahattavaObjekti pysahdys={pysahdys} int={toka} constraintsRef={constraintsRef}
      className="dragObject1" id="dragObject1" keyNum="2" />
      <RaahattavaObjekti pysahdys={pysahdys} int={kolmas} constraintsRef={constraintsRef}
      className="dragObject2" id="dragObject2" keyNum="3" />
      <RaahattavaObjekti pysahdys={pysahdys} int={neljas} constraintsRef={constraintsRef}
      className="dragObject3" id="dragObject3" keyNum="4" />
        </motion.div>
    </div>
)
}