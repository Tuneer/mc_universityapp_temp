import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import BlankLayout from "../../layouts/blank/BlankLayout";
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
import PageContainer from "../container/PageContainer";
import { useRouter } from "next/router";
import CustomTextField from "../forms/theme-elements/CustomTextField";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SendIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { isNullOrUndefined } from "util";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "Sno", headerName: "Sno", width: 30 },
  { field: "Country", headerName: "Country", width: 130 },
  { field: "Province", headerName: "Province", width: 250 },
  {
    field: "Cities_Counties_Township",
    headerName: "Cities/Geography",
    width: 300,
  },
  {
    field: "citiesID",
    headerName: "citiesID",
    width: 100,
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
];

const onButtonClick = (row: { Sno: string }) => {
  //do whatever you want with the row
  console.log(row.Sno);
};

const Cities = () => {
  const router = useRouter();
  const [rows, setRows] = useState<any[]>([]);
  const [error, setError] = useState({});
  const [country, setCountry] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [countries, setCountries] = useState<any[]>([]);
  const [provinces, setProvinces] = useState<any[]>([]);
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    console.log("Country");
    //get the list of country etc.
    getCountry();
    getProvince();

    //all cities
    getCities();
  }, []);

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

  const getProvince = async () => {
    const apiUrlEndPoint = "/api/admin/GetProvince";
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
        console.log("ITBAC : " + element.Province);
      });
      setProvinces(res);
    } else {
      toast.error("Response Error..");
    }
  };

  const getCities = async () => {
    const apiUrlEndPoint = "/api/admin/GetCities";
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
        console.log("ITBACPC : " + element.Cities_Counties_Township);
      });
      setRows(res);
    } else {
      toast.error("Response Error..");
    }
  };

  const onChangeValue = (txtValue: string, setter: Function) => {
    if (txtValue.length === 0) {
      toast.error("Please enter country.");
    }
    setter(txtValue);
  };

  const handleClickSave = async () => {
    console.log("EVENT: ");
    console.log("DATA: " + country + " " + province + "" + city);
    if (country.length === 0) {
      toast.error("Please enter country.");
    } else {
      addCities(country, province, city);
    }
  };

  const addCities = async (
    countryName: string,
    provinceName: string,
    cityName: string
  ) => {
    const apiUrlEndPoint = "/api/admin/AddCity";
    const response = await fetch(apiUrlEndPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        countryName,
        provinceName,
        cityName,
      }),
    });

    if (response.ok) {
      getCities();
    } else {
      toast.error("Response Error..");
    }
  };

  const handleChangeC = (event: SelectChangeEvent) => {
    console.log("EVENT: " + event);
    console.log(event.target.value);
    setCountry(event.target.value);
  };

  const handleChangeP = (event: SelectChangeEvent) => {
    setProvince(event.target.value);
    console.log("Province: " + event.target.value);
  };

  return (
    <PageContainer title="Login" description="this is Login page">
      <Box
        sx={{
          width: 1300,
          height: 400,
          backgroundColor: "primary.light",
          "&:hover": {
            backgroundColor: "primary.light",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
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

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "36ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <CustomTextField
            id="city"
            label="Cities/Geography"
            type="text"
            variant="outlined"
            onChange={(event: { target: { value: string } }) => {
              onChangeValue(event.target.value, setCity);
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
      </Box>

      <DataGrid
        getRowId={(row) => row.Sno}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </PageContainer>
  );
};

export default Cities;

Cities.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};
