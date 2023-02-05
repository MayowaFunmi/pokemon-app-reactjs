import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Moves = ({ data, status }) => {
  const { moves } = data;
  const [moveName, setMoveName] = useState([]);
  const [moveUrl, setMoveUrl] = useState([]);
  const [moveData, setMoveData] = useState([]);
  const [acc, setAcc] = useState([]);
  const [power, setPower] = useState([]);
  const [pp, setPp] = useState([]);
  const [effect, setEffect] = useState([]);

  useEffect(() => {
    setMoveName(moves?.map((move) => move.move.name));
    setMoveUrl(moves?.map((move) => move.move.url));
  }, [moves]);

  useEffect(() => {
    const fetchData = async () => {
      const promises = moveUrl?.map((url) =>
        fetch(url).then((res) => res.json())
      );
      const results = await Promise.all(promises);
      setMoveData(results);
    };
    fetchData();
  }, [moveUrl]);
  //console.log("data = ", moveData);

  const getData = (moveData) => {
    const temp = [];
    for (let i = 0; i < moveData.length; i++) {
      temp.push(moveData[i].accuracy);
    }
    setAcc(temp);
    setPower(moveData.map((move) => move.power));
    setPp(moveData.map((move) => move.pp));
    //setEffect(moveData.map(move => move.effect_entries[0].effect));
    setEffect(
      moveData.map((move) => move.effect_entries?.map((e) => e.effect))
    );
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  useEffect(() => {
    getData(moveData);
  }, [moveData]);

  //console.log('effect = ', effect)

  return (
    <div>
      {status ? (
        <div>
          <Typography gutterBottom variant="h5" component="div">
            Moves
          </Typography>
          <div>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Moves</StyledTableCell>
                  <StyledTableCell align="right">Accuracy</StyledTableCell>
                  <StyledTableCell align="right">Power</StyledTableCell>
                  <StyledTableCell align="right">Pp</StyledTableCell>
                  <StyledTableCell align="right" colSpan={2}>
                    Effect
                  </StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {moveName.map((name, index) => (
                  <StyledTableRow key={name}>
                    <StyledTableCell>{name}</StyledTableCell>
                    <StyledTableCell align="right">
                      {acc[index]}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {power[index]}
                    </StyledTableCell>
                    <StyledTableCell align="right">{pp[index]}</StyledTableCell>
                    <StyledTableCell align="right">
                      {effect ? effect[index] : 0}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Moves;
