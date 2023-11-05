import headerImage from "../../assets/react-core-concepts.png";
import "./Header.css";
const reactDescription = ["fundamental", "crucial", "core"];

function randomIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  return (
    <header>
      <img src={headerImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[randomIndex(2)]} React concepts you will need for
        almost any app you are
      </p>
    </header>
  );
}
