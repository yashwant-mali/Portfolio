import React from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";
import portfolioPhoto from "../assets/portfolio_photo.png";

export default function AboutUs() {
  return (
    <Box
      sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 8 }, background: "#f7f8fa" }}
    >
      <Grid
        container
        spacing={4}
        alignItems="stretch"
        wrap="nowrap"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            width: { md: "50%" },
            minWidth: 0,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-center" },
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={portfolioPhoto}
            alt="Yashwant Mali Portfolio"
            sx={{
              width: { xs: "100%", sm: 220, md: 320 },
              height: { xs: 180, sm: 260, md: 400 },
              objectFit: "cover",
              maxWidth: "100%",
              m: 0,
              p: { xs: 0, md: 0, lg: 0 },
              pl: { md: 0, lg: 2 },
              display: "block",
              borderRadius: 4,
              boxShadow: 2,
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            width: { md: "50%" },
            minWidth: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Paper
            elevation={0}
            sx={{ background: "transparent", p: 0, width: "100%" }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                mb: 2,
                color: "#1976d2",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.2rem" },
                color: "#333",
                fontFamily: "Montserrat, sans-serif",
                lineHeight: 1.7,
              }}
            >
              I am Yashwant Mali, a React.js developer with 3 years of
              experience. I love building modern, user-friendly web apps and
              enjoy solving real-world problems with clean code. I am passionate
              about learning new technologies and collaborating with others to
              deliver great products.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
