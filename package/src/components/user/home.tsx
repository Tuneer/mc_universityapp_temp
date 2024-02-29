import { ReactElement, createContext, useContext, useEffect,useRef, useState } from "react";
import { useTheme } from '@mui/material/styles';
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import PageContainer from '../../../src/components/container/PageContainer';
import BlankLayout from '../../layouts/blank/BlankLayout';
import { Select,Stack,Paper,Divider,Chip,InputLabel, MenuItem, Checkbox, Avatar,FormControlLabel, Grid,Card, CardContent, Typography, Input,SelectChangeEvent,FormControl,FormHelperText, Box,makeStyles, colors} from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from "next/image";
import { Flip, ToastContainer, toast } from "react-toastify";
import { Doughnut,Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, PointElement } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend,Title,PointElement);
//import rank from "../../../public/images/backgrounds/rank.png";
import AffordabilityRanking from '../../../src/components/dashboard/AffordabilityRanking';
import OptimalIncomeChart from '../../../src/components/dashboard/OptimalIncome';
import BarchartComponent from '../../../src/components/dashboard/BarchartComponent';
import RentalSupplyChart from '../../../src/components/dashboard/RentalSupplyChart';
import { flow } from "lodash";
import { Money,AttachMoney, CenterFocusStrong } from "@mui/icons-material";
import { baselightTheme } from "../../theme/DefaultColors";
import { brown, deepOrange, green } from "@mui/material/colors";


