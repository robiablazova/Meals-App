import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useContextStore } from "./ContextStore";
import Button from "./UI/Button";

const CartModal = ({ isOpen }) => {
  const { state = [], incMeal, decMeal, closeModal,} = useContextStore();
  if (!isOpen) return null;

  const totalPrice = state?.meals.map((item) => {
    if (item.quantity === 0) {
      const result = { ...item, price: (item.price = 0) };
      return result.price;
    } else {
      return item.price;
    }
  });

  const resultTotal = totalPrice.reduce((a, b) => a + b, 0);

  return ReactDOM.createPortal(
    <Modal>
      <ModalBlock>
        {state.meals.map((item) => {
          return (
            item.quantity !== 0 && (
              <MealList>
                <Text>
                  <h3>{item.name}</h3>
                  <div style={{ display: "flex" }}>
                    <Price>{item.price}</Price>
                    <Quantity>x {item.quantity}</Quantity>
                  </div>
                </Text>
                <div>
                  <Btn onClick={() => incMeal(item.id)}>+</Btn>
                  <Btn onClick={() => decMeal(item.id)}>-</Btn>
                </div>
              </MealList>
            )
          );
        })}
        <OpenAndClose>
          <TotalAmount>
            Total Amount{" "}
            <span
              style={{ color: "#ad5502", fontSize: "22px", fontWeight: "bold" }}
            >
              {resultTotal}
            </span>
          </TotalAmount>
          <Button
            onClick={closeModal}
            bgcolor="#8A2B06"
            color='white'
            height="45px"
            width="110px"
          >
            Close
          </Button>
        </OpenAndClose>
      </ModalBlock>
    </Modal>,

    document.getElementById("modal")
  );
};

export default CartModal;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalBlock = styled.ul`
  width: 670px;
  height: 400px;
  background-color: white;
  border-radius: 20px;
  list-style-type: none;
  overflow: auto;
  padding: 0 20px;
`;

const MealList = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d6d6d6;
`;

const OpenAndClose = styled.div`
  position: sticky;
  bottom: 0;
  background-color: white;
  width: 100%;
  height: 120px;
  padding-bottom: 20px;
`;
const Text = styled.div``;

const Price = styled.p`
  color: #ad5502;
  font-weight: bold;
  font-size: 20px;
  margin-right: 40px;
`;

const Quantity = styled.p`
  width: 45px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #d6d6d6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TotalAmount = styled.div`
  justify-content: space-between;
  display: flex;
  color: #222;
  font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
  margin: 20px;
`;

const Btn = styled.button`
  margin: 10px;
  width: 50px;
  height: 35px;
  background-color: white;
  border: 1px solid #8a2b06;
  border-radius: 5px;
  font-size: 30px;
  color: #8a2b06;
  font-weight: 100;
  &:hover {
    background-color: #7E2A0A;
    color: white;
  }
  &:active {
    background-color: #993108;
    color: white;
  }
`;
