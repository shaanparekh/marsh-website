import { Box, Typography, Container, Stack, Fade, Paper } from '@mui/material'
import { useInView } from '../hooks/useInView'

const sectionGradient = 'linear-gradient(135deg, #f8fafc 0%, #eef2f7 100%)'

export const features = [
  {
    title: 'Patient identification',
    description:
      'Screen thousands of patients across the EHR against inclusion and exclusion criteria—checking lifelong history for labs, medications, and imaging. What takes coordinators and CROs 3–6 months manually, our agents do in minutes.',
    stat: '3–6 months → minutes',
    bullets: ['EHR-wide screening', 'Inclusion/exclusion in minutes'],
  },
  {
    title: 'Patient pre-screening',
    description:
      'Voice agents that intelligently follow up with patients: schedule bloodwork and imaging, confirm medications, and keep pre-screening on track. Humans stay focused on informed consent and in-person visits—the tasks that actually need them.',
    stat: 'Weeks → streamlined',
    bullets: ['Voice-led follow-up', 'Consent & visits stay human-led'],
  },
  {
    title: 'Patient monitoring',
    description:
      "Between identification and trial launch, over 60% of patients' eligibility changes. Our agent monitors the EHR 24/7 for labs, meds, imaging, and notes. When someone becomes ineligible, it auto-identifies the next candidate and restarts pre-screening—so trials don't lose participants.",
    stat: '24/7 eligibility tracking',
    bullets: ['Reduces $65M+ per failed trial', 'Auto-backfill when eligibility changes'],
  },
  {
    title: 'Medical data storage',
    description:
      'Each trial needs specific data extracted from the EHR and loaded into EDC and eCOA. Our agents find the right information across the full record and integrate it accurately—cutting ~99% of the time and errors of manual export.',
    stat: '~99% time reduction',
    bullets: ['EHR → EDC/eCOA', 'Accurate, audit-ready export'],
  },
]

function FeatureBlock({ feature, index, isAlt }) {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        display: 'flex',
        alignItems: 'center',
        py: { xs: 6, md: 8 },
        px: 2,
        bgcolor: isAlt ? 'grey.50' : 'background.paper',
        scrollMarginTop: 72,
      }}
    >
      <Fade in={inView} timeout={500}>
        <Container maxWidth="lg">
          <Paper
            elevation={0}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: { xs: 4, md: 8 },
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: 'transparent',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 16px 40px rgba(13, 40, 71, 0.1)',
                borderColor: 'primary.main',
                bgcolor: 'background.paper',
              },
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                component="span"
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  letterSpacing: 1,
                }}
              >
                {String(index).padStart(2, '0')} · Feature
              </Typography>
              <Typography
                component="h2"
                variant="h4"
                sx={{
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  mt: 1,
                  mb: 1.5,
                }}
              >
                {feature.title}
              </Typography>
            </Box>

            <Box sx={{ flex: 1 }}>
              {feature.stat && (
                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    letterSpacing: 0.5,
                    display: 'block',
                    mb: 1,
                  }}
                >
                  {feature.stat}
                </Typography>
              )}
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.7, mb: 2 }}
              >
                {feature.description}
              </Typography>
              {feature.bullets && (
                <Stack spacing={0.5} sx={{ color: 'text.secondary', fontSize: 13 }}>
                  {feature.bullets.map((b) => (
                    <Typography key={b} component="span">
                      • {b}
                    </Typography>
                  ))}
                </Stack>
              )}
            </Box>
          </Paper>
        </Container>
      </Fade>
    </Box>
  )
}

export default function FeaturesSection() {
  return (
    <Box id="features" component="section" sx={{ scrollMarginTop: 72, overflowAnchor: 'none' }}>
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          px: 2,
          background: sectionGradient,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h2"
            variant="h4"
            sx={{
              fontWeight: 700,
              letterSpacing: '-0.03em',
              mb: 1,
            }}
          >
            AI agents for the full pre-trial pipeline
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600 }}
          >
            From finding the right patients to keeping them eligible and loading data into EDC and
            eCOA—our agents handle identification, pre-screening, monitoring, and storage so
            coordinators and CROs can focus on what only humans can do.
          </Typography>
        </Container>
      </Box>

      {features.map((feature, index) => (
        <FeatureBlock
          key={feature.title}
          feature={feature}
          index={index + 1}
          isAlt={index % 2 === 1}
        />
      ))}
    </Box>
  )
}
