import FirstComponent from "./component/FirstComponent";
import BackDrop from "./component/BackDrop";
import { useState } from "react";

function App() {
  const [modalOpen,setModalOpen] = useState(true);

  const modalCloseHandler=()=>{
      setModalOpen(false);
  }

  const modalOpenHandler=()=>{
    setModalOpen(true);
}


  return (
    <div>
      <h1>My first Application</h1>
      {modalOpen?<FirstComponent owner="Shanu" reason="To test react" closeModal={modalCloseHandler}/>:null}
      {modalOpen?<BackDrop />:null}
      <button onClick={modalOpenHandler}>Open</button>
    </div>
  );
}

export default App;
