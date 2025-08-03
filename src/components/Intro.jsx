import React from "react";
import { Grid, Typography, Box, Avatar } from "@mui/material";
import portfolioPhoto from "../assets/portfolio_photo.png";

export default function Intro() {
  return (
    <Box
      sx={{ flexGrow: 1, py: 2, px: { xs: 2, md: 8 }, background: "#fafbfc" }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={4}
        display="flex"
        flexDirection="row"
        gap="300px"
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
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}
          >
            Hello,
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 100,
              color: "#222",
              letterSpacing: ".05px",
              mb: 2,
              fontSize: { xs: "2rem", md: "2.8rem" },
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
              fontSize: { xs: "2.2rem", md: "3.2rem" },
              textDecoration: "underline",
            }}
          >
            Software Developer
          </Typography>
          <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
            <Box>
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
                  }}
                >
                  My Project
                </button>
              </a>
            </Box>
            <Box>
              <a
                href="src\assets\resume.pdf"
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
                  }}
                >
                  Resume
                </button>
              </a>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Box
            component="img"
            src={portfolioPhoto}
            alt="Yashwant Mali Portfolio"
            sx={{
              width: { xs: 200, md: 320 },
              height: { xs: 260, md: 400 },
              objectFit: "cover",
              maxWidth: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
