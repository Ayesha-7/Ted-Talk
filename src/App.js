import React from "react";
import "./styles.css";
import { useState } from "react";

const tedTalkDB = {
  Productivity: [
    {
      name: "Inside the mind of a master procrastinator | Tim Urban",
      rating: "4/5",
      desc:
        " In this hilarious and insightful talk, Urban takes us on a journey through YouTube binges & Wikipedia rabbit holes -- and encourages us to think harder about what we're really procrastinating on, before we run out of time.",
      link: "https://www.youtube.com/watch?v=arj7oStGLkU"
    },

    {
      name: "Unwavering Focus | Dandapani",
      rating: "4/5",
      desc:
        "In this talk, Dandapani share spiritual tools to learn to create unwavering focus in our lives and the boundless benefits that result from it.",
      link: "https://www.youtube.com/watch?v=4O2JK_94g3Y"
    },
    {
      name:
        "The Super Mario Effect - Tricking Your Brain into Learning More | Mark Rober",
      rating: "3.8/5",
      desc:
        "In this video Mark describes how life gamification has stuck with him along his journey, and how it impacts the ways he helps (or tricks) his viewers into learning science, engineering, and design.",
      link: "https://www.youtube.com/watch?v=9vJRopau0g0"
    }
  ],
  Health: [
    {
      name: "Power Foods for the Brain | Neal Barnard",
      rating: "5/5",
      desc:
        "In this video speaker talks about how our diet and lifestyle should be like for a healthy brain & suggest some power foods for brain.",
      link: "https://www.youtube.com/watch?v=v_ONFix_e4k"
    },
    {
      name: "The art of lifestyle medicine | Howard Napper",
      rating: "3.8/5",
      desc:
        "In his talk, lifestyle practitioner Howard Napper explores the fascinating notion that the human body is less a permanent structure and more a regenerating organism, where old cells are constantly being replaced by new cells. And how our lifestyle, and the moment-to-moment choices we make can affect this biological remodelling for better or worse. ",
      link: "https://www.youtube.com/watch?v=eGoSdLNceEk"
    },
    {
      name: "The brain-changing benefits of exercise | Wendy Suzuki",
      rating: "4/5",
      desc:
        "What's the most transformative thing that you can do for your brain today? Exercise! says neuroscientist Wendy Suzuki. In this talk Suzuki discusses the science of how working out boosts your mood and memory",
      link: "https://www.youtube.com/watch?v=BHY0FxzoKZE&t=330s"
    }
  ],
  Happiness: [
    {
      name:
        "What makes a good life? Lessons from the longest study on happiness | Robert Waldinger",
      rating: "4/5",
      desc:
        "In this talk, Waldiger shares three important lessons learned from the study as well as some practical, old-as-the-hills wisdom on how to build a fulfilling, long life.",
      link: "https://www.youtube.com/watch?v=8KkKuTCFvzI"
    },
    {
      name: "My philosophy for a happy life | Sam Berns",
      rating: "4.6/5",
      desc: "In this talk, Sam Berns shares his philosophy for a happy life",
      link: "https://www.youtube.com/watch?v=36m1o-tM05g"
    },
    {
      name: "You Don't Find Happiness, You Create It | Katarina Blom",
      rating: "4.5/5",
      desc:
        "In this personal and inspiring talk, Katarina Blom lets you in on a few secrets of the mind - and how you can cultivate happiness by befriending your brain.",
      link: "https://www.youtube.com/watch?v=9DtcSCFwDdw"
    }
  ],
  Entrepreneurship: [
    {
      name: "The Secret of How to Think Like an Entrepreneur | Amy Wilkinson",
      rating: "4.2/5",
      desc:
        "Author and Stanford Lecturer Amy Wilkinson reveals the skills underlying entrepreneurial success.",
      link: "https://www.youtube.com/watch?v=WAMwyAm0ySw"
    },
    {
      name:
        "Zero Equals One: Creating A Business From Nothing | Riley Csernica",
      rating: "4/5",
      desc:
        "The speaker explains how she co-founded a medical brace device company to create a job she would love. Through her own experience, shared with humor, Csernica demonstrates how what she has learned along the way far exceed anything she would have gotten from an entry-level job.",
      link: "https://www.youtube.com/watch?v=CzJUCxwz8hk"
    },
    {
      name: "What makes an entrepreneur? | Sahar Hashemi",
      rating: "4.3/5",
      desc:
        "The speaker shares history of her entrepreneurial journey,and talks about impoortant lessons she learnt",
      link: "https://www.youtube.com/watch?v=r8nHptyS234"
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
              <div>{ttalk.desc}</div>
              <div>
                <a href={ttalk.link} target="_blank">
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
