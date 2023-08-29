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
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
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

const columns: GridColDef[] = [
  { field: "Sno", headerName: "Sno", width: 30 },
  { field: "Country", headerName: "Country", width: 130 },
  { field: "Cities", headerName: "Cities", width: 130 },
  { field: "Province", headerName: "Province", width: 200 },
  { field: "CMA", headerName: "CMA", width: 200 },
  { field: "CA", headerName: "CA", width: 200 },
  // { field: "CD", headerName: "CD", width: 200 },
  // { field: "CSD", headerName: "CSD", width: 200 },
  { field: "Rental Market Type", headerName: "Rental Market Type", width: 100 },
  { field: "Average Rent By", headerName: "Average Rent By", width: 100 },
  { field: "Type of house", headerName: "Type of house", width: 100 },
  { field: "Units_Availablity", headerName: "Units_Availablity", width: 60 },
  { field: "Building Type", headerName: "Building Type", width: 70 },
  { field: "Year_month", headerName: "Year_month", width: 70 },
  { field: "Year", headerName: "Year", width: 100 },
  { field: "RentValue", headerName: "RentValue", width: 70 },
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
];

const onButtonClick = (row: { Sno: string }) => {
  //do whatever you want with the row
  console.log(row.Sno);
};

const Rent = () => {
  const router = useRouter();
  const [rows, setRows] = useState<any[]>([]);
  const [error, setError] = useState({});
  const [userName, setUserName] = useState<string>("");
  const [cma, setCMA] = useState<string>("");
  const [CMAs, setCMAs] = useState<any[]>([]);
  const [ca, setCA] = useState<string>("");
  const [CAs, setCAs] = useState<any[]>([]);

  //Country
  const [country, setCountry] = useState<string>("");
  const [countries, setCountries] = useState<any[]>([]);
  //Province
  const [province, setProvince] = useState<string>("");
  const [provinces, setProvinces] = useState<any[]>([]);
  //Cities
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    console.log("MBM");
    getCountry();
    //get the list of MBM etc.
    fetchData()
      .then((data) => {
        setRows(data);
        //setLoading(false);
      })
      .catch((error) => {
        //setLoading(false);
      });
  }, []);

  async function fetchData() {
    try {
      const apiUrlEndPoint = "/api/admin/APICallRent";
      const response = await fetch(apiUrlEndPoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  const getHousing = async () => {
    const apiUrlEndPoint = "/api/admin/APICallMBM";
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
        console.log("ITBAC MBM : " + element.Country);
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

  const onChangeValue = (txtValue: string, setter: Function) => {
    if (txtValue.length === 0) {
      toast.error("Please enter country.");
    }
    setter(txtValue);
  };

  const handleClickSave = async () => {
    console.log("EVENT: ");
    console.log("DATA: " + userName);
    if (userName.length === 0) {
      toast.error("Please enter country.");
    } else {
      addHousing(userName);
    }
  };

  const addHousing = async (countryName: string) => {
    const apiUrlEndPoint = "/api/admin/AddMBM";
    const response = await fetch(apiUrlEndPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        countryName,
      }),
    });

    if (response.ok) {
      getHousing();
    } else {
      toast.error("Response Error..");
    }
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

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="cma">CMA</InputLabel>
          <Select
            labelId="CMA"
            id="cma_helper"
            value={cma}
            label="CMA"
            onChange={handleChangeCMA}
          >
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
            {CMAs.map((row) => (
              <MenuItem value={row.CMA}>
                <em>{row.CMA}</em>
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>CMA Name would come here to select</FormHelperText>
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
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
            {CAs.map((row) => (
              <MenuItem value={row.CA}>
                <em>{row.CA}</em>
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>CA Name would come here to select</FormHelperText>
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
            id="country"
            label="Country"
            type="text"
            variant="outlined"
            onChange={(event: { target: { value: string } }) => {
              onChangeValue(event.target.value, setUserName);
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
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 15, 20, 25]}
      />
    </PageContainer>
  );
};

export default Rent;

Rent.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};
