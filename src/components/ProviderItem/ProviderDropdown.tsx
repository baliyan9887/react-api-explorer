import { Link } from 'react-router-dom';
import {
  DropdownWrapper,
  DropdownContent,
  ProviderLogo,
  ProviderTitle,
} from './providerItem.styles';

interface ProviderDropdownProps {
  isOpen: boolean;
  contentHeight: number;
  providerDetails: any;
  contentRef: React.RefObject<HTMLDivElement>;
  name: string;
}

const ProviderDropdown: React.FC<ProviderDropdownProps> = ({
  isOpen,
  contentHeight,
  providerDetails,
  contentRef,
  name,
}) => {
  return (
    <DropdownWrapper isOpen={isOpen} contentHeight={contentHeight}>
      <DropdownContent ref={contentRef}>
        <ProviderLogo src={providerDetails?.url} alt={providerDetails?.url} />
        <Link to={`/api/${name}`}>
          <ProviderTitle>{providerDetails?.title}</ProviderTitle>
        </Link>
      </DropdownContent>
    </DropdownWrapper>
  );
};

export default ProviderDropdown;
