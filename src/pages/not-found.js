import React from "react";
import Layout from "../components/shared/Layout";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <Layout marginTop={120} title="Page Not Found">
      <Typography variant="h5" align="center" paragraph>
        Sorry, this page isn't available.
      </Typography>
      <Typography align="center">
        The link you followed may be broken, or the page may have been removed.
        <Link to="/">
          {" "}
          <Typography component="span" color="primary">
            Go back to Instagram.
          </Typography>
        </Link>
      </Typography>
    </Layout>
  );
}

export default NotFoundPage;
