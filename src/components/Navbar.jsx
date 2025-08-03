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
  { label: "HOME", href: "#home" },
  { label: "ABOUTUS", href: "#aboutus" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        background: "#fff",
        boxShadow: "0 2px 8px 0 rgba(26, 13, 57, 0.04)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              letterSpacing: ".1rem",
              color: "#222",
              textDecoration: "none",
              fontSize: "2rem",
            }}
          >
            Yashwant Mali
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#222" }}
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={handleCloseNavMenu}
                  component="a"
                  href={page.href}
                  sx={{
                    color: "#222",
                    fontWeight: 600,
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.05rem",
                    borderRadius: 2,
                    mx: 1,
                    my: 0.5,
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
            href="#home"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              letterSpacing: ".1rem",
              color: "#222",
              textDecoration: "none",
              fontSize: "1.3rem",
            }}
          >
            Yashwant Mali
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                href={page.href}
                sx={{
                  my: 2,
                  color: "#222",
                  display: "block",
                  fontWeight: 600,
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1rem",
                  mx: 1.5,
                  borderRadius: 2,
                  background: "transparent",
                  boxShadow: "none",
                  transition: "all 0.2s",
                  "&:hover": {
                    background: "#f5f5f5",
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
