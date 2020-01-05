/**@jsx jsx */
import { graphql, Link as GatsbyLink } from "gatsby";
import Img from "gatsby-image";
import { Styled as ThemeStyled, jsx } from "theme-ui";
import styled from "@emotion/styled";
import { Global } from "@emotion/core";
import { theme } from "../theme";
import Layout from "../components/layout";

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  z-index: -1;
`;

const WelcomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HelloThere = styled.div`
  background: ${props => props.bg};
  margin-left: ${props => props.margin};
  padding: ${props => props.padding};
  position: relative;
  box-shadow: ${props => `30px 30px 0 ${props.shadowColor}`};
`;

const ContactButton = styled(GatsbyLink)`
  background: ${props => props.bg};
  color: ${props => props.color};
  padding-top: ${props => `${props.py}px`};
  padding-bottom: ${props => `${props.py}px`};
  padding-left: ${props => `${props.px}px`};
  padding-right: ${props => `${props.px}px`};
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  box-shadow: 7px 7px 0 ${theme.colors.text};
  transition: box-shadow 250ms ease;
  &:hover {
    box-shadow: 0 0 0 ${theme.colors.text};
    transition: box-shadow 250ms ease;
  }
`;

const AboutMeTemplate = ({ data }) => {
  return (
    <Layout>
      <Global
        styles={() => ({
          body: {
            backgroundColor: theme.colors.background
          },
          "nav a": {
            color: theme.colors.text
          }
        })}
      />
      <WelcomeWrapper>
        <ImageWrapper>
          <Img
            fluid={data.imageSharp.fluid}
            sx={{
              maxWidth: "725px",
              height: "490px"
            }}
          />
        </ImageWrapper>
        <HelloThere
          bg={theme.colors.primary}
          margin={`-${theme.space[4]}px`}
          padding={`${theme.space[5]}px`}
          shadowColor={theme.colors.text}
        >
          <ThemeStyled.h1>Hello There.</ThemeStyled.h1>
          <ThemeStyled.p>
            {data.markdownRemark.frontmatter.tagline}
          </ThemeStyled.p>
        </HelloThere>
      </WelcomeWrapper>
      <ThemeStyled.h2>About Me.</ThemeStyled.h2>
      <div
        sx={{ maxWidth: "900px" }}
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
      {data.site.siteMetadata.contactLink.length > 0 && (
        <ContactButton
          bg={theme.colors.primary}
          color={theme.colors.text}
          px={theme.space[4]}
          py={theme.space[3]}
          to={data.site.siteMetadata.contactLink}
        >
          Get in Touch
        </ContactButton>
      )}
    </Layout>
  );
};

export const query = graphql`
  query {
    markdownRemark {
      frontmatter {
        tagline
      }
      html
    }
    imageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    site {
      siteMetadata {
        contactLink
      }
    }
  }
`;

export default AboutMeTemplate;
