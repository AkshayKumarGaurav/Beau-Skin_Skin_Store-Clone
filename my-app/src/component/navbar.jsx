import {SearchIcon } from '@chakra-ui/icons'
import { Spacer,Text,Image,Flex,Box,Input } from '@chakra-ui/react';
import React from 'react';
import logoU from '../Images/logoU.png';
import {BsFillPersonFill, BsFillBasket3Fill } from "react-icons/bs";



function Fnnavbar(){
    return(
        <Box >
             <Flex  backgroundColor="red.100" alignItems={"center"} justifyContent={"space-around"} display={"flex"}  flexDirection={["column","column","column",'row','row','row']}>
             {/* <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem icon={<AddIcon />} command='⌘T'>
      New Tab
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
      New Window
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
      Open Closed Tab
    </MenuItem>
    <MenuItem icon={<EditIcon />} command='⌘O'>
      Open File...
    </MenuItem>
  </MenuList>
</Menu>
         */}
                <Box > <Image width='200px' height='100px' src={logoU} alt="Logo" /></Box>
                <Box><Input width='500px' height='50px'  variant=' Filled' /><SearchIcon ml={5} /></Box>
                <Flex gap={3} alignItems={"center"}><BsFillPersonFill size={"25px"}/><Text fontSize='lg'> Account</Text></Flex>
                <Flex gap={3} alignItems={"center"}><BsFillBasket3Fill size={"25px"}/><Text fontSize='lg'> Cart</Text></Flex>
                
          
            </Flex>
        </Box>
    )
}
export default Fnnavbar;