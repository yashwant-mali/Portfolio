import React from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";
import experienceIllustration from "../../public/frontend-developers.png";

export default function AboutUs() {
  return (
    <Box
      id="aboutme"
      sx={{
        py: { xs: 5, md: 7 },
        px: { xs: 2, sm: 3, md: 4 },
        background: "#ffffff",
        borderTop: "1px solid #e5e7eb",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Box sx={{ maxWidth: 1280, mx: "auto" }}>
        <Grid
          container
          spacing={{ xs: 3, md: 6 }}
          alignItems="center"
          justifyContent="center"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                background: "transparent",
                p: 0,
                width: "100%",
                maxWidth: 560,
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
                  fontSize: { xs: "0.96rem", sm: "1.02rem", md: "1.12rem" },
                  color: "#333",
                  fontFamily: "Montserrat, sans-serif",
                  lineHeight: 1.8,
                  textAlign: { xs: "center", md: "left" },
                  mb: 2,
                }}
              >
                I am Yashwant Mali, a Frontend Engineer with 4 years of
                experience building enterprise-scale applications for
                high-traffic commerce platforms. I focus on improving Core Web
                Vitals, accessibility, and production reliability through
                performance optimization, reusable architecture, and disciplined
                testing.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.94rem", sm: "1rem" },
                  color: "#374151",
                  fontFamily: "Montserrat, sans-serif",
                  lineHeight: 1.8,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Core stack: React.js, Next.js, Redux, Redux Toolkit, JavaScript,
                HTML5, CSS3, Tailwind CSS, Material UI, Bootstrap, Node.js,
                Express.js, MongoDB, MySQL, Jest, React Testing Library, Git,
                GitHub, Jira, Webpack, Vite, CI/CD, Core Web Vitals, LightHouse
                and Profiler.
              </Typography>
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={experienceIllustration}
              alt="Frontend engineering illustration representing four years of experience"
              sx={{
                width: { xs: "100%", sm: "84%", md: "100%" },
                maxWidth: 430,
                height: "auto",
                objectFit: "contain",
                borderRadius: 4,
                display: "block",
                background: "transparent",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
