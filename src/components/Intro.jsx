import React from "react";
import { Grid, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import profilePhoto from "../../public/ProfilePhoto.png";
import Resume from "../../public/resume.pdf";

export default function Intro() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="intro"
      sx={{
        flexGrow: 1,
        py: { xs: 2, md: 4 },
        px: { xs: 1.5, sm: 4, md: 10 },
        background: "#fafbfc",
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={4}
        direction={{ xs: "column-reverse", md: "row" }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              color: "black",
              letterSpacing: ".05em",
              mb: 0,
              fontSize: { xs: "2rem", sm: "2.3rem", md: "2.8rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Hello,
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 100,
              color: "#222 bold",
              letterSpacing: ".05px",
              mb: 2,
              fontSize: { xs: "2rem", sm: "2.3rem", md: "2.8rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            I'm Yashwant
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              color: "purple",
              letterSpacing: ".08em",
              fontSize: { xs: "2.2rem", sm: "2.5rem", md: "3.2rem" },
              textDecoration: "underline",
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 2, md: 0 },
            }}
          >
            Software Developer
          </Typography>
          <Box
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "flex-start" },
              gap: { xs: 1.5, sm: 2 },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <a
              href="https://skillsphere-frontend-pink.vercel.app/home"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                style={{
                  background: "#1976d2",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "10px 28px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  fontFamily: "Montserrat, sans-serif",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px 0 rgba(25, 118, 210, 0.08)",
                  transition: "background 0.2s",
                  width: isMobile ? "90vw" : "inherit",
                  maxWidth: 320,
                }}
              >
                My Project
              </button>
            </a>
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                style={{
                  background: "#fff",
                  color: "#1976d2",
                  border: "2px solid #1976d2",
                  borderRadius: 6,
                  padding: "10px 28px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  fontFamily: "Montserrat, sans-serif",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px 0 rgba(25, 118, 210, 0.08)",
                  transition: "background 0.2s",
                  width: isMobile ? "90vw" : "inherit",
                  maxWidth: 320,
                }}
              >
                Resume
              </button>
            </a>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Box
            component="img"
            src={profilePhoto}
            alt="Yashwant Mali Portfolio"
            sx={{
              width: { xs: 170, sm: 200, md: 320 },
              height: { xs: 190, sm: 260, md: 400 },
              objectFit: "cover",
              borderRadius: 3,
              boxShadow: "0 2px 18px 0 rgba(25,130,220,0.08)",
              maxWidth: "96vw",
              display: "block",
              mx: { xs: "auto", md: 0 },
              mb: { xs: 2, md: 0 },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
