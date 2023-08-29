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
import { isNullOrUndefined } from "util";

const columns: GridColDef[] = [
  { field: "Sno", headerName: "Sno", width: 30 },
  { field: "Country", headerName: "Country", width: 130 },
  { field: "CountryID", headerName: "CountryID", width: 130 },
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

const Country = () => {
  const router = useRouter();
  const [rows, setRows] = useState<any[]>([]);
  const [error, setError] = useState({});
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    console.log("Country");
    //get the list of country etc.
    getCountry();
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
    console.log("DATA: " + userName);
    if (userName.length === 0) {
      toast.error("Please enter country.");
    } else {
      addCountry(userName);
    }
  };

  const addCountry = async (countryName: string) => {
    const apiUrlEndPoint = "/api/admin/AddCountry";
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
      getCountry();
    } else {
      toast.error("Response Error..");
    }
  };

  return (
    <PageContainer title="Login" description="this is Login page">
      <Box
        sx={{
          width: 1300,
          height: 200,
        }}
      >
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
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </PageContainer>
  );
};

export default Country;

Country.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};
