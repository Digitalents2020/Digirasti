import React from "react";
import { motion } from "framer-motion";

export default function RaahattavaObjekti(props){
  console.log(props.int)
      if(props.int===0){
        return(
          <motion.div className={props.className} id={props.id} drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileHover={{ scale: 1.2 }}
            dragElastic={1} dragMomentum={false} style={{cursor: "grab"}}
            onDragEnd={
              (event) => props.pysahdys(props.className,props.keyNum)
            }>
          </motion.div>)
      }else if(props.className === "dragObject8" || props.className === "dragObject9" || props.className === "dragObject10"){
          return( <motion.div className={props.className} id={props.id} style={{opacity:0}} >
          </motion.div>)
      }else{
          var condPos = 400 + (10 * (props.keyNum*2))
          console.log("condPos =", condPos)
          return(
            <div className={props.className} id={props.id} style={{marginLeft:condPos, marginTop:480}}>
            </div>)}
}