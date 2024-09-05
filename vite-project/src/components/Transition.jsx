import { useState } from 'react';
import { Transition } from 'react-transition-group'; // Import Transition from react-transition-group
import "../style/style.css";

const TransitionComponent = () => {
  let [show, setShow] = useState(true);

  const showDiv = () => {
    setShow(!show); // Toggle the visibility
  };

  return (
    <>
      <Transition
        in={show}
        timeout={{ enter: 2000, exit: 500 }} // Corrected the timeout object syntax
        onEnter={(node) => {
          console.log('ENTER');
        }}
        onExit={(node) => {
          console.log('EXIT');
        }}
      >
        {(state) => (
          <div className={`square square-${state}`}>
            {`square square-${state}`}
          </div>
        )}
      </Transition>

      <hr />
      <button className="btn btn-primary" onClick={showDiv}>
        {show ? 'Hide' : 'Show'}
      </button>
    </>
  );
};

export default TransitionComponent;

