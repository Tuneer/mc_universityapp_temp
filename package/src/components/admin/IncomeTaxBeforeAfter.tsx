import Link from "next/link";
import { ReactElement, useEffect, useState, Ref, forwardRef } from "react";
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
import BlankLayout from "../../../src/layouts/blank/BlankLayout";

// components
import PageContainer from "../../../src/components/container/PageContainer";
import Logo from "../../../src/layouts/full/shared/logo/Logo";
import { useRouter } from "next/router";
import CustomTextField from "../../../src/components/forms/theme-elements/CustomTextField";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  gridClasses,
} from "@mui/x-data-grid";
import { alpha, styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
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

const IncomeTaxBeforeAfter = () => {
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
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [userRole, setUserRole] = useState<string>("user");
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  //Country
  const [country, setCountry] = useState<string>("");
  const [countries, setCountries] = useState<any[]>([]);
  //Province
  const [province, setProvince] = useState<string>("");
  const [provinces, setProvinces] = useState<any[]>([]);
  //Cities
  const [city, setCity] = useState<string>("NA");
  const [cities, setCities] = useState<any[]>([]);
  const [cityCode, setCityCode] = useState<string>("NA");
  //TypeofHouse
  const [typeofhouse, setTypeOfHouse] = useState<string>("");
  const [typeofhouses, setTypeOfHouses] = useState<any[]>([]);

  //PopulationType
  const [PopulationType, setPopulationType] = useState<string>("NA");
  const [populationTypes, setPopulationTypes] = useState<any[]>([]);

  //MedianTaxBefore
  const [beforeTax, setBeforeTax] = useState<boolean>(false);
  //MedianTaxAfter
  const [afterTax, setAfterTax] = useState<boolean>(false);
  //Year
  const [year, setYear] = useState<string>("0");
  //Total_as_Household_type_including_census_family_structure
  const [tahticfs, setTahticfs] = useState<string>("0");
  //Census_family_households
  const [cfh, setCfs] = useState<string>("0");
  //Only_one_census_family_without_additional_persons
  const [oocfqp, setOocfqp] = useState<string>("0");
  //One_couple,_with_or_without_children_in_their_census_family
  const [ocwowcitcf, setOcwowcitcf] = useState<string>("0");
  //Without_children
  const [withoutchildren, setWithoutchildren] = useState<string>("0");
  //With_children
  const [withchildren, setWithchildren] = useState<string>("0");
  //One_one_parent_census_family
  const [oopcf, setOopcf] = useState<string>("0");
  //With_a_parent_that_is_a_man+_9_10
  const [waptiam9_10, setWaptiam9_10] = useState<string>("0");
  //With_a_parent_that_is_a_woman+_11_12
  const [waptiaw11_12, setWaptiaw11_12] = useState<string>("0");
  //Other_census_family_households_13
  const [ocfh_13, setOcfh_13] = useState<string>("0");

  //current income data
  const [rows, setRows] = useState<any[]>([]);

  //to add income
  const [data, setData] = useState<any[]>([]);

  const [error, setError] = useState({});

  const setErrorForField = (errorStr: string, fieldName: string) => {
    setError({ ...error, [fieldName]: errorStr });
  };

  const [deleteRowId, setDeleteRowId] = useState<string>("0");

  const columns: GridColDef[] = [
    { field: "Sno", headerName: "Sno", width: 30 },
    { field: "Country", headerName: "Country", width: 70 },
    { field: "Province", headerName: "Province", width: 130 },
    { field: "Geography", headerName: "Geography", width: 130 },
    {
      field: "Structural_type_of_dwelling",
      headerName: "Structural type of dwelling",
      width: 130,
    },
    { field: "Population_Type", headerName: "Population Type", width: 130 },
    {
      field: "Median_Income_Before_Tax",
      headerName: "Median Income Before Tax",
      width: 130,
    },
    {
      field: "Median_Income_After_Tax",
      headerName: "Median Income After Tax",
      width: 130,
    },
    { field: "Year", headerName: "Year", width: 70 },
    {
      field: "Total_as_Household_type_including_census_family_structure",
      headerName: "Total as Household type including census family structure",
      width: 130,
    },
    {
      field: "Census_family_households",
      headerName: "Census-family households",
      width: 130,
    },
    {
      field: "Only_one_census_family_without_additional_persons",
      headerName: "Only one census family without additional persons",
      width: 130,
    },
    {
      field: "One_couple,_with_or_without_children_in_their_census_family",
      headerName:
        " One couple, with or without children in their census family",
      width: 130,
    },
    { field: "Without_children", headerName: "Without children", width: 130 },
    { field: "With_children", headerName: "With children", width: 130 },
    {
      field: "One_one_parent_census_family",
      headerName: "One one-parent census family",
      width: 130,
    },
    {
      field: "With_a_parent_that_is_a_man+_9_10",
      headerName: "With a parent that is a man+ 9 10",
      width: 130,
    },
    {
      field: "With_a_parent_that_is_a_woman+_11_12",
      headerName: "With a parent that is a woman+ 11 12",
      width: 130,
    },
    {
      field: "Other_census_family_households_13",
      headerName: "Other census family households 13",
      width: 130,
    },
    {
      field: "Non_census_family_households",
      headerName: "Non-census family households",
      width: 130,
    },
    {
      field: "Delete",
      headerName: "Delete",
      width: 140,
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
      width: 140,
      renderCell: (params) => {
        return (
          <Button onClick={() => onButtonClick(params.row)} variant="contained">
            <DeleteIcon />
            Edit
          </Button>
        );
      },
    },
    // {
    //   field: "age",
    //   headerName: "Age",
    //   type: "number",
    //   width: 90,
    // },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    // },
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
    console.log("ITBA");
    //get the list of country,province etc.
    getCountry();
    getIncome();
  }, []);

  //get data from income table
  const getIncome = async () => {
    const apiUrlEndPoint = "/api/admin/APICallIncome";
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
        console.log("ITBACINCOMe : " + element);
      });
      setRows(res);
    } else {
      toast.error("Response Error..");
    }
  };

  //get all the country
  const getCountry = async () => {
    const apiUrlEndPoint = "/api/admin/APICallCountry";
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
        console.log("ITBAC : " + element.Country);
      });
      setCountries(res);
    } else {
      toast.error("Response Error..");
    }
  };

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

  //get the cities or geography when province is selected.
  const getCities = async (province: string) => {
    const apiUrlEndPoint = "/api/admin/APICallCities";
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
        console.log("ITBACPC : " + element.Cities_Counties_Township);
      });
      setCities(res);
    } else {
      toast.error("Response Error..");
    }
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

  const handleChangeCC = (event: SelectChangeEvent) => {
    console.log("EVENT: " + event);
    setCity(event.target.value);
  };

  const handleChangeP = (event: SelectChangeEvent) => {
    setProvince(event.target.value);
    console.log("Province: " + event.target.value);
    getCities(event.target.value);
  };

  // onchange text value of textfields
  const onChangeValue = (event: any) => {
    const value = event.target.value;
    console.log("Value: " + value);
    setData([{ [event.target.name]: value }]);
  };

  //handle save to save data in db.
  const handleClickSave = async () => {
    console.log("EVENT: ");
    console.log("DATA: " + data);
    if (data.length === 0) {
      toast.error("Please enter details.");
    } else {
    }
  };

  return (
    <PageContainer title="Login" description="this is Login page">
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
                  <MenuItem value="">
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

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="cities">Cities/Geography</InputLabel>
                <Select
                  labelId="cities"
                  id="cities_helper"
                  value={city}
                  label="Cities"
                  onChange={handleChangeCC}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  {cities.map((row) => (
                    <MenuItem value={row.Cities_Counties_Township}>
                      <em>{row.Cities_Counties_Township}</em>
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  Province Name would come here to select
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
                  id="outlined-basic"
                  label="Total Household type including census family structure"
                  type="number"
                  variant="outlined"
                  onChange={onChangeValue}
                />

                <CustomTextField
                  id="outlined-basic"
                  label="Census-family households"
                  type="number"
                  variant="outlined"
                  onChange={onChangeValue}
                />

                <CustomTextField
                  id="outlined-basic"
                  label="Only one census family without additional persons"
                  type="number"
                  variant="outlined"
                  onChange={onChangeValue}
                />

                <CustomTextField
                  id="outlined-basic"
                  label="One couple, with or without children in their census family"
                  type="number"
                  variant="outlined"
                />

                <CustomTextField
                  id="Without children"
                  label="Without children"
                  type="number"
                  variant="outlined"
                />

                <CustomTextField
                  id="With children"
                  label="With children"
                  type="number"
                  variant="outlined"
                />

                <CustomTextField
                  id="One one-parent census family"
                  label="One one-parent census family"
                  type="number"
                  variant="outlined"
                />

                <CustomTextField
                  id="With a parent that is a man+ 9 10"
                  label="With a parent that is a man+ 9 10"
                  type="number"
                  variant="outlined"
                />

                <CustomTextField
                  id="With a parent that is a woman+ 11 12"
                  label="With a parent that is a woman+ 11 12"
                  type="number"
                  variant="outlined"
                />

                <CustomTextField
                  id="Other census family households 13"
                  label="Other census family households 13"
                  type="number"
                  variant="outlined"
                />

                <CustomTextField
                  id="Non-census family households"
                  label="Non-census family households"
                  type="number"
                  variant="outlined"
                />
              </Box>

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

export default IncomeTaxBeforeAfter;

IncomeTaxBeforeAfter.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};
