import {ReactElement} from "react";

/**
 * Interface defining the properties needed to populate a project card on the Projects page
 *
 * @interface IProjectCardProps
 * @property {string} title - The title of the project
 * @property {string} description - A short description explaining the goal and / or use of the project
 * @property {boolean} isFeatured - An optional config that adds the project to the featured projects section and adds the little featured badge to the card
 * @property {string} image - A link to the image to display on the card
 * @property {IProjectLink[]} links - An array of links. Each link holds a title and a href.
 */
export interface IProjectCardProps {
  title: string;
  description: string;
  isFeatured?: boolean;
  image: string;
  links: IProjectLink[];
}

/**
 * Interface defining the properties needed for a project link
 *
 * @interface IProjectLink
 * @property {string} displayName - The display name for the link.
 * @property {string} href - The actual URL of the link.
 */
interface IProjectLink {
  displayName: string;
  href: string;
}

/**
 * Interface defining the properties for creating links to my social medias in the footer
 *
 * @interface ISocialProps
 * @property {string} name - Used for the text that appears when you hover over the social medias icon
 * @property {string} icon - The SVG that is the social medias logo
 * @property {string} href - The link that the user gets redirected to when they click on the social media icon
 */
export interface ISocialProps{
  name: string;
  icon: string;
  href: string;
}

/**
 * Interface defining the properties for creating routes in the application.
 * Used by the CreateRoute function to generate route elements recursively.
 *
 * @interface IPageProps
 * @property {string} name - Used for the header menu to travel to that page
 * @property {string} path - The URL path segment for this route
 * @property {ReactElement} element - The React component to render at this route
 * @property {IPageProps[]} [children] - Optional nested routes under this route
 */
export interface IPageProps {
  name: string;
  path: string;
  isHidden?: boolean;
  element: ReactElement;
  children?: IPageProps[];
}