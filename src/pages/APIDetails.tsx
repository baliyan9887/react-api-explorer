import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchProviderDetails from '../hooks/useFetchProviderDetails';
import Section from '../components/Section';
import { Title } from '../components/Typography';
import Button from '../components/Button';
import ContactInfo from '../components/ContactInfo';
import Logo from '../components/Logo';
import { Container, FlexWrapper } from '../globalStyles';

const ApiDetails: React.FC = () => {
  const { providerName } = useParams();
  const { loading, providerDetails, error } = useFetchProviderDetails(
    providerName as string,
  );

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <Container>
      <FlexWrapper>
        <Logo src={providerDetails?.url} alt={providerDetails?.url} />
        <Title>{providerDetails?.title || 'API Details'}</Title>
      </FlexWrapper>

      <Section title="Description">
        <p>{providerDetails?.description}</p>
      </Section>

      <Section title="Swagger">
        <a href={providerDetails?.swaggerUrl} target="_blank">
          {providerDetails?.swaggerUrl}
        </a>
      </Section>

      <Section title="Contact">
        <ContactInfo
          email={providerDetails?.contact.email || ''}
          name={providerDetails?.contact.name || ''}
          website={providerDetails?.contact.url || ''}
        />
      </Section>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
        <Button>Explore more APIs</Button>
      </div>
    </Container>
  );
};

export default ApiDetails;
