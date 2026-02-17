import { Box, Typography, Container, Stack } from '@mui/material'

const features = [
  {
    title: 'Recruit patients',
    description:
      'Automatically surface eligible patients from across your trial portfolio, so coordinators spend less time searching and more time enrolling.',
  },
  {
    title: 'Monitor cohort',
    description:
      'Stay on top of enrollment, retention, and site performance with a live view of your cohort, right where your team already works.',
  },
  {
    title: 'Clean data capture',
    description:
      'Capture data in a clinically approved format from day one, reducing downstream queries and rework with structured, compliant collection.',
  },
]

function FeatureSection({ feature, index, isAlt }) {
  return (
    <Box
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
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: { xs: 4, md: 8 },
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
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.7, mb: 2 }}
            >
              {feature.description}
            </Typography>
            <Stack
              direction="row"
              spacing={3}
              sx={{ mt: 1.5, color: 'text.secondary', fontSize: 13 }}
            >
              <Typography component="span">
                • Built for clinical teams
              </Typography>
              <Typography component="span">
                • Works alongside your workflows
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

function FeaturesPage() {
  return (
    <Box>
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          px: 2,
          bgcolor: 'background.default',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h4"
            sx={{
              fontWeight: 700,
              letterSpacing: '-0.03em',
              mb: 1,
            }}
          >
            Everything you need to run faster trials
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 560 }}
          >
            marsh.ai automates the operational work behind clinical trials—so recruitment,
            monitoring, and data capture stay aligned from day one.
          </Typography>
        </Container>
      </Box>

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
