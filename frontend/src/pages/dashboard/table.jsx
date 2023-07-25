import { useEffect, useState } from 'react';
import { Box,  Card,  CardMedia, Grid, Link, Pagination, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material';
import { baseURL } from '../../utils/constantes';
import LogoYoutube from '../../assets/images/logo_youtube.png'
import axios from 'axios'
import moment from 'moment'
import Search from '../../components/search';

function createData(flightNumber, logo, mission, releaseDate, rocket, result, video) {
  return { flightNumber, logo, mission, releaseDate, rocket, result, video };
}

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
    align: 'center',
    disablePadding: false,
    label: 'Vídeo'
  }
];

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => {
        console.log(error)
        return setError(error)
      })
      .finally(() => setLoading(false))
  })

  return { data, loading, error }
}


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


const OrderStatus = ({ status }) => {
  const theme = useTheme();
  let color;
  let title;
  if (status) {
    color = theme.palette.success.main;
    title = 'Sucesso';
  }else{
    color = theme.palette.error.main;
    title = 'Falhou';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
       <Box
      sx={{
        width:  10,
        height:  10,
        borderRadius: '50%',
        bgcolor: color
      }}
    />
      <Typography>{title}</Typography>
    </Stack>
  );
};


export default function LaunchTables() {
  
  const [order] = useState('desc');
  const [orderBy] = useState('flight_number');
  const [selected] = useState([]);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const {data, loading} = useFetch(baseURL + `/launches?search=${search}&pageSize=${pageSize}&pageNumber=${page}`)
  const [rows, setRow] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  useEffect(() => {
    if (data) {
      const rows = data.results.map((item)=>{
        return createData(item.flight_number, item.links.patch_small, item.name, moment(item.date_utc).format('DD/MM/YYYY'), item.rockets.name ,item.success, item.links.webcast)
      })
      setRow(rows)
    }
  }, [data]);

  const isSelected = (flightNumber) => selected.indexOf(flightNumber) !== -1;

  return (
    <div>
      <Box display={'flex'} justifyContent={'end'} justifyItems={'end'}>
          <Search onSearch={handleSearch} />
      </Box>
      <Card
            content={false}
            elevation= {3}
            sx={{
            border: '1px solid',
            borderRadius: 2,
            }}
        >
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
                  key={row.flightNumber}
                    hover
                    role="checkbox"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    selected={isItemSelected}
                  >
                    <TableCell component="th" id={row.flightNumber} scope="row" align="left">
                    <Typography>{row.flightNumber}</Typography></TableCell>
                    <TableCell align="center">
                        <CardMedia component="img" src={row.logo} alt='`logo ${row.mission}`' style={{ height: '4rem', width: '4rem' }} />
                    </TableCell>
                    <TableCell align="left"><Typography>{row.mission}</Typography></TableCell>
                    <TableCell align="left"><Typography>{row.releaseDate}</Typography></TableCell>
                    <TableCell align="left"><Typography>{row.rocket}</Typography></TableCell>
                    <TableCell align="left">
                      <OrderStatus status={row.result} />
                    </TableCell>
                    <TableCell component="th" scope="row" align="right">
                    <Link href={row.video} underline="none" align="right">
                      <CardMedia component="img" src={LogoYoutube} alt='`link youtube' style={{ height: '4rem', width: '4rem' }} />
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        <Box display={'flex'} justifyContent={'end'} sx={{my:5, mr: 5}}>
          <Pagination count={data?.totalPages} variant="outlined" color="primary" onChange={handleChangePage} hidePrevButton={!data?.hasPrev} hideNextButton={!data?.hasNext} />
        </Box>
        </TableContainer>
      </Box>
      </Card>
    </div>
  );
}