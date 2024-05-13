import playerData from "./playerData.js";

function BaseballCard(props) {
  // return (
  //   <div className="card">
  //     <h2>{props.name}</h2>
  //     <img src={props.imgUrl} alt="" />
  //   </div>
  // );
  console.log(Object.entries(props.stats));
  const statsDisplay = Object.entries(props.stats).map(([stat, value]) => (
    <p>
      {stat}: {props.stats[stat]}
    </p>
  ));
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Team: {props.team}</p>
      <p>Position: {props.position}</p>
      {statsDisplay}
    </div>
  );
}

function App() {
  const Cards = playerData.map((player) => (
    <BaseballCard
      name={player.name}
      team={player.team}
      position={player.position}
      stats={player.stats}
      imgUrl={player.imgUrl}
      key={player.cardId}
    />
  ));
  return <>{Cards}</>;
}

export default App;
