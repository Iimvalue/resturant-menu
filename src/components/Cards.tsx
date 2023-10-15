import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea,  Grid } from '@mui/material';
import Link from 'next/link';
import { UrlObject } from 'url';

type CardProps = {
    img: string,
    title: string,
    href?: string | UrlObject
}

export default function Card1(props: CardProps) {
    const { img, title, href } = props

    return (
        <>
            <Grid item xs={10} sm={6} md={3} >
                <Link
                     href={href ?? "#"}
                    style={{
                        textDecoration: "none"
                    }}
                >
                    <Card sx={{
                        height: 250,
                        "&:hover": {
                            display: "block",
                            transform: "scale(1.01)",
                            transition: "all .5"
                        }
                    }}>

                        <CardActionArea

                        >
                            <CardMedia
                                component="img"
                                height="206"
                                image={img}
                                alt="X"
                            />
                            <CardContent
                                sx={{
                                    backgroundColor: "#3d5567",
                                    paddingTop: "2%",
                                }}
                            >

                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        display: "grid",
                                        justifyContent: "center",
                                        color: "white",
                                    }}
                                >
                                    {title}
                                </Typography>

                            </CardContent>
                        </CardActionArea>

                    </Card>
                </Link >
            </Grid>


        </>
    );
}
