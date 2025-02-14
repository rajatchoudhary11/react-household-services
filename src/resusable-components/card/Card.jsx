import React,{useState} from "react";
import "./Card.css"
import serviceCard from "../../data/serviceCardData";
import nextIcon from '../../images/service-card-next-icon.png';
import exploreNextIcon from '../../images/explore-btn-next-icon.png';
import Searchbar from "../searchbar/Searchbar";


function Card() {
  const itemsPerPage = 8;
  const [visibleServices, setVisibleServices] = useState(serviceCard.slice(0, itemsPerPage));
  const [showAll, setShowAll] = useState(false);

  function showRemainingServices () {
    setVisibleServices(serviceCard);
    setShowAll(true);
  };
  return <>
  <div className="carditem">
    <div className="card-container">
      {visibleServices.map(service => (
      <div key={service.id} className="card-box">
      <div className="icon-box">
      <img src={require(`../../images/${service.icon}`)} alt={service.alt} className="service-icon"/>
      </div>
      <div className="service-heading"> 
        <h3>{service.category}</h3>
      </div>
      <div className="service-desc">
        <p>{service.desc}</p>
      </div>
      <div className="listing-btn">
          <button >listings</button>
        <div className="next-icon">
         <img src={nextIcon} alt="nextIcon"/>
        </div>
      </div>
      </div>
    ))}
      {!showAll && (
        <div onClick={showRemainingServices} className="explore-item">
          <p>explore more</p>
          <img src={exploreNextIcon} alt="next-icon"/>
          </div>
      )}
    </div>
    <div className="searchbar-box">
      <Searchbar/>
    </div>
  </div>
  </>
}

export default Card;
