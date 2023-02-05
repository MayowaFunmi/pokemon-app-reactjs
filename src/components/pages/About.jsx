import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

const About = ({ data, status }) => {
  const [able, setAble] = useState('');
  const { abilities } = data;

  useEffect(() => {
    setAble(abilities?.map((ability) => ability.ability.name).join(', '));
  }, [abilities]);

  return (
    <div>
      {status ? (
        <div>
          <Typography gutterBottom variant="h5" component="div">
            About
          </Typography>
          <p>Species: {able}</p>
          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>
          <p>Base Experience: {data.base_experience}</p>
          <p>Order: {data.order}</p>
        </div>
      ) : null}
    </div>
  );
};

export default About;
