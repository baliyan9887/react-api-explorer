import {
  ContactContainer,
  ContactLink,
  Paragraph,
  ContactContainerItem,
} from './contactInfo.styles';

interface ContactInfoProps {
  email: string;
  name: string;
  website: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ email, name, website }) => (
  <ContactContainer>
    <ContactContainerItem>
      <Paragraph>Email </Paragraph>
      <Paragraph>{email}</Paragraph>
    </ContactContainerItem>
    <ContactContainerItem>
      <Paragraph>Name </Paragraph>
      <Paragraph>{name}</Paragraph>
    </ContactContainerItem>
    <ContactContainerItem>
      <Paragraph>Url </Paragraph>
      <ContactLink href={website} target="_blank">
        {website}
      </ContactLink>
    </ContactContainerItem>
  </ContactContainer>
);

export default ContactInfo;
