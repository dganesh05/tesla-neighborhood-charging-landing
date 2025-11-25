import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import BuildIcon from '@mui/icons-material/Build';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaidIcon from '@mui/icons-material/Paid';
import Typography from '@mui/material/Typography';
import './HowItWorks.css';

export default function HowItWorks() {
  const DOT_SIZE = { xs: 72, md: 88 };
  return (
    <section className="HowItWorks" aria-labelledby="howItWorksHeading">
      <h1 id="howItWorksHeading">How It Works</h1>
      <Timeline
        position="right"
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          minHeight: { xs: '70vh', md: '65vh' },
          '& .MuiTimelineItem-root:before': { flex: 0 },
          '& .MuiTimelineItem-root': {
            minHeight: { xs: 180, md: 240 },
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'var(--white)', width: 6 }} />
            <TimelineDot
              sx={{
                width: DOT_SIZE,
                height: DOT_SIZE,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'var(--white)',
                boxShadow: '0 0 0 6px rgba(255,255,255,0.08)',
                border: '3px solid #111',
              }}
            >
              <BuildIcon titleAccess="Installation" sx={{ fontSize: { xs: 36, md: 44 }, color: 'var(--black)' }} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'var(--white)', width: 6 }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: 0, px: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography
              variant="h6"
              component="span"
              sx={{
                color: 'var(--white)',
                fontWeight: 600,
                letterSpacing: '0.02em',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              Install
            </Typography>
            <Typography sx={{ color: '#bdbdbd', fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
              We Install
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'var(--white)', width: 6 }} />
            <TimelineDot
              sx={{
                width: DOT_SIZE,
                height: DOT_SIZE,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#111',
                boxShadow: '0 0 0 6px rgba(255,255,255,0.08)',
                border: '3px solid var(--white)',
              }}
            >
              <AccessTimeIcon titleAccess="Set Hours" sx={{ fontSize: { xs: 36, md: 44 }, color: 'var(--white)' }} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'var(--white)', width: 6 }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: 0, px: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography
              variant="h6"
              component="span"
              sx={{
                color: 'var(--white)',
                fontWeight: 600,
                letterSpacing: '0.02em',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              Hours
            </Typography>
            <Typography sx={{ color: '#bdbdbd', fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
              You Set Hours
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'var(--white)', width: 6 }} />
            <TimelineDot
              sx={{
                width: DOT_SIZE,
                height: DOT_SIZE,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'var(--white)',
                boxShadow: '0 0 0 6px rgba(255,255,255,0.08)',
                border: '3px solid #111',
              }}
            >
              <PaidIcon titleAccess="Earn Money" sx={{ fontSize: { xs: 36, md: 44 }, color: 'var(--black)' }} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'var(--white)', width: 6 }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: 0, px: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography
              variant="h6"
              component="span"
              sx={{
                color: 'var(--white)',
                fontWeight: 600,
                letterSpacing: '0.02em',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              Earn
            </Typography>
            <Typography sx={{ color: '#bdbdbd', fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
              You Earn!
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}