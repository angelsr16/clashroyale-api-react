export default function CardContent({ card }) {
  return (
    <div className="card">
      <img
        className="center"
        src={card.iconUrls.medium}
        alt={card.name}
        width={"30%"}
      />
      <div className="card-body">
        <h5 className="card-title">{card.name}</h5>
        <p>Nivel máximo: {card.maxLevel}</p>
      </div>
    </div>
  );
}
