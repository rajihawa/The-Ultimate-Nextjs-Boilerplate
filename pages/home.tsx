import React, { useContext } from "react";
import { NextPage } from "next";
import { mustBeLogged } from "../components/auth/withAuth";
import Layout from "../components/Layout";
import { Container, Box, Typography } from "@material-ui/core";
import { AuthControl } from "../context/authControl";

const HomePage: NextPage = () => {
  const { user } = useContext(AuthControl);

  return (
    <Layout title="home">
      <Container maxWidth="md">
        <Typography variant="h2" align="center">
          {user.name}
        </Typography>
        <Box display="flex" justifyContent="center" flexWrap="wrap" padding={5}>
          <Typography variant="h2" align="center">
            The Home Page
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
};

export default mustBeLogged(HomePage);
