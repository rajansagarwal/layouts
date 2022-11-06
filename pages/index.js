import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
const AirtablePlus = require("airtable-plus");
import { useRouter, withRouter } from "next/router";

export const projects = [
  {
    title: "Ethereal Art",
    type: "Technical",
    description: "Blazing fast poetry-to-image model",
    link: "https://www.google.com",
    image: "https://file.rajanagarwal.xyz/generated.png",
    year: "2022",
    accent: "white",
    slug: "ethereal",
    setting: "Research",
  },
  {
    title: "ConnexSci",
    type: "Technical",
    description: "Graph models for accessible research funding",
    link: "https://www.google.com",
    image: "https://file.rajanagarwal.xyz/connexsci.png",
    year: "2022",
    accent: "white",
    slug: "connexsci",
    setting: "Hack the North 2022",
  },
  {
    title: "Camp Social",
    type: "Technical",
    description: "Incentivising & Humanizing Digital Communities",
    link: "https://www.google.com",
    image: "https://file.rajanagarwal.xyz/cs-landing.png",
    year: "2022",
    accent: "white",
    slug: "camp-social",
    setting: "Internship",
  },
  {
    title: "tfss.club",
    type: "Technical",
    description: "School-wide Club Management",
    link: "https://www.google.com",
    image: "https://file.rajanagarwal.xyz/tfssclub.png",
    year: "2022",
    accent: "white",
    slug: "tfssclub",
    setting: "Platform",
  },
  {
    title: "Application Portal",
    type: "Technical",
    description: "New application portal for Hack Club",
    link: "https://www.google.com",
    image: "https://file.rajanagarwal.xyz/apply.png",
    year: "2022",
    accent: "white",
    slug: "hackclub-apply",
    setting: "Contract",
  },
];

const news = [
  {
    title: "University of British Columbia",
    type: "Canada",
    image: "https://file.rajanagarwal.xyz/eee.jpg",
    year: "2021",
    accent: "white",
  },
  {
    title: "Arc de Triomphe de l'Etoile",
    type: "France",
    image: "https://file.rajanagarwal.xyz/aaa.jpg",
    year: "2021",
    accent: "white",
  },
  {
    title: "That Fresh Fall Feelin'",
    type: "🐶",
    image: "https://file.rajanagarwal.xyz/bbb.jpg",
    year: "2021",
    accent: "white",
  },
  {
    title: "University of British Columbia",
    type: "Canada",
    image: "https://file.rajanagarwal.xyz/ddd.jpg",
    year: "2021",
    accent: "rgb(30, 30, 30)",
  },
];

