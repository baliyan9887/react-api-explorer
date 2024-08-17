import { ChevronIcon, ProviderHeaderWrapper } from './providerItem.styles';

interface ProviderHeaderProps {
  name: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const ProviderHeader: React.FC<ProviderHeaderProps> = ({
  name,
  isOpen,
  toggleOpen,
}) => {
  return (
    <ProviderHeaderWrapper isOpen={isOpen} onClick={toggleOpen}>
      <span>{name}</span>
      <ChevronIcon
        isOpen={isOpen}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 15l7-7 7 7"
        />
      </ChevronIcon>
    </ProviderHeaderWrapper>
  );
};

export default ProviderHeader;
