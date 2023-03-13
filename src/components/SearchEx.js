import React, { useEffect, useState} from 'react'
import { Box, Button, Stack, Typography,TextField } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar'


function SearchEx ({ setExercises, bodyPart, setBodyPart }){
  const [search, setSearch] = useState("")
  const [bodyParts, setBodyParts] = useState([])

  useEffect(()=>{
    const fetchExercisesData = async()=>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      
      setBodyParts(['all', ...bodyPartsData]);
    }
    fetchExercisesData();
  },[])

  const handleSearch = async()=>{
    if(search){
     const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions); 
     const searchedExercise = exerciseData.filter(
      (exercise)=> exercise.name.toLowerCase().includes(search)
      || exercise.target.toLowerCase().includes(search)
      || exercise.equipment.toLowerCase().includes(search)
      || exercise.bodyPart.toLowerCase().includes(search)
     );

     setSearch('')
     setExercises(searchedExercise)
    }
  }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
        <Typography fontWeight={700}
        sx={{fontSize:{lg:'44px', xs:'30px'}}} mb="50px" textAlign="center"
        >
           Lets explore some <br /> Exercises. 
        </Typography>
        <Box>
            <TextField 
                sx={{
                    input:{ 
                        fontWeight:'700',
                        border:'none', 
                        borderRadius:'4px'
                        }, width:{lg:'800px', xs:'350px'}, borderRadius:'40px'
                    }}
                height="76px"
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder="Search Exercises"
                type='text'
            />
            <Button variant="outlined"  className='search-btn'
            sx={{
                bgcolor:"#FF2625",
                color:"#fff",
                textTransform:"none",
                width:{lg:'175px', xs:'80px'},
                fontSize:{lg:'20px', xs:'14px'},
                height:'56px',
                position:'absolute'
            }}
            onClick={handleSearch}
            >
                    Search
            </Button>
        </Box>
        <Box sx={{position:"relative", width:"100%", p:"20px"}} >
        <HorizontalScrollbar data={bodyParts} isBodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
        </Box>
    </Stack>
  )
}

export default SearchEx