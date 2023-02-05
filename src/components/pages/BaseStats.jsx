import React from 'react';
import Typography from '@mui/material/Typography';
import ProgressBar from './ProgressBar';

const BaseStats = ({ data, status }) => {
  const { stats } = data;
  return (
    <div>
      {status ? (
        <div>
          <Typography gutterBottom variant="h5" component="div">
            Base Stats
          </Typography>
          {stats?.map((stat, index) => {
            return (
              <div key={index}>
                <p>
                  {stat.stat.name}: {stat.base_stat}{' '}
                  {stat.stat.name === 'hp' ? (
                    <ProgressBar
                      bgcolor="blue"
                      completed={Math.ceil((stat.base_stat * 100) / 255)}
                    />
                  ) : stat.stat.name === 'attack' ? (
                    <ProgressBar
                      bgcolor="orange"
                      completed={Math.ceil((stat.base_stat * 100) / 181)}
                    />
                  ) : stat.stat.name === 'defense' ? (
                    <ProgressBar
                      bgcolor="green"
                      completed={Math.ceil((stat.base_stat * 100) / 230)}
                    />
                  ) : stat.stat.name === 'special-attack' ? (
                    <ProgressBar
                      bgcolor="red"
                      completed={Math.ceil((stat.base_stat * 100) / 194)}
                    />
                  ) : stat.stat.name === 'special-defense' ? (
                    <ProgressBar
                      bgcolor="grey"
                      completed={Math.ceil((stat.base_stat * 100) / 230)}
                    />
                  ) : stat.stat.name === 'speed' ? (
                    <ProgressBar
                      bgcolor="purple"
                      completed={Math.ceil((stat.base_stat * 100) / 230)}
                    />
                  ) : (
                    'not available'
                  )}
                </p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default BaseStats;
