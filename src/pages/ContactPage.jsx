import { Box, Typography, TextField, Button, Paper, Fade, Container, Stack } from '@mui/material'
import { useState } from 'react'

const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_FORM_ID}`
  : null

function ContactPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    if (!email.trim()) return

    if (!FORMSPREE_URL) {
      setError('Form is not configured. Set VITE_FORMSPREE_FORM_ID in your environment.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      if (!res.ok) throw new Error('Submit failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  const sectionGradient = 'linear-gradient(135deg, #f8fafc 0%, #eef2f7 100%)'

  return (
    <Box
      sx={{
        background: sectionGradient,
        py: { xs: 8, md: 10 },
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 5, md: 8 },
            alignItems: { xs: 'flex-start', md: 'center' },
          }}
        >
          {/* Left copy */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                letterSpacing: 1,
                mb: 1,
              }}
            >
              Talk to our team
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              sx={{
                fontWeight: 700,
                letterSpacing: '-0.03em',
                mb: 1.5,
              }}
            >
              See how marsh.ai fits your pre-trial workflow
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 520, mb: 3 }}>
              Share your email and we’ll reach out with a short overview of our agents for
              identification, pre-screening, monitoring, and data storage—for sites, sponsors, and CROs.
            </Typography>
            <Stack spacing={0.5} sx={{ fontSize: 13, color: 'text.secondary' }}>
              <Typography component="span">• No obligation, just a quick conversation</Typography>
              <Typography component="span">• For sponsors, sites, and research teams</Typography>
            </Stack>
          </Box>

          {/* Right card */}
          <Fade in timeout={400}>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <Paper
                elevation={0}
                sx={{
                  maxWidth: 420,
                  width: '100%',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  p: { xs: 3, sm: 4 },
                  bgcolor: 'background.paper',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 40px rgba(13, 40, 71, 0.12)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                {submitted ? (
                  <Fade in timeout={300}>
                    <Box>
                      <Typography
                        variant="h5"
                        fontWeight={600}
                        letterSpacing="-0.02em"
                        gutterBottom
                      >
                        Thanks, we'll get back to you!
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        We've received your message and will be in touch soon.
                      </Typography>
                    </Box>
                  </Fade>
                ) : (
                  <>
                    <Typography
                      component="h2"
                      variant="h6"
                      fontWeight={600}
                      letterSpacing="-0.02em"
                      gutterBottom
                    >
                      Leave your email
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      We’ll follow up with next steps and example workflows.
                    </Typography>
                    <form onSubmit={handleSubmit}>
                      <TextField
                        fullWidth
                        label="Work email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        autoComplete="email"
                        size="medium"
                        disabled={loading}
                        error={!!error}
                        helperText={error}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            bgcolor: 'grey.50',
                            '&.Mui-focused': { bgcolor: 'background.paper' },
                          },
                        }}
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={loading}
                        sx={{
                          mt: 2.5,
                          py: 1.5,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontWeight: 600,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {loading ? 'Submitting…' : 'Submit'}
                      </Button>
                    </form>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ display: 'block', mt: 1.5 }}
                    >
                      We’ll only use your email to follow up about marsh.ai.
                    </Typography>
                  </>
                )}
              </Paper>
            </Box>
          </Fade>
        </Box>
      </Container>
    </Box>
  )
}

export default ContactPage
