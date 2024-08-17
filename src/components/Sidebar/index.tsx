import {
  StyledSidebar,
  SidebarTitle,
  ProviderContainer,
} from './sidebar.styles';
import useFetchProviders from '../../hooks/useFetchProviders';
import ProviderItem from '../ProviderItem';

const Sidebar: React.FC<{ toggleSidebar: boolean }> = ({ toggleSidebar }) => {
  const { providers } = useFetchProviders();

  return (
    <StyledSidebar isOpen={toggleSidebar}>
      <SidebarTitle>Select Providers</SidebarTitle>
      <ProviderContainer>
        {providers.map((provider) => (
          <ProviderItem key={provider.name} name={provider.name} />
        ))}
      </ProviderContainer>
    </StyledSidebar>
  );
};

export default Sidebar;
