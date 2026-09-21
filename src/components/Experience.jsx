import React from "react";
import { Box, Typography, Paper, Divider } from "@mui/material";

export default function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 5, md: 7 },
        px: { xs: 2, sm: 3, md: 4 },
        background: "#f8fafc",
        borderTop: "1px solid #e5e7eb",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Box sx={{ maxWidth: 1280, mx: "auto" }}>
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

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            gap: 3,
            alignItems: "stretch",
          }}
        >
          <Paper
            elevation={2}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              width: "100%",
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
              Home Depot
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
              Infosys | Pune, India
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#666",
                fontFamily: "Montserrat, sans-serif",
                mb: 1,
              }}
            >
              Aug 2024 – Present
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
              Technology Analyst | Frontend Developer
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#475569",
                fontFamily: "Montserrat, sans-serif",
                mb: 1.5,
                fontWeight: 600,
              }}
            >
              Environment: React.js, Redux, React Hooks, Custom
              Hooks,JavaScript, HTML5, CSS3, Tailwind CSS, Jest, GitHub, Jira,
              Webpack, CI/CD, Core web Vitals, LightHouse and Profiler
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
                Delivered pixel-accurate, responsive React experiences for a
                high-traffic commerce platform, reducing UI defects by 30% and
                improving accessibility from 78% to 95+.
              </li>
              <li>
                Improved Core Web Vitals by optimizing bundle size through code
                splitting, lazy loading, memoization, and API efficiency.
              </li>
              <li>
                Reduced LCP from 4.2s to under 2.5s and improved Lighthouse
                score to 90+, while enabling 22–30% SEO growth.
              </li>
              <li>
                Built reusable, scalable frontend architecture using React
                hooks, custom hooks, and component-driven patterns for faster
                delivery.
              </li>
            </Box>
          </Paper>

          <Paper
            elevation={2}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              width: "100%",
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
              Gap Impact
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
              Infosys | Pune, India
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#666",
                fontFamily: "Montserrat, sans-serif",
                mb: 1,
              }}
            >
              Aug 2022 – Mar 2024
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
              Frontend Developer
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#475569",
                fontFamily: "Montserrat, sans-serif",
                mb: 1.5,
                fontWeight: 600,
              }}
            >
              Environment: React.js, Redux, JavaScript, CSS3, HTML5, Material
              UI, Node.js, MongoDB, GitHub, Jest, Webpack, Jira
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
                Developed scalable, reusable React components using modern
                JavaScript, improving UI consistency and accelerating feature
                delivery by 20% across multiple modules.
              </li>
              <li>
                Implemented optimization techniques such as code splitting, lazy
                loading, memoization, and caching to reduce API usage and
                improve performance.
              </li>
              <li>
                Improved maintainability with reusable business logic and
                streamlined state management using Redux.
              </li>
              <li>
                Increased testing coverage and reliability with Jest while
                enhancing the user experience through faster, smoother
                interactions.
              </li>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