//const rankC = require('../../../public/images/backgrounds/rank.png');
const ColoredInputLabel = styled(Input)(({ theme }) => ({
    color: theme.palette.primary.main, // Change this to the color you want
    marginBottom: '5px', // Optional: Adjust spacing between label and select
  }));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Home = () => {
  
    const theme = useTheme();
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

    const optimalIncome = 40000;
  const populationBelowOptimalIncome = 40;

   //handle event click change of province select dropdown
    const handleChangeP = (event: SelectChangeEvent) => {
    setProvince(event.target.value);
    console.log("Province: " + event.target.value);
  //  getCMA(event.target.value);
   // getCA(event.target.value);
  };

  const categoryBar = ["$40000-$49999", "$50000-$69999","$70000-$89999","$90000-$100000","Over $100000"];
   
  useEffect(() => {
    console.log("Home");
    
    getProvince("Canada")
  }, []);

 // const chartRef = useRef<HTMLCanvasElement>(null);

  // const downloadChart = () => {
  //   if (chartRef.current) {
  //     const chartImage = chartRef.current.toDataURL('image/png');
  //     const link = document.createElement('a');
  //     link.href = chartImage;
  //     link.download = 'rental_supply_chart.png';
  //     link.click();
  //   }
  // };

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
    labels: categoryBar,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1500, 750, 500],
        backgroundColor: ['#683733', '#683733', '#683733'],
        borderColor: ['transparent', 'transparent', 'transparent'],
        borderWidth: 0,
      },
      {
        label: 'Dataset 2',
        data: [1000, 1250, 750],
        backgroundColor: ['#C1AC7F', '#C1AC7F', '#C1AC7F'],
        borderColor: ['transparent', 'transparent', 'transparent'],
        borderWidth: 0,
      },
      {
        label: 'Dataset 3',
        data: [2700, 1000, 1250],
        backgroundColor: ['#5D6043', '#5D6043', '#5D6043'],
        borderColor: ['transparent', 'transparent', 'transparent'],
        borderWidth: 0,
      },
    ],
  };

  const currentStock = [3000, 1000, 3500, 1500, 3000, 500, 3500];
  const newStock = [6000, 5000, 4000, 3000, 2000, 1000, 0];

  // const optionsline = {
  //   responsive: true,
  //   legend: {
  //     position: 'top',
  //   },
  //   title: {
  //     display: true,
  //     text: 'Rental Supply',
  //   },
  // };

  // const dataLine = {
  //   labels: ['1 K', '0.5 K', 'OB', '3 K', '1B', '0.5 K', '3 K', '2B', '0.5 K', '3 K', '0.5 K', '3B'],
  //   datasets: [
  //     {
  //       label: 'Current Stock',
  //       data: [6000, 5000, 4000, 3000, 2000, 1000, 0, 0, 0, 0, 0, 0],
  //       borderColor: 'rgba(75, 192, 192, 1)',
  //       backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //     },
  //     {
  //       label: 'New Stock Added',
  //       data: [0, 0, 0, 0, 0, 0, 300, 200, 300, 300, 300, 300],
  //       borderColor: 'rgba(153, 102, 255, 1)',
  //       backgroundColor: 'rgba(153, 102, 255, 0.2)',
  //     },
  //   ],
  // };

 


    return (
      <PageContainer title="Home">
       <Card style={{ margin: '10px', backgroundColor:'#F0F3F8' }} >
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom fontFamily="Tinos">
          INPUT
        </Typography>
       

        <Grid container spacing={2}>
      {/* Car Names Select */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
      <FormControl fullWidth>
          <InputLabel id="province" >{<Typography fontFamily="Tinos" >PROVINCE</Typography>}</InputLabel>
          <Select
            labelId="province"
            id="province_helper"
            value={province}
            label={<Typography fontFamily="Montserrat" fontStyle='normal' sx={{ textTransform: 'uppercase', m: 1 }}>PROVINCE</Typography>}
            onChange={handleChangeP}
          >
            <MenuItem value="">
              <em>{<Typography fontFamily="Tinos" fontStyle='normal' sx={{ textTransform: 'uppercase', m: 1 }}>SELECT</Typography>}</em>
            </MenuItem>
            {provinces.map((row) => (
              <MenuItem value={row.Province}>
                <em>{<Typography fontFamily="Montserrat" fontStyle='normal' sx={{ textTransform: 'uppercase', m: 1 }}>{row.Province}</Typography>}</em>
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {<Typography fontFamily="Montserrat" fontStyle='normal' sx={{ textTransform: 'uppercase', m: 1 }}>Province Name would come here to select</Typography>}
          </FormHelperText>
        </FormControl>
      </Grid>

      {/* Country Names Select */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <FormControl fullWidth>
        <InputLabel id="country" >{<Typography fontFamily="Montserrat"fontStyle='normal' sx={{ textTransform: 'uppercase' }}>Country</Typography>}</InputLabel>
        <Select fullWidth labelId="country"
            id="country_helper" label={<Typography fontFamily="Montserrat" fontStyle='normal' sx={{ textTransform: 'uppercase', m: 1 }}>Country</Typography>}>
          <MenuItem value="Country1">{<Typography fontFamily="Montserrat" >Country 1</Typography>}</MenuItem>
          <MenuItem value="Country2">{<Typography fontFamily="Montserrat" >Country 2</Typography>}</MenuItem>
          <MenuItem value="Country3">{<Typography fontFamily="Montserrat" >Country 3</Typography>}</MenuItem>
        </Select>
        </FormControl>
      
      </Grid>

      {/* Province Names Select */}
      <Grid item xs={12} sm={6} md={4} lg={3} fontFamily="Montserrat">
        <Select fullWidth>
          <MenuItem value="Province1">Province 1</MenuItem>
          <MenuItem value="Province2">Province 2</MenuItem>
          <MenuItem value="Province3">Province 3</MenuItem>
        </Select>
      </Grid>

      {/* City Names Select */}
      <Grid item xs={12} sm={6} md={4} lg={3} fontFamily="Montserrat">
        <Select fullWidth>
          <MenuItem value="City1">City 1</MenuItem>
          <MenuItem value="City2">City 2</MenuItem>
          <MenuItem value="City3">City 3</MenuItem>
        </Select>
      </Grid>

      {/* People Names Select */}
      <Grid item xs={12} sm={6} md={4} lg={3} fontFamily="Montserrat">
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
          label={<Typography fontFamily="Montserrat" fontStyle='normal' sx={{ textTransform: 'uppercase' }}>CAR OWNER</Typography>} 
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

       <Card style={{ margin: '10px', backgroundColor:'#F0F3F8'  }}>
      <CardContent>
       
    <Grid container spacing={2} direction='row'>
    
     {/* First UI */}
     <Grid
  item
  container
  direction='row'
  xs={12}
  sm={6}
  md={6}
  lg={7}
  spacing={1}
  margin={0}
  padding={0}
>



<Grid item xs={12} sm={12} md={12} lg={12}>
  <Typography variant="h4" sx={{textDecoration: 'underline',fontSize:'24px',fontFamily:'Tinos',fontStyle:'normal'}} align="center">
    RANKING
  </Typography> 
      <Grid item container xs={12} sm={12} md={12} lg={12}> 

<Grid item xs={12} sm={6} md={4} lg={4}>
    <AffordabilityRanking rank={14} description="AFFORDABILITY (BY RENT)" />
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={4}>
    <AffordabilityRanking rank={12} description="AFFORDABILITY (BY AFFORDABLE UNITS)" />
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={4}>
    <AffordabilityRanking rank={10} description="MEDIAN INCOME"/>
  </Grid>
      </Grid>
</Grid>

{/* <Grid item margin={0} spacing={0} padding={0} rowGap={0} rowSpacing={0}>
  <Typography variant="h4" sx={{textDecoration: 'underline',fontSize:'24px',fontFamily:'Tinos',fontStyle:'normal'}} align="center">
    RANKING
  </Typography>
  </Grid>

  <Grid item container spacing={0}  margin={0} rowSpacing={0} rowGap={0}>

  <Grid item xs={12} sm={6} md={4} lg={4}>
    <AffordabilityRanking rank={14} description="AFFORDABILITY (BY RENT)" />
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={4}>
    <AffordabilityRanking rank={12} description="AFFORDABILITY (BY AFFORDABLE UNITS)" />
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={4}>
    <AffordabilityRanking rank={10} description="MEDIAN INCOME"/>
  </Grid>

  </Grid>  */}


 
    </Grid>
{/* End of Forst UI */}



<Divider orientation="vertical" flexItem />


      {/* Second UI */}
      <Grid item
  container
  margin={0}
  xs={12}
  sm={6}
  md={6}
  lg={4}
  spacing={2}>
      
      <Grid container spacing={2}>

<Grid item xs={12} sm={6} md={6} lg={8} direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}}>
<Typography variant="h4" align="center" sx={{textDecoration: 'underline',fontSize:'24px'}} fontFamily="Tinos">
     AVERAGE OPTIMAL<br /> INCOME BEFORE TAX
 </Typography>
</Grid>

<Grid item xs={12} sm={6} md={6} lg={4} direction="row" alignItems="center" fontFamily="Tinos" fontStyle='normal' justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}}>
     <Chip icon={<AttachMoney />} color="secondary" sx={{color: 'white',fontSize:'20px'}} label={optimalIncome} />
</Grid>



<Grid item xs={12} sm={6} md={6} lg={6} direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}}>
  
