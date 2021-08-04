import React, { useEffect, useState } from "react";
import img from "../../img/logo.jpg";
import s from "./OneGames.module.css";

export default function OneGame() {
  const [game, setGame] = useState(null);

  const data = [
    { url: img, title: "some Title", description: "some description", id: 1 },
    { url: img, title: "some Title2", description: "some description2", id: 2 },
    { url: img, title: "some Title3", description: "some description3", id: 3 },
    { url: img, title: "some Title4", description: "some description4", id: 4 },
  ];

  useEffect(() => {
    setGame(data);
  }, []);

  return (
    <>
      {game &&
        game.map((d) => (
          <div key={d.id} className={s.forOneGame}>
            <div className={s.forImg}>
              <img alt="gameName" src={d.url} />
            </div>
            <div className={s.textPart}>
              <h2>{d.title}</h2>
              <p>{d.description}</p>
            </div>
          </div>
        ))}
    </>
  );
}
