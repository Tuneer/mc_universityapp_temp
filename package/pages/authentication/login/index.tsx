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

const Login2 = () => {
  const router = useRouter();

  const [userRole, setUserRole] = useState<string>("user");
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [error, setError] = useState({});

  const setErrorForField = (errorStr: string, fieldName: string) => {
    setError({ ...error, [fieldName]: errorStr });
  };

  const onChangeValue = (txtValue: string, setter: Function) => {
    // if(setter === setUserName){
    //   if (txtValue.length == 0) {
    //     toast.error('Please enter username.', {
    //       position: "bottom-center",
    //       autoClose: 5000,
    //       hideProgressBar: true,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "dark",
    //       });
    //   }else{
    //     setter(txtValue);
    //   }

    // }else if(setter===setUserRole){
    //   if (txtValue.length===0) {
    //     toast.error('Please enter userrole.', {
    //       position: "bottom-center",
    //       autoClose: 5000,
    //       hideProgressBar: true,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "dark",
    //       });
    //   }else{
    //     setter(txtValue);
    //   }
    // }else if (setter === setUserPassword) {
    //   if (txtValue.length===0) {
    //     toast.error('Please enter userpassword.', {
    //       position: "bottom-center",
    //       autoClose: 5000,
    //       hideProgressBar: true,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "dark",
    //       });
    //   }else{
    //     setter(txtValue);
    //   }
    // }

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
    // getUsers(e);
  }, []);

  return (
    <PageContainer title="Login" description="this is Login page">
      <form>
        <Box
          sx={{
            position: "relative",
            "&:before": {
              content: '""',
              background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
              backgroundSize: "400% 400%",
              animation: "gradient 15s ease infinite",
              position: "absolute",
              height: "100%",
              width: "100%",
              opacity: "0.3",
            },
          }}
        >
          <Grid
            container
            spacing={0}
            justifyContent="center"
            sx={{ height: "100vh" }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              lg={4}
              xl={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Card
                elevation={9}
                sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
              >
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Logo />
                </Box>

                <Typography
                  variant="subtitle1"
                  textAlign="center"
                  color="textSecondary"
                  mb={1}
                >
                  Welcome to Chec
                </Typography>

                <Stack>
                  <Box>
                    <Typography
                      mt="25px"
                      variant="subtitle1"
                      fontWeight={600}
                      component="label"
                      htmlFor="rolename"
                      mb="5px"
                    >
                      Role
                    </Typography>
                    <CustomTextField
                      id="rolename"
                      onChange={(event: { target: { value: string } }) => {
                        onChangeValue(event.target.value, setUserRole);
                      }}
                      variant="outlined"
                      fullWidth
                    />
                    <Typography
                      mt="25px"
                      variant="subtitle1"
                      fontWeight={600}
                      component="label"
                      htmlFor="username"
                      mb="5px"
                    >
                      Username
                    </Typography>
                    <CustomTextField
                      id="username"
                      onChange={(event: { target: { value: string } }) => {
                        onChangeValue(event.target.value, setUserName);
                      }}
                      variant="outlined"
                      fullWidth
                    />
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
                    <CustomTextField
                      id="password"
                      onChange={(event: { target: { value: string } }) => {
                        onChangeValue(event.target.value, setUserPassword);
                      }}
                      name="password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      pattern="[a-z0-9]{1,15}"
                      title="Password should be digits (0 to 9) or alphabets (a to z)."
                    />
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
                    onClick={() => {
                      loginUser();
                    }}
                  >
                    Sign In
                  </Button>
                </Box>
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  mt={3}
                >
                  <Typography
                    color="textSecondary"
                    variant="h6"
                    fontWeight="500"
                  >
                    New to Chec?
                  </Typography>
                  <Typography
                    component={Link}
                    href="/authentication/register"
                    fontWeight="500"
                    sx={{
                      textDecoration: "none",
                      color: "primary.main",
                    }}
                  >
                    Create an account
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          </Grid>

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
        </Box>
      </form>
    </PageContainer>
  );
};

export default Login2;

Login2.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};
