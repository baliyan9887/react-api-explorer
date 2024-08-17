import styled from 'styled-components';

interface StyledLogoProps {
  width: string;
  height: string;
}

export const StyledLogo = styled.img<StyledLogoProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom: 20px;
`;
