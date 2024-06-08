import './city.css'

export const City = ({ name, population, area, district, photo }) => (
    <div className="city-container">
      <h2>{name}</h2>
      <img src={photo} alt={`Obrázek města ${name}`} className="city-image" />
      <p>Počet obyvatel: {population}</p>
      <p>Rozloha: {area} km²</p>
      <p>{district}</p>
    </div>
  );