import React from "react";
import CardContent from "./CardContent";

export default function CardsList({ cards, nameFilter, cardTypeFilter }) {
  return (
    <div className="row row-cols-2 row-cols-lg-5 g-4 g-lg-3">
      {cards
        .filter((card) =>
          card.name.toLowerCase().includes(nameFilter.toLowerCase())
        )
        .filter((card) => {
          if (cardTypeFilter === "0") return true;
          return card.maxLevel.toString() === cardTypeFilter;
        })
        .map((card) => (
          <div key={card.id}>
            <CardContent card={card} />
          </div>
        ))}
    </div>
  );
}
