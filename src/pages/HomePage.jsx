import { Box, Typography, Container, Button, Stack } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function HomePage() {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 3 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: { xs: 6, md: 10 },
          }}
        >
          {/* Left: copy */}
          <Box sx={{ flex: 1, textAlign: { xs: 'left', md: 'left' } }}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                letterSpacing: 1,
                mb: 1,
              }}
            >
              Clinical trial automation
            </Typography>
            <Typography
              component="h1"
              variant="h3"
              sx={{
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              Run trials faster with{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                marsh.ai
              </Box>
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 520, mb: 4 }}
            >
              Automate patient recruitment, onboarding, and cohort monitoring so your team can
              focus on care and science—not manual workflows.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 999,
                  textTransform: 'none',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                }}
              >
                Get in touch
              </Button>
              <Button
                component={RouterLink}
                to="/features"
                variant="text"
                size="large"
                sx={{
                  textTransform: 'none',
                  fontWeight: 500,
                }}
              >
                View features
              </Button>
            </Stack>
          </Box>

          {/* Right: simple highlight card */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                borderRadius: 4,
                border: '1px solid',
                borderColor: 'divider',
                p: 3,
                minWidth: { xs: '100%', sm: 320 },
                maxWidth: 380,
                bgcolor: 'background.paper',
              }}
            >
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Purpose-built for trials
              </Typography>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                One place to recruit patients, monitor cohorts, and capture clean, compliant data.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Designed for clinical teams who need automation they can trust.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomePage
