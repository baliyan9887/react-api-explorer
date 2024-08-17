import styled from 'styled-components';

export const StyledSidebar = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? '450px' : '0')};
  transition: width 0.3s ease;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  z-index: 1000;
  background-color: #2c3e50;
  overflow-y: scroll;

  /* Media query for desktops */
  @media (max-width: 768px) {
    width: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  }
`;

export const SidebarTitle = styled.h3`
  color: #fff;
  text-align: center;
  padding: 16px 0;
`;

export const ProviderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0px 20px;
`;
