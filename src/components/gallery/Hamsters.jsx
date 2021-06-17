import "./Gallery.css";
import { useState} from "react";

const Hamsters = ({ hamster }) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [hamsterDeleted, setHamsterDeleted] = useState("");

  async function deleteHamster(id) {
    await fetch(`/api/hamsters/${id}`, { method: "DELETE" });
    setHamsterDeleted(`${hamster.name} is removed successfully`);
    
  }

    function changeSelect() {
      if (selectedItem){
        setSelectedItem("");
    
      } else setSelectedItem(hamster.id);
    }

    const showHamsters = (
      <div>
        <p className={hamster ? "" : "hide"}>{hamsterDeleted} </p>
        <ul>
          <li className="delete-symbol" onClick={() => deleteHamster(hamster.id)} >❌</li>
          <li>My Age: {hamster.age}</li>
          <li>My Favourite Food: {hamster.favFood}</li>
          <li>I Love : {hamster.loves}</li>
          <li>
            wins:{hamster.wins} games:{hamster.games} defeats:{hamster.defeats}
          </li>
         
        </ul>
      </div>
    );

    const showImage = (
      <div>
        
        <img
          src={`/assets/${hamster.imgName}`}
          alt={hamster.name}
          className="hamster-image" />
      </div>
    );
    return (
      <div onMouseEnter={changeSelect} onMouseLeave={changeSelect}>
        {selectedItem || hamsterDeleted ? <div className="name-img-header">{hamster.name} </div> : showImage}
        <div>{selectedItem ? showHamsters : <span></span>}</div>
      </div>
      
    );
  };
  export default Hamsters;