import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
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
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "sno", headerName: "Sno", width: 30 },
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
    headerName: " One couple, with or without children in their census family",
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

const IncomeTaxBeforeAfter = () => {
  const router = useRouter();

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
  const [city, setCity] = useState<string>("");
  const [cities, setCities] = useState<any[]>([]);

  //current income data
  const [rows, setRows] = useState<any[]>([]);

  const [error, setError] = useState({});

  const setErrorForField = (errorStr: string, fieldName: string) => {
    setError({ ...error, [fieldName]: errorStr });
  };

  const onChangeValue = (txtValue: string, setter: Function) => {
    setter(txtValue);
  };

  const loginUser = async () => {
    console.log("DATA: " + userName);
    if (userName.length === 0) {
      toast.error("Please enter username.");
    } else if (userPassword.length === 0) {
      toast.error("Please enter userpassword.");
    } else if (userRole.length === 0) {
      toast.error("Please enter userrole.");
    } else {
      const apiUrlEndPoint = "/api/user/login";
      const response = await fetch(apiUrlEndPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userRole,
          userName,
          userPassword,
        }),
      });

      if (response.ok) {
        const res = await response.json();
        const user = res.user;
        const token = res.token;
        console.log(user);
        console.log(token);
        //add data in session
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(token));

        //get data from session
        const localUser = JSON.parse(
          JSON.stringify(localStorage.getItem("user"))
        );
        console.log("localUser: " + localUser);
        const localToken = JSON.parse(
          JSON.stringify(localStorage.getItem("token"))
        );
        console.log("localToken: " + localToken);
        if (user.userrole === "admin") {
          router.push("admin");
        } else {
          router.push("dashboard");
        }
      } else {
        const res = await response.json();
        toast.error(res.message);
      }
    }
  };

  useEffect(() => {
    console.log("JIOU");
    //get the list of country,province etc.
    getCountry();
    getIncome();
  }, []);

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
          />

          <CustomTextField
            id="outlined-basic"
            label="Census-family households"
            type="number"
            variant="outlined"
          />

          <CustomTextField
            id="outlined-basic"
            label="Only one census family without additional persons"
            type="number"
            variant="outlined"
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
      </Box>

      <DataGrid
        getRowId={(row) => row.sno}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />

      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sno</TableCell>
              <TableCell align="left">Country</TableCell>
              <TableCell align="left">Province</TableCell>
              <TableCell align="left">Geography</TableCell>
              <TableCell align="left">Structural type of dwelling</TableCell>
              <TableCell align="left">Population Type</TableCell>
              <TableCell align="left">Median Income Before Tax</TableCell>
              <TableCell align="left">Median Income After Tax</TableCell>
              <TableCell align="left">Year</TableCell>
              <TableCell align="left">
                Total as Household type including census family structure
              </TableCell>
              <TableCell align="left">Census-family households</TableCell>
              <TableCell align="left">
                Only one census family without additional persons
              </TableCell>
              <TableCell align="left">
                One couple, with or without children in their census family
              </TableCell>
              <TableCell align="left">Without children</TableCell>
              <TableCell align="left">With children</TableCell>
              <TableCell align="left">One one-parent census family</TableCell>
              <TableCell align="left">
                With a parent that is a man+ 9 10
              </TableCell>
              <TableCell align="left">
                With a parent that is a woman+ 11 12
              </TableCell>
              <TableCell align="left">
                Other census family households 13
              </TableCell>
              <TableCell align="left">Non-census family households</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.sno}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.sno}
                </TableCell>
                <TableCell align="left">{row.Country}</TableCell>
                <TableCell align="left">{row.Province}</TableCell>
                <TableCell align="left">{row.Geography}</TableCell>
                <TableCell align="left">
                  {row.Structural_type_of_dwelling}
                </TableCell>
                <TableCell align="right">{row.Population_Type}</TableCell>
                <TableCell align="right">
                  {row.Median_Income_Before_Tax}
                </TableCell>
                <TableCell align="right">
                  {row.Median_Income_After_Tax}
                </TableCell>
                <TableCell align="right">{row.Year}</TableCell>
                <TableCell align="right">
                  {
                    row.Total_as_Household_type_including_census_family_structure
                  }
                </TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </PageContainer>
  );
};

export default IncomeTaxBeforeAfter;

IncomeTaxBeforeAfter.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};
