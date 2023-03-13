import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = (({ targetMuscleExercises, equipmentExercises }) => {
  return(
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography variant='h3'>
    Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
      {targetMuscleExercises.length ? 
        <HorizontalScrollbar data={targetMuscleExercises} /> 
          : <Loader />}
    </Stack>

    <Typography variant='h3'>
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length ? 
        <HorizontalScrollbar data={equipmentExercises} /> 
            : <Loader />}
    </Stack>
    </Box>
    )
  })

export default SimilarExercises;