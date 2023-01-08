import { css } from "@emotion/react";

export default function JokeCard({ joke, isTold }) {
  return (
    <>
      <div
        className="block is-relative"
        css={css`
          text-align: right;
        `}
      >
        <p
          className="has-background-primary has-text-white"
          css={css`
            display: inline-block;
            max-width: 80%;
            margin: 0 !important;
            padding: 0.5rem 1rem;
            text-align: left;
            border-radius: 0.5rem;
          `}
        >
          {joke.setup}
        </p>
        <div
          css={css`
            width: 0;
            height: 0;
            border-top: 6px solid rgb(0, 209, 178);
            border-left: 6px solid rgb(0, 209, 178);
            border-bottom: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top-left-radius: 2px;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translate(4px, -50%) rotate(135deg);
          `}
        ></div>
      </div>
      <>
        {isTold ? (
          <div className="is-relative">
            <p
              className="has-background-white"
              css={css`
                display: inline-block;
                max-width: 80%;
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
              `}
            >
              {joke.punchline}
            </p>
            <div
              css={css`
                width: 0;
                height: 0;
                border-top: 6px solid white;
                border-left: 6px solid white;
                border-bottom: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top-left-radius: 2px;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translate(-4px, -50%) rotate(-45deg);
              `}
            ></div>
          </div>
        ) : (
          ""
        )}
      </>
    </>
  );
}
