import React from "react";
import { motion } from "framer-motion";

export default function RaahattavaObjekti(props){
  console.log(props.int)
      if(props.int===0){
       return(
        <motion.div className={props.className} id={props.id} drag 
          dragConstraints={props.constraintsRef}
          dragElastic={false} dragMomentum={false}
          onDragEnd={
            (event) => props.pysahdys(props.className,props.keyNum)
          }>
        </motion.div>)
      }else{
          return <div></div>
      }
}