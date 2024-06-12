import React, { useState } from 'react';
import { featured, articles } from '../data';
import './main.css';

const Main = () => {
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('#333');

  const handleClick = () => {
    setMessage('The text has been changed!');
    setColor('red');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
  };

  return (
    <main className="main-content">
      <section id="home">
        <div className="featured-content">
          <h2>{featured.title}</h2>
          <p>{featured.description}</p>
        </div>

        <h2>Recent Articles</h2>
        <div className="articles">
          {articles.map(article => (
            <div key={article.id} className="article">
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <button as="a" href={article.link}>Read More</button>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
          </div>
          <div>
            <label>
              Message:
              <textarea name="message" required></textarea>
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
        <button onClick={handleClick}>Change Text and Color</button>
        <p style={{ color }}>{message}</p>
      </section>
    </main>
  );
}

export default Main;
