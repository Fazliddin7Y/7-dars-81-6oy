import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header"; // Faqat import qoldiramiz
import Hero from "./components/Hero";
import InfoBlocks from "./components/InfoBlocks";
import News from "./components/News";
import Footer from "./components/Footer";
import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Hero.css";
import "./styles/InfoBlocks.css";
import "./styles/News.css";
import "./styles/Footer.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data.slice(0, 6)); // Faqat 6 ta foydalanuvchi olamiz
    });
  }, []);

  return (
    <div className="container">
      <Header />
      <Hero />
      <InfoBlocks users={users} />
      <News />
      <Footer />
    </div>
  );
}

export default App;


// Header Component
export function Header() {
  return (
    <header className="header">
      <h1>Quintela</h1>
      <nav>
        <ul>
          <li>O Kompanii</li>
          <li>Deatelnost</li>
          <li>Personnal</li>
          <li>Press Center</li>
        </ul>
      </nav>
    </header>
  );
}

// Hero Component
export function Hero() {
  return (
    <section className="hero">
      <h2>Bizning Kompaniya Haqida</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </section>
  );
}

// InfoBlocks Component
export function InfoBlocks({ users }) {
  return (
    <section className="info-blocks">
      {users.map((user, index) => (
        <div key={user.id} className="info-box">
          <h2>{String(index + 1).padStart(2, "0")}</h2>
          <p>{user.name}</p>
        </div>
      ))}
    </section>
  );
}

// News Component
export function News() {
  return (
    <section className="news">
      <h2>Yangiliklar</h2>
      <div className="news-item">Yangilik 1</div>
      <div className="news-item">Yangilik 2</div>
      <div className="news-item">Yangilik 3</div>
    </section>
  );
}

// Footer Component
export function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Quintela. Barcha huquqlar himoyalangan.</p>
    </footer>
  );
}
