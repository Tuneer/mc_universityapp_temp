import Link from "next/link";
import { ReactElement, useEffect, useState, Ref, forwardRef } from "react";
import BlankLayout from "../../../src/layouts/blank/BlankLayout";
import {
  Grid,
  Box,
  Card,
  Stack,
  Typography,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

// components
import PageContainer from "../../../src/components/container/PageContainer";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  gridClasses,
} from "@mui/x-data-grid";
import { useRouter } from "next/router";
import CustomTextField from "../../../src/components/forms/theme-elements/CustomTextField";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SendIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import { alpha, styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "start",
  color: theme.palette.text.secondary,
}));

//Opacity value when hovered upon datagrid row.
const ODD_OPACITY = 0.2;

//Row design of DataGrid.
const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    "&:hover, &.Mui-hovered": {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&.Mui-selected": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity
      ),
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  },
  // []: {
  //   backgroundColor: theme.palette.mode === "dark" ? "#0000FF" : "#0000FF",
  // },
}));

//Dialog Transition
const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MBM = () => {
  const router = useRouter();
  //Worker thread for get faster task done.
  //const worker = new Worker("../../../repository/apiWorker.ts");
  const worker = new Worker(
    new URL("../../../repository/worker/apiWorker.ts", import.meta.url)
  );
  const workerCountry = new Worker(
    new URL("../../../repository/worker/apiWorkerCountry.ts", import.meta.url)
  );
  const workerwithParams = new Worker(
    new URL("../../../repository/worker/apiWorkerwithBody.ts", import.meta.url)
  );
  const [open, setOpen] = useState(false);

  const [rows, setRows] = useState<any[]>([]);

  const [cma, setCMA] = useState<string>("NA");
  const [CMAs, setCMAs] = useState<any[]>([]);
  const [ca, setCA] = useState<string>("NA");
  const [CAs, setCAs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  //PopulationType
  const [populationtype, setpopulationtype] = useState<string>("NA");
  const [PopulationTypes, setPopulationTypes] = useState<any[]>([]);

  //Country
  const [country, setCountry] = useState<string>("");
  const [countries, setCountries] = useState<any[]>([]);
  //Province
  const [province, setProvince] = useState<string>("");
  const [provinces, setProvinces] = useState<any[]>([]);
  //Cities
  const [city, setCity] = useState<string>("NA");
  const [cities, setCities] = useState<any[]>([]);

  //Familysize
  const [familySize, setFamilySize] = useState<string>("0");
  //Year
  const [year, setYear] = useState<string>("0");
  //TTH
  const [tth, setTTH] = useState<string>("0");
  //Food
  const [food, setFood] = useState<string>("0");
  //Clothing
  const [clothing, setClothing] = useState<string>("0");
  //Transportation
  const [transportation, setTransportation] = useState<string>("0");
  //Shelter
  const [shelter, setShelter] = useState<string>("0");
  //Shelter
  const [oe, setOE] = useState<string>("0");

  const [deleteRowId, setDeleteRowId] = useState<string>("0");

  //Designing of Table.
  const columns: GridColDef[] = [
    { field: "Sno", headerName: "Sno", width: 30 },
    { field: "Country", headerName: "Country", width: 60 },
    { field: "City", headerName: "City", width: 130 },
    { field: "Province", headerName: "Province", width: 200 },
    { field: "CMA", headerName: "CMA", width: 200 },
    { field: "CA", headerName: "CA", width: 200 },
    // { field: "CD", headerName: "CD", width: 200 },
    // { field: "CSD", headerName: "CSD", width: 200 },
    { field: "Population Type", headerName: "PopulationType", width: 160 },
    { field: "Family Size", headerName: "Family Size", width: 70 },
    { field: "Year", headerName: "Year", width: 60 },
    { field: "Total threshold", headerName: "Total threshold", width: 100 },
    { field: "Food", headerName: "Food", width: 70 },
    { field: "Clothing", headerName: "Clothing", width: 70 },
    { field: "Transportation", headerName: "Transportation", width: 80 },
    { field: "Shelter", headerName: "Shelter", width: 70 },
    { field: "Other expenses", headerName: "Other expenses", width: 80 },
    {
      field: "Delete",
      headerName: "Delete",
      width: 80,
      renderCell: (params) => {
        return (
          <Button onClick={() => onButtonClick(params.row)} variant="contained">
            <DeleteIcon />
            Delete
          </Button>
        );
      },
    },
    {
      field: "Edit",
      headerName: "Edit",
      width: 80,
      renderCell: (params) => {
        return (
          <Button onClick={() => onEditClick(params.row)} variant="contained">
            <DeleteIcon />
            Edit
          </Button>
        );
      },
    },
  ];

  const onEditClick = (row: { Sno: string }) => {
    //do whatever you want with the row
    console.log(row.Sno);
    toast.error("Yet to be developed!");
  };

  const onButtonClick = (row: { Sno: string }) => {
    //do whatever you want with the row
    console.log(row.Sno);
    setDeleteRowId(row.Sno);
    setOpen(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAgreeClose = () => {
    setOpen(false);
    deleteRow(deleteRowId);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteRow = (Sno: string) => {
    // Call the web worker function
    workerwithParams.onmessage = (event) => {
      // console.log("onmessage in worker:", event.data.data);
      toast.success("Row Deleted!");
      setOpen(false);
      workerwithParams.terminate(); // Terminate the worker after it's done
    };

    workerwithParams.onerror = (error) => {
      console.error("Error in worker:", error);
      setOpen(false);
      workerwithParams.terminate(); // Terminate the worker in case of an error
    };
    const apiUrlEndPoint = "/api/admin/deleteRow";
    const httpMethod = "POST"; // Specify the HTTP method (e.g., 'POST', 'PUT', etc.)
    const requestBody = {
      // Your request body data here
      // For example:
      // key1: "value1",
      // key2: "value2",
      Sno: Sno,
    };

    const customHeaders = {
      // Add custom headers as needed
      //   Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "Content-Type": "application/json",
    };

    const data = {
      url: apiUrlEndPoint,
      method: httpMethod,
      requestBody: requestBody,
      headers: customHeaders,
    };

    workerwithParams.postMessage(JSON.stringify(data));
    console.log("end initial Param Worker");
  };

  useEffect(() => {
    console.log("MBM");
    getCountry();
    getPopulationType();
    //get the list of MBM etc.
    fetchData();
  }, []);

  //fetch the whole data from the server which is already saved.
  const fetchData = () => {
    // Call the web worker function
    worker.onmessage = (event) => {
      // console.log("onmessage in worker:", event.data.data);
      setRows(event.data.data);
      setIsLoading(false);
      worker.terminate(); // Terminate the worker after it's done
    };

    worker.onerror = (error) => {
      console.error("Error in worker:", error);
      setIsLoading(false);
      worker.terminate(); // Terminate the worker in case of an error
    };
    const apiUrlEndPoint = "/api/admin/APICallMBM";
    const httpMethod = "GET"; // Specify the HTTP method (e.g., 'POST', 'PUT', etc.)
    const requestBody = {
      // Your request body data here
      // For example:
      // key1: "value1",
      // key2: "value2",
    };

    const customHeaders = {
      // Add custom headers as needed
      //   Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "Content-Type": "application/json",
    };

    const data = {
      url: apiUrlEndPoint,
      method: httpMethod,
      requestBody: requestBody,
      headers: customHeaders,
    };

    worker.postMessage(JSON.stringify(data));
    console.log("end initial Worker");
  };

  //get default all the countries.
  const getCountry = async () => {
    // const apiUrlEndPoint = "/api/admin/APICallCountry";
    // const response = await fetch(apiUrlEndPoint, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // if (response.ok) {
    //   const res = await response.json();
    //   console.log(res);
    //   res.forEach((element: any) => {
    //     console.log("ITBAC : " + element.Country);
    //   });
    //   setCountries(res);
    // } else {
    //   toast.error("Response Error..");
    // }

    // Call the web worker function
    workerCountry.onmessage = (event) => {
      // console.log("onmessage in worker:", event.data.data);
      setCountries(event.data.data);
      setIsLoading(false);
      workerCountry.terminate(); // Terminate the worker after it's done
    };

    workerCountry.onerror = (error) => {
      console.error("Error in worker:", error);
      setIsLoading(false);
      workerCountry.terminate(); // Terminate the worker in case of an error
    };
    const apiUrlEndPoint = "/api/admin/APICallCountry";
    const httpMethod = "GET"; // Specify the HTTP method (e.g., 'POST', 'PUT', etc.)
    const requestBody = {
      // Your request body data here
      // For example:
      // key1: "value1",
      // key2: "value2",
    };

    const customHeaders = {
      // Add custom headers as needed
      //   Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "Content-Type": "application/json",
    };

    const data = {
      url: apiUrlEndPoint,
      method: httpMethod,
      requestBody: requestBody,
      headers: customHeaders,
    };

    workerCountry.postMessage(JSON.stringify(data));
    console.log("end initial Worker");
  };

  //get the province when country is selected.
  const getProvince = async (country: string) => {
    // const apiUrlEndPoint = "/api/admin/APICallProvince";
    // const response = await fetch(apiUrlEndPoint, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     country,
    //   }),
    // });

    // if (response.ok) {
    //   const res = await response.json();
    //   console.log(res);
    //   res.forEach((element: any) => {
    //     console.log("ITBACP : " + element.Country);
    //   });
    //   setProvinces(res);
    // } else {
    //   toast.error("Response Error..");
    // }

    //NEW CODE TOGET PROVINCE in Worker Thread.
    // Call the web worker function
    workerwithParams.onmessage = (event) => {
      //console.log("onmessage in worker:", event.data.data);
      if (event.data.data.length > 0) {
        setProvinces(event.data.data);
        setIsLoading(false);
      } else {
        setProvinces([]);
        setProvince("");
        setCMA("");
        setCA("");
        setIsLoading(false);
      }

      workerwithParams.terminate(); // Terminate the worker after it's done
    };

    workerwithParams.onerror = (error) => {
      console.error("Error in worker:", error);
      setIsLoading(false);
      workerwithParams.terminate(); // Terminate the worker in case of an error
    };
    const apiUrlEndPoint = "/api/admin/APICallProvince";
    const httpMethod = "POST"; // Specify the HTTP method (e.g., 'POST', 'PUT', etc.)
    const requestBody = {
      // Your request body data here
      // For example:
      // key1: "value1",
      // key2: "value2",
      country,
    };

    const customHeaders = {
      // Add custom headers as needed
      //   Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "Content-Type": "application/json",
    };

    const data = {
      url: apiUrlEndPoint,
      method: httpMethod,
      requestBody: requestBody,
      headers: customHeaders,
    };

    workerwithParams.postMessage(JSON.stringify(data));
    console.log("end initial Worker");
  };

  //handle event click change of country select dropdown
  const handleChangeC = (event: SelectChangeEvent) => {
    console.log("EVENT: " + event);
    console.log(event.target.value);
    //set country in use state variable
    setCountry(event.target.value);
    //get province when country is selected.
    getProvince(event.target.value);
  };

  //handle event click change of province select dropdown
  const handleChangeP = (event: SelectChangeEvent) => {
    setProvince(event.target.value);
    console.log("Province: " + event.target.value);
    getCMA(event.target.value);
    getCA(event.target.value);
    getCities(event.target.value);
  };

  //handle event click change of CMA select dropdown
  const handleChangeCMA = (event: SelectChangeEvent) => {
    setCMA(event.target.value);
    console.log("CMA: " + event.target.value);
  };

  //handle event click change of CA select dropdown
  const handleChangeCA = (event: SelectChangeEvent) => {
    setCA(event.target.value);
    console.log("CA: " + event.target.value);
  };

  //handle event click change of City select dropdown
  const handleChangeCities = (event: SelectChangeEvent) => {
    setCity(event.target.value);
    console.log("City: " + event.target.value);
  };

  //handle event click change of Population Type select dropdown
  const handleChangePopulationType = (event: SelectChangeEvent) => {
    setpopulationtype(event.target.value);
    console.log("Population Type: " + event.target.value);
  };

  //get all the Population Type
  const getPopulationType = async () => {
    const apiUrlEndPoint = "/api/admin/APICallPopulationType";
    const response = await fetch(apiUrlEndPoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const res = await response.json();
      console.log(res);
      res.forEach((element: any) => {
        console.log("PT : " + element.PupulationType);
      });
      setPopulationTypes(res);
    } else {
      toast.error("Response Error..");
    }
  };

  //get the CMA when country is selected.
  const getCMA = async (country: string) => {
    const apiUrlEndPoint = "/api/admin/GetCMAFromProvince";
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
        console.log("CMA : " + element.CMA);
      });
      setCMAs(res);
    } else {
      toast.error("Response Error..");
    }
  };

  //get the CA when country is selected.
  const getCA = async (country: string) => {
    const apiUrlEndPoint = "/api/admin/GetCAFromProvince";
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
        console.log("CA : " + element.CA);
      });
      setCAs(res);
    } else {
      toast.error("Response Error..");
    }
  };

  //get the Cities when country is selected.
  const getCities = async (province: string) => {
    const apiUrlEndPoint = "/api/admin/GetCitiesthroughProvince";
    const response = await fetch(apiUrlEndPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        province,
      }),
    });

    if (response.ok) {
      const res = await response.json();
      console.log(res);
      res.forEach((element: any) => {
        console.log("City : " + element.citiesName);
      });
      setCities(res);
    } else {
      toast.error("Response Error..");
    }
  };

  //setter when any values changed in textfield.
  const onChangeValue = (txtValue: string, setter: Function) => {
    console.log(txtValue + "  " + setter);
    if (txtValue.length === 0) {
      toast.error("Please enter correct values.");
    }
    setter(txtValue);
  };

  //when save button clicked
  const handleClickSave = async () => {
    console.log("EVENT: ");
    console.log(
      "DATA: city: " +
        city +
        "Province: " +
        province +
        "Year: " +
        year +
        "FamilySize: " +
        familySize +
        "CA: " +
        ca +
        "CMA: " +
        cma +
        "Population Type: " +
        populationtype +
        ""
    );
    if (province === "NA" || province.length === 0) {
      toast.error("Please enter Province.");
    } else if (country === "NA" || country.length === 0) {
      toast.error("Please enter Country.");
    } else if (
      familySize === "" ||
      familySize.includes("-") ||
      familySize.length === 0
    ) {
      toast.error("Please enter proper Family Size, as zero is accepted.");
    } else if (
      year === "0" ||
      year.includes("-") ||
      year === "" ||
      year.length < 4
    ) {
      toast.error("Please enter proper Year.");
    } else if (tth === "0" || tth.includes("-") || tth === "") {
      toast.error("Please enter proper Total Threshold.");
    } else if (food === "0" || food.includes("-") || food === "") {
      toast.error("Please enter proper Food.");
    } else if (
      transportation === "0" ||
      transportation.includes("-") ||
      transportation === ""
    ) {
      toast.error("Please enter proper Transportation.");
    } else if (clothing === "0" || clothing.includes("-") || clothing === "") {
      toast.error("Please enter proper Clothing.");
    } else if (shelter === "0" || shelter.includes("-") || shelter === "") {
      toast.error("Please enter proper Shelter.");
    } else if (oe === "0" || oe.includes("-") || oe === "") {
      toast.error("Please enter proper Other Expenses.");
    } else {
      var request: any = {};
      request.Country = country;
      request.Province = province;
      request.City = city;
      request.CMA = cma;
      request.CA = ca;
      request.FamilySize = familySize;
      request.Year = year;
      request.PopulationType = populationtype;
      request.TotalThreshold = tth;
      request.Food = food;
      request.Transportation = transportation;
      request.Clothing = clothing;
      request.Shelter = shelter;
      request.OtherExpenses = oe;
      console.log("Request: " + JSON.stringify(request));
      addMBM(request);
    }
  };

  //Api call to save the data in server.
  const addMBM = async (request: any = {}) => {
    const apiUrlEndPoint = "/api/admin/AddMBM";
    const response = await fetch(apiUrlEndPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        request,
      }),
    });

    if (response.ok) {
      toast.success("Saved Successfully.");
      fetchData();
    } else {
      toast.error("Response Error..");
    }
  };

  return (
    <PageContainer title="MBM" description="this is Market Basket page">
      <Box mt={1} mb={2}>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs>
            <Item>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="country">Country</InputLabel>
                <Select
                  labelId="country"
                  id="country_helper"
                  value={country}
                  label="Country"
                  onChange={handleChangeC}
                >
                  <MenuItem value="NA">
                    <em>Select</em>
                  </MenuItem>
                  {countries.map((row) => (
                    <MenuItem value={row.Country}>
                      <em>{row.Country}</em>
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  Country Name would come here to select
                </FormHelperText>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="province">Province</InputLabel>
                <Select
                  labelId="province"
                  id="province_helper"
                  value={province}
                  label="Province"
                  onChange={handleChangeP}
                >
                  <MenuItem value="NA">
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

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="cma">CMA</InputLabel>
                <Select
                  labelId="CMA"
                  id="cma_helper"
                  value={cma}
                  label="CMA"
                  onChange={handleChangeCMA}
                >
                  <MenuItem value="NA">
                    <em>Select</em>
                  </MenuItem>
                  {CMAs.map((row) => (
                    <MenuItem value={row.CMA}>
                      <em>{row.CMA}</em>
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  CMA Name will depend upon country,Province
                </FormHelperText>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="ca">CA</InputLabel>
                <Select
                  labelId="ca"
                  id="ca_helper"
                  value={ca}
                  label="CA"
                  onChange={handleChangeCA}
                >
                  <MenuItem value="NA">
                    <em>Select</em>
                  </MenuItem>
                  {CAs.map((row) => (
                    <MenuItem value={row.CA}>
                      <em>{row.CA}</em>
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  CA Name will depend upon country,Province
                </FormHelperText>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="cities">Cities</InputLabel>
                <Select
                  labelId="cities"
                  id="cities_helper"
                  value={city}
                  label="Cities"
                  onChange={handleChangeCities}
                >
                  <MenuItem value="NA">
                    <em>Select</em>
                  </MenuItem>
                  {cities.map((row) => (
                    <MenuItem value={row.citiesName}>
                      <em>{row.citiesName}</em>
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  Cities Name will depend upon country,Province
                </FormHelperText>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="populationtype">Population Type</InputLabel>
                <Select
                  labelId="populationtype"
                  id="population_helper"
                  value={populationtype}
                  label="PopulationType"
                  onChange={handleChangePopulationType}
                >
                  <MenuItem value="NA">
                    <em>Select</em>
                  </MenuItem>
                  {PopulationTypes.map((row) => (
                    <MenuItem value={row.PupulationType}>
                      <em>{row.PupulationType}</em>
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  Population Type Name would come here to select
                </FormHelperText>
              </FormControl>

              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "36ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <CustomTextField
                  id="familysize"
                  label="Family Size"
                  type="number"
                  variant="outlined"
                  onChange={(event: { target: { value: string } }) => {
                    onChangeValue(event.target.value, setFamilySize);
                  }}
                />

                <CustomTextField
                  id="year"
                  label="Year"
                  type="number"
                  variant="outlined"
                  onChange={(event: { target: { value: string } }) => {
                    onChangeValue(event.target.value, setYear);
                  }}
                />

                <CustomTextField
                  id="totalthreshold"
                  label="Total threshold"
                  type="number"
                  variant="outlined"
                  onChange={(event: { target: { value: string } }) => {
                    onChangeValue(event.target.value, setTTH);
                  }}
                />

                <CustomTextField
                  id="food"
                  label="Food"
                  type="number"
                  variant="outlined"
                  onChange={(event: { target: { value: string } }) => {
                    onChangeValue(event.target.value, setFood);
                  }}
                />

                <CustomTextField
                  id="clothing"
                  label="Clothing"
                  type="number"
                  variant="outlined"
                  onChange={(event: { target: { value: string } }) => {
                    onChangeValue(event.target.value, setClothing);
                  }}
                />

                <CustomTextField
                  id="transportation"
                  label="Transportation"
                  type="number"
                  variant="outlined"
                  onChange={(event: { target: { value: string } }) => {
                    onChangeValue(event.target.value, setTransportation);
                  }}
                />

                <CustomTextField
                  id="shelter"
                  label="Shelter"
                  type="number"
                  variant="outlined"
                  onChange={(event: { target: { value: string } }) => {
                    onChangeValue(event.target.value, setShelter);
                  }}
                />
                <CustomTextField
                  id="otherexpences"
                  label="Other Expenses"
                  type="number"
                  variant="outlined"
                  onChange={(event: { target: { value: string } }) => {
                    onChangeValue(event.target.value, setOE);
                  }}
                />

                <Button
                  size="small"
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={() => {
                    handleClickSave();
                  }}
                >
                  Save
                </Button>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <ToastContainer
        position="bottom-center"
        autoClose={500}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
        transition={Flip}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Alert"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Do you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleAgreeClose}>Yes</Button>
        </DialogActions>
      </Dialog>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs>
          <Item>
            <StripedDataGrid
              getRowClassName={(params) =>
                params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
              }
              loading={isLoading}
              getRowId={(row) => row.Sno}
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[10, 15, 20, 25]}
            />
          </Item>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default MBM;

MBM.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};
