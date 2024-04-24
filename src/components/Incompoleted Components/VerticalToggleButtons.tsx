'use client'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box, Card,  Grid, Typography } from '@mui/material';
import { useState } from 'react';

export default function VerticalToggleButtons() {
    const [view, setView] = useState('list');

    const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
        setView(nextView);
    };

    return (
        <>
            <Card

                variant="outlined"

                sx={{
                    width: 500,
                    height: 500,
                    padding: 5,
                    margin: 10

                }}
            >

                <ToggleButtonGroup
                    orientation="vertical"
                    value={view}
                    exclusive
                    onChange={handleChange}
                    sx={{
                        display: "flex",
                        width: "100%",
                        flexDirection: "column",

                    }}
                >
                    <ToggleButton
                        value="list"
                        aria-label="list"
                        disableRipple
                        sx={{
                            "&.MuiToggleButtonGroup-grouped": {
                                borderRadius: "4px !important",
                                m: 2,

                            },
                            "&.Mui-selected": {
                                bgcolor: "transparent",
                                border: "1px solid black",
                                ":hover": {
                                    bgcolor: "transparent"
                                }
                            },

                        }}

                    >
                        <Grid
                            container
                            alignItems={"flex-start"}
                            columnGap={1}
                        >
                            <Grid
                                item
                                xs={2}

                            >
                                <Box
                                    component={"img"}
                                    src='/smsa-icon.png'
                                    width={"80%"}
                                    borderRadius={"20%"}
                                />
                            </Grid>

                            <Grid
                                item
                                xs
                                textAlign={"start"}
                            >
                                <Typography
                                    variant="h5"
                                    color="initial"
                                >
                                    سمسا
                                </Typography>

                                <Typography
                                    variant="subtitle2"
                                    color="gray"
                                >
                                    من يوم الى يومين عمل
                                </Typography>
                            </Grid>

                            <Grid
                                item
                                xs
                                textAlign={"end"}

                            >
                                <Typography
                                    variant="body1"
                                    color="initial"
                                >
                                    0$
                                </Typography>
                            </Grid>

                        </Grid>

                    </ToggleButton>

                    <ToggleButton
                        value="module"
                        aria-label="module"
                        sx={{
                            "&.MuiToggleButtonGroup-grouped": {
                                borderRadius: "4px !important",
                                m: 2,

                            },
                            "&.Mui-selected": {
                                bgcolor: "transparent",
                                border: "1px solid black",
                                ":hover": {
                                    bgcolor: "transparent"
                                }
                            },

                        }}
                    >

                        <Grid
                            container
                            alignItems={"flex-start"}
                            columnGap={1}
                        >
                            <Grid
                                item
                                xs={2}

                            >
                                <Box
                                    component={"img"}
                                    src='/aramex-icon.png'
                                    width={"80%"}
                                    borderRadius={"20%"}
                                />
                            </Grid>

                            <Grid
                                item
                                xs
                                textAlign={"start"}
                            >
                                <Typography
                                    variant="h5"
                                    color="initial"
                                >
                                    أراميكس
                                </Typography>

                                <Typography
                                    variant="subtitle2"
                                    color="gray"
                                >
                                    من يومين الى ثلاثة أيام عمل
                                </Typography>
                            </Grid>

                            <Grid
                                item
                                xs
                                textAlign={"end"}

                            >
                                <Typography
                                    variant="body1"
                                    color="initial"
                                >
                                    0$
                                </Typography>
                            </Grid>

                        </Grid>

                    </ToggleButton>

                    <ToggleButton
                        value="quilt"
                        aria-label="quilt"
                        sx={{
                            "&.MuiToggleButtonGroup-grouped": {
                                borderRadius: "4px !important",
                                m: 2,

                            },
                            "&.Mui-selected": {
                                bgcolor: "transparent",
                                border: "1px solid black",
                                ":hover": {
                                    bgcolor: "transparent"
                                }
                            },

                        }}
                    >
                        <Grid
                            container
                            alignItems={"flex-start"}
                            columnGap={1}
                        >
                            <Grid
                                item
                                xs={2}
                            >
                                <Box
                                    component={"img"}
                                    src='/sbl-icon.jpg'
                                    width={"80%"}
                                    borderRadius={"20%"}
                                />
                            </Grid>

                            <Grid
                                item
                                xs
                                textAlign={"start"}
                            >
                                <Typography
                                    variant="h5"
                                    color="initial"
                                >
                                    سبل
                                </Typography>

                                <Typography
                                    variant="subtitle2"
                                    color="gray"
                                >
                                    يوم عمل
                                </Typography>
                            </Grid>

                            <Grid
                                item
                                xs
                                textAlign={"end"}

                            >
                                <Typography
                                    variant="body1"
                                    color="initial"
                                >
                                    0$
                                </Typography>
                            </Grid>

                        </Grid>

                    </ToggleButton>



                </ToggleButtonGroup>
            </Card>

        </>

    );
}
