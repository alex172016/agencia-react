/* eslint-disable import/no-anonymous-default-export */
import "./Card03.css";
export default (props) => {
  return (
  
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">

 <p className="text"> “Onde meus talentos e minhas paixões encontram as necessidades do
ndo, lá está o meu caminho, o meu lugar.” (Aristóteles)</p><br/>
      <img src={props.Foto}  className="d-block w-100" alt="..."/>
    </div>
    </div>
  </div>


  );
}
