import styled from 'styled-components';

export const ProviderWrapper = styled.div`
  margin-bottom: 8px;
`;

export const ProviderHeaderWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  background-color: ${({ isOpen }) => (isOpen ? '#1c2534' : '#2c3849')};
  color: ${({ isOpen }) => (isOpen ? '#ffffff' : '#b0bec5')};
  border-radius: 6px;
  border-bottom-left-radius: ${({ isOpen }) => (isOpen ? '0' : '6px')};
  border-bottom-right-radius: ${({ isOpen }) => (isOpen ? '0' : '6px')};
`;

export const ChevronIcon = styled.svg<{ isOpen: boolean }>`
  width: 24px;
  height: 24px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

export const DropdownWrapper = styled.div<{
  isOpen: boolean;
  contentHeight: number;
}>`
  overflow: hidden;
  height: ${({ isOpen, contentHeight }) =>
    isOpen ? `${contentHeight}px` : '0'};
  transition: height 0.3s ease;
  background-color: #1c2534;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const DropdownContent = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
`;

export const ProviderLogo = styled.img`
  height: 32px;
  width: 32px;
  margin-right: 12px;
`;

export const ProviderTitle = styled.span`
  font-size: 16px;
`;
