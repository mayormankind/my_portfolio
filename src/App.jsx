import './App.css';
import Layout from './Pages/Layout';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddNewProject from './Pages/AddNewProject';
import AllProjects from './Pages/AllProjects';


function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Layout/>}/>
        <Route path='/addnew' element={<AddNewProject/>}/>
        <Route path='/projects' element={<AllProjects/>}/>
      </Routes>
    </Router>
  );
}

export default App;
