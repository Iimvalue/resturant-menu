import Cards from "@/components/Cards/Card";
import Container from '@mui/material/Container'
import { Grid } from "@mui/material";
import Banner from "@/components/Banners/Banner";


export default function MenuPage() {

    return (
        <>
            <Banner
            title="MENU" 
            backgroundColor="#eeeeee" />
        
            <Container maxWidth={"lg"}>
                <Grid
                    container
                    justifyContent={{ xs: "center", sm: "left", md: "center" }}
                    spacing={6}
                    sx={{
                        mt: "80px",
                        mb: "80px"
                    }}
                >
                    <Cards
                        img="\beef.jpg"
                        title="BEEF"
                        href={{
                            pathname: '/menu/menu-content',
                            query: { itemSelected: "BEEF" }
                        }}
                    />
                    <Cards
                        img="\seafood-photo.jpg"
                        title="SEAFOOD"
                        href={{
                            pathname: '/menu/menu-content',
                            query: { itemSelected: "SEAFOOD" }
                        }}
                    />
                    <Cards
                        img="\chicken-photo.jpg"
                        title="CHICKEN"
                        href={{
                            pathname: '/menu/menu-content',
                            query: { itemSelected: "CHICKEN" }
                        }}
                    />
                </Grid>
            </Container>
        </>
    )
}
