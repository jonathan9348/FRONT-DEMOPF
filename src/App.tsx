// import "./App.css";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import {HashRouter, Routes, Route} from "react-router-dom";
import { Product } from "./components/Product";

const categories = [
  {
      name: 'home',
      url: '/home'
  },
  {
      name: 'top',
      url: '/top'
  },
  {
      name: 'bottom',
      url: '/bottom'
  },
  {
    name: 'tools',
    url: '/tools'
},
];
    

function App() {


  return (   
    <HashRouter>
      <div className="App">
        <div>
          <NavBar categories={categories} />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="*" element={<p>404 Not Found</p>} />
          </Routes>
        </div>
        {/* TODO */}
        {/* FOOTER */}
      </div> 
    </HashRouter>
  );
}

export default App;
