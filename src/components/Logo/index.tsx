import { StyledLogo } from './logo.styles';

interface LogoProps {
  src: string | undefined;
  alt: string | undefined;
  width?: string;
  height?: string;
}

const Logo: React.FC<LogoProps> = ({
  src,
  alt,
  width = '80px',
  height = '80px',
}) => <StyledLogo src={src} alt={alt} width={width} height={height} />;

export default Logo;
