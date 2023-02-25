import ImageSlider from '../component/imageSlider';
import Fnnavbar from '../component/navbar';
import Banner from "../component/banner";
import { Button, Grid,Flex , Center, Box , Text, Image} from "@chakra-ui/react";
import SimpleSlider from "../component/slider";
import LargeWithAppLinksAndSocial from "../component/footer";



function Home(){
    return (<>
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
        <Box width={"90%"} m={"auto"} mt={"25px"}>
        <ImageSlider/>
        
        </Box>
        <Center><Text fontSize={"4xl"} mt={"60px"} mb={"45px"} fontFamily={"Georgia, serif"} color={"gray"}>Shop by Category</Text></Center>
        <Center>
    <Grid templateColumns='repeat(6, 1fr)' columnGap={45} rowGap={50} width={"90%"} >
        <Flex flexDirection={"column"} justifyContent={"center"}>
        <Image width={"200px"} height={"200px"} src={"https://static.thcdn.com/images/small/webp/widgets/121-us/08/Page-001-012508.png"} borderRadius={"full"}/>
    
        </Flex>
        <Flex flexDirection={"column"}>
        <Image width={"200px"} height={"200px"} src={"https://static.thcdn.com/images/small/webp/widgets/121-us/11/Page-002-012511.png"} borderRadius={"full"}/>
            
        </Flex>
        <Flex flexDirection={"column"}>
        <Image width={"200px"} height={"200px"} src={"https://static.thcdn.com/images/small/webp/widgets/121-us/15/Page-003-012515.png"}
     borderRadius={"full"}/>
            
        </Flex>
        <Flex flexDirection={"column"}>
        <Image width={"200px"} height={"200px"} src={"https://static.thcdn.com/images/small/webp/widgets/121-us/06/Page-004-012606.png"} borderRadius={"full"}/>
            
        </Flex>
        <Flex flexDirection={"column"}>
        <Image width={"200px"} height={"200px"} src={"https://static.thcdn.com/images/small/webp/widgets/121-us/35/Page-005-012635.png"} borderRadius={"full"}/>
           
        </Flex>
        <Flex flexDirection={"column"}>
        <Image width={"200px"} height={"200px"} src={"https://static.thcdn.com/images/small/webp/widgets/121-us/52/Page-006-012652.png"} borderRadius={"full"}/>
           
        </Flex>
       
    </Grid>
    </Center>
    <Center><Text fontSize={"4xl"} mt={"40px"} mb={"45px"} fontFamily={"sans-serif"} color={"gray"}>TOP BRANDS</Text></Center>

    <Center>
    <Grid templateColumns='repeat(3, 1fr)' columnGap={45} rowGap={50} width={"90%"} >
        <Flex flexDirection={"column"} justifyContent={"center"}>
        <Image mb={"30px"} width={"400px"} height={"400px"} src={"https://static.thcdn.com/images/small/webp/widgets/121-us/58/original-0225-STDCRE-32155-SS-BME-Skinstore-March-Photography-2022_Part_2-_Lookbook-BATCHING-SHOT_13-500x500-092558.jpg"} borderRadius={"full"}/>
        <Text mb={"10px"}fontSize={"20px"}>25% off Elemis with code CELEBRATE</Text>
        <Text mb={"10px"}color={"grey"}>ELEMIS is globally recognized for harnessing the power of natural ingredients and scientific innovation.</Text>
        <Button mb={"10px"} width={"50%"} margin={"auto"}>SHOP NOW</Button>
        </Flex>

        <Flex flexDirection={"column"}>
        <Image mb={"30px"} width={"400px"} height={"400px"} src={"https://static.thcdn.com/images/small/webp/widgets/121-us/45/original-SS_subpanels__%286%29-105745.png"} borderRadius={"full"}/>
        <Text mb={"10px"} fontSize={"20px"}>20% off Peter Roth with code CELEBRATE</Text>
        <Text mb={"10px"} color={"grey"}>Peter Thomas Roth’s passion for skin care is derived from his quest to find effective products to treat his own.</Text>
        <Button mb={"10px"} width={"50%"} margin={"auto"}>SHOP NOW</Button>
        </Flex>

        <Flex flexDirection={"column"}>
        <Image mb={"30px"} width={"400px"} height={"400px"} src={"https://static.thcdn.com/images/small/webp/widgets/121-us/42/original-0328-STDCRE-33849-WC-SS-April-Photography-Batching-Shot09-500x500-092742.jpg"} borderRadius={"full"}/>
        <Text mb={"10px"} fontSize={"20px"}>20% off Natura Bissé with code CELEBRATE</Text>
        <Text mb={"10px"} color={"grey"}>Natura Bissé product is clinically tested and uses proprietary ingredients not found in any other product.</Text>
        <Button mb={"10px"}  width={"50%"} margin={"auto"}>SHOP NOW</Button>
        </Flex>
       
        <Flex flexDirection={"column"} justifyContent={"center"}>
        <Image mb={"30px"} width={"400px"} height={"400px"} src={"https://static.thcdn.com/images/small/webp/widgets/121-us/08/original-500x500-094208.jpg"} borderRadius={"full"}/>
        <Text mb={"10px"} fontSize={"20px"}>20% off EltaMD with code CELEBRATE</Text>
        <Text mb={"10px"} color={"grey"}>Discover the #1 Dermatologist-recommended professional sunscreen brand.</Text>
        <Button mb={"10px"} width={"50%"} margin={"auto"}>SHOP NOW</Button>
        </Flex>

        <Flex flexDirection={"column"}>
        <Image mb={"30px"} width={"400px"} height={"400px"} src={"https://static.thcdn.com/images/small/webp/widgets/121-us/41/original-500x500_Roundel-094141.jpg"} borderRadius={"full"}/>
        <Text mb={"10px"} fontSize={"20px"}>25% off Neocutis with code CELEBRATE</Text>
        <Text mb={"10px"} color={"grey"}>Neocutis means 'new skin', and that's precisely what the products in their collection can create: youthful complexion.</Text>
        <Button mb={"10px"} width={"50%"} margin={"auto"}>SHOP NOW</Button>
        </Flex>

        <Flex flexDirection={"column"}>
        <Image mb={"30px"} width={"400px"} height={"400px"} src={"https://static.thcdn.com/images/small/webp/widgets/121-us/34/original-500x500-094134.jpg"} borderRadius={"full"}/>
        <Text mb={"10px"} fontSize={"20px"}>20% off PCA Skin with code CELEBRATE + gift</Text>
        <Text mb={"10px"} color={"grey"}>Receive a complimentary PCA Skin Hydrating Toner (Worth $11.50) when you spend $65 on the brand.</Text>
        <Button mb={"10px"} width={"50%"} margin={"auto"}>SHOP NOW</Button>
        </Flex>
       
    </Grid>
    </Center>
    <Text mt={"50px"}  fontSize={"5xl"} color={"gray"} fontFamily={"sans-serif"}>Anniversary Sale</Text>
    <Center>
    <Box mt={"60px"} width={"1300px"} m={"auto"}  >
        <SimpleSlider />
    </Box>
    </Center>
    <Box width={"93%"} margin={"auto"}><Image mt={"100px"}  src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/54/original-Page-005-035154.png" /></Box>
    <Box  width={"93%"} margin={"auto"}><Image mt={"50px"} src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/32/original-0308-STDCRE32346-SS-AH-SkinStore-Concierge-Banners-1180x200-084632.jpg" /></Box>
    <Box mt={"100px"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"}><LargeWithAppLinksAndSocial/></Box>
    
    
        
    </>
        
       
    )
}
export default Home