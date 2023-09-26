import FirstComponent from "./component/FirstComponent";
import BackDrop from "./component/BackDrop";
function App() {
  return (
    <div>
      <FirstComponent owner="Shanu" reason="To test react" />
      <BackDrop />
    </div>
  );
}

export default App;
