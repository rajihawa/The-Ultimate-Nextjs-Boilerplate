import { NextPage } from "next";
import { Typography, Container, Button, Box } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";

interface PageProps {
  statusCode: number;
}

const Error: NextPage<PageProps> = ({ statusCode }) => {
  const router = useRouter();
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h2" align="center">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : "An error occurred on client"}
        </Typography>
        <Button
          size="large"
          color="secondary"
          variant="contained"
          onClick={() => {
            router.push("/");
          }}
        >
          Go back to home page
        </Button>
      </Box>
    </Container>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  const returnData: PageProps = { statusCode };
  return returnData;
};

export default Error;
