import React from 'react';
import Typography from '@mui/material/Typography';

const Evolution = ({ data, status }) => {
  return (
    <div>
      {status ? (
        <div>
          <Typography gutterBottom variant="h5" component="div">
            Evolution
          </Typography>
          <p>This is a page for the evolution page</p>
        </div>
      ) : null}
    </div>
  );
};

export default Evolution;
