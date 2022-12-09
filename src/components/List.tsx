import './../css/list.css';

interface Props {
    subs: Array<{
        id:number,
        nombre:string,
        precio: number,
        descripcion: string,
        imagen: string,
        category: string
    }>,
    cat: string
}

//PASO LAS PROPS
const List = ({subs, cat}:Props) => {
  return(
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {
        subs.map(sub => {
          if (sub.category === cat) {
            return(
              <div className="col">
                <div className="card my-card" key={sub.id}>
                  <img src={sub.imagen} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{sub.nombre}</h5>
                    <p className="card-text">{sub.descripcion}</p>
                    <p className="card-text">${sub.precio}</p>
                    <a href="#" className="btn btn-primary">Add+</a>
                  </div>
                </div>
              </div>
            )
          }        
        })
      }
    </div>
  )
}
export default List;