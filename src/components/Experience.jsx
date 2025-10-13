import React from "react";
import { Box, Grid, Typography, Paper, Divider } from "@mui/material";

export default function Experience() {
  return (
    <Box
      id="Experience"
      sx={{
        py: { xs: 2, md: 4 },
        px: { xs: 1, sm: 2, md: 6 },
        background: "#f8fafc",
        minHeight: { xs: "auto", md: "60vh" },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          mb: { xs: 2, md: 4 },
          color: "#1976d2",
          fontFamily: "Montserrat, sans-serif",
          textAlign: "center",
          letterSpacing: ".05em",
          fontSize: { xs: "2rem", sm: "2.3rem", md: "2.5rem" },
        }}
      >
        Experience
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        {/* First Card */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Paper
            elevation={2}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              width: "100%",
              maxWidth: { xs: "100%", md: 600 },
              minHeight: 340,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: 3,
              background: "#fff",
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#222",
                fontFamily: "Montserrat, sans-serif",
                mb: 1,
                fontSize: { xs: "1.25rem", sm: "1.35rem", md: "1.5rem" },
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
              Company: Infosys PVT. LTD.
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
              Profile: System Engineer (FrontEnd React.js Developer)
            </Typography>
            <Divider sx={{ my: 1.5 }} />
            <Box
              component="ul"
              sx={{
                pl: 2,
                m: 0,
                color: "#333",
                fontFamily: "Montserrat, sans-serif",
                lineHeight: 1.7,
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                flex: 1,
              }}
            >
              <li>
                Optimized database performance by designing and refining SQL
                queries, stored procedures, and triggers, leading to a 20%
                reduction in query response time.
              </li>
              <li>
                Diagnosed and resolved critical database issues, ensuring system
                uptime and minimizing service disruptions.
              </li>
              <li>
                Developed RESTful APIs with Node.js and Express.js, ensuring
                secure and efficient data flow between frontend and backend
              </li>
              <li>
                Managed source code versioning via Git and GitHub, enabling
                seamless collaboration and deployment.
              </li>
            </Box>
          </Paper>
        </Grid>
        {/* Second Card */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Paper
            elevation={2}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              width: "100%",
              maxWidth: { xs: "100%", md: 600 },
              minHeight: 340,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: 3,
              background: "#fff",
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#222",
                fontFamily: "Montserrat, sans-serif",
                mb: 1,
                fontSize: { xs: "1.25rem", sm: "1.35rem", md: "1.5rem" },
              }}
            >
              GAP Impact
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
              Company: Infosys PVT. LTD.
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
              Profile: Senior System Engineer (FrontEnd React.js Developer)
            </Typography>
            <Divider sx={{ my: 1.5 }} />
            <Box
              component="ul"
              sx={{
                pl: 2,
                m: 0,
                color: "#333",
                fontFamily: "Montserrat, sans-serif",
                lineHeight: 1.7,
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                flex: 1,
              }}
            >
              <li>
                Developed high-performance, responsive React.js applications
                using Redux for state management, improving user interactions by
                15%..
              </li>
              <li>
                Designed reusable UI components, streamlining development and
                ensuring consistency across the application.
              </li>
              <li>
                Enhanced application reliability by implementing Jest testing,
                achieving a 30% reduction in production bugs.
              </li>
              <li>
                Improved data visualization by designing interactive, real-time
                analytics dashboards, providing actionable insights for business
                users.
              </li>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
