// InputField.js
import styled from "@emotion/styled";
import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  size?:  number; 
  color?: string;
  secondaryColor?: string;
}

const InputField = styled.input<InputFieldProps>`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #ccc;
  outline: 0;
  font-size: ${(props) => props.size || "1.3rem"};
  color: #fff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    font-size: ${(props) => props.size || "1.3rem"};
    cursor: text;
    top: 20px;
  }

  &:focus ~ label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: ${(props) => props.color || "#007bff"};
    font-weight: 700;
  }

  &:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(
      to right,
      ${(props) => props.color || "#007bff"},
      ${(props) => props.secondaryColor || "#6c757d"}
    );
    border-image-slice: 1;
  }

  /* reset input */
  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

export default InputField;
