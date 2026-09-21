import React from "react";
import { Grid, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import profilePhoto from "../../public/ProfilePhoto.png";
import Resume from "../../public/Resume.pdf";

export default function Intro() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="intro"
      sx={{
        background: "#fafbfc",
        borderBottom: "1px solid #e5e7eb",
        py: { xs: 5, md: 7 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box sx={{ maxWidth: 1280, mx: "auto" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 3, md: 5 }}
          direction={{ xs: "column-reverse", md: "row" }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                color: "#111827",
                letterSpacing: ".04em",
                mb: 0.5,
                fontSize: { xs: "2rem", sm: "2.4rem", md: "3rem" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Hello,
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 300,
                color: "#111827",
                letterSpacing: ".02em",
                mb: 1,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.1rem" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              I&apos;m Yashwant
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                color: "#3b82f6",
                letterSpacing: ".06em",
                textTransform: "uppercase",
                fontSize: { xs: "1.8rem", sm: "2.3rem", md: "3rem" },
                textAlign: { xs: "center", md: "left" },
                mb: 2,
              }}
            >
              Frontend Engineer
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#374151",
                fontFamily: "Montserrat, sans-serif",
                lineHeight: 1.7,
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                textAlign: { xs: "center", md: "left" },
                maxWidth: 560,
                mb: 3,
              }}
            >
              Frontend Engineer with 4 years of experience building
              enterprise-scale applications for high-traffic commerce platforms.
              I specialize in performance optimization, accessibility, reusable
              frontend architecture, and delivering reliable user experiences.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "stretch", sm: "center" },
                gap: { xs: 1.5, sm: 2 },
                justifyContent: { xs: "center", md: "flex-start" },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <button
                type="button"
                onClick={() => {
                  const projectSection = document.getElementById("project");
                  if (projectSection) {
                    projectSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                style={{
                  background: "#1976d2",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 24px",
                  fontWeight: 700,
                  fontSize: "0.96rem",
                  fontFamily: "Montserrat, sans-serif",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px 0 rgba(25, 118, 210, 0.12)",
                  width: isMobile ? "100%" : "auto",
                  minWidth: 180,
                }}
              >
                My Projects
              </button>
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button
                  type="button"
                  style={{
                    background: "#fff",
                    color: "#1976d2",
                    border: "2px solid #1976d2",
                    borderRadius: 8,
                    padding: "11px 24px",
                    fontWeight: 700,
                    fontSize: "0.96rem",
                    fontFamily: "Montserrat, sans-serif",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px 0 rgba(25, 118, 210, 0.08)",
                    width: isMobile ? "100%" : "auto",
                    minWidth: 180,
                  }}
                >
                  Resume
                </button>
              </a>
            </Box>
          </Grid>

          <Grid item xs={12} md={5.5} display="flex" justifyContent="center">
            <Box
              component="img"
              src={profilePhoto}
              alt="Yashwant Mali Portfolio"
              sx={{
                width: { xs: 220, sm: 260, md: 310 },
                height: { xs: 240, sm: 300, md: 360 },
                objectFit: "cover",
                borderRadius: 3,
                boxShadow: "0 18px 40px rgba(15, 23, 42, 0.08)",
                display: "block",
                mx: { xs: "auto", md: 0 },
                mb: { xs: 1, md: 0 },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
