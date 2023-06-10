import React from "react";






// function Note(props){
//     return(
//        <div className = 'note' >
//         <b>{props.Title}</b>

//         <p>{props.Content}</p>
//         <div className=" dustBin" onClick = { ()=> {
//             props.Delete(props._id);
//         } }>🗑️</div>
//        </div>
//     );
// }


function Note(props) {
    return (
      <div className='note'>
        <b>{props.Title}</b>
        <p>{props.Content}</p>
        <div className="dustBin" onClick={() => props.Delete(props.myId)}>🗑️</div>
      </div>
    );
  }
export default Note;