import React from "react";
import styled from "styled-components";
import Button from "./UI/Button";
import { useContextStore } from "./ContextStore";

const MealList = () => {
  const {state, addMeal}= useContextStore()
  return (
    <Main>
      <MealCont>
        {state.meals.map((el) => (
          <Meal key={el.id}>
            <Text>
              <h3>{el.name}</h3>
              <MealText>{el.title}</MealText>
              <MealPrice>{el.staticPrice}</MealPrice>
            </Text>
            <Button bgcolor="#8A2B06" color="white" width="100px" height="40px" onClick={() => addMeal(el.id)}>
              + Add
            </Button>
          </Meal>
        ))}
      </MealCont>
    </Main>
  );
};

export default MealList;

const Main = styled.div `
display: flex;
justify-content: center;
`

const MealCont = styled.div`
display: inline-block;
  width: 1040px;
  height: 560px;
  background-color: white;
  border-radius: 16px;
  margin: 50px 200px;
`;

const Meal = styled.li`
  display: flex;
  justify-content: space-between;
  height: 25%;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  border-bottom: 1px solid #d6d6d6;
  &:last-child {
    border-bottom: none;
  }
`;

const MealText = styled.p`
  font-style: italic;
  font-size: 16px;
`;

const MealPrice = styled.p`
  color: #ad5502;
  font-weight: bold;
  font-size: 20px;
`;

const Text = styled.div`
  text-align: left;
  padding-top: 5px;
  padding-bottom: 5px;
  line-height: 10px;
`;
