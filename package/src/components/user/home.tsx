import { ReactElement, createContext, useContext, useEffect, useState } from "react";
import { useTheme } from '@mui/material/styles';
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import PageContainer from '../../../src/components/container/PageContainer';
import BlankLayout from '../../layouts/blank/BlankLayout';
import { Select,Paper,InputLabel, MenuItem, Checkbox, FormControlLabel, Grid,Card, CardContent, Typography, Input,SelectChangeEvent,FormControl,FormHelperText} from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from "next/image";
import { Flip, ToastContainer, toast } from "react-toastify";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import rank from "../../../public/images/backgrounds/rank.png";

const rankC = require('../../../public/images/backgrounds/rank.png');
const ColoredInputLabel = styled(Input)(({ theme }) => ({
    color: theme.palette.primary.main, // Change this to the color you want
    marginBottom: '5px', // Optional: Adjust spacing between label and select
  }));

const Home = () => {

    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;
    const errorColor = theme.palette.error.main;
    const ctx = createContext(this);

    const router = useRouter();
    const [rows, setRows] = useState<any[]>([]);
    const [error, setError] = useState({});



    // select
     //Province
    const [province, setProvince] = useState<string>("");
    const [provinces, setProvinces] = useState<any[]>([]);

    const averageIncome = 40000;
    const percentage = (averageIncome / 100000) * 100; // Assuming the total income is 100,000 dollars

   //handle event click change of province select dropdown
    const handleChangeP = (event: SelectChangeEvent) => {
    setProvince(event.target.value);
    console.log("Province: " + event.target.value);
  //  getCMA(event.target.value);
   // getCA(event.target.value);
  };

   
  useEffect(() => {
    console.log("Home");
    
    getProvince("Canada")
  }, []);


  //get the province when country is selected.
  const getProvince = async (country: string) => {
    const apiUrlEndPoint = "/api/admin/APICallProvince";
    const response = await fetch(apiUrlEndPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country,
      }),
    });

    if (response.ok) {
      const res = await response.json();
      console.log(res);
      res.forEach((element: any) => {
        console.log("ITBACP : " + element.Country);
      });
      setProvinces(res);
    } else {
      toast.error("Response Error..");
    }
  };



const data = {
  labels: ['Average Income', 'Remaining'],
  datasets: [
    {
      data: [percentage, 100 - percentage],
      backgroundColor: ['#FF0000', '#000000'],
      hoverBackgroundColor: ['#FF0000', '#000000'],
    },
  ],
};

// const options = {
//   cutout: '70%', // Adjust the cutout percentage for the doughnut hole
//   animation: {
//     animateRotate: true,
//   },
// };



const options = {
    cutout: '70%',
    borderRadius:20,
    offset:10,
    responsive:true,
    animation: {
      animateRotate: true,
    },
    plugins: {
      legend: {
        display: false,
      },
    //   tooltip: {
    //     callbacks: {
    //       label: (tooltipItem) => {
    //         const dataset = context.dataset.data;
    //         const total = dataset.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    //         const currentValue = dataset[context.dataIndex];
    //         const percentage = ((currentValue / total) * 100).toFixed(2) + '%';
    //         return percentage;
    //       },
    //     },
    //   },
    },
  };



    return (
      <PageContainer title="Home" description="this is the home">
       <Card style={{ margin: '10px' }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Input
        </Typography>
       

        <Grid container spacing={2}>
      {/* Car Names Select */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
      <FormControl fullWidth>
          <InputLabel id="province">Province</InputLabel>
          <Select
            labelId="province"
            id="province_helper"
            value={province}
            label="Province"
            onChange={handleChangeP}
          >
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
            {provinces.map((row) => (
              <MenuItem value={row.Province}>
                <em>{row.Province}</em>
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            Province Name would come here to select
          </FormHelperText>
        </FormControl>
      </Grid>

      {/* Country Names Select */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Select fullWidth>
          <MenuItem value="Country1">Country 1</MenuItem>
          <MenuItem value="Country2">Country 2</MenuItem>
          <MenuItem value="Country3">Country 3</MenuItem>
        </Select>
      </Grid>

      {/* Province Names Select */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Select fullWidth>
          <MenuItem value="Province1">Province 1</MenuItem>
          <MenuItem value="Province2">Province 2</MenuItem>
          <MenuItem value="Province3">Province 3</MenuItem>
        </Select>
      </Grid>

      {/* City Names Select */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Select fullWidth>
          <MenuItem value="City1">City 1</MenuItem>
          <MenuItem value="City2">City 2</MenuItem>
          <MenuItem value="City3">City 3</MenuItem>
        </Select>
      </Grid>

      {/* People Names Select */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Select fullWidth>
          <MenuItem value="Person1">Person 1</MenuItem>
          <MenuItem value="Person2">Person 2</MenuItem>
          <MenuItem value="Person3">Person 3</MenuItem>
        </Select>
      </Grid>

      {/* Car Owner Checkbox */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <FormControlLabel
          control={<Checkbox id="carOwner" />}
          label="Car Owner"
        />
      </Grid>

      {/* Insurance Covered Checkbox */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <FormControlLabel
          control={<Checkbox id="insuranceCovered" />}
          label="Insurance Covered"
        />
      </Grid>

      {/* Is in Accident Checkbox */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <FormControlLabel
          control={<Checkbox id="inAccident" />}
          label="Is in Accident"
        />
      </Grid>

      {/* Dead or Alive Checkbox */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <FormControlLabel
          control={<Checkbox id="deadOrAlive" />}
          label="Dead or Alive"
        />
      </Grid>
        </Grid>

      </CardContent>
       </Card>

       {/* Ranking and averrage optimal Income */}

       <Card style={{ margin: '10px' }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Input
        </Typography>
       

    <Grid container spacing={2}>
    
     {/* First UI */}
     <Grid item xs={12} sm={6} md={8} lg={6} spacing={2}>
    
     <Grid item xs={12} sm={6} md={4} lg={4}>
      
      </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
        
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
         
        </Grid>
    
      </Grid>



      {/* Second UI */}
      <Grid item xs={12} sm={6} md={4} lg={6} spacing={2}>
      <Typography variant="h5" component="div" gutterBottom>
      A V E R A G E  O P T I M A L  I N C O M E  B E F O R E  T A X
        </Typography>
       <Grid style={{ padding: '20px', minHeight: '80px' }}> 
       
        <Doughnut data={data} options={options}/>
        <Typography>dfcw,se fgewg </Typography>
        </Grid> 

      </Grid>

        </Grid>

      </CardContent>
       </Card>

      </PageContainer>
    );
};

export default Home;
Home.getLayout = function getLayout(page: ReactElement) {
    return <BlankLayout>{page}</BlankLayout>;
  };