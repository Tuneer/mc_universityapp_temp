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

const columns: GridColDef[] = [
  { field: "Sno", headerName: "Sno", width: 30 },
  { field: "Housing estimate", headerName: "Country", width: 130 },
  { field: "Type of house", headerName: "Type of house", width: 130 },
  { field: "Year", headerName: "Year", width: 130 },
  { field: "Q1", headerName: "Q1", width: 130 },
  { field: "Q2", headerName: "Q2", width: 130 },
  { field: "Q3", headerName: "Q3", width: 130 },
  { field: "Q4", headerName: "Q4", width: 130 },
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

const DevelopmentHousing = () => {
  const router = useRouter();
  const [rows, setRows] = useState<any[]>([]);
  const [error, setError] = useState({});
  const [userName, setUserName] = useState<string>("");

  const worker = new Worker(
    new URL("../../../repository/worker/apiWorker.ts", import.meta.url)
  );

  useEffect(() => {
    console.log("Development Housing");
    //get the list of Housing etc.
    fetchData();
  }, []);

  const fetchData = () => {
    // Call the web worker function
    worker.onmessage = (event) => {
      // console.log("onmessage in worker:", event.data.data);
      setRows(event.data.data);
      worker.terminate(); // Terminate the worker after it's done
    };

    worker.onerror = (error) => {
      console.error("Error in worker:", error);
      worker.terminate(); // Terminate the worker in case of an error
    };
    const apiUrlEndPoint = "/api/admin/APICallHousing";
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

  // const getHousing = async () => {
  //   const apiUrlEndPoint = "/api/admin/APICallHousing";
  //   const response = await fetch(apiUrlEndPoint, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (response.ok) {
  //     const res = await response.json();
  //     console.log(res);
  //     res.forEach((element: any) => {
  //       console.log("ITBAC getHousing : " + element.Country);
  //     });
  //     setRows(res);
  //   } else {
  //     toast.error("Response Error..");
  //   }
  // };

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
      fetchData();
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

export default DevelopmentHousing;

DevelopmentHousing.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};
