import { Box, Typography, Container, Button, Stack, Fade } from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import FeaturesSection from '../components/FeaturesSection'

const AGENTS = [
  { name: 'Identification', description: 'EHR-wide screening in minutes' },
  { name: 'Pre-screening', description: 'Voice-led follow-up; humans focus on consent & visits' },
  { name: 'Monitoring', description: '24/7 eligibility tracking, auto-backfill' },
  { name: 'Data storage', description: 'EHR → EDC/eCOA, audit-ready export' },
]
const ROTATE_MS = 2800

const heroGradient = 'linear-gradient(135deg, #f8fafc 0%, #eef2f7 50%, #e8eef5 100%)'
const textGradient = 'linear-gradient(135deg, #0d2847 0%, #1a3a5c 50%, #2d4a6f 100%)'

function HomePage() {
  const location = useLocation()
  const hasScrolledToFeatures = useRef(false)
  const [agentIndex, setAgentIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setAgentIndex((i) => (i + 1) % AGENTS.length)
    }, ROTATE_MS)
    return () => clearInterval(id)
  }, [])

  // When landing with #features (e.g. from Features nav or /features redirect), scroll to features
  useEffect(() => {
    if (location.hash !== '#features') {
      hasScrolledToFeatures.current = false
      return
    }
    if (hasScrolledToFeatures.current) return
    hasScrolledToFeatures.current = true
    const t = setTimeout(() => {
      const el = document.getElementById('features')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 150)
    return () => clearTimeout(t)
  }, [location.hash])

  return (
    <>
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
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 520, mb: 4, fontWeight: 600, lineHeight: 1.4 }}
            >
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
                component="a"
                href="#features"
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
                p: 4,
                minWidth: { xs: '100%', sm: 400 },
                maxWidth: 480,
                bgcolor: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(12px)',
                transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
                '&:hover': {
                  boxShadow: '0 20px 40px rgba(13, 40, 71, 0.12)',
                  borderColor: 'primary.main',
                },
              }}
            >
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
                sx={{ fontWeight: 600, fontSize: '1.25rem' }}
              >
                Four agents. One pipeline.
              </Typography>
              <Box sx={{ position: 'relative', width: '100%' }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: 132,
                  }}
                >
                  <Fade in key={agentIndex} timeout={500}>
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        px: 2.5,
                        py: 2,
                        borderRadius: 2,
                        bgcolor: '#eef2f7',
                        color: 'primary.main',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 700, display: 'block', fontSize: '1rem' }}
                      >
                        {AGENTS[agentIndex].name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          opacity: 0.95,
                          mt: 0.5,
                          lineHeight: 1.35,
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          fontSize: '0.8125rem',
                        }}
                      >
                        {AGENTS[agentIndex].description}
                      </Typography>
                    </Box>
                  </Fade>
                </Box>
                <Stack
                  direction="row"
                  justifyContent="center"
                  spacing={1}
                  sx={{ mt: 1.5 }}
                >
                  {AGENTS.map((_, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: agentIndex === i ? 'primary.main' : 'action.hover',
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </Box>
          </Box>
          </Box>
        </Fade>
      </Container>
    </Box>

    <FeaturesSection />
    </>
  )
}

export default HomePage
