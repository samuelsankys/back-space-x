import { useState } from 'react';
import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

function createData(flightNumber, logo, mission, releaseDate, rocket, result, video) {
  return { flightNumber, logo, mission, releaseDate, rocket, result, video };
}

const rows = [
  createData(84564564, 'logo', 'Missao teste', '25/02/2023', 'Foguete de teste','Sucesso', 'video'),
  createData(98764564, 'logo', 'Missao teste', '25/02/2023', 'Foguete de teste','Sucesso', 'video'),
  createData(98756325, 'logo', 'Missao teste', '25/02/2023', 'Foguete de teste','Sucesso', 'video'),
  createData(98652366, 'logo', 'Missao teste', '25/02/2023', 'Foguete de teste','Sucesso', 'video'),
  createData(13286564, 'logo', 'Missao teste', '25/02/2023', 'Foguete de teste','Sucesso', 'video'),
  createData(86739658, 'logo', 'Missao teste', '25/02/2023', 'Foguete de teste','Sucesso', 'video'),
  createData(13256498, 'logo', 'Missao teste', '25/02/2023', 'Foguete de teste','Sucesso', 'video'),
  createData(98753263, 'logo', 'Missao teste', '25/02/2023', 'Foguete de teste','Sucesso', 'video'),
  createData(98753275, 'logo', 'Missao teste', '25/02/2023', 'Foguete de teste','Sucesso', 'video'),
  createData(98753291, 'logo', 'Missao teste', '25/02/2023', 'Foguete de teste','Sucesso', 'video')
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


const headCells = [
  {
    id: 'flightNumber',
    align: 'left',
    disablePadding: false,
    label: 'Nº Vôo'
  },
  {
    id: 'logo',
    align: 'left',
    disablePadding: true,
    label: 'Logo'
  },
  {
    id: 'mission',
    align: 'left',
    disablePadding: false,
    label: 'Missão'
  },
  {
    id: 'releaseDate',
    align: 'left',
    disablePadding: false,
    label: 'Data de Lançamento'
  },
  {
    id: 'rocket',
    align: 'left',
    disablePadding: false,
    label: 'Foguete'
  },
  {
    id: 'result',
    align: 'left',
    disablePadding: false,
    label: 'Resultado'
  },
  {
    id: 'video',
    align: 'rigth',
    disablePadding: false,
    label: 'Vídeo'
  }
];


function OrderTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


const OrderStatus = ({ title }) => {

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>{title}</Typography>
    </Stack>
  );
};


export default function LaunchTables() {
  const [order] = useState('asc');
  const [orderBy] = useState('trackingNo');
  const [selected] = useState([]);

  const isSelected = (flightNumber) => selected.indexOf(flightNumber) !== -1;

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            '& .MuiTableCell-root:first-of-type': {
              pl: 2
            },
            '& .MuiTableCell-root:last-of-type': {
              pr: 3
            }
          }}
        >
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
              const isItemSelected = isSelected(row.flightNumber);

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.flightNumber}
                  selected={isItemSelected}
                >
                  <TableCell component="th" id={row.flightNumber} scope="row" align="left">
                  <Typography>{row.flightNumber}</Typography></TableCell>
                  <TableCell align="left"><Typography>{row.logo}</Typography></TableCell>
                  <TableCell align="left"><Typography>{row.mission}</Typography></TableCell>
                  <TableCell align="left"><Typography>{row.releaseDate}</Typography></TableCell>
                  <TableCell align="left"><Typography>{row.rocket}</Typography></TableCell>
                  <TableCell align="left">
                    <OrderStatus status={row.result} />
                  </TableCell>
                  <TableCell component="th" scope="row" align="rigth">
                    
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}