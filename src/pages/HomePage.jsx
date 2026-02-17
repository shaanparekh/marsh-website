import { Box, Typography, Container } from '@mui/material'

function HomePage() {
  return (
    <Container maxWidth="md">
    <Box sx={{ textAlign: 'center', py: 6 }}>
      <Typography component="h1" variant="h3" gutterBottom fontWeight={600}>
        marsh.ai
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Clinical trial automation that speeds up patient recruitment and onboarding
      </Typography>
      <Typography variant="body1" sx={{ mt: 3, maxWidth: 480, mx: 'auto' }}>
        Speed up recruitment. Simplify onboarding. marsh.ai helps research teams enroll and onboard
        patients faster so trials stay on track.
      </Typography>
    </Box>
    </Container>
  )
}

export default HomePage
