import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, Grid } from '@mui/material';

type CardProps = {
    img: string,
    title: string
}

export default function DetailCard(props: CardProps) {
    const { img, title } = props

    return (
        <>
            <Grid item xs={10} sm={6} md={3} lg={3} >

                <Card sx={{
                    height: 275,
                    "&:hover": {
                        display: "block",
                        transform: "scale(1.01)",
                        transition: "all .5"
                    }
                }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="206"
                            image={img}
                            alt="X"   
                        />

                        <CardContent
                            sx={{
                                backgroundColor: "#f0f0f0",
                                paddingTop: "2%",
                                height:"300px"
                            }}
                        >

                            <Typography
                                gutterBottom
                                variant="subtitle1"
                                component="div"
                                sx={{
                                    display: "grid",
                                    justifyContent: "center",
                                    color: "black",
                                }}
                            >
                                {title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                </Card>
            </Grid>
        </>
    );
}
