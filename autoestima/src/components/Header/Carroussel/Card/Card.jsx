/* eslint-disable import/no-anonymous-default-export */

export default (props) => {
  return (
    <div class="row  row-cols-md-3 g-4"> 

      <img src={props.Foto} class="card-img-top" alt="..." />
      <div className="card-body">
  <h5 className="card-title">Promoção do Dia</h5>
 
 </div>

    </div>
  );
};
