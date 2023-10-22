import React from "react";
import Productcarousel from "react-smooth-product-carousel";


function Index() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-center text-[#111111] py-10  px-3">
        React Smooth Product Carousel
      </h1>
      <div className=" w-full items-center container mx-auto pt-5">
        <Productcarousel title="Trending Product">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center">
                <img
                  alt={item.name}
                  className="bg-white object-cover"
                  src={item.img}
                />
                <div className=" pr-[16px] pt-[12px] flex justify-between">
                  <div>
                    <div className="text-base text-[#111111] font-bold">{item.name}</div>
                    <div className="text-base text-[#757575]">{item.type}</div>
                  </div>
                  <div className="text-base text-[#111111]font-bold">{item.price}</div>
                </div>
              </div>
            );
          })}
        </Productcarousel>
      </div>
    </>
  );
}

export default Index;

const data = [
  {
    img: 'https://react-product-carousel-example.vercel.app/1.webp',
    name: "LeBron Witness 7",
    type: "Younger Kids' Shoes",
    price: "S$115",
  },
  {
    img: 'https://react-product-carousel-example.vercel.app/2.webp',
    name: "Nike Flex Plus 2",
    type: "Older Kids' Running Shoes",
    price: "S$99",
  },
  {
    img: 'https://react-product-carousel-example.vercel.app/3.webp',
    name: "Nike Flex Runner 2",
    type: "Younger Kids' Shoes",
    price: "S$65",
  },
  {
    img: 'https://react-product-carousel-example.vercel.app/4.webp',
    name: "LeBron Witness 7 SE",
    type: "Younger Kids' Shoes",
    price: "S$119",
  },
  {
    img: 'https://react-product-carousel-example.vercel.app/5.webp',
    name: "Nike Force 1 LE",
    type: "Younger Kids' Shoe",
    price: "S$105",
  },
  {
    img: 'https://react-product-carousel-example.vercel.app/6.webp',
    name: "Nike Pico 5",
    type: "Baby & Toddler Shoes",
    price: "S$49",
  },
]