"use client";
import { useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import Banner from "@/components/Banners/Banner";
import Image from "next/image";

export default function Contact() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { handleSubmit } = useForm();
  const onSubmit = (data: object) => console.log(data);

  return (
    <Box
      sx={{
        height: "100%",
        mt: -1,
      }}
    >
      <Banner title="Contact us" backgroundColor="#eeeeee" />
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              p: 2,
              mt: 3,
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Image
                      src="/bg-contact.jpg"
                      alt="Contact"
                      width={500}
                      height={500}
                      style={{width:"100%"}}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="+966xxxxxxxx"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    required
                    type="email"
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    margin="normal"
                    required
                    multiline
                    rows={4}
                    sx={{
                      "&:focus": {
                        color: "orange",
                        borderColor: "orange",
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    sx={{
                      bgcolor: "#404142",
                      fontWeight: "bold",
                      width: "30%",
                      height: "55px",
                      "&:hover": {
                        bgcolor: "#404142",
                        color: "orange",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
