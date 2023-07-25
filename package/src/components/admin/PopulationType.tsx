import Link from "next/link";
import { ReactElement, useEffect } from "react";
import BlankLayout from "../../../src/layouts/blank/BlankLayout";

// components
import PageContainer from "../../../src/components/container/PageContainer";
import { Typography } from "@mui/material";

const PopulationType = () => {
  useEffect(() => {
    console.log("PopulationType");
    //get the list of country,province etc.
  }, []);

  return (
    <PageContainer title="Login" description="this is Login page">
      <Typography>PopulationType</Typography>
    </PageContainer>
  );
};

export default PopulationType;

PopulationType.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};
