import { ReactElement } from 'react';


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
  isAdminOnly?: boolean;
  element: ReactElement;
  children?: IPageProps[];
}

/**
 * Interface defining the properties needed to display a blog post in the blog page.
 *
 * @interface IPostProps
 * @property {string} title - The title of the blog post
 * @property {string} content - All the content of the blog-post in ***markdown***
 * @property {Date} datePublished - The date the blog-post was created
 * @property {ITag[]} tags - The list of tags concerning the blog.
 */
export interface IPostProps {
  title: string;
  content: string;
  datePublished: Date;
  tags: ITag[];
}


/**
 * Interface defining the properties needed for a tag on a blog post
 *
 * @interface ITag
 * @property {string} name - The text that is displayed when the tag is drawn
 * @property {string?} url - The URL that the tag links to, if null then the tag is not made a link
 * @property {string} color - The color of background of the tag, ***USE TAILWINDCSS' COLOR SYSTEM***
 *
 * @example
 * const tag: ITag = {
 *   name: "JavaScript",
 *   color: "gray-600"
 * }
 */
interface ITag {
  name: string;
  url?: string;
  color: string;
}

/**
 * Interface defining the properties needed for the contact form
 *
 * @interface IMessage
 * @property {string} name - The name of the person sending the message
 * @property {string} email - The email of the person sending the message
 * @property {string} message - The message that the person is sending
 *
 * @example
 * const message: IMessage = {
 *   name: "John Doe",
 *   email: "johndoe@gmail.com",
 *   message: "Hello, I would like to know more about your projects."
 * }
 */
export interface IMessage {
  name: string;
  email: string;
  message: string;
}

/**
 * Interface defining the properties needed for the experience section of the about me section.
 *
 * @property {string} name - The displayed name for the language / framework
 * @property {string} icon - The icon of the language / framework
 * @property {string} level - The "level" of the language / framework, such as frontend, backend, database
 * @property {string} type - The type of the experience, like language or framework.
 *
 * @example
 * const experience: IExperience = {
 *    name: "JavaScript",
 *    icon: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
 *    level: ["frontend", "backend"],
 *    type: "language"
 * }
 */
export interface IExperience {
  name: string;
  icon: string;
  level?: Array<"frontend" | "backend" | "database">;
  type: "language" | "framework" | "technology";
}
