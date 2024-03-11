import React from "react";
import styled from "styled-components";

const Button = ({ children, disabled, bgcolor, height, width, color, onClick, }) => {
  return (
    <div>
      <Btn
        disabled={disabled}
        bgcolor={bgcolor}
        height={height}
        width={width}
        color={color}
        onClick={onClick}
      >
        {children}
      </Btn>
    </div>
  );
};

export default Button;

const Btn = styled.button`
  background-color: ${(p) => p.bgcolor};
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  color: ${(p) => p.color};
  border-radius: 20px;
  border: #8A2B06 solid 1px;
  margin-left: 550px;
  &:hover {
    background-color: #7E2A0A;
  }
  &:active {
    background-color: #993108;
  }
`;
