import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';

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
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name.toUpperCase()}
            </Typography>
          </CardContent>
        </Card>
      ) : null}

      {error === 'rejected' ? <div>{message}</div> : null}
    </div>
  );
};

export default PokeCardDetail;
