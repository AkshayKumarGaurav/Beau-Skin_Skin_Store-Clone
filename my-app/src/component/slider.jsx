import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box , Image, Text , Button} from "@chakra-ui/react";

import React from "react";
import Slider from "react-slick";


  

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    
    
  };
  return (
    <Slider {...settings} >
      <Box height={"180px"}  >
        <Image mb={"20px"} ml={5} src={"https://static.thcdn.com/images/small/webp//productimg/original/12691011-1864885479476271.jpg"} />
        <Text textAlign={"center"}>U Beauty The Super Hydrator 1.7 fl oz</Text>
        <Text border="1px" borderRadius="solid" borderColor="red.700" mr={"40px"} ml={"40px"} mt={"10px"}>20% off with code CELEBRATE</Text>
        <Text mt={"10px"}>$168.00</Text>
        <Button mt={"10px"} backgroundColor={"black"} color={"white"}  mb={"30px"}>QUICK BUY</Button>
      </Box >
      <Box height={"180px"}  >
        <Image mb={"20px"} src={"https://static.thcdn.com/images/large/webp//productimg/1600/1600/13973775-1314997258355504.jpg"}/>
        <Text>U Beauty The Body Set (Worth $226.00)</Text>
        <Text mt={"10px"} border="1px" borderRadius="solid" borderColor="red.700" mr={"40px"} ml={"40px"}>20% off with code CELEBRATE</Text>
        <Text mt={"10px"}>$178.00</Text>
        <Button  mt={"10px"} backgroundColor={"black"} color={"white"}  mb={"30px"}>QUICK BUY</Button>
      </Box >
      <Box height={"180px"}  >
        <Image mb={"20px"} src={"https://static.thcdn.com/images/large/webp//productimg/1600/1600/13229176-1314889399703687.jpg"}/>
        <Text>U Beauty The Multimodal Defender SPF30</Text>
        <Text mt={"10px"} border="1px" borderRadius="solid" borderColor="red.700" mr={"40px"} ml={"40px"}>20% off with code CELEBRATE</Text>
        <Text mt={"10px"}>$168.00</Text>
        <Button mt={"10px"} backgroundColor={"black"} color={"white"}  mb={"30px"}>QUICK BUY</Button>
      </Box >
      <Box height={"180px"}  >
        <Image mb={"20px"} src={"https://static.thcdn.com/images/large/webp//productimg/1600/1600/12691012-7864885479610269.jpg"}/>
        <Text>U Beauty The Super Hydrator 0.5</Text>
        <Text mt={"10px"} border="1px" borderRadius="solid" borderColor="red.700" mr={"40px"} ml={"40px"}>20% off with code CELEBRATE</Text>
        <Text mt={"10px"}>$68.00</Text>
        <Button mt={"10px"} backgroundColor={"black"} color={"white"}  mb={"30px"}>QUICK BUY</Button>
      </Box >
      <Box height={"180px"}  >
        <Image mb={"20px"} src={"https://static.thcdn.com/images/large/webp//productimg/1600/1600/13547803-7904944585943257.jpg"}/>
        <Text>U Beauty The Plasma Lip Compound</Text>
        <Text mt={"10px"} border="1px" borderRadius="solid" borderColor="red.700" mr={"40px"} ml={"40px"}>20% off with code CELEBRATE</Text>
        <Text mt={"10px"} >$68.00</Text>
        <Button mt={"10px"} backgroundColor={"black"} color={"white"}  mb={"30px"}>QUICK BUY</Button>
      </Box >
      <Box height={"180px"}  >
        <Image mb={"20px"} src={"https://static.thcdn.com/images/large/webp//productimg/1600/1600/12672740-1544796885962509.jpg"}/>
        <Text> U Beauty Resurfacing Compound 15ml</Text>
        <Text mt={"10px"} border="1px" borderRadius="solid" borderColor="red.700" mr={"40px"} ml={"40px"}>20% off with code CELEBRATE</Text>
        <Text mt={"10px"}>$88.00</Text>
        <Button mt={"10px"} backgroundColor={"black"} color={"white"}  mb={"30px"}>QUICK BUY</Button>
      </Box >
      <Box height={"180px"}  >
        <Image mb={"20px"} src={"https://static.thcdn.com/images/large/webp//productimg/1600/1600/14006740-1724997258465295.jpg"}/>
        <Text>U Beauty MANTLE Skin ConditioningWash</Text>
        <Text mt={"10px"} border="1px" borderRadius="solid" borderColor="red.700" mr={"40px"} ml={"40px"}>20% off with code CELEBRATE</Text>
        <Text mt={"10px"}>$78.00</Text>
        <Button mt={"10px"} backgroundColor={"black"} color={"white"}  mb={"30px"}>QUICK BUY</Button>
      </Box >
      <Box height={"180px"}  >
        <Image mb={"20px"} src={"https://static.thcdn.com/images/large/webp//productimg/1600/1600/14006740-1724997258465295.jpg"}/>
        <Text>U Beauty MANTLE Skin ConditioningWash</Text>
        <Text mt={"10px"} border="1px" borderRadius="solid" borderColor="red.700" mr={"40px"} ml={"40px"}>20% off with code CELEBRATE</Text>
        <Text mt={"10px"}>$78.00</Text>
        <Button mt={"10px"} backgroundColor={"black"} color={"white"} mb={"30px"}>QUICK BUY</Button>
      </Box >
    </Slider>
  );
}