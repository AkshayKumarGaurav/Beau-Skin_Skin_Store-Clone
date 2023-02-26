// 

// const baseURL = "http://localhost:3000/vitaminC";

// export default function VitaminC() {
//   const [post, setPost] = React.useState([]);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
        
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <>
//     <Fnnavbar/>
//     <Center>
//         <Grid templateColumns='repeat(3, 1fr)' columnGap={70} rowGap={50} >
//       {post.map((el)=>(<ProductSimple image={el.image} price={el.price} title={el.title} category={el.category}/>))}
      
//     </Grid>
    
//     </Center>
//    <LargeWithAppLinksAndSocial/>
    
//     </>
    
//   );
// }
// import ProductSimple from "../component/card";
// import axios from "axios";
// import React from "react";
// import { Box, Image,Text, Flex ,Input,Spacer,Grid, Center} from "@chakra-ui/react";
import LargeWithAppLinksAndSocial from "../component/footer";
import Fnnavbar from "../component/navbar";
import ProductSimple from "../component/card";
import axios from "axios";
import React from "react";
import { Box, Image,Text, Flex ,Input,Spacer,Grid, Center} from "@chakra-ui/react";
// import LargeWithAppLinksAndSocial from "../Component/Footer";
// import Navbar from "../Component/Nav";
import Banner from "../component/banner";
import Simple from './singleProductPage'
import PostWithLike from "../component/cartcard";

const baseURL = "https://beauskin.onrender.com/vitaminC";

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
        <Flex flexDirection={"row"} gap={30} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"} width={"100%"} justifyContent={"center"} height={"40px"}>
        <Banner main="Anniversary Sale ❤️" item1="Up to 30% off Skincare" item2="Up to 30% off Haircare" item3="Up to 30% off Makeup" item4="Up to 30% off Bath & Body" item5="Up to 30% off Fragrance"/> 
        <Banner main="New & Trending" item1="Sarah Chapman" item2="ISDIN" item3="Jason Wu Beauty" item4="Mermade Hair" item5="Ellis Brooklyn"/> 
        <Banner main="Sale" item1="Sale" item2="Key Workers Discount" item3="Refer A Friend" item4="Clearance" item5="All Coupons"/> 
        <Banner main="Skin Care" item1="Moisturizers" item2="Lip Care" item3="Body Lotion" item4="BB Cream" item5="Vitamin C" fn1={"/vitaminC"}/> 
        <Banner main="Hair" item1="Popular Categories" item2="Product Type" item3="Hair Type" item4="Electrical" item5="Hair Removal"/> 
        <Banner main="Makeup" item1="Popular Categories" item2="Eyes" item3="Face" item4="Lips" /> 
        <Banner main="Bath & Body" item1="Popular Categories" item2="Bath & Shower" item3="Self Tanners" item4="Moisturizers" item5="Targeted Care"/> 
        <Banner main="Fragrance" item1="NEOM Organics" item2="Black Musk" item3="Glasshouse Fragrances" item4="KORRES" item5="GOD FATHER"/> 
        <Banner main="Self-Care" item1="Popular Categories" item2="Sexual Wellness" item3="Supplements" item4="Clean Beauty" /> 
        <Banner main="Tools" item1="Popular Categories" item2="Hair Care" item3="Skincare" /> 
        <Banner main="Build a Routine" item1="Skin Type Routines" item2="Skin Concern Routines" item3="Build Hair Routine"/>
        </Flex>
      
        </Center>

    <Center>
      <Box>
      <Grid templateColumns='repeat(3, 1fr)' columnGap={70} rowGap={50} >
      {post.map((el)=>(<PostWithLike image={el.image} price={el.price} title={el.title} category={el.category} id={el.id}/>))}
      
    </Grid>
    
      </Box>
        
    </Center>
   <LargeWithAppLinksAndSocial/>
    
    </>
    
  );
}