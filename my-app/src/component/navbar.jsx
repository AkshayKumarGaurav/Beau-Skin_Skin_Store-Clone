import {SearchIcon } from '@chakra-ui/icons'
import { Image,Flex,Box,Input } from '@chakra-ui/react';
import React from 'react';
import logo from '../Images/logo.png';



function Fnnavbar(){
    return(
        <div >
             <Flex  backgroundColor="#d9d9d9" alignItems={"center"} justifyContent={"space-around"} display={"flex"}  flexDirection={["column","column","column",'row','row','row']}>
        
                <Box > <Image width='200px' height='100px' src={logo} alt="Logo" /></Box>
                <Box ><Input width='500px' height='50px'  variant=' Filled' /><SearchIcon/></Box>
                <Box>Account</Box>
                <Box>Cart </Box>
                <Box>Admin</Box>
          
            </Flex>
        </div>
    )
}
export default Fnnavbar;