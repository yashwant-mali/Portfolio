import React from "react";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Link,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function ContactMe() {
  return (
    <Box
      component="footer"
      sx={{
        background: "#22223b",
        color: "#fff",
        py: 4,
        px: { xs: 2, md: 8 },
        mt: 2,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        boxShadow: 3,
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontFamily: "Montserrat, sans-serif",
              mb: 1,
            }}
          >
            Contact Me
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
            <EmailIcon sx={{ color: "#90caf9" }} />
            <Link
              href="mailto:yashwant.mali@email.com"
              underline="hover"
              color="#fff"
              sx={{ fontWeight: 500 }}
            >
              yashwantmali555@gmail.com
            </Link>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <PhoneIcon sx={{ color: "#90caf9" }} />
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              +91 8698922567
            </Typography>
          </Stack>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ display: { xs: "none", md: "block" }, borderColor: "#444" }}
        />
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontFamily: "Montserrat, sans-serif",
              mb: 1,
            }}
          >
            Connect with me
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton
              aria-label="LinkedIn"
              component="a"
              href="https://www.linkedin.com/in/yashwantmali/"
              target="_blank"
              rel="noopener"
              sx={{ color: "#90caf9" }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="GitHub"
              component="a"
              href="https://github.com/Yashwant_Mali27"
              target="_blank"
              rel="noopener"
              sx={{ color: "#90caf9" }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              component="a"
              href="https://twitter.com/Yashwant_Mali27"
              target="_blank"
              rel="noopener"
              sx={{ color: "#90caf9" }}
            >
              <TwitterIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
      <Divider sx={{ my: 3, borderColor: "#444" }} />
      <Typography
        variant="body2"
        align="center"
        sx={{ color: "#aaa", fontFamily: "Montserrat, sans-serif" }}
      >
        © {new Date().getFullYear()} Yashwant Mali. All rights reserved.
      </Typography>
    </Box>
  );
}
