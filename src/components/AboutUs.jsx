import React from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";
import introSectionImage from "../../public/intro_section_image.png";

export default function AboutUs() {
  return (
    <Box
      id="aboutme"
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 1, sm: 2, md: 4 },
        background: "#f7f8fa",
        width: "100%",
        maxWidth: "1500px",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left Section: Content */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: { xs: "center", md: "flex-end" },
            alignItems: "flex-start",
            pr: { xs: 2, md: 4 },
            height: "100%",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              background: "transparent",
              p: { xs: 2, sm: 3, md: 0 },
              width: "100%",
              maxWidth: 500,
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                mb: 2,
                color: "#1976d2",
                fontFamily: "Montserrat, sans-serif",
                textAlign: { xs: "center", md: "left" },
                letterSpacing: ".04em",
                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.2rem" },
                color: "#333",
                fontFamily: "Montserrat, sans-serif",
                lineHeight: 1.7,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              I am Yashwant Mali, a React.js developer with 3 years of
              experience. I love building modern, user-friendly web apps and
              enjoy solving real-world problems with clean and optimized code. I
              am passionate about learning new technologies and collaborating
              with others to deliver great products.
            </Typography>
          </Paper>
        </Grid>

        {/* Right Section: Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "top", md: "flex-start" },
            alignItems: "left",
            pl: { md: 4 },
            width: "40%",
            height: "100%",
          }}
        >
          <Box
            component="img"
            src={introSectionImage}
            alt="Intro Section Visual"
            sx={{
              width: { xs: "90%", sm: "80%", md: "100%" },
              maxWidth: 380,
              height: "auto",
              objectFit: "cover",
              borderRadius: 4,
              boxShadow: 2,
              display: "block",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