export default function Example() {
  const [status, setStatus] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [accent, setAccent] = useState("white");

  const router = useRouter();

  /*const communityAirtable = new AirtablePlus({
    baseID: process.env.NEXT_PUBLIC_BASEID,
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE,
    tableName: "Meta",
  });

  async function updateCount() {
    setStatus(status++);
    try {
      const readRes = await communityAirtable.read({});
      await communityAirtable.updateWhere('aaa = "3"', {
        Count: readRes[0].fields.Count + 1,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchData() {
    try {
      const readRes = await communityAirtable.read({});
      setStatus(readRes[0].fields.Count);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchData();
    updateCount();
  }, []);*/

  useEffect(() => {
    const timeout = setTimeout(() => {
      {
        scrollIndex !== news.length - 1
          ? setScrollIndex(scrollIndex + 1)
          : setScrollIndex(0);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [scrollIndex]);
   
  return (
    <div>
      <section className="big-flex">
        <div className="text-header">
          <h1
            style={{
              fontWeight: "300",
              marginBottom: 0,
            }}
          >
            <b>Rajan Agarwal</b> is a software developer crafting, designing &
            engineering high-scale systems. His passion for software is rooted
            in his interest of building platforms and infrastructure that can be
            used by millions of people. Previously, he built Connex and worked
            at Hack Club & Camp Social.
          </h1>
          <p>index — story — about — contact</p>
        </div>
        <div
          className="image-scroll"
          style={{
            alignItems: "right",
          }}
        >
          <Image
            width={800}
            height={350}
            layout="intrinsic"
            objectFit="cover"
            src={
              hovered !== null
                ? projects[hovered].image
                : news[scrollIndex].image
            }
          />
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <span
                onClick={() =>
                  scrollIndex !== 0
                    ? setScrollIndex(scrollIndex - 1)
                    : setScrollIndex(news.length - 1)
                }
              >
                ←
              </span>{" "}
              <span
                onClick={() =>
                  scrollIndex !== news.length - 1
                    ? setScrollIndex(scrollIndex + 1)
                    : setScrollIndex(0)
                }
              >
                →
              </span>{" "}
            </div>
            <>
              {hovered !== null
                ? projects[hovered].title
                : news[scrollIndex].title}{" "}
              (
              {hovered !== null
                ? projects[hovered].setting
                : news[scrollIndex].type}
              )
            </>
          </div>
        </div>
      </section>
      <section className="bottom-flex">
        <div
          style={{
            display: "flex",
            alignItems: "left",
            fontWeight: "600",
            fontSize: "1rem",
            width: "96vw",
            background: "rgba(0, 0, 0, 0.2)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
          className="indices"
        >
          <div
            className="name-property"
            style={{
              padding: "0.7rem 0.5rem",
            }}
          >
            Name
          </div>
          <div
            style={{
              flexBasis: "30%",
              padding: "0.7rem 0.5rem",
            }}
            className="x-mobile"
          >
            Description
          </div>
          <div
            style={{
              flexBasis: "20%",
              color: accent,
              padding: "0.7rem 0.5rem",
            }}
            className="x-mobile"
          >
            Type
          </div>
          <div
            style={{
              flexBasis: "25%",
              color: accent,
              padding: "0.7rem 0.5rem",
            }}
            className="x-mobile"
          >
            Setting
          </div>
          <div
            style={{
              flexBasis: "2%",
              color: accent,
              padding: "0.7rem 1rem",
            }}
            className="year"
          >
            Year
          </div>
        </div>
        <div className="x-mobile">
          <br />
          <br />
        </div>
        <hr />
        {projects.map((item, index) => {
          return (
            <div
              key={index}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "left",
                  fontSize: "1rem",
                  margin: 0,
                  cursor: 'pointer',
                }}
                onMouseEnter={() => (setHovered(index), setAccent(item.accent))}
                onMouseLeave={() => (setHovered(null), setAccent(null))}
                onClick={() => router.push(`/${item.slug}`)}
              >
                <div
                  className="name-property"
                  style={{
                    padding: "0.7rem 0.5rem",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    flexBasis: "30%",
                    padding: "0.7rem 0.5rem",
                  }}
                  className="x-mobile"
                >
                  {item.description}
                </div>
                <div
                  style={{
                    flexBasis: "20%",
                    color: accent,
                    padding: "0.7rem 0.5rem",
                  }}
                  className="x-mobile"
                >
                  {item.type}
                </div>
                <div
                  style={{
                    flexBasis: "25%",
                    color: accent,
                    padding: "0.7rem 0.5rem",
                  }}
                  className="x-mobile"
                >
                  {item.setting}
                </div>
                <div
                  style={{
                    flexBasis: "2%",
                    padding: "0.7rem 1rem",
                    color: accent,
                  }}
                  className="year"
                >
                  {item.year}
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </section>
      <div
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          float: "right",
        }}
      >
        {hovered !== null ? (
          <>
            <Image
              width={880}
              height={1100}
              layout="fill"
              objectFit="cover"
              style={{
                zIndex: -999,
                overflow: "hidden",
                opacity: 0.5,
              }}
              src={projects[hovered].image}
            />
          </>
        ) : null}
      </div>
    </div>
  );
}
