import { useState, useEffect } from "react";
import "./Statistics.css";

const Statistics = () => {
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
    <div className="statWrapper">
      <div>
        <h1>
          Top five winners <span> 🏅</span>
        </h1>

        <ol>
          {winners.map((winner) => {
            return (
              <li key={winner.id}>
                <img src={`/assets/${winner.imgName}`} alt={winner.imgName} className="stat-image" />
                <br/>
                <span>{winner.name}</span> has won <span>{winner.wins} </span>{" "}
                matches
              </li>
            );
          })}
        </ol>
      </div>
      <div className="divider"> </div>
      <div>
        <h1>
          Top five losers <span>👎</span>
        </h1>

        <ol>
          {losers.map((loser) => {
            return (
              <li key={loser.id}>
                <img src={`/assets/${loser.imgName}`} alt={loser.imgName} className="stat-image" />
                <br/>
                <span> {loser.name} </span>has lost <span>{loser.defeats}</span>{" "}
                matches
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Statistics;