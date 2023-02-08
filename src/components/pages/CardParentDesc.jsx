import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import About from './About';
import BaseStats from './BaseStats';
import Evolution from './Evolution';
import Moves from './Moves';

const CardParentDesc = ({ data, check }) => {
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
    <Card sx={{ maxWidth: 500, borderRadius: '20px', marginTop: '10px' }}>
      <CardActions>
        <Button size="small" onClick={handleAbout}>
          About
        </Button>
        <Button size="small" onClick={handleBaseStats}>
          Base Stats
        </Button>
        <Button size="small" onClick={handleEvol}>
          Evolution
        </Button>
        <Button size="small" onClick={handleMoves}>
          Moves
        </Button>
      </CardActions>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default CardParentDesc;
