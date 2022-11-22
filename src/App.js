import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/sb-admin-2.css";
import "./css/fontawesome-free/css/all.min.css";
import Login from './Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard';
import Portal from './Portal';
import Listqns from './Listqns';
import Createquestion from './Createquestion';
import Createanswer from './Createanswer';
import Listanswers from './Listanswers';
import Register from './Register';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path='/portal' element={<Portal/>}>
      <Route path='list-quires' element={<Listqns/>}/>
      <Route path='create-questions' element={<Createquestion/>}/>
      <Route path='create-answer/:rId' element={<Createanswer/>}/>
      <Route path='list-answer/:rId' element={<Listanswers/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
