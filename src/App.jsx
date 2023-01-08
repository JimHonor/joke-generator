import { getJokes } from "./api/joke";

import { css } from "@emotion/react";

import { useEffect, useState } from "react";
import JokeCard from "./components/JokeCard";

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [jokeIndex, setJokeIndex] = useState(7);
  const joke = jokes[jokeIndex];

  const [isTold, setIsTold] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJokes().then((value) => {
      setJokes(value);
      setLoading(false);
    });
  }, []);

  const onAnotherJoke = () => {
    setIsTold(false);

    const isLastJoke = jokeIndex === 9;
    if (isLastJoke) {
      setLoading(true);
      setJokeIndex(0);

      getJokes().then((value) => {
        setJokes(value);
        setLoading(false);
      });
    } else {
      setJokeIndex(jokeIndex + 1);
    }
  };

  return (
    <div
      className="has-background-white-bis"
      css={css`
        height: 100vh;
      `}
    >
      <header className="py-2">
        <h1 className="title is-4 has-text-centered">Joke</h1>
      </header>
      <hr className="mt-0" />
      <div
        css={css`
          max-width: 480px;
          padding: 0 1rem;
          margin: 0 auto;
        `}
      >
        {loading ? (
          <div
            css={css`
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <p>loading...</p>
          </div>
        ) : (
          <JokeCard joke={joke} isTold={isTold} />
        )}
      </div>
      <div
        css={css`
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
        `}
      >
        {isTold ? (
          <button
            className="button is-fullwidth has-text-weight-semibold"
            css={css`
              border-radius: 0;
            `}
            onClick={onAnotherJoke}
          >
            Another
          </button>
        ) : (
          <button
            className={`button is-fullwidth has-text-weight-semibold ${
              loading ? "is-loading" : ""
            }`}
            css={css`
              border-radius: 0;
            `}
            onClick={() => {
              setIsTold(true);
            }}
          >
            Tell Me
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
