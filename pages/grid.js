import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const index = [
  {
    type: "title",
    content: "Rajan Agarwal",
    image: "https://file.rajanagarwal.xyz/i-profile.jpg",
  },
  {
    type: "about",
    title: "About",
    content: "17 y/o Building Better Cities and Communities with Code & Craft.",
    image: "https://64.media.tumblr.com/534bdd8c845eac243f04b2c9461e630f/92673925840b4cde-1f/s500x750/45328a381e4580196a4913f6e976ddade579e598.gif",
  },
  {
    type: "ascii",
    content: `
    @( * O * )@ `,
  },
  {
    type: "index",
    title: "Ethereal Art",
    content: "Blazing fast poetry-to-image machine learning model",
    image: "https://file.rajanagarwal.xyz/vertical.png",
  },
  {
    type: "index",
    title: "Currently Listening",
    content: "Blazing fast poetry-to-image machine learning model",
    image: "https://file.rajanagarwal.xyz/vertical.png",
  },
];

export default function Grid() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <nav
        style={{
          padding: 0,
          margin: 0,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p>Technical</p>
      </nav>
      {selected && selected.startsWith("http") ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            float: "right",
            zIndex: -999,
          }}
        >
          <Image
            src={selected}
            width={600}
            height={700}
            layout="intrinsic"
            objectFit="cover"
          />
        </div>
      ) : selected ? (
        <>
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              float: "right",
            }}
          >
            <h1
              style={{
                fontSize: "100px",
                fontWeight: "300",
              }}
            >
              {selected}
            </h1>
          </div>
        </>
      ) : null}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "0 2rem 2rem 2rem",
          fontWeight: "300",
        }}
      >
        {index.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                width: "230px",
                height: "200px",
                padding: "0 1.7rem",
              }}
              onMouseEnter={() => setSelected(item.image)}
              onMouseLeave={() => setSelected(null)}
            >
              <p
                style={{
                  float: "right",
                }}
              >
                {index}
              </p>
              <div
                style={{
                  width: "90%",
                  cursor: "ne-resize",
                }}
              >
                {item.type === "title" ? (
                  <>
                    <h1
                      style={{
                        fontSize: "45px",
                        fontWeight: "300",
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {item.content}
                    </h1>
                  </>
                ) : item.type === "about" ? (
                  <>
                    <h2
                      style={{
                        fontWeight: "300",
                        fontSize: "20px",
                      }}
                    >
                      {item.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      {item.content}
                    </p>
                  </>
                ) : item.type === "index" ? (
                  <>
                    <h2
                      style={{
                        fontWeight: "300",
                        fontSize: "20px",
                      }}
                    >
                      {item.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      {item.content}
                    </p>
                  </>
                ) : item.type === "ascii" ? (
                  <>
                    <h2
                      style={{
                        fontWeight: "300",
                        fontSize: "25px",
                      }}
                    >
                      {item.content}
                    </h2>
                  </>
                ) : (
                  <>
                    <h2
                      style={{
                        fontWeight: "300",
                        fontSize: "17px",
                      }}
                    >
                      {item.title}
                    </h2>
                    <p style={{ margin: 0 }}>{item.content}</p>
                    <p style={{ margin: 0 }}>{item.date}</p>
                    <p style={{ margin: 0 }}>{item.title}</p>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
