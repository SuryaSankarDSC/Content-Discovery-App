import { BrowserRouter,Routes,Route } from "react-router-dom"
import './App.css';
import Login from './Login';
import Navigate from "./Navigate";
import Signup from './Signup';
function App(){
  return (
    <div>
    <BrowserRouter>
    <Navigate></Navigate>
      <Routes>
      <Route path="/login" element=<Login/> ></Route>
      <Route path="/signup" element=<Signup/> ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;