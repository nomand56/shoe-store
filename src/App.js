import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {About,Help,Products} from "./Components"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Productitem from './Components/Product/Productitem';
function App() {
  return (

<div className="App">
  <BrowserRouter>
  <Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Help" element={<Help/>}/>
      <Route path="/Products"element={<Products/>}/>
      <Route path="/Products/:id"element={<Productitem/>}/>
  
</Routes>
  </BrowserRouter>
 
    </div>
  );
}

export default App;
