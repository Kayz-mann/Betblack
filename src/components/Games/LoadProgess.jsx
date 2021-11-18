import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadProgress() {
  const [progress, setProgress] = React.useState(0);
  console.log(progress)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack spacing={2} direction="row">
      <CircularProgress color="success" variant="determinate" value={90}>
        <p value={90} style={{ color: '#fff' }}>90</p>
      </CircularProgress>
    </Stack>
  );
}
