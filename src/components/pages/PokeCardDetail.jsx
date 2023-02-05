import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { Link } from 'react-router-dom';

const PokeCardDetail = ({ name, status, data, error, message }) => {
  return (
    <div>
      {status === 'success' ? (
        <Card sx={{ maxWidth: 500, borderRadius: '20px' }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                {data.id}
              </Avatar>
            }
          />
          <CardMedia
            sx={{ height: 200 }}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
          />
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'space-between',
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {name.toUpperCase()}
            </Typography>
            <Typography>
              <Link to="/">Home</Link>
            </Typography>
          </CardContent>
        </Card>
      ) : null}

      {error === 'rejected' ? <div>{message}</div> : null}
    </div>
  );
};

export default PokeCardDetail;
