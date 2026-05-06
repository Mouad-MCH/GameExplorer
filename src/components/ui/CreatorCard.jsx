const CreatorCard = ({ creator }) => {
  return (
    <div className="card">
      <img src={creator.image} alt={creator.name} />

      <div className="card-content">
        <h3>{creator.name}</h3>

        <div className="tags">
          {creator.positions?.map((pos, index) => (
            <span key={index}>{pos.name}</span>
          ))}
        </div>
        <hr className="line" />
        <p>{creator.games_count} Games Shipped </p>
      </div>
    </div>
  );
};

export default CreatorCard;
