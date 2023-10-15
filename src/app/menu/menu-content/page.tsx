'use client'

import { Box, Button, Container, Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Key, useEffect, useState } from "react";
import Loading from "./laoding";
import Banner from "@/components/Banner";
import DetailCard from "@/components/DetailCard";
import { useSearchParams } from 'next/navigation'



export default function MenuContentPage() {

    const searchParams = useSearchParams();
    const itemSelectedFromMenu = searchParams.get('itemSelected');
    
    const [itemSelected, setItemSelected] = useState<string | null>('')
    const [data, setData] = useState<any>({})
    function handleClick(e: any) {
        setItemSelected(e.target.innerText)
    }

    useEffect(() => {
        if (itemSelected === 'CHICKEN') {
            fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken')
                .then(res => {
                    return res.json();
                }).then(data => {
                    setData(data)
                })


        }
        else if (itemSelected === 'BEEF') {
            fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=beef')
                .then(res => {
                    return res.json();
                }).then(data => {
                    setData(data)

                })
        }
        else if (itemSelected === 'SEAFOOD') {
            fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
                .then(res => {
                    return res.json();
                }).then(data => {
                    setData(data)
                })
        }
        else
            setItemSelected(itemSelectedFromMenu)
    }, [itemSelected])

    if (!data.meals) return <Loading />

    return (

        <>
            <Banner
                title={itemSelected + ' MENU'}
                backgroundColor="#eeeeee"
            />
            <Divider sx={{ borderColor: "#e0e0e0" }} />
            <Box
                sx={{
                    position: { xs: "relative", sm: "absolute" },
                    mt: { xs: "10px", sm: "30px" },
                    ml: { xs: "10px", sm: "15px" },
                    mb: { xs: "80px", sm: "0px" },
                    height: '100%',
                    width: "200px",
                    borderRight: { xs: "0px", sm: "1px solid #e0e0e0" },
                    display: "block",
                }}
            >
                <Container
                    maxWidth={"lg"}
                    sx={{
                        position: { sm: "sticky" },
                        top: 70
                    }}
                >
                    <Grid container
                        direction={"column"}
                        alignItems={"center"}
                    >
                        <Grid item xs={12}>
                            <Typography
                                variant="h4"
                                align="center"
                                sx={{ pt: "20px" }}
                            >
                                MENU
                            </Typography>
                            <List >
                                <ListItem>
                                    <ListItemText
                                        primary=
                                        {
                                            <Button
                                                onClick={(e) =>
                                                    handleClick(e)}
                                                sx={{
                                                    color: `${itemSelected === 'CHICKEN' ? 'Orange' : '#959595'}`,
                                                    width: { xs: "320px", sm: "0px" }
                                                }}
                                            >
                                                Chicken
                                            </Button>
                                        } />
                                </ListItem>

                                <ListItem>
                                    <ListItemText
                                        primary=
                                        {
                                            <Button
                                                onClick={(e) =>
                                                    handleClick(e)}
                                                sx={{
                                                    color: `${itemSelected === 'BEEF' ? 'Orange' : '#959595'}`,
                                                    width: { xs: "320px", sm: "0px" }
                                                }}
                                            >
                                                Beef
                                            </Button>
                                        } />
                                </ListItem>

                                <ListItem>
                                    <ListItemText
                                        primary=
                                        {
                                            <Button
                                                onClick={(e) =>
                                                    handleClick(e)}
                                                sx={{
                                                    color: `${itemSelected === 'SEAFOOD' ? 'Orange' : '#959595'}`,
                                                    width: { xs: "320px", sm: "0px" }
                                                }}
                                            >
                                                SeaFood
                                            </Button>
                                        } />
                                </ListItem>

                            </List>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container
                maxWidth="lg"
                sx={{
                    paddingTop: "30px",
                    mb: "20px",
                }}
            >
                <Grid
                    container
                    justifyContent={{ xs: "center", sm: "left", md: "left" }}
                    spacing={2}
                    sx={{
                        pl: { sm: "210px", md: "210px", lg: "95px" },

                    }}
                >
                    {data && data.meals.map((meal: { idMeal: Key | null | undefined; strMeal: string; strMealThumb: string; }) => {
                        return (

                            <DetailCard
                                key={meal.idMeal}
                                title={meal.strMeal}
                                img={meal.strMealThumb} />

                        )
                    })}
                </Grid>
            </Container>

        </>

    )
}
