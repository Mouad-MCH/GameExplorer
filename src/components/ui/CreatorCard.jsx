import { Link } from "react-router-dom";

const CreatorCard = ({ creator }) => {
    return (
        <Link to={`/creators/${creator.id}`} className="card">
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
        </Link>
    );
};

export default CreatorCard;
