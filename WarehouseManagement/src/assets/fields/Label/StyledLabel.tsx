
import styled from '@emotion/styled';
import { HTMLAttributes } from 'react'; 

interface LabelProps extends HTMLAttributes<HTMLDivElement> {
  bgColor?: string;
  padding?: string;
  textColor?: string;
}

const Label = styled.div<LabelProps>`
  background-color: ${(props) => props.bgColor || 'white'};
  padding: ${(props) => props.padding || '10px'};
  font-size: 1.2rem; 
  font-weight: bold; 
  color: ${(props) => props.textColor || 'black'}; 
`;

export default Label;
