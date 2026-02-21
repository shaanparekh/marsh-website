import { Box, Typography, Container, Button, Stack, Fade } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const heroGradient = 'linear-gradient(135deg, #f8fafc 0%, #eef2f7 50%, #e8eef5 100%)'
const textGradient = 'linear-gradient(135deg, #0d2847 0%, #1a3a5c 50%, #2d4a6f 100%)'

function HomePage() {
  return (
    <Box
      sx={{
        position: 'relative',
        background: heroGradient,
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 3 },
        overflow: 'hidden',
      }}
    >
      {/* Soft ambient blob */}
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          right: '-15%',
          width: '70%',
          maxWidth: 600,
          height: '140%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(13, 40, 71, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '50%',
          maxWidth: 400,
          height: '80%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(13, 40, 71, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Fade in timeout={600}>
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
                AI for pre-trial operations
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
                Accelerate access to life-saving treatments with{' '}
                <Box
                  component="span"
                  sx={{
                    background: textGradient,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  marsh.ai
                </Box>
              </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 520, mb: 2 }}
            >
              Pre-trial operations take about 12 months and run manually in legacy systems—leading to billions in excess spend and delayed trials. We build AI agents that handle identification, pre-screening, monitoring, and data storage so coordinators and CROs can move at the speed of science.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 520, mb: 4 }}>
              $65B+ in excess operational spend over the last 4 years. We’re built to change that.
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
                  boxShadow: '0 4px 14px rgba(13, 40, 71, 0.2)',
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
                bgcolor: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(12px)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 20px 40px rgba(13, 40, 71, 0.12)',
                  borderColor: 'primary.main',
                },
              }}
            >
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Four agents. One pipeline.
              </Typography>
              <Typography variant="body1" sx={{ mb: 1.5 }}>
                Our AI agents cover the full pre-trial workflow: patient identification across the EHR, voice-led pre-screening, 24/7 eligibility monitoring, and accurate export into EDC and eCOA—so trials launch faster and stay on track.
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 1.5 }}>
                {['Identification', 'Pre-screening', 'Monitoring', 'Data storage'].map((label) => (
                  <Box
                    key={label}
                    component="span"
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 999,
                      bgcolor: 'primary.main',
                      color: 'white',
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    {label}
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

export default HomePage