<OptimalIncomeChart optimalIncome={optimalIncome} populationBelowOptimalIncome={populationBelowOptimalIncome} />

</Grid>

<Grid item xs={12} sm={6} md={6} lg={6} direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}}>

<Typography variant="h4" align="center" sx={{fontFamily:'Tinos',textDecoration:'underline',fontSize:'24px',fontStretch:'expanded',fontStyle:'normal'}}>
   40% FAMILIES UNDER OPTIMAL INCOME
</Typography>

</Grid>
</Grid>
        

      </Grid>
      {/* End of Second UI */}

     </Grid>

      </CardContent>
       </Card>

       {/* Averate Rent and Shelter Cost and Rental Supply */}

       <Card style={{ margin: '10px', backgroundColor:'#F0F3F8' }}>
      <CardContent>
       
      <Grid item
  container
  direction="row"
  alignItems="center"
  justifyContent="center"
  margin={0}
  xs={12}
  sm={12}
  md={12}
  lg={12}
  spacing={2}>
      
        {/* Average rent start */}
         <Grid item xs={12} sm={3} md={2} lg={3} direction="column" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}}>

  <Grid item xs={12} sm={12} md={12} lg={12}><Typography variant="h4" align="center" component="div" sx={{textDecoration: 'underline',fontSize:'24px',fontFamily:'Tinos',fontStyle:'normal'}}>
    AVERAGE RENT
  </Typography></Grid>

  <Grid item xs={12} sm={12} md={12} lg={12} margin={2}><Typography variant="h4" align="center" component="div">
    <Chip label={<Typography variant="h4" align="center" component="div" fontFamily="Tinos">ROW HOUSE</Typography>} color="default" variant="outlined" size="medium"/>
  </Typography></Grid>

   <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}}>
   
   <Grid item xs={12} sm={12} md={12} lg={12}>
      <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}} margin={2}>
        <Chip color="secondary"  label={<Typography fontFamily="Tinos" sx={{color: 'white',fontSize:'20px'}}>0B<span>&nbsp;&nbsp;&nbsp;&nbsp; $900</span></Typography>} /> 
       </Grid>
       <Divider />
       <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" fontFamily="Tinos" spacing={2} sx={{alignItems: 'center', display: 'flex'}} margin={2}>
       <Chip color="secondary"  label={<Typography fontFamily="Tinos" sx={{color: 'white',fontSize:'20px'}}>3B<span>&nbsp;&nbsp;&nbsp;&nbsp; $1100</span></Typography>} /> 
       </Grid>
   </Grid>

   <Divider orientation="vertical" flexItem/>

   <Grid item xs={12} sm={12} md={12} lg={12} fontFamily="Tinos">
    <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}} margin={2}>
    <Chip color="secondary" label={<Typography fontFamily="Tinos" sx={{color: 'white',fontSize:'20px'}}>2B<span>&nbsp;&nbsp;&nbsp;&nbsp; $1100</span></Typography>} /> 
    </Grid>
    <Divider />
   <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}} margin={2}>
   <Chip color="secondary" sx={{color: 'white',fontSize:'22px'}} label={<Typography fontFamily="Tinos">4B<span>&nbsp;&nbsp;&nbsp;&nbsp; $1100</span></Typography>} /> 
   </Grid>
  </Grid>
  
   </Grid>


   <Grid item xs={12} sm={12} md={12} lg={12} margin={2}><Typography variant="h4" align="center" component="div">
    <Chip label={<Typography variant="h4" align="center" component="div" fontFamily="Tinos">APPARTMENT</Typography>} color="default" variant="outlined" size="medium"/>
  </Typography></Grid>

   <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}}>
   
   <Grid item xs={12} sm={12} md={12} lg={12}>
      <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}} margin={2}>
        <Chip color="primary" sx={{color: 'white',fontSize:'20px'}} label={<Typography fontFamily="Tinos" >0B<span>&nbsp;&nbsp;&nbsp;&nbsp; $900</span></Typography>} /> 
       </Grid>
       <Divider />
       <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" fontFamily="Tinos" spacing={2} sx={{alignItems: 'center', display: 'flex'}} margin={2}>
       <Chip color="primary" sx={{color: 'white',fontSize:'20px'}} label={<Typography fontFamily="Tinos">3B<span>&nbsp;&nbsp;&nbsp;&nbsp; $1100</span></Typography>} /> 
       </Grid>
   </Grid>

   <Divider orientation="vertical" flexItem/>

   <Grid item xs={12} sm={12} md={12} lg={12} fontFamily="Tinos">
    <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}} margin={2}>
    <Chip color="primary" sx={{color: 'white',fontSize:'20px'}} label={<Typography fontFamily="Tinos">2B<span>&nbsp;&nbsp;&nbsp;&nbsp; $1100</span></Typography>} /> 
    </Grid>
    <Divider />
   <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}} margin={2}>
   <Chip color="primary" sx={{color: 'white',fontSize:'20px'}} label={<Typography fontFamily="Tinos">4B<span>&nbsp;&nbsp;&nbsp;&nbsp; $1100</span></Typography>} /> 
   </Grid>
  </Grid>
  
   </Grid>
  

         </Grid>
        {/* Average rent END */}

        <Grid item xs={12} sm={6} md={8} lg={6} direction="column" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}}>
       
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h4" align="center" component="div" fontFamily="Tinos">
        AFFORDABLE SHELTER COST <br />
        VS CURRENT SHELTER COST
         </Typography>
         </Grid>

             <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" spacing={2} margin={2}> 
                <BarchartComponent data={data} heading={'INCOME CATEGORIES'} />
              </Grid>
        </Grid>

        <Grid item xs={12} sm={3} md={2} lg={3} direction="column" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}}>
          
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h4" align="center" component="div" fontFamily="Tinos">
             RENTAL SUPPLY
          </Typography>
         </Grid>

           <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" spacing={2} margin={2}> 
                <RentalSupplyChart currentStock={currentStock} newStock={newStock} heading={'8% of New stock is added this Year'} />
            </Grid>
        </Grid>

      </Grid>
      
      </CardContent>
       </Card>



       {/* RENTAL STOCK STARTING */}

       <Card style={{ margin: '10px', backgroundColor:'#F0F3F8' }}>
      <CardContent>
       
      <Grid item
  container
  direction="row"
  alignItems="center"
  justifyContent="center"
  margin={0}
  xs={12}
  sm={12}
  md={12}
  lg={12}
  spacing={2}>

