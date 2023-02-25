import ProductSimple from "../component/card";
import axios from "axios";
import React from "react";
import { Box, Image,Text, Flex ,Input,Spacer,Grid, Center} from "@chakra-ui/react";
import LargeWithAppLinksAndSocial from "../component/footer";
import Fnnavbar from "../component/navbar";

const baseURL = "http://localhost:3000/vitaminC";

export default function VitaminC() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
        
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <>
    <Fnnavbar/>
    <Center>
        <Grid templateColumns='repeat(3, 1fr)' columnGap={70} rowGap={50} >
      {post.map((el)=>(<ProductSimple image={el.image} price={el.price} title={el.title} category={el.category}/>))}
      
    </Grid>
    
    </Center>
   <LargeWithAppLinksAndSocial/>
    
    </>
    
  );
}