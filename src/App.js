import Random from "./Random";
import SearchingByType from "./SearchingByType";
import SearchingByParticipants from "./SearchingByParticipants";

function App() {

  return (
    <div className="container">
      <Random />
      <hr/>
      <SearchingByType />
      <hr />
      <SearchingByParticipants />
    </div>
  );
}

export default App;
