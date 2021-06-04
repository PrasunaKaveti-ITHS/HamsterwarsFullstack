import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import Battle from './components/battle/Battle'
import Gallery from './components/gallery/Gallery'
import History from './components/history/History'
import Statistics from './components/statistics/Statistics'
import Home from './components/home/Home'
import Upload from './components/gallery/Upload';
import logo from './hamster-logo.png';


function App() {
  const [hamsters, setHamsters] = useState([])
  useEffect(() => {
		async function get() {
			const response = await fetch('/api/hamsters', { method: 'GET' })
			const data = await response.json()
			// Använd "mountedRef" här
			setHamsters(data)
			// OBS! Bättre att hämta datan i App-komponenten, eftersom den alltid är MOUNTED
		}
		get()
	}, [])
  return (
    <Router>
      <div className="App">
        <header className="App-header">

          <nav>
          <NavLink to="/"> <img src={logo} className="App-logo" alt="logo" /></NavLink>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/battle"> Battle </NavLink>
            <NavLink to="/gallery"> Gallery </NavLink>
            <NavLink to="/stats"> Statistics </NavLink>
            <NavLink to="/history"> History</NavLink>
            <NavLink to="/upload"> Upload</NavLink>

          </nav>

        </header>
        <main>
          <Switch>

            <Route path="/battle"> <Battle /></Route>
            <Route path="/gallery"> <Gallery hamsterList={hamsters} /></Route>
            <Route path="/stats"> <Statistics /></Route>
            <Route path="/history"> <History /></Route>
            <Route path="/upload"> <Upload/></Route>
            <Route path="/"> <Home /></Route>
          </Switch>
        </main>
        <footer className="foot">
		<p>Copyright © 2021 Hamsterwars AB. All Right Resered.
		</p>
</footer>
	

      </div>
    </Router>
  );
}

export default App;