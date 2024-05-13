import playerData from "./playerData.js";

function BaseballCard(props) {
  console.log(props);
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.imgUrl} alt="" />
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
