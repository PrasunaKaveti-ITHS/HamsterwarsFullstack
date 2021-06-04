import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => (
  <div>
    <main className="home-main">
      <div className="home-container">
        <h1>WELCOME TO HAMSTERWARS !!!</h1>
        <h2>VOTE FOR THE CUTEST HAMSTER</h2>
        <div className="img-container">
        <img src={`https://media.giphy.com/media/rlzqxuELYbIAg/giphy.gif`} alt="Hamster1" className="hamster-icon" />
        </div>
        <h3>
          <Link to="/Battle"> GO TO BATTLE
          </Link> ...To choose the cutest hamster
          </h3>
        <h3>
        <Link to="/Gallery"> GO TO GALLERY
        </Link> 
         ...To view all the hamsters and you can also add or remove hamsters
         </h3>
      </div>
    </main>
  </div>
);

export default Home;