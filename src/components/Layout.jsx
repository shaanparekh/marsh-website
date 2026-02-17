import { Outlet } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            component={RouterLink}
            to="/"
            variant="h6"
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
          >
            marsh.ai
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/features">
            Features
          </Button>
          <Button color="inherit" component={RouterLink} to="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
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
            © marsh.ai – Clinical trial automation
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default Layout
