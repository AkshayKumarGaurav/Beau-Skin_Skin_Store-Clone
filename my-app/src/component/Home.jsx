import ImageSlider from './imageSlider';
import Fnnavbar from './navbar';
import Banner from "./banner";
import { Flex , Center, Box} from "@chakra-ui/react";


function Home(){
    return (<>
    <Fnnavbar/>
        <Center>
        <Flex flexDirection={"row"} gap={30} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"} width={"100%"} justifyContent={"center"} height={"40px"}>
        <Banner main="Anniversary Sale ❤️" item1="Up to 30% off Skincare" item2="Up to 30% off Haircare" item3="Up to 30% off Makeup" item4="Up to 30% off Bath & Body" item5="Up to 30% off Fragrance"/> 
        <Banner main="New & Trending" item1="Sarah Chapman" item2="ISDIN" item3="Jason Wu Beauty" item4="Mermade Hair" item5="Ellis Brooklyn"/> 
        <Banner main="Sale" item1="Sale" item2="Key Workers Discount" item3="Refer A Friend" item4="Clearance" item5="All Coupons"/> 
        <Banner main="Skin Care" item1="Bathroom" item2="Furniture" item3="Accent & Decor" item4="Kitchen" item5="Home Office"/> 
        <Banner main="Hair" item1="Popular Categories" item2="Product Type" item3="Hair Type" item4="Electrical" item5="Hair Removal"/> 
        <Banner main="Makeup" item1="Popular Categories" item2="Eyes" item3="Face" item4="Lips" /> 
        <Banner main="Bath & Body" item1="E-Bikes" item2="Decor" item3="Furniture" item4="Gardening" item5="Lighting"/> 
        <Banner main="Fragrance" item1="Audio" item2="Clocks" item3="Charging & Batteries" item4="Gaming" item5="Headphones & Speakers"/> 
        <Banner main="Self-Care" item1="Luggage" item2="Neck Pillows" item3="Accessories" item4="Emergency Preparedness" item5="Books"/> 
        <Banner main="Tools" item1="Bags & Bagpacks" item2="Wallets" item3="Optical & Sunglasses" item4="keychains" item5="Watches & jewelry"/> 
        <Banner main="Build a Routine" item1="Discovery" item2="Games" item3="Halloween" item4="Holiday" item5="Toys"/>
        </Flex>
      
        </Center>
        <Box width={"90%"} m={"auto"} mt={"25px"}>
        <ImageSlider/>
        </Box>
        
    </>
        
       
    )
}
export default Home