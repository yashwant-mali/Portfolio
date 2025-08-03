import React from "react";
import { Box, Typography, Paper, Chip, Stack, Link, Grid } from "@mui/material";
// import skillsphere1 from "../assets/skillsphere1.png";
// import skillsphere2 from "../assets/skillsphere2.png";

export default function Project() {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
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
        Project
      </Typography>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, md: 4 },
          borderRadius: 3,
          background: "#fff",
          maxWidth: 900,
          margin: "0 auto",
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
          Skillsphere
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
          <Chip label="React.js" color="primary" />
          <Chip label="Node.js" color="success" />
          <Chip label="MySQL" color="info" />
          <Chip label="Frontend" variant="outlined" />
          <Chip label="Backend" variant="outlined" />
        </Stack>
        <Typography
          variant="body1"
          sx={{
            color: "#333",
            fontFamily: "Montserrat, sans-serif",
            lineHeight: 1.7,
            mb: 2,
          }}
        >
          Skillsphere is a comprehensive platform designed to help users track,
          showcase, and improve their professional skills. The application
          allows users to create profiles, add and categorize their skills, set
          learning goals, and monitor progress over time. It features a modern,
          intuitive interface and supports collaboration, endorsements, and
          analytics for personal growth.
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "#1976d2", fontWeight: 600, mb: 1 }}
        >
          Website:
          <Link
            href="https://skillsphere.example.com"
            target="_blank"
            rel="noopener"
            sx={{ ml: 1, fontWeight: 500 }}
          >
            https://skillsphere.example.com
          </Link>
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: "#444", fontWeight: 600, mb: 1 }}
        >
          Screenshots:
        </Typography>
        <Grid container spacing={2} sx={{ mb: 1 }}>
          {/* Uncomment and add your screenshots in assets folder */}
          {/*           
          <Grid item xs={12} sm={6}>
            <Box
              component="img"
              src={skillsphere1}
              alt="Skillsphere Screenshot 1"
              sx={{ width: '100%', borderRadius: 2, boxShadow: 1 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              component="img"
              src={skillsphere2}
              alt="Skillsphere Screenshot 2"
              sx={{ width: '100%', borderRadius: 2, boxShadow: 1 }}
            />
          </Grid>
          */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                width: "100%",
                height: 180,
                background: "#e3e8ef",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#888",
                fontFamily: "Montserrat, sans-serif",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              Screenshot 1
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                width: "100%",
                height: 180,
                background: "#e3e8ef",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#888",
                fontFamily: "Montserrat, sans-serif",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              Screenshot 2
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
