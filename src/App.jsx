import './App.css';
import Layout from './Pages/Layout';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddNewProject from './Pages/AddNewProject';
import Projects from './Pages/Projects';
import ErrorPage from './Pages/ErrorPage';
import { useState } from 'react';
import Dashboard from './Pages/Dashboard';


function App() {

  const [ category, setCategory ] = useState('fe');

  return (
    <Router>
      <Routes>
        <Route index element={<Layout setCategory={setCategory}/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
        <Route path='/addnew' element={<AddNewProject/>}/>
        <Route path='/projects' element={<Projects category={category} setCategory={setCategory}/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
