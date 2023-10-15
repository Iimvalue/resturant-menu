import { Box, Grid, Link, Typography } from "@mui/material";
type BannerProps = {
    title?: string,
    backgroundColor?: string,
    img?: string,
    subtitle?: string,
    linkTitle?: string,
    link?: string
}

export default function Banner(props: BannerProps) {
    const { title,
        backgroundColor,
        img,
        subtitle,
        linkTitle,
        link 
    } = props
    return (
        <>
            <Box
                sx={{
                    bgcolor: { backgroundColor },
                    width: "100%",
                    height: "240px",
                    backgroundImage: { img }
                }}
            >
                <Grid 
                container
                 spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ minHeight: '20vh' }} 
                    >
                    <Grid item >
                        <Typography
                            variant="h3"
                            color="initial"
                        >
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="caption"
                        >
                            <Link
                                href={link}
                                sx={{
                                    color: "black",
                                    borderColor: "black",
                                    fontFamily: "var(--font-francois)"
                                }}
                            >
                                {linkTitle}
                                </Link>
                            {subtitle}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
