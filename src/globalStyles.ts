import styled from 'styled-components';

export const Container = styled.div`
  background-color: #2f4a67;
  display: flex;
  flex-direction: column;
  padding: 0px 120px;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;

  /* Media query for mobile devices */
  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
