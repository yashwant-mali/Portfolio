import React from "react";
import { Box, Typography, Paper, Chip, Stack, Link, Grid } from "@mui/material";
import skillsphere1 from "../assets/skillsphere ss 1.png";
import skillsphere2 from "../assets/skillsphere ss 2.png";

export default function Project() {
  return (
    <Box
      id="project"
      sx={{
        py: { xs: 2, md: 6 },
        px: { xs: 1, sm: 2, md: 8 },
        background: "#f8fafc",
        minHeight: "60vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          mb: 4,
          color: "#1976d2",
          fontFamily: "Montserrat, sans-serif",
          textAlign: "center",
          letterSpacing: ".05em",
          fontSize: { xs: "1.8rem", md: "2.5rem" },
        }}
      >
        Project
      </Typography>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, md: 4 },
          borderRadius: 3,
          background: "#fff",
          maxWidth: 1500,
          width: "100%",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 8 }} // Increased gap between sections for desktop
          alignItems="center"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          {/* LEFT: Photos */}
          <Grid item xs={12} md={6}>
            <Grid
              container
              spacing={2}
              direction={{ xs: "row", md: "column" }}
              alignItems="center"
              justifyContent="center"
              sx={{ width: "100%" }}
            >
              <Grid item xs={6} md={12}>
                <Box
                  component="img"
                  src={skillsphere1}
                  alt="Skillsphere Screenshot 1"
                  sx={{
                    width: "100%",
                    maxWidth: 400,
                    height: { xs: 120, sm: 160, md: 250 },
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: 1,
                    display: "block",
                    mx: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={6} md={12}>
                <Box
                  component="img"
                  src={skillsphere2}
                  alt="Skillsphere Screenshot 2"
                  sx={{
                    width: "100%",
                    maxWidth: 400,
                    height: { xs: 120, sm: 160, md: 250 },
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: 1,
                    display: "block",
                    mx: "auto",
                    mt: { md: 2 },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* RIGHT: Info */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              pl: { xs: 0, md: 2 }, // Adds more space on desktop between the two sections
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "center",
                px: { xs: 0, md: 2 },
                width: "100%",
                maxWidth: { xs: "90%", md: 800 }, // <--- Adjust this to control width
                mx: { xs: "auto", md: 0 },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#222",
                  fontFamily: "Montserrat, sans-serif",
                  mb: 1,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Skillsphere
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  mb: 2,
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Chip label="React.js" color="primary" />
                <Chip label="Node.js" color="success" />
                <Chip label="MySQL" color="info" />
                <Chip label="Redux" variant="outlined" />
                <Chip label="MUI" variant="outlined" />
              </Stack>
              <Typography
                variant="body1"
                sx={{
                  color: "#333",
                  fontFamily: "Montserrat, sans-serif",
                  lineHeight: 1.7,
                  mb: 2,
                  textAlign: { xs: "center", md: "left" },
                  fontSize: { xs: "0.95rem", md: "1rem" },
                }}
              >
                This application is an innovative skill-booking platform
                designed to empower learners to book lessons in any skill—from
                music to programming, art to language—directly from institutes
                or individual teachers. Users can browse a diverse catalog of
                skills, compare different instructors and institutions based on
                their ratings, reviews, and fees, and select the option that
                best suits their learning needs and budget. The platform
                features a streamlined booking process, transparent pricing, and
                authentic rating/review systems to ensure trust and quality.
                Whether you’re looking to learn a new hobby, upskill for your
                career, or find the perfect teacher or institute, this
                application makes skill discovery and booking easy, reliable,
                and tailored to your goals.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#1976d2",
                  fontWeight: 600,
                  mb: 1,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Website:
                <Link
                  href="https://skillsphere-frontend-pink.vercel.app/home"
                  target="_blank"
                  rel="noopener"
                  sx={{ ml: 1, fontWeight: 500, wordBreak: "break-all" }}
                >
                  https://skillsphere-frontend-pink.vercel.app/home
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
