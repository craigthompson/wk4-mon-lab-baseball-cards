import playerData from "./playerData.js";
import { useState } from "react";

function BaseballCard(props) {
  const [showPicture, setShowPicture] = useState(true);

  const toggleShowPicture = () => setShowPicture(showPicture ? false : true);

  if (showPicture) {
    return (
      <div className="card" onClick={toggleShowPicture}>
        <h2>{props.name}</h2>
        <img src={props.imgUrl} alt="" />
      </div>
    );
  } else {
    const statsDisplay = Object.entries(props.stats).map(([stat, value]) => (
      <p key={stat}>
        {stat}: {props.stats[stat]}
      </p>
    ));
    return (
      <div className="card" onClick={toggleShowPicture}>
        <h2>{props.name}</h2>
        <p>Team: {props.team}</p>
        <p>Position: {props.position}</p>
        {statsDisplay}
      </div>
    );
  }
}

function App() {
  const cards = playerData.map((player) => (
    <BaseballCard
      name={player.name}
      team={player.team}
      position={player.position}
      stats={player.stats}
      imgUrl={player.imgUrl}
      key={player.cardId}
    />
  ));
  return <>{cards}</>;
}

export default App;
