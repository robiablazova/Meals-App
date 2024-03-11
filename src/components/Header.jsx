import React from "react";
import Group from './images/Group.png'
import styled from "styled-components";
import headerImage from './images/headerImage.jpg'
import { useContextStore } from "./ContextStore";
import CartModal from "./CartModal";

const Header = () => {

  const {openModal, isModalOpen} = useContextStore()
  return (
    <>
      <HeaderMeal>
        <HeaderTop>
          <HeaderTitle>ReactMeals</HeaderTitle>
          <HeaderBtn onClick={openModal}> <img src={Group} alt="" />Your Cart</HeaderBtn>
        </HeaderTop>
        <ImgBlock>
          <HeaderImg src={headerImage} alt="" />
          <TitleCont>
            <Title >Delicious Food, Delivered To You</Title>
            <p>
              Choose your favorite meal from our broad selection of available
              meals and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
              All our meals are cooked with high-quality ingredients,
              just-in-time and of course by  experienced chefs!
            </p>
          </TitleCont>
        </ImgBlock>
      </HeaderMeal>

      <CartModal isOpen={isModalOpen}/>
    </>
  );
};

export default Header;

const HeaderMeal = styled.header `
margin-bottom: 150px;
`

const HeaderTop = styled.div `
width: 100%;
height: 100px;
background-color: #8A2B06;
display: flex;
justify-content: space-around;
align-items: center;
`

const HeaderTitle = styled.h1 `
    color: white;
    font-weight: 600;
`

const HeaderImg = styled.img `
    width: 100%;
    height: 430px;
`

const HeaderBtn = styled.button `
display: flex;
justify-content: space-evenly;
align-items: center;
font-weight: 600;
font-size: 16px;
    width: 250px;
    height: 60px;
    border-radius: 30px;
    background-color: #5A1F08;
    color: white;
    border: none;
`

const ImgBlock = styled.div `
position: relative;
display: flex;
justify-content: center;
`

const TitleCont = styled.div `
position: absolute;
top: 60%;
width: 850px;
height: 270px;
color: white;
background-color: #383838;
border-radius: 16px;
-webkit-box-shadow: 0px 11px 20px -5px rgba(0,0,0,0.5);
-moz-box-shadow: 0px 11px 20px -5px rgba(0,0,0,0.5);
box-shadow: 0px 11px 20px -5px rgba(0,0,0,0.5);
`

const Title = styled.h2 `
    font-size: 36px;
    font-weight: 600;
`