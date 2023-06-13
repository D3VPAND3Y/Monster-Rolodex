// import { Component } from "react";
import "./card.styles.css";

const card = ({monster}) => {
    const { name,id,email } = monster;
  return (
    // <div key={id}>
        <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    // </div>
  );
};

// class card extends Component{
//     render (){
//         const { name,id,email } = this.props.monster;
//         return (
//             <div key={id} >
//             <div className="card-container">
//                 <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
//                 <h3>{name}</h3>
//                 <p>{email}</p>
//             </div>
//             </div>
//         )
//     }

// }

export default card;
