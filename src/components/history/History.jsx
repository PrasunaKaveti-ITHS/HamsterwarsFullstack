import { useState, useEffect } from "react";
import "./History.css";

const History = () => {

const [winners, setWinners] = useState([]);
  const [losers, setLosers] = useState([]);
  useEffect(() => {
    getWinners();
    getLosers();
  }, []);

  async function getWinners() {
    const response = await fetch("/api/winners", { method: "GET" });
    const data = await response.json();
    console.log(data);
    setWinners(data);

  }

  async function getLosers() {
    const response = await fetch("/api/losers", { method: "GET" });
    const data1 = await response.json();
    console.log(data1);
    setLosers(data1);

  }

  return (
    <div className="history-wrapper">
      <div>
        <h3>
          Latest battle winners 
        </h3>

        <ol>
          {winners.map((winner) => {
            return (
              <li key={winner.id}>
                <img src={`/assets/${winner.imgName}`} alt={winner.imgName} className="history-image" />
            
                <h4>{winner.name}</h4>
              </li>
            );
          })}
        </ol>
      </div>
      <div>
        <h2>
         Latest battle losers 
        </h2>

        <ol>
          {losers.map((loser) => {
            return (
              <li key={loser.id}>
                <img src={`/assets/${loser.imgName}`} alt={loser.imgName} className="history-image" />
            
                <h4> {loser.name} </h4>
              </li>
            );
          })}
        </ol>
      </div>

      <div>
        <h2>
         Latest battles removed 
        </h2>

        There is no battle history yet.
      </div>
      
    </div>
  );
};

export default History;