import {
Avatar,
Button,
Card,
CardMedia,
Container,
Grid,
Typography
} from "@mui/material"
import DetailCard from "@/components/Cards/DetailCard"
import Banner from "@/components/Banners/Banner"


export default function App() {

  return (
    <>
      <Avatar
        src={"/backgroundFood.jpg"}

        sx={{
          width: { xs: "100%", md: "100%" },
          height: { xs: "40vh", sm: "70vh", md: "100vh" },
          backgroundPosition: "center",
          borderRadius: 0,
          mt: -1,
          pb: 6
        }} />

      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          left: { xs: "32%", md: "45%" },
          top: { xs: "20%", sm: "30%", md: "40%" },
          color: "#a07a43",
          fontSize: { xs: 30, sm: 70, md: 100 },
          letterSpacing: "10px",

        }}
      >
        RESTAURANT NAME
      </Typography>

      <Container maxWidth="lg">
        <Grid
          container
          spacing={10}
          justifyContent={{ xs: "center" }}
          sx={{
            marginBottom: "50px",
          }}
        >
          <Grid item >
            <Card sx={{
              position: "relative",
              width: { xs: 350, md: 445 }

            }}>
              <CardMedia
                component="img"
                image="\chicken-photo.jpg"
                alt="juace"
                sx={{
                  filter: "brightness(60%)",
                  height: { xs: "400px", md: "440px" }
                }}
              />
              <Button
                size="large"
                variant="contained"
                href="/menu"
                sx={{
                  position: 'absolute',
                  top: '80%',
                  left: { xs: '90px', md: "120px" },
                  bgcolor: "#404142",
                  fontWeight: "bold",
                  width: "50%",
                  height: "55px",
                  "&:hover": {
                    boxShadow: "0px 3px 8px 0px orange",
                    bgcolor: "#404142",
                    color: "orange"
                  }
                }}
              >
                FULL MENU
              </Button>

              <Typography
                variant="h4"
                sx={{
                  position: 'absolute',
                  top: '30%',
                  left: { xs: '100px', md: "150px" },
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                FIND OUT <br />
                YOUR <br />
                FAVORITE <br />
                FOOD
              </Typography>
            </Card>
          </Grid>

          <Grid item>
            <Card sx={{
              position: "relative",
              width: { xs: 355, md: 600 },
              mt: { xs: 0, md: 5 }
            }}>

              <CardMedia
                component="img"
                width="100%"
                image="\Full-Menu.jpg"
                alt="X"
                sx={{
                  filter: "brightness(60%)",
                  height: { xs: "400px", md: "350px" }
                }}
              />
              <Button
                size="large"
                variant="outlined"
                disabled
                sx={{
                  position: 'absolute',
                  top: '80%',
                  left: { xs: '100px', md: "200px" },
                  bgcolor: "#404142",
                  width: "40%",
                  height: "55px",
                  fontWeight: "bold",
                }}
              >
                ORDER NOW
              </Button>

              <Typography
                variant="h4"
                sx={{
                  position: 'absolute',
                  direction: "row",
                  top: '30%',
                  left: { xs: '120px', md: "230px" },
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center"
                }}
              >
                DELIVERY <br />
                DINE-IN <br />
                PICKUP

              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  position: 'absolute',
                  top: "0",
                  left: "0px",
                  fontWeight: "bold",
                  color: "red",
                  border: "1px solid gray",
                  borderRadius: "3px",
                  borderTop: "0px",
                  borderLeft: "0px"
                }}
              >
                COMING SOON
              </Typography>
            </Card>
          </Grid>
        </Grid>

      </Container>

      <Banner
        title={`Bestsellers`}
        backgroundColor="#eeeeee" />
      <Container
        maxWidth="lg"
        sx={{
          mt: 6,
          mb: 6
        }}
      >
        <Grid
          container
          spacing={5}
          justifyContent={"center"}
        >
          <DetailCard
            title={"CHICKEN SALAD"}
            img={"/FIESTA-CHICKEN-CHOPPED-SALAD.png"} />
          <DetailCard
            title={"Lemon juice"}
            img={"/drink-photo.jpg"} />
        </Grid>
      </Container>
    </>



  )
}
