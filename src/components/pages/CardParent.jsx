import React, { useState } from 'react';
import About from './About';
import BaseStats from './BaseStats';
import Evolution from './Evolution';
import Moves from './Moves';

const CardParent = ({ data, check }) => {
  const [showAbout, setShowAbout] = useState(true);
  const [showBase, setShowBase] = useState(false);
  const [showEvol, setShowEvol] = useState(false);
  const [showMove, setShowMove] = useState(false);

  const handleAbout = () => {
    if (showAbout) {
      setShowBase(false);
      setShowEvol(false);
      setShowMove(false);
    } else {
      setShowAbout(true);
      setShowBase(false);
      setShowEvol(false);
      setShowMove(false);
    }
  };

  const handleBaseStats = () => {
    if (showBase) {
      setShowAbout(false);
      setShowEvol(false);
      setShowMove(false);
    } else {
      setShowBase(true);
      setShowAbout(false);
      setShowEvol(false);
      setShowMove(false);
    }
  };

  const handleEvol = () => {
    if (showEvol) {
      setShowBase(false);
      setShowAbout(false);
      setShowMove(false);
    } else {
      setShowEvol(true);
      setShowBase(false);
      setShowAbout(false);
      setShowMove(false);
    }
  };

  const handleMoves = () => {
    if (showMove) {
      setShowBase(false);
      setShowAbout(false);
      setShowEvol(false);
    } else {
      setShowMove(true);
      setShowBase(false);
      setShowEvol(false);
      setShowAbout(false);
    }
  };

  return (
    <React.Fragment>
      <div className="cardParentContainer">
        <button onClick={handleAbout}>About</button>
        <button onClick={handleBaseStats}>Base Stats</button>
        <button onClick={handleEvol}>Evolution</button>
        <button onClick={handleMoves}>Moves</button>
      </div>

      <div>
        <div>
          <About data={data} status={showAbout} />
        </div>
        <div>
          <BaseStats data={data} status={showBase} />
        </div>
        <div>
          <Evolution data={data} status={showEvol} />
        </div>
        <div>
          <Moves data={data} status={showMove} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardParent;
