import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import BlankLayout from "../../../src/layouts/blank/BlankLayout";
import {
  Grid,
  Box,
  Card,
  Stack,
  Button,
  Typography,
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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "react-toastify/dist/ReactToastify.css";
import SendIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const columns: GridColDef[] = [
  { field: "Sno", headerName: "Sno", width: 30 },
  { field: "Country", headerName: "Country", width: 130 },
  { field: "Geography/Cities", headerName: "Geography/Cities", width: 130 },
  { field: "Province", headerName: "Province", width: 130 },
  { field: "CMA", headerName: "CMA", width: 130 },
  { field: "CA", headerName: "CA", width: 130 },
  { field: "Census Division", headerName: "Census Division", width: 130 },
  { field: "Census subdivision", headerName: "Census subdivision", width: 130 },
  { field: "Year", headerName: "Year", width: 130 },
  {
    field: "Number of bedrooms (6) 1",
    headerName: "Number of bedrooms (6) 1",
    width: 130,
  },
  {
    field: "Total - Structural type of dwelling",
    headerName: "Total - Structural type of dwelling",
    width: 130,
  },
  {
    field: "Single-detached house",
    headerName: "Single-detached house",
    width: 130,
  },
  {
    field: "Apartment in a building that has five or more storeys",
    headerName: "Apartment in a building that has five or more storeys",
    width: 130,
  },
  {
    field: "Other attached dwelling 3",
    headerName: "Other attached dwelling 3",
    width: 130,
  },
  {
    field: "Apartment or flat in a duple0",
    headerName: "Apartment or flat in a duple0",
    width: 130,
  },
  {
    field: "Apartment in a building that has fewer than five storeys",
    headerName: "Apartment in a building that has fewer than five storeys",
    width: 130,
  },
  {
    field: "Other single-attached house",
    headerName: "Other single-attached house",
    width: 130,
  },
  { field: "Row house", headerName: "Row house", width: 130 },
  {
    field: "Semi-detached house",
    headerName: "Semi-detached house",
    width: 130,
  },
  { field: "Movable dwelling 4", headerName: "Movable dwelling 4", width: 130 },
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

const StructureTypeOfBuilding = () => {
  const router = useRouter();
  const [rows, setRows] = useState<any[]>([]);
  const [error, setError] = useState({});

  //Country
  const [country, setCountry] = useState<string>("");
  const [countries, setCountries] = useState<any[]>([]);
  //Province
  const [province, setProvince] = useState<string>("");
  const [provinces, setProvinces] = useState<any[]>([]);
  //Cities
  const [city, setCity] = useState<string>("");

  const [CMAs, setCMAs] = useState<any[]>([]);
  const [CAs, setCAs] = useState<any[]>([]);

  //to add structure
  const [data, setData] = useState<any[]>([]);

  //Form Setter function.
  const [cma, setCMA] = useState<string>("");
  const [ca, setCA] = useState<string>("");
  const [cd, setCD] = useState<string>("");
  const [csd, setCSD] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [nob, setNOB] = useState<string>("");
  const [tstod, setTSTOD] = useState<string>("");
  const [sdh, setSDH] = useState<string>("");
  const [aiabthfoms, setAIABTHFOMS] = useState<string>("");
  const [oad, setOAD] = useState<string>("");

  useEffect(() => {
    console.log("Structure Type Of Building");
    //get the list of MBM etc.
    getStructureTypeOfBuilding();
    getCountry();
  }, []);

  const getStructureTypeOfBuilding = async () => {
    const apiUrlEndPoint = "/api/admin/APICallSTOB";
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
        console.log("ITBAC STOB : " + element.Country);
      });
      setRows(res);
    } else {
      toast.error("Response Error..");
    }
  };

  const handleClickSave = async () => {
    console.log("EVENT: ");
    console.log(
      "DATA: " +
        JSON.stringify({
          data,
        })
    );
    data.forEach((element: any) => {
      console.log("ITBAC : " + element);
    });
    if (data.length === 0) {
      toast.error("Please enter appropriate data.");
    } else {
      // addStructureTypeOfBuilding(data);
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

  // onchange text value of textfields
  const onChangeValue = async (txtValue: string, setter: Function) => {
    console.log("Value: " + txtValue);
    setter(txtValue);
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

  const addStructureTypeOfBuilding = async (data: any) => {
    const apiUrlEndPoint = "/api/admin/AddMBM";
    const response = await fetch(apiUrlEndPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    });

    if (response.ok) {
      getStructureTypeOfBuilding();
    } else {
      toast.error("Response Error..");
    }
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

  return (
    <PageContainer title="Login" description="this is Login page">
      <Box
        sx={{
          width: 1300,
          height: 420,
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
            "& > :not(style)": { m: 1, width: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <CustomTextField
            id="CensusDivision"
            label="Census Division"
            name="Census Division"
            type="text"
            variant="outlined"
            onChange={(event: { target: { value: string } }) => {
              onChangeValue(event.target.value, setCD);
            }}
          />

          <CustomTextField
            id="Census_subdivision"
            label="Census subdivision"
            type="text"
            variant="outlined"
            onChange={(event: { target: { value: string } }) => {
              onChangeValue(event.target.value, setCSD);
            }}
          />

          <CustomTextField
            id="Year"
            label="Year"
            type="text"
            variant="outlined"
            //onChange={onChangeValue}
            onChange={(event: { target: { value: string } }) => {
              onChangeValue(event.target.value, setYear);
            }}
          />

          <CustomTextField
            id="Number_of_bedrooms_(6)_1"
            label="Number of bedrooms (6) 1"
            type="text"
            variant="outlined"
            //onChange={onChangeValue}
            onChange={(event: { target: { value: string } }) => {
              onChangeValue(event.target.value, setNOB);
            }}
          />

          <CustomTextField
            id="Total_Structural_type_of_dwelling"
            label="Total - Structural type of dwelling"
            type="text"
            variant="outlined"
            //onChange={onChangeValue}
            onChange={(event: { target: { value: string } }) => {
              onChangeValue(event.target.value, setTSTOD);
            }}
          />

          <CustomTextField
            id="Single_detached_house"
            label="Single-detached house"
            type="text"
            variant="outlined"
            //onChange={onChangeValue}
            onChange={(event: { target: { value: string } }) => {
              onChangeValue(event.target.value, setSDH);
            }}
          />

          <CustomTextField
            id="Apartment_in_a_building_that_has_five_or_more_storeys"
            label="Apartment in a building that has five or more storeys"
            type="text"
            variant="outlined"
            //onChange={onChangeValue}
            onChange={(event: { target: { value: string } }) => {
              onChangeValue(event.target.value, setAIABTHFOMS);
            }}
          />

          <CustomTextField
            id="Other_attached_dwelling_3"
            label="Other attached dwelling 3"
            type="text"
            variant="outlined"
            //onChange={onChangeValue}
            onChange={(event: { target: { value: string } }) => {
              onChangeValue(event.target.value, setOAD);
            }}
          />

          <CustomTextField
            id="Apartment_or_flat_in_a_duple0"
            label="Apartment or flat in a duple0"
            type="text"
            variant="outlined"
            onChange={onChangeValue}
          />

          <CustomTextField
            id="Apartment_in_a_building_that_has_fewer_than_five_storeys"
            label="Apartment in a building that has fewer than five storeys"
            type="text"
            variant="outlined"
            onChange={onChangeValue}
          />

          <CustomTextField
            id="Other_single_attached_house"
            label="Other single-attached house"
            type="text"
            variant="outlined"
            onChange={onChangeValue}
          />

          <CustomTextField
            id="Row_house"
            label="Row house"
            type="text"
            variant="outlined"
            onChange={onChangeValue}
          />

          <CustomTextField
            id="Semi_detached_house"
            label="Semi-detached house"
            type="text"
            variant="outlined"
            onChange={onChangeValue}
          />

          <CustomTextField
            id="Movable_dwelling_4"
            label="Movable dwelling 4"
            type="text"
            variant="outlined"
            onChange={onChangeValue}
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
        sx={{ height: 400 }}
        getRowId={(row) => row.Sno}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
      />
    </PageContainer>
  );
};

export default StructureTypeOfBuilding;

StructureTypeOfBuilding.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};
