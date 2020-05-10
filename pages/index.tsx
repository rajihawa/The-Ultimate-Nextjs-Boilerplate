import React from "react";
import { Box, Typography, Container } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { NextPage } from "next";
import Layout from "../components/Layout";
import Input from "../components/Inputs/Input";
import { LoginData, loginRequest } from "../lib/requests";
import { mustNotBeLogged } from "../components/auth/withAuth";

const LoginPage: NextPage = () => {
  const { register, handleSubmit, errors, setError } = useForm();
  const HandleSubmit = (data: LoginData) => {
    loginRequest(data).then((res) => {
      if ("name" in res) {
        location.reload();
      } else {
        setError("login", res.data);
      }
    });
  };

  return (
    <Layout title="Login">
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();

              handleSubmit(HandleSubmit)();
            }}
          >
            <Typography align="center" variant="h2">
              Login Form
            </Typography>
            <Input
              label={`Username`}
              inputRef={register({ required: true })}
              name="name"
              required
            />
            {errors.name && errors.name.type == "required" && (
              <span>field is required</span>
            )}
            <Input
              label={`Password`}
              name="password"
              isPassword={true}
              inputRef={register({ required: true })}
              required
            />
            {errors.password && errors.password.type == "required" && (
              <span>field is required</span>
            )}

            <Input label={`login`} type="submit" />
            {errors.login && <span>Oops, unable to log you in</span>}
          </form>
        </Box>
      </Container>
    </Layout>
  );
};

export default mustNotBeLogged(LoginPage);
