import React from "react";
import { Box, useMediaQuery, useTheme, Typography } from "@mui/material";
import JavaScriptIcon from "@mui/icons-material/Javascript";
import ReactIcon from "@mui/icons-material/Code";
import NodeJsIcon from "@mui/icons-material/Adb";
import StorageIcon from "@mui/icons-material/Storage";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SqlIcon from "@mui/icons-material/IntegrationInstructions";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import BootstrapIcon from "@mui/icons-material/Web";
import MaterialUiIcon from "@mui/icons-material/Dock";
import TailwindIcon from "@mui/icons-material/BlurOn";
import GitIcon from "@mui/icons-material/Merge";
import GitHubIcon from "@mui/icons-material/GitHub";

const skillData = [
  { name: "Javascript", icon: <JavaScriptIcon sx={{ color: "#f0db4f" }} /> },
  { name: "React", icon: <ReactIcon sx={{ color: "#61dafb" }} /> },
  { name: "NodeJS", icon: <NodeJsIcon sx={{ color: "#3c873a" }} /> },
  { name: "Express", icon: <AccountTreeIcon sx={{ color: "#444" }} /> },
  { name: "MongoDB", icon: <StorageIcon sx={{ color: "#47a248" }} /> },
  { name: "Mysql", icon: <SqlIcon sx={{ color: "#00758f" }} /> },
  { name: "HTML5", icon: <HtmlIcon sx={{ color: "#e34c26" }} /> },
  { name: "CSS3", icon: <CssIcon sx={{ color: "#264de4" }} /> },
  { name: "Bootstrap", icon: <BootstrapIcon sx={{ color: "#563d7c" }} /> },
  { name: "MaterialUI", icon: <MaterialUiIcon sx={{ color: "#1976d2" }} /> },
  { name: "TailwindCSS", icon: <TailwindIcon sx={{ color: "#06b6d4" }} /> },
  { name: "Git", icon: <GitIcon sx={{ color: "#f1502f" }} /> },
  { name: "GitHub", icon: <GitHubIcon sx={{ color: "#333" }} /> },
];

export default function Skills() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: isMobile ? "nowrap" : "wrap",
        overflowX: isMobile ? "auto" : "initial",
        gap: isMobile ? 2 : 3.5,
        padding: isMobile ? "16px 4px" : "32px 12px",
        justifyContent: { xs: "flex-start", md: "center" },
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        maxWidth: 1600,
        margin: "10px auto",
        borderRadius: 2.5,
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          height: 6,
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#e0d9e7",
          borderRadius: 8,
        },
      }}
    >
      {skillData.map((skill) => (
        <Box
          key={skill.name}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? "8px 14px" : "10px 22px",
            backgroundColor: "#d8d4d4ff",
            borderRadius: 2,
            fontWeight: 600,
            fontFamily: "Montserrat, sans-serif",
            fontSize: isMobile ? "0.95rem" : "1.1rem",
            boxShadow: "0 1px 4px 0 rgba(107, 15, 107, 0.04)",
            textAlign: "center",
            width: "fit-content", // auto-size to content
            flexShrink: 0, // don’t shrink in scroll mode
            maxWidth: 150, // optional safeguard for very long text
            overflow: "hidden",
            textOverflow: "ellipsis", // truncate instead of breaking layout
          }}
        >
          <Box sx={{ mr: 1, fontSize: "1.5rem", flexShrink: 0 }}>
            {skill.icon}
          </Box>
          <Typography
            component="span"
            sx={{
              fontSize: "inherit",
              whiteSpace: "nowrap", // keep names in one line inside the chip
            }}
          >
            {skill.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
