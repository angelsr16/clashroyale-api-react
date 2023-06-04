import "./App.css";
import { useEffect, useState } from "react";
import CardsList from "./components/CardsList";

function App() {
  const [cards, setCards] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [cardTypeFilter, setCardTypeFilter] = useState("0");

  useEffect(() => {
    fetch("https://proxy.royaleapi.dev/v1/cards", {
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjVlYTExOTY2LWM1YWYtNDBiYS05M2ZhLTlmNTZhOWVhZTA4MiIsImlhdCI6MTY4NTkwNjUwNCwic3ViIjoiZGV2ZWxvcGVyL2M5Y2YwZjNmLTFlNWMtOGFiZi0yZTdkLWE1ZTYzZjY3ZTEyNCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0NS43OS4yMTguNzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.medHK68jRgJyZy3SaJymCzxxQFRLYxQfEhbv1IY3IXonCaf2B4Ier1CbnWhqxr4qN7aCj35n6tv6DnQ9xN_faA",
      },
    }).then((response) => {
      response.json().then((data) => {
        setCards(data.items);
      });
    });
  }, []);

  return (
    <div className="App container" style={{ padding: "20px" }}>
      <div className="row">
        <div className="col">
          <h6>Nombre</h6>
          <input
            className="form-control"
            placeholder="Busca por nombre"
            value={nameFilter}
            onChange={(e) => {
              setNameFilter(e.target.value);
            }}
          />
        </div>

        <div className="col">
          <h6>Tipo de carta</h6>
          <select
            className="form-select"
            value={cardTypeFilter}
            onChange={(e) => {
              setCardTypeFilter(e.target.value);
            }}
          >
            <option value="0">Todos</option>
            <option value="14">Común</option>
            <option value="12">Especial</option>
            <option value="9">Épica</option>
            <option value="6">Legendaria</option>
            <option value="4">Campeón</option>
          </select>
        </div>
      </div>

      <br />
      <CardsList
        cards={cards}
        nameFilter={nameFilter}
        cardTypeFilter={cardTypeFilter}
      />
    </div>
  );
}

export default App;
