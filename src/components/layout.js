import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Header, Main, Layout as ThemeLayout, Styled } from "theme-ui";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          contactLink
        }
      }
    }
  `);

  return (
    <ThemeLayout>
      <Header>
        <span>Gatsby Theme About Me</span>
        {data.site.siteMetadata.contactLink.length > 0 && (
          <nav>
            <Styled.ul>
              <li>
                <Link to={data.site.siteMetadata.contactLink}>Contact</Link>
              </li>
            </Styled.ul>
          </nav>
        )}
      </Header>
      <Main>{children}</Main>
    </ThemeLayout>
  );
};

export default Layout;
