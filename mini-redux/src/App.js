
import './App.css';
import Header from './component/Header/HeaderComponent';
import { Routes,Route } from "react-router-dom";
import Home from './View/Home/HomeComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './View/Create/CreateComponent';
import Contact from './View/Contact/ContactComponent';
import Detail from './View/Detail/DetailComponent';
function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <Routes>
        <Route element={<Home/>} path="/home" />
        <Route element={<Create/>} path="/create" />
        <Route element={<Contact/>} path="/contact" />
        <Route element={<Detail/>} path="/detail" />
        <Route element={<Home/>} path="*" />

      </Routes>
    </div>
    </>
  );
}

export default App;
