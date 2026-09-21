import React from "react";
import { Box, Typography, Button, Chip, Stack, Paper } from "@mui/material";

const projects = [
  {
    id: "daily-expenses",
    title: "Daily Expenses",
    tagline: "Expense tracker PWA",
    description:
      "A Next.js progressive web app for logging day-to-day expenses, installable on mobile, backed by MongoDB.",
    tech: ["Next.js", "React", "MongoDB", "LightHouse", "Core Web Vitals"],
    liveUrl: "https://daily-expenses-3kon.vercel.app/auth",
    githubUrl: "https://github.com/yashwant-mali/Daily_Expenses",
    year: "2026",
  },
  {
    id: "Study-Easy",
    title: "Study Easy",
    tagline: "Save your Notes & code",
    description:
      "Save your notes & codes and revise later anywhere on any device. A simple and efficient tool to save your notes & codes in seconds.",
    tech: ["Next.js", "React", "MongoDB", "Core Web Vitals", "JWT"],
    liveUrl: "https://study-progress-dun.vercel.app/",
    githubUrl: "https://github.com/yashwant-mali/study-progress",
    year: "2026",
  },
  {
    id: "skillsphere",
    title: "Skillsphere",
    tagline: "Skill-booking platform",
    description:
      "Lets learners browse and book lessons — from music to programming — comparing instructors and institutes by rating, reviews, and fees, with a streamlined booking flow.",
    tech: ["React.js", "Node.js", "MySQL", "Redux", "MUI"],
    liveUrl: "https://skillsphere-frontend-pink.vercel.app/home",
    githubUrl: "https://github.com/yashwant-mali/skillsphere-combined",
    year: "2025",
  },
  {
    id: "Copy-It",
    title: "Copy It",
    tagline: "Copy anything repeatative texts in seconds",
    description:
      "A simple and efficient tool to copy repetitive texts in seconds.",
    tech: ["Next.js", "React", "MongoDB"],
    liveUrl: "https://copy-it-huv1.vercel.app/",
    githubUrl: "https://github.com/yashwant-mali/Copy-It",
    year: "2026",
  },
];

export default function Project() {
  return (
    <Box
      id="project"
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
            mb: { xs: 3, md: 4 },
            color: "#1976d2",
            fontFamily: "Montserrat, sans-serif",
            textAlign: "center",
            letterSpacing: ".05em",
            fontSize: { xs: "1.85rem", md: "2.5rem" },
          }}
        >
          Projects
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
            gap: { xs: 2.5, md: 3 },
            alignItems: "stretch",
          }}
        >
          {projects.map((project) => (
            <Paper
              key={project.id}
              elevation={0}
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                border: "1px solid #e2e8f0",
                background: "#fff",
                p: { xs: 2.25, sm: 2.5, md: 3 },
                minHeight: { xs: 320, md: 360 },
                boxShadow: "0 12px 35px rgba(15, 23, 42, 0.04)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 1.5,
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: "#1976d2",
                    fontWeight: 700,
                    letterSpacing: ".08em",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {project.tagline}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#64748b",
                    fontWeight: 700,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {project.year}
                </Typography>
              </Box>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#111827",
                  fontFamily: "Montserrat, sans-serif",
                  mb: 1,
                  fontSize: { xs: "1.3rem", md: "1.5rem" },
                  lineHeight: 1.3,
                }}
              >
                {project.title}
              </Typography>

              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 0,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#374151",
                    fontFamily: "Montserrat, sans-serif",
                    lineHeight: 1.7,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    mb: 2,
                  }}
                >
                  {project.description}
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    flexWrap: "wrap",
                    gap: 1,
                    mb: 2,
                  }}
                >
                  {project.tech.map((item) => (
                    <Chip
                      key={`${project.id}-${item}`}
                      label={item}
                      size="small"
                      sx={{
                        background: "#eef4ff",
                        color: "#1d4ed8",
                        border: "1px solid #dbeafe",
                        fontWeight: 600,
                        fontFamily: "Montserrat, sans-serif",
                        borderRadius: 999,
                        height: 30,
                        ".MuiChip-label": { px: 1.25 },
                      }}
                    />
                  ))}
                </Stack>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
                  pt: 2,
                  mt: "auto",
                  borderTop: "1px solid #e2e8f0",
                }}
              >
                <Button
                  component="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} live demo in a new tab`}
                  sx={{
                    background: "#1976d2",
                    color: "#fff",
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 700,
                    fontFamily: "Montserrat, sans-serif",
                    px: 2,
                    py: 0.85,
                    minWidth: 120,
                    boxShadow: "none",
                    "&:hover": {
                      background: "#1565c0",
                      boxShadow: "none",
                    },
                  }}
                >
                  Open Live
                </Button>
                <Button
                  component="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} GitHub repository in a new tab`}
                  sx={{
                    background: "#fff",
                    color: "#1976d2",
                    border: "1px solid #1976d2",
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 700,
                    fontFamily: "Montserrat, sans-serif",
                    px: 2,
                    py: 0.85,
                    minWidth: 120,
                    boxShadow: "none",
                    "&:hover": {
                      background: "#f0f7ff",
                      boxShadow: "none",
                    },
                  }}
                >
                  GitHub
                </Button>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
