import { useEffect, useState } from "react";
// import "./App.css";
import { Carousel } from "./components/Carousel";
import List from "./components/List";
import { NavBar } from "./components/NavBar";

interface Sub {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  category: string;
}

//COLOCO MIS ESTADOS
interface AppState {
  subs: Array<Sub>;
}

const INITIAL_STATE = [
  {
    id: 1,
    nombre: "Franela",
    precio: 5.38,
    descripcion: "Tela algodon",
    imagen: "https://fakeimg.pl/200x150/?text=Product",
    category: "home",
  },
  {
    id: 2,
    nombre: "Taza",
    precio: 0.96,
    descripcion: "porcelana",
    imagen: "https://fakeimg.pl/200x150/?text=Product",
    category: "home",
  },
  {
    id: 3,
    nombre: "Agenda",
    precio: 5.34,
    descripcion: "Agenda de hojas cocidas",
    imagen: "https://fakeimg.pl/200x150/?text=Product",
    category: "top",
  },
  {
    id: 4,
    nombre: "Termo",
    precio: 4.85,
    descripcion: "Acero inoxidable",
    imagen: "https://fakeimg.pl/200x150/?text=Product",
    category: "top",
  },
  {
    id: 5,
    nombre: "Taza de mate",
    precio: 4.53,
    descripcion: "Taza de mate enacero inoxidable",
    imagen: "https://fakeimg.pl/200x150/?text=Product",
    category: "bottom",
  },
  {
    id: 6,
    nombre: "Taza de mate",
    precio: 4.53,
    descripcion: "Taza de mate enacero inoxidable",
    imagen: "https://fakeimg.pl/200x150/?text=Product",
    category: "bottom",
  },
  {
    id: 6,
    nombre: "Taza de mate",
    precio: 4.53,
    descripcion: "Taza de mate enacero inoxidable",
    imagen: "https://fakeimg.pl/200x150/?text=Product",
    category: "bottom",
  },
  {
    id: 6,
    nombre: "Taza de mate",
    precio: 4.53,
    descripcion: "Taza de mate enacero inoxidable",
    imagen: "https://fakeimg.pl/200x150/?text=Product",
    category: "bottom",
  },
  {
    id: 6,
    nombre: "Taza de mate",
    precio: 4.53,
    descripcion: "Taza de mate enacero inoxidable",
    imagen: "https://fakeimg.pl/200x150/?text=Product",
    category: "bottom",
  },
  {
    id: 6,
    nombre: "Taza de mate",
    precio: 4.53,
    descripcion: "Taza de mate enacero inoxidable",
    imagen: "https://fakeimg.pl/200x150/?text=Product",
    category: "bottom",
  },
  {
    id: 6,
    nombre: "Taza de mate",
    precio: 4.53,
    descripcion: "Taza de mate enacero inoxidable",
    imagen: "https://fakeimg.pl/200x150/?text=Product",
    category: "bottom",
  },
  {
    id: 6,
    nombre: "Taza de mate",
    precio: 4.53,
    descripcion: "Taza de mate enacero inoxidable",
    imagen: "https://fakeimg.pl/200x150/?text=Product",
    category: "bottom",
  },
];

const Categories = ['home','top','bottom'];


function App() {
  const [subs, SetSubs] = useState<AppState["subs"]>([]);

  useEffect(() => {
    SetSubs(INITIAL_STATE);
  }, []);

  return (

    <div className="App">
      <div>
        <NavBar/>
        <Carousel />
      <div>
        <div className="pt-4">
          <h2>Home Category</h2> (see all)
          <List subs={subs} cat={"home"} />
        </div>

        <div className="pt-4">
          <h2>Bottom Category</h2> (see all)
          <List subs={subs} cat={"bottom"} />
        </div>

        <div className="pt-4">
          <h2>Top Category</h2> (see all)
          <List subs={subs} cat={"top"} />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
