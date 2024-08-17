import React, { useState, useRef } from 'react';
import useFetchProviderDetails from '../../hooks/useFetchProviderDetails';
import { ProviderWrapper } from './providerItem.styles';
import ProviderHeader from './ProviderHeader';
import ProviderDropdown from './ProviderDropdown';

interface ProviderItemProps {
  name: string;
}

const ProviderItem: React.FC<ProviderItemProps> = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const { providerDetails } = useFetchProviderDetails(hasFetched ? name : null);

  const toggleOpen = () => {
    if (!isOpen && !hasFetched) {
      setHasFetched(true);
    }
    setIsOpen((prevOpen) => !prevOpen);
  };

  const contentHeight = contentRef.current
    ? contentRef.current.scrollHeight
    : 0;

  return (
    <ProviderWrapper>
      <ProviderHeader name={name} isOpen={isOpen} toggleOpen={toggleOpen} />
      <ProviderDropdown
        isOpen={isOpen}
        contentHeight={contentHeight}
        providerDetails={providerDetails}
        contentRef={contentRef}
        name={name}
      />
    </ProviderWrapper>
  );
};

export default ProviderItem;
