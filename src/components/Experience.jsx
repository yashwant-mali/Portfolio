import React from "react";
import { Box, Grid, Typography, Paper, Divider } from "@mui/material";

export default function Experience() {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 0 },
        px: { xs: 2, md: 8 },
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
        }}
      >
        Experience
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        {/* Left Side - HomeDept Project */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={2}
            sx={{
              p: { xs: 2, md: 4 },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: 3,
              background: "#fff",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#222",
                fontFamily: "Montserrat, sans-serif",
                mb: 1,
              }}
            >
              HomeDept
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#1976d2",
                fontWeight: 600,
                fontFamily: "Montserrat, sans-serif",
                mb: 0.5,
              }}
            >
              Company: HomeDept Solutions Pvt. Ltd.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#666",
                fontFamily: "Montserrat, sans-serif",
                mb: 1,
              }}
            >
              Period: Jan 2022 – Mar 2024
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#444",
                fontWeight: 600,
                fontFamily: "Montserrat, sans-serif",
                mb: 1,
              }}
            >
              Profile: Frontend React Developer
            </Typography>
            <Divider sx={{ my: 1.5 }} />
            <Typography
              variant="body1"
              sx={{
                color: "#333",
                fontFamily: "Montserrat, sans-serif",
                lineHeight: 1.7,
              }}
            >
              <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
                <li>
                  Developed and maintained scalable React.js applications for
                  e-commerce solutions.
                </li>
                <li>
                  Collaborated with UI/UX designers to deliver pixel-perfect
                  interfaces.
                </li>
                <li>
                  Integrated REST APIs and optimized performance for
                  high-traffic scenarios.
                </li>
                <li>
                  Mentored junior developers and led code reviews for best
                  practices.
                </li>
              </ul>
            </Typography>
          </Paper>
        </Grid>

        {/* Right Side - GAP Project */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={2}
            sx={{
              p: { xs: 2, md: 4 },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: 3,
              background: "#fff",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#222",
                fontFamily: "Montserrat, sans-serif",
                mb: 1,
              }}
            >
              GAP Project
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#1976d2",
                fontWeight: 600,
                fontFamily: "Montserrat, sans-serif",
                mb: 0.5,
              }}
            >
              Company: GAP Technologies
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#666",
                fontFamily: "Montserrat, sans-serif",
                mb: 1,
              }}
            >
              Period: Apr 2024 – Present
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#444",
                fontWeight: 600,
                fontFamily: "Montserrat, sans-serif",
                mb: 1,
              }}
            >
              Profile: React.js Engineer
            </Typography>
            <Divider sx={{ my: 1.5 }} />
            <Typography
              variant="body1"
              sx={{
                color: "#333",
                fontFamily: "Montserrat, sans-serif",
                lineHeight: 1.7,
              }}
            >
              <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
                <li>
                  Leading the migration of legacy codebases to modern React.js
                  architecture.
                </li>
                <li>
                  Implementing advanced state management and reusable component
                  libraries.
                </li>
                <li>
                  Working closely with backend teams for seamless API
                  integration.
                </li>
                <li>
                  Driving agile development and continuous improvement
                  initiatives.
                </li>
              </ul>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
