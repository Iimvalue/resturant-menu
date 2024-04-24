"use client ";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useState } from "react";

export default function Footer() {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#404142",
        p: 6,
        position: "sticky",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth="md">
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent={"space-around"}
          alignItems={"start"}
        >
          <Grid item xs={12} sm={2}>
            <Typography variant="h5" color="white" gutterBottom>
              About Us
            </Typography>
            <Typography variant="subtitle2" color="white">
              We are RESTAURANT NAME, dedicated to providing the best service to
              our customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h5" color="white" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="white">
              Email: a.saad.altami@gmail.com
            </Typography>
            <Typography variant="body2" color="white">
              Phone: +966547826561
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{
                color: "white",
                textDecorationColor: "white",
                "&:hover": {
                  textDecorationColor: "orange",
                  color: "orange",
                },
              }}
            >
              <Link href={"/contact"} style={{ color: "inherit" }}>
                Contact Page
              </Link>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Typography variant="h5" color="white" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook
                sx={{
                  color: "#f0f0f0",
                  "&:hover": {
                    color: "orange",
                  },
                }}
              />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              style={{ paddingLeft: 1, paddingRight: 1 }}
            >
              <Instagram
                sx={{
                  color: "#f0f0f0",
                  "&:hover": {
                    color: "orange",
                  },
                }}
              />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter
                sx={{
                  color: "#f0f0f0",
                  "&:hover": {
                    color: "orange",
                  },
                }}
              />
            </Link>
          </Grid>
        </Grid>
        <Box mt={6}>
          <Typography variant="body2" color="white" align="center">
            <span>{"Copyright © "}</span>
            <Link
              color="inherit"
              href="/"
              style={{
                color: isHover ? "orange" : "inherit",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              RESTAURANT NAME
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
