import { useParams } from "react-router-dom";

const aboutData = [
  {
    slug: 'about-app',
    title: 'About the app',
    description:
      "This application lets us add to-dos, edit, and delete items. Log in to see the delete feature. It also persists to-dos in the browser's local storage for a subsequent visit.",
  },
  {
    slug: 'about-developer',
    title: 'About the developer',
    description:
      "Hi, I'm Huseyn.I'm 17 years old and working on becoming a full stack developer. This project is a personal project I'm building to improve my web development skills."
  },
];

const SinglePage = () => {
  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
  return (
    <div className="main_content">
      <h2>{title}</h2>
      <p style={{ fontWeight: '700' }}>{description}</p>
    </div>
  );
}

export default SinglePage;