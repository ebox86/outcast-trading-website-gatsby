import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image: React.FC = () => {
	const data = useStaticQuery(graphql`
		query {
			logoImage: file(
                relativePath: { eq: "outcast-trading-logo.png" }
                ) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return <Img fluid={data.logoImage.childImageSharp.fluid} />;
};

export default Image;