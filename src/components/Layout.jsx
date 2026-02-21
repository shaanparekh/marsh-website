import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Box, Container, Fab, Zoom } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function KeyboardArrowUpIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
    </svg>
  )
}

function Layout() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar
        position="sticky"
        elevation={0}
        color="inherit"
        sx={(theme) => ({
          borderBottom: `1px solid ${theme.palette.divider}`,
          backdropFilter: 'blur(10px)',
          bgcolor: 'rgba(255,255,255,0.92)',
        })}
      >
        <Toolbar sx={{ px: { xs: 2, sm: 3 } }}>
          <Container
            maxWidth="lg"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 0,
            }}
          >
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Box
                sx={(theme) => ({
                  width: 32,
                  height: 32,
                  borderRadius: '12px',
                  bgcolor: theme.palette.primary.main,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 1.5,
                })}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ color: 'common.white', fontWeight: 700, letterSpacing: '-0.03em' }}
                >
                  m
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  letterSpacing: '-0.04em',
                }}
              >
                marsh.ai
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <Button
                component={RouterLink}
                to="/"
                color="inherit"
                sx={{ textTransform: 'none', fontWeight: 500 }}
              >
                Home
              </Button>
              <Button
                component={RouterLink}
                to="/features"
                color="inherit"
                sx={{ textTransform: 'none', fontWeight: 500 }}
              >
                Features
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                sx={{
                  textTransform: 'none',
                  fontWeight: 600,
                  borderRadius: 999,
                  px: 2.5,
                  py: 0.75,
                }}
              >
                Contact
              </Button>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Zoom in={showBackToTop}>
        <Fab
          color="primary"
          size="small"
          onClick={scrollToTop}
          aria-label="Back to top"
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 9,
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
      <Box
        component="footer"
        sx={{ py: 2, px: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.grey[200] }}
      >
        <Container
          maxWidth="md"
          disableGutters
          sx={{ textAlign: 'left', marginLeft: 0, marginRight: 'auto' }}
        >
          <Typography variant="body2" color="text.secondary">
            © marsh.ai – AI for clinical pre-trial operations
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default Layout
