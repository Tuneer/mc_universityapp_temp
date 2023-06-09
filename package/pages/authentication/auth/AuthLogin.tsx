import React from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from "@mui/material";

import Link from "next/link";

import CustomTextField from "../../../src/components/forms/theme-elements/CustomTextField";
import NextAuth from "next-auth/next";

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
  data?:JSX.Element | JSX.Element[];
  userName?:JSX.Element | JSX.Element[];
  passWord?:JSX.Element | JSX.Element[];
  roleName?:JSX.Element | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext,data,roleName,userName,passWord}: loginType) => (
  <>
    {title ? (
      <Typography fontWeight="700" variant="h2" mb={1}>
        {title}
      </Typography>
    ) : null}

<Typography variant="subtitle1" textAlign="center" color="textSecondary" mb={1}>
                    Welcome to Chec
                  </Typography>

    <Stack>
      <Box>
      <Typography mt="25px"
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="rolename"
                  mb="5px"
                >
                  Role
                </Typography>
                <CustomTextField id="rolename" name="rolename" variant="outlined" fullWidth />
        <Typography
          variant="subtitle1"
          fontWeight={600}
          component="label"
          htmlFor="username"
          mb="5px"
        >
          Username
        </Typography>
        <CustomTextField id="username" variant="outlined" fullWidth />
      </Box>
      <Box mt="25px">
        <Typography
          variant="subtitle1"
          fontWeight={600}
          component="label"
          htmlFor="password"
          mb="5px"
        >
          Password
        </Typography>
        <CustomTextField id="password" type="password" variant="outlined" fullWidth />
      </Box>
      <Stack
        justifyContent="space-between"
        direction="row"
        alignItems="center"
        my={2}
      >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remeber this Device"
          />
        </FormGroup>
        <Typography
          component={Link}
          href="/"
          fontWeight="500"
          sx={{
            textDecoration: "none",
            color: "primary.main",
          }}
        >
          Forgot Password ?
        </Typography>
      </Stack>
    </Stack>
    <Box>
    <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        component={Link}
        href="/"
        type="submit"
        onClick={()=>{
          // if(!Link.arguments.username.isNull()){
          //   getUsers(Link.arguments.username,Link.arguments.password)
          // }else{
            console.log("USERNAME REQUIRED! ",Link.arguments.rolename)
         // }
          
        }}
      >
        Sign In
      </Button>
    </Box>
    <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
                    <Typography color="textSecondary" variant="h6" fontWeight="500">
                      New to Chec?
                    </Typography>
                    <Typography
                      component={Link}
                      href="/authentication/register"
                      fontWeight="500"
                      sx={{
                        textDecoration: 'none',
                        color: 'primary.main',
                      }}
                    >
                      Create an account
                    </Typography>
                  </Stack>
  </>
);

export default AuthLogin;
