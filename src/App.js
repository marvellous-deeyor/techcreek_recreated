import "./index.scss";
import './App.scss';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './component/Header';
import HomePage from './pages/HomePage';
import ConnectPage from './pages/Connect';
import CreatePage from './pages/Create';
import LearnPage from './pages/Learn';
import MembersPage from './pages/Members';
import NotFoundPage from './component/NotFound/NotFound';
function App () {
	return ( 
		<div className='container'>
			<div className='left_container'></div>
			<Router>
			<Header />
        
        <Routes>
		<Route path="/" element={<HomePage />} />
		<Route path="/connect" element={<ConnectPage />} />
          <Route path="/create" element={<CreatePage />} />
		  <Route path="/learn" element={ <LearnPage /> }/>
          <Route path="/members" element={ <MembersPage />}/>
          <Route path="*" element={ <NotFoundPage />}/>
        </Routes>
     </Router>

			
		</div>
	 );
}

export default App;
