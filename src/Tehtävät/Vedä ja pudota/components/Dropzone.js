// import React from 'react'
// import { Droppable, Draggable } from 'react-beautiful-dnd'

// function Dropzone({ isDropDisabled, vedettavat, id}) {(
//   <div>
//     <div data-content={id.toUpperCase()} />
//       <Droppable droppableId={id} isDropDisabled={isDropDisabled}>
//         {provided => {
//           return (
//             <div {...provided.droppableProps} ref={provided.innerRef}>
//               {vedettavat.map(({ name }, index => (
//                 <Hedelmat key={name} name={name} index={index} />
//               )))}
//               {provided.placeholder}
//             </div>
//           )
//         }}
//       </Droppable>
//   </div>
// )}

// const Hedelmat = ({ name, index }) => (
//   <Draggable key={name} draggableId={name} index={index}>
//     {provided => {
//       return (
//         <div
//           ref={provided.innerRef}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//         >
//           <figure style={{ backgroundColor: 'transparent' }}>
//             <div>{name}</div>
//           </figure>
//         </div>
//       )
//     }}
//   </Draggable>
// )

// export default Dropzone;