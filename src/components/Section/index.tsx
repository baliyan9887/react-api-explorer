import { SubTitle } from '../Typography';
import { SectionWrapper } from './section.styles';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <SectionWrapper>
    <SubTitle>{title}</SubTitle>
    {children}
  </SectionWrapper>
);

export default Section;
