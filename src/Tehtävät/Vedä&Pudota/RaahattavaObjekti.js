import React from "react";
import { motion } from "framer-motion";
import apple from './Pictures/apple.png'

export default function RaahattavaObjekti(props){
  console.log(props.int)
      if(props.int===0){
       return(
        <motion.img  src={apple} className={props.className} id={props.id} drag 
          dragConstraints={props.constraintsRef}
          dragElastic={false} dragMomentum={false}
          onDragEnd={
            (event) => props.pysahdys(props.className,props.keyNum)
          }>
        </motion.img>)
      }else{
          return <div></div>
      }
}