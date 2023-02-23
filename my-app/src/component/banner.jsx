// import { useDisclosure } from "@chakra-ui/react"
import {
    useColorModeValue,
        useDisclosure,
        MenuItem,
        Menu,
        MenuButton,
        MenuList,
    } from "@chakra-ui/react"
    import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
function Banner({main,item1,item2,item3,item4,item5}){
    const { isOpen, onOpen, onClose } = useDisclosure();
    

    return (
        <>
        
       

        <Menu 
        isOpen={isOpen}
        >
            <MenuButton
            height={"40px"}
                variant="ghost"
                // mx={1}
                // py={[1, 2, 2]}
                // px={4}
                borderRadius={5}
                _hover={{ bg: useColorModeValue("gray.700", "gray.700"), height:"40px", color:"white"}}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
               {main} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                
                <MenuItem>{item1}</MenuItem>
                <MenuItem>{item2}</MenuItem>
                <MenuItem>{item3}</MenuItem>
                <MenuItem>{item4}</MenuItem>
                <MenuItem>{item5}</MenuItem>
            </MenuList>
        </Menu>
       
       
        
        </>
        
    )
}



export default Banner