<Grid container spacing={2} xs={12} sm={12} md={12} lg={12}>

<Grid item xs={12} sm={6} md={6} lg={8} direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}}>
<Typography variant="h4" align="center" sx={{textDecoration: 'underline',fontSize:'24px'}} fontFamily="Tinos">
     AVERAGE OPTIMAL INCOME BEFORE TAX
 </Typography>
</Grid>
<Grid item xs={12} sm={6} md={6} lg={4} direction="row" alignItems="center" fontFamily="Tinos" fontStyle='normal' justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}}>
     <Chip icon={<AttachMoney />} color="secondary" sx={{color: 'white',fontSize:'20px'}} label={optimalIncome} />
</Grid>
</Grid>
      
        {/* Average rent start */}
         <Grid item xs={12} sm={3} md={2} lg={3} direction="column" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}}>
         <Grid item xs={12} sm={12} md={12} lg={12}><Typography variant="h4" align="center" component="div" sx={{textDecoration: 'underline',fontSize:'24px',fontFamily:'Tinos',fontStyle:'normal'}}>
    AVERAGE RENT
  </Typography></Grid>

  <Grid item xs={12} sm={12} md={12} lg={12} margin={2}><Typography variant="h4" align="center" component="div">
    <Chip label={<Typography variant="h4" align="center" component="div" fontFamily="Tinos">ROW HOUSE</Typography>} color="default" variant="outlined" size="medium"/>
  </Typography></Grid>

   <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}}>
   
   <Grid item xs={12} sm={12} md={12} lg={12}>
      <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}} margin={2}>
        <Chip color="secondary"  label={<Typography fontFamily="Tinos" sx={{color: 'white',fontSize:'20px'}}>0B<span>&nbsp;&nbsp;&nbsp;&nbsp; $900</span></Typography>} /> 
       </Grid>
       <Divider />
       <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" fontFamily="Tinos" spacing={2} sx={{alignItems: 'center', display: 'flex'}} margin={2}>
       <Chip color="secondary"  label={<Typography fontFamily="Tinos" sx={{color: 'white',fontSize:'20px'}}>3B<span>&nbsp;&nbsp;&nbsp;&nbsp; $1100</span></Typography>} /> 
       </Grid>
   </Grid>

   <Divider orientation="vertical" flexItem/>

   <Grid item xs={12} sm={12} md={12} lg={12} fontFamily="Tinos">
    <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}} margin={2}>
    <Chip color="secondary" label={<Typography fontFamily="Tinos" sx={{color: 'white',fontSize:'20px'}}>2B<span>&nbsp;&nbsp;&nbsp;&nbsp; $1100</span></Typography>} /> 
    </Grid>
    <Divider />
   <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}} margin={2}>
   <Chip color="secondary" sx={{color: 'white',fontSize:'22px'}} label={<Typography fontFamily="Tinos">4B<span>&nbsp;&nbsp;&nbsp;&nbsp; $1100</span></Typography>} /> 
   </Grid>
  </Grid>
  
   </Grid>


   <Grid item xs={12} sm={12} md={12} lg={12} margin={2}><Typography variant="h4" align="center" component="div">
    <Chip label={<Typography variant="h4" align="center" component="div" fontFamily="Tinos">APPARTMENT</Typography>} color="default" variant="outlined" size="medium"/>
  </Typography></Grid>

   <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}}>
   
   <Grid item xs={12} sm={12} md={12} lg={12}>
      <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}} margin={2}>
        <Chip color="primary" sx={{color: 'white',fontSize:'20px'}} label={<Typography fontFamily="Tinos" >0B<span>&nbsp;&nbsp;&nbsp;&nbsp; $900</span></Typography>} /> 
       </Grid>
       <Divider />
       <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" fontFamily="Tinos" spacing={2} sx={{alignItems: 'center', display: 'flex'}} margin={2}>
       <Chip color="primary" sx={{color: 'white',fontSize:'20px'}} label={<Typography fontFamily="Tinos">3B<span>&nbsp;&nbsp;&nbsp;&nbsp; $1100</span></Typography>} /> 
       </Grid>
   </Grid>

   <Divider orientation="vertical" flexItem/>

   <Grid item xs={12} sm={12} md={12} lg={12} fontFamily="Tinos">
    <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}} margin={2}>
    <Chip color="primary" sx={{color: 'white',fontSize:'20px'}} label={<Typography fontFamily="Tinos">2B<span>&nbsp;&nbsp;&nbsp;&nbsp; $1100</span></Typography>} /> 
    </Grid>
    <Divider />
   <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}} margin={2}>
   <Chip color="primary" sx={{color: 'white',fontSize:'20px'}} label={<Typography fontFamily="Tinos">4B<span>&nbsp;&nbsp;&nbsp;&nbsp; $1100</span></Typography>} /> 
   </Grid>
  </Grid>
  
   </Grid>
  

         </Grid>
        {/* Average rent END */}

        <Grid item xs={12} sm={6} md={8} lg={6} direction="column" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}}>
       
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h4" align="center" component="div" fontFamily="Tinos">
        AFFORDABLE SHELTER COST <br />
        VS CURRENT SHELTER COST
         </Typography>
         </Grid>

             <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" spacing={2} margin={2}> 
                <BarchartComponent data={data} heading={'INCOME CATEGORIES'} />
              </Grid>
        </Grid>

        <Grid item xs={12} sm={3} md={2} lg={3} direction="column" alignItems="center" justifyContent="center" spacing={2} sx={{alignItems: 'center', display: 'flex'}}>
          
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h4" align="center" component="div" fontFamily="Tinos">
             RENTAL SUPPLY
          </Typography>
         </Grid>

           <Grid item xs={12} sm={12} md={12} lg={12} direction="row" alignItems="center" justifyContent="center" spacing={2} margin={2}> 
                <RentalSupplyChart currentStock={currentStock} newStock={newStock} heading={'8% of New stock is added this Year'} />
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

// // <Grid item xs={8} direction="row" alignItems="center" justifyContent="center">
//  <Box>
//<OptimalIncomeChart optimalIncome={optimalIncome} populationBelowOptimalIncome={populationBelowOptimalIncome} />
//</Box>
// </Grid>
// <Grid xs={8} direction="row" alignItems="center" justifyContent="center">
//    <Typography variant="body1" align="center">
//      40% FAMILIES UNDER OPTIMAL INCOME
//     </Typography>
// </Grid>

// <Box sx={{ flexGrow: 1 }}>
// <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>

//   <Grid item xs={8} direction="row" alignItems="center" justifyContent="center">
//   <Typography variant="h6" align="center">
//   AVERAGE OPTIMAL INCOME BEFORE TAX
// </Typography>
//   </Grid>
//   <Grid xs={8} direction="row" alignItems="center" justifyContent="center">
//   <Typography variant="h6" align="center" gutterBottom>
//     $ 40,000
// </Typography>
//   </Grid>

   
//    </Grid>
// </Box>