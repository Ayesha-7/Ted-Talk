import React from "react";
import "./styles.css";
import { useState } from "react";

const tedTalkDB = {
  Productivity: [
    {
      name: "Inside the mind of a master procrastinator | Tim Urban",
      rating: "4/5",
      link: "https://www.youtube.com/watch?v=arj7oStGLkU"
    },
    {
      name:
        "The Super Mario Effect - Tricking Your Brain into Learning More | Mark Rober",
      rating: "3.5/5",
      link: "https://www.youtube.com/watch?v=9vJRopau0g0"
    },
    {
      name: "How to Get Your Brain to Focus | Chris Bailey",
      rating: "4/5",
      link: "https://www.youtube.com/watch?v=Hu4Yvq-g7_Y"
    }
  ],
  Health: [
    {
      name: "Power Foods for the Brain | Neal Barnard",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=v_ONFix_e4k"
    },
    {
      name: "Why Lifestyle is the BEST Medicine | Meagan L. Grega",
      rating: "4/5",
      link: "https://www.youtube.com/watch?v=efGa8QD8pU4"
    }
  ],
  Focus: [
    {
      name: "Unwavering Focus | Dandapani",
      rating: "4/5",
      link: "https://www.youtube.com/watch?v=4O2JK_94g3Y"
    },
    {
      name: "The art of focus – a crucial ability | Christina Bengtsson",
      rating: "3.5/5",
      link: "https://www.youtube.com/watch?v=xF80HzqvAoA&t=3s"
    }
  ],
  Happiness: [
    {
      name:
        "What makes a good life? Lessons from the longest study on happiness | Robert Waldinger",
      rating: "4/5",
      link: "https://www.youtube.com/watch?v=8KkKuTCFvzI"
    },
    {
      name: "My philosophy for a happy life | Sam Berns",
      rating: "4.5/5",
      link: "https://www.youtube.com/watch?v=36m1o-tM05g"
    }
  ],
  Entrepreneurship: [
    {
      name: "The Secret of How to Think Like an Entrepreneur | Amy Wilkinson",
      rating: "3/5",
      link: "https://www.youtube.com/watch?v=WAMwyAm0ySw"
    },
    {
      name:
        "Zero Equals One: Creating A Business From Nothing | Riley Csernica",
      rating: "4/5",
      link: "https://www.youtube.com/watch?v=CzJUCxwz8hk"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Happiness");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>
        <span style={{ fontWeight: "bolder", color: "red" }}>
          Ted<sup>x</sup>
        </span>{" "}
        Talk 💡
      </h1>
      <hr />
      <h2>
        Here are some of my{" "}
        <span style={{ fontWeight: "bolder", color: "red" }}>
          Ted<sup>x</sup>
        </span>{" "}
        Talks recommendations
      </h2>
      <p>Select a category to get my favourites</p>
      <div>
        {Object.keys(tedTalkDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div className="parent">
        <ul>
          {tedTalkDB[selectedGenre].map((ttalk) => (
            <li key={ttalk.name}>
              <div style={{ fontWeight: "bold" }}> {ttalk.name} </div>
              <div>
                {" "}
                My rating:{" "}
                <span style={{ fontWeight: "bold" }}>{ttalk.rating} </span>
              </div>
              <div>
                <a href={ttalk.link}>
                  <span className="watchBtn"> Watch Now! </span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="space"></div>
      <hr />
      <footer>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.4rem",
            marginBottom: "0.3rem"
          }}
        >
          My Ted Talk Recommendations
        </div>
        <p style={{ fontSize: "1.4rem", margin: "0.3rem" }}>
          Made with 💛 & 🧠 by Ayesha | Sep 2021
        </p>
      </footer>
    </div>
  );
}
