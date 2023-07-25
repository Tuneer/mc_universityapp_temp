import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
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
import { useRouter } from "next/router";
import CustomTextField from "../../../src/components/forms/theme-elements/CustomTextField";
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
  { field: "ProvinceID", headerName: "ProvinceID", width: 130 },
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

const Province = () => {
  const router = useRouter();
  const [rows, setRows] = useState<any[]>([]);
  const [error, setError] = useState({});
  const [country, setCountry] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    console.log("Country");
    //get the list of country etc.
    getCountry();
    getProvince();
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
        console.log("ITBAC : " + element.Country);
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
    console.log("DATA: " + country + " " + province);
    if (country.length === 0) {
      toast.error("Please enter country.");
    } else {
      addProvince(country, province);
    }
  };

  const addProvince = async (countryName: string, provinceName: string) => {
    const apiUrlEndPoint = "/api/admin/AddProvince";
    const response = await fetch(apiUrlEndPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        countryName,
        provinceName,
      }),
    });

    if (response.ok) {
      getProvince();
    } else {
      toast.error("Response Error..");
    }
  };

  const handleChangeC = (event: SelectChangeEvent) => {
    console.log("EVENT: " + event);
    console.log(event.target.value);
    setCountry(event.target.value);
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

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "36ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <CustomTextField
            id="province"
            label="Province"
            type="text"
            variant="outlined"
            onChange={(event: { target: { value: string } }) => {
              onChangeValue(event.target.value, setProvince);
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

export default Province;

Province.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};
