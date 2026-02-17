import { Box, Typography, TextField, Button, Paper, Fade } from '@mui/material'
import { useState } from 'react'

function ContactPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Fade in timeout={400}>
      <Box
        sx={{
          minHeight: 'calc(100vh - 120px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 6,
          px: 2,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            maxWidth: 440,
            width: '100%',
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            p: { xs: 3, sm: 4 },
            bgcolor: 'background.paper',
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
                component="h1"
                variant="h5"
                fontWeight={600}
                letterSpacing="-0.02em"
                gutterBottom
              >
                Contact us
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Leave your email and we'll get back to you.
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="outlined"
                  autoComplete="email"
                  size="medium"
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
                  sx={{
                    mt: 2.5,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Submit
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Box>
    </Fade>
  )
}

export default ContactPage
