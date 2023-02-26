import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription

  } from '@chakra-ui/react';
  import {Link as RouterLink} from 'react-router-dom';

  export default function Alertfn(){
    return(
    <Alert
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
          PAYMENT SUCCESSFUL
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          Thanks for shopping from  BEAU SKIN. We will deliver your product ASAP.
        </AlertDescription>
        <RouterLink to="/"><Button>Shop More</Button></RouterLink>
      </Alert>
      )

  }

