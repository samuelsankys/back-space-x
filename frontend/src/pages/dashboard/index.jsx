
import {
  Box,
  Card,
  Grid,
  Typography
} from '@mui/material';
import LaunchPieChart from './LaunchPieChart';
import Search from '../../components/search'
import LaunchTable from './table';
import LaunchBarChart from './LaunchBarChart';

const Dashboard = () => {
 
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>

      <Grid item xs={12} md={6} lg={6}>
        <Box width='100%' sx={{ display:"block" }}>
          <Grid item>
            <Typography variant="h5">Lançamentos de Foguetes</Typography>
          </Grid>
          <Grid item>
                <Card
                    content={false}
                    elevation={ 1}
                    sx={{
                    border: '1px solid',
                    borderRadius: 2,
                    }}
                >
                    <Box width='100%' sx={{ pt: 1, pr: 2 }}>
                        <LaunchPieChart  />
                    </Box>
                </Card>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
      <Box width='100%' sx={{ display:"block" }}>
          <Grid item>
            <Typography variant="h5">Lançamentos por ano</Typography>
          </Grid>
          <Grid item />
          <Grid item>
                <Card
                    content={false}
                    elevation={ 1}
                    sx={{
                    border: '1px solid',
                    borderRadius: 2,
                    }}
                >
                    <Box width='100%' sx={{ pt: 1, pr: 2 }}>
                        <LaunchBarChart  />
                    </Box>

                </Card>
          </Grid>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h4">Registros de Lançamentos</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <Grid>
            <Search />
        </Grid>
        <Card
            content={false}
            elevation= {3}
            sx={{
            border: '1px solid',
            borderRadius: 2,
            }}
        >
          <LaunchTable />
        </Card>
      </Grid>

    </Grid>
  );
};

export default Dashboard;