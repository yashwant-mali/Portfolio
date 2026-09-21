import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { label: "HOME", href: "#intro" },
  { label: "ABOUT ME", href: "#aboutme" },
  { label: "PROJECT", href: "#project" },
  { label: "CONTACT", href: "#contact" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScroll = (event, href) => {
    event.preventDefault();
    const id = href.replace("#", "");
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "#ffffff",
        borderBottom: "1px solid rgba(148, 163, 184, 0.2)",
        boxShadow: "0 2px 14px rgba(15, 23, 42, 0.03)",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#intro"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              letterSpacing: ".08rem",
              color: "#111827",
              textDecoration: "none",
              fontSize: { md: "1.7rem", lg: "2rem" },
            }}
          >
            Yashwant Mali
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#111827", p: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": { borderRadius: 2, mt: 1 },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={(e) => handleScroll(e, page.href)}
                  sx={{
                    color: "#1f2937",
                    fontWeight: 600,
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.95rem",
                    borderRadius: 1.5,
                    mx: 1,
                    my: 0.5,
                    minWidth: 180,
                  }}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#intro"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              letterSpacing: ".06rem",
              color: "#111827",
              textDecoration: "none",
              fontSize: "1.2rem",
            }}
          >
            Yashwant Mali
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={(e) => handleScroll(e, page.href)}
                sx={{
                  color: "#1f2937",
                  display: "block",
                  fontWeight: 600,
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.9rem",
                  letterSpacing: ".03em",
                  px: 1.5,
                  py: 0.75,
                  minWidth: "auto",
                  borderRadius: 1.5,
                  background: "transparent",
                  boxShadow: "none",
                  textTransform: "uppercase",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    background: "#f5f7fb",
                    color: "#1976d2",
                  },
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
