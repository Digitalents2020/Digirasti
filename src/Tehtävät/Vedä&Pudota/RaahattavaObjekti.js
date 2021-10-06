import React from "react";
import { motion } from "framer-motion";

export default function RaahattavaObjekti(props){
  console.log(props.int)
      if(props.int===0 || (props.className === "dragObject8" || props.className === "dragObject9" || props.className === "dragObject10")){
       return(
        <motion.div className={props.className} id={props.id} drag
          dragConstraints={props.constraintsRef}
          dragElastic={false} dragMomentum={false} style={{cursor: "grab"}}
          onDragEnd={
            (event) => props.pysahdys(props.className,props.keyNum)
          }>
        </motion.div>)
      }else{
        return(
        <motion.div className={props.className} id={props.id} drag={false}
        dragConstraints={props.constraintsRef}
        dragElastic={false} dragMomentum={false} style={{cursor: "auto"}}
        onDragEnd={
          (event) => props.pysahdys(props.className,props.keyNum)
        }>
      </motion.div>)
      }
}