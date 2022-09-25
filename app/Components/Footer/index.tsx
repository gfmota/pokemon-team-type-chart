import Image from "next/image";
import { FooterStyled } from "../../style";

const Footer = () => (
  <FooterStyled>
    <Image
      src='/github.svg'
      width={18} height={18}
        alt='Github'
    />
    <a
      target='blank' href='https://github.com/gfmota/pokemon-team-type-chart'
      style={{margin: '0 .5em', color: 'white', textDecoration: 'none'}}
    >Help us keep evolving</a>
  </FooterStyled>
);

export default Footer;
