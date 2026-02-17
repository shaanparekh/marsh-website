import { Box, Typography, Container } from '@mui/material'

const features = [
  {
    title: 'Recruit patients',
    description:
      'Reach and screen the right patients efficiently. marsh.ai streamlines outreach and eligibility so you fill cohorts faster.',
  },
  {
    title: 'Monitor cohort',
    description:
      'Track enrollment, retention, and site performance in one place. Keep your trial on schedule with clear visibility into your cohort.',
  },
  {
    title: 'Clean data capture',
    description:
      'Capture data in a clinically approved format from day one. Reduce queries and rework with structured, compliant data collection.',
  },
]

function FeatureSection({ feature, index, isAlt }) {
  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
        px: 2,
        bgcolor: isAlt ? 'grey.50' : 'background.paper',
        scrollMarginTop: 64,
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', maxWidth: 560, mx: 'auto' }}>
          <Typography
            component="span"
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 0.5 }}
          >
            {String(index).padStart(2, '0')}
          </Typography>
          <Typography
            component="h2"
            variant="h4"
            fontWeight={600}
            letterSpacing="-0.02em"
            gutterBottom
            sx={{ mt: 0.5 }}
          >
            {feature.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
            {feature.description}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

function FeaturesPage() {
  return (
    <Box>
      {features.map((feature, index) => (
        <FeatureSection
          key={feature.title}
          feature={feature}
          index={index + 1}
          isAlt={index % 2 === 1}
        />
      ))}
    </Box>
  )
}

export default FeaturesPage
