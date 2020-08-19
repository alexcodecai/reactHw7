import React from "react";

import "./App.css";
import Modal from "./Modal.js";

function App(props) {
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal()
  };
  return (
    <div className = 'App'>
      <button onClick={openModal}>open the modal</button>
      <Modal ref = {modalRef}/>
      
      
    </div>
  );
}

export default App;
