import React, { forwardRef, useImperativeHandle } from "react";

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = React.useState(true);
  const [content, setContent] = React.useState("");

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close()
    };
  });

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
    setContent("");
  };

  const saveChange = () => {
    setDisplay(false);
    
  };

  const handleInputChange = e => {
    setContent(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  if (display) {
    return (
     <div className={"wrap"}>
        <div onClick={close} className="backdrop" />
        <div className="box">
          <h1>Modal Title</h1>
          <form className = "form" onSubmit={handleSubmit}>
            <label>
              content
              <input className = "input" type="text" value={content} onChange={handleInputChange} />
            </label>
          </form>
          <button className="btn" onClick={close}>
            close
          </button>
          <button className="btn" onClick={saveChange}>
            saveChange
          </button>
        </div>
      </div>
    );
  }
  return null;
});

export default Modal;
