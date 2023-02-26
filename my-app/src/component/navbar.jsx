import {SearchIcon } from '@chakra-ui/icons'
import { Spacer,Text,Image,Flex,Box,Input } from '@chakra-ui/react';
import React from 'react';
import logoU from '../Images/logoU.png';
import {BsFillPersonFill, BsFillBasket3Fill } from "react-icons/bs";
import {Link as RouterLink} from "react-router-dom"




function Fnnavbar(){
    return(
        <Box >
             <Flex  backgroundColor="red.100" alignItems={"center"} justifyContent={"space-around"} display={"flex"}  flexDirection={["column","column","column",'row','row','row']}>
        
  
        <RouterLink to="/">
                <Box > <Image width='200px' height='100px' src={logoU} alt="Logo" /> </Box>
                </RouterLink>
          
                <Box><Input width='500px' height='50px'  variant=' Filled' /><SearchIcon ml={5} /></Box>
                <RouterLink to="/login"> <Flex gap={3} alignItems={"center"}><BsFillPersonFill size={"25px"}/><Text fontSize='lg'> Account</Text></Flex></RouterLink>
               <RouterLink to="/cart"><Flex gap={3} alignItems={"center"}><BsFillBasket3Fill size={"25px"}/><Text fontSize='lg'> Cart</Text></Flex></RouterLink>
                
                
          
            </Flex>
        </Box>
    )
}
export default Fnnavbar;