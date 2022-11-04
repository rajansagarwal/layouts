import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Blog from "./writings";
import Image from "next/image";
const AirtablePlus = require("airtable-plus");

const callouts = [
  {
    name: "Etherealism (Poem Synthesis & Visualization)",
    description: "Generative Art Model with Poetry NLP",
    imageSrc: "https://file.rajanagarwal.xyz/image-grid.jpg",
    imageAlt: "etheralism.",
    href: "https://github.com/rajanagarwal/etherealism",
  },
  {
    name: "ConnexSci (Hack the North 2022 Finalist)",
    description: "Graph models for Accessible Research Funding",
    imageSrc: "https://file.rajanagarwal.xyz/connexsci.png",
    imageAlt: "connexsci.",
    href: "https://devpost.com/software/connexsci-20nrjy",
  },
  {
    name: "Camp Social (SWE Summer 2022)",
    description: "Incentivizing & Humanizing Digital Communities",
    imageSrc: "https://file.rajanagarwal.xyz/cs-landing.png",
    imageAlt: "camp social.",
    href: "https://camp.social",
  },
  {
    name: "Bloom (Data Aggregation)",
    description: "Decentralized Medical Network",
    imageSrc:
      "https://cloud-cssrzjtwc-hack-club-bot.vercel.app/0screen_shot_2022-03-11_at_8.53.59_pm.png",
    imageAlt: "bloom network.",
    href: "https://github.com/rajanwastaken/bloom",
  },
  {
    name: "Hestia (UTH Hacks Winner)",
    description: "Indigenous Pipeline Infrastructure",
    imageSrc:
      "https://cloud-ra5alevdj-hack-club-bot.vercel.app/0screen_shot_2022-03-11_at_8.56.49_pm.png",
    imageAlt: "project hestia",
    href: "https://youtu.be/inOwByW_ufs",
  },
  {
    name: "Club Network (TFSS)",
    description: "School-wide Club Management",
    imageSrc: "https://file.rajanagarwal.xyz/tfssclub.png",
    imageAlt: "club.",
    href: "",
  },
  {
    name: "Encryption Algorithms (Live Workshop)",
    description: "Custom Blockchain in 100 Lines",
    imageSrc: "https://file.rajanagarwal.xyz/workshop.png",
    imageAlt: "project hestia",
    href: "https://www.youtube.com/watch?v=3HZJ7ZoQIUE&ab_channel=RajanAgarwal",
  },
  {
    name: "Hack Club Apply (OSS Contractor)",
    description: "Application Portal for Hack Club",
    imageSrc: "https://file.rajanagarwal.xyz/apply.png",
    imageAlt: "apply.",
    href: "https://apply.hackclub.com",
  },
  {
    name: "Reconciliation (7000+ Viewers)",
    description: "160km Run For Hope",
    imageSrc: "https://cloud-e9m8zg3xl-hack-club-bot.vercel.app/0image.png",
    imageAlt: "run for hope.",
    href: "https://run.heyrajan.com",
  },

  {
    name: "Blind Spot (Assemble 2022)",
    description: "Manipulating Google Search",
    imageSrc: "https://file.rajanagarwal.xyz/blindspot.png",
    imageAlt: "project hestia",
    href: "https://github.com/rajanwastaken/blind-spot",
  },
  {
    name: "Children's Novel (100+ Digital Copies)",
    description: "Autism Awareness",
    imageSrc: "https://cloud-16c6pal7a-hack-club-bot.vercel.app/0bookpost.png",
    imageAlt: "breaking barriers.",
    href: "",
  },
  {
    name: "Gamifying Political Awareness (Hack the North 2021)",
    description: "Policy Chat Rooms",
    imageSrc:
      "https://user-images.githubusercontent.com/64426829/133933404-ff1e8f03-f689-4fba-a43a-bb1a4766540d.png",
    imageAlt: "project hestia",
    href: "https://github.com/diplomatica-htn",
  },
];

const product = {
  images: [
    {
      src: "https://file.rajanagarwal.xyz/i-profile.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://file.rajanagarwal.xyz/staywoke2.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://file.rajanagarwal.xyz/ori3.png",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://file.rajanagarwal.xyz/clock.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  description:
    "i'm a 16 year old developer, author and researcher based in toronto. i'm rebuilding patient data aggregation & poetic expression through generative art. in my free time, i explore evolutionary game theory, actuarial science and political science.",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [status, setStatus] = useState(0);

  const communityAirtable = new AirtablePlus({
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
  }, []);

  return (
    <div className="bg-neutral-100">
      <Head>
        <title>rajan.</title>
      </Head>
      <div
        style={{
          position: "fixed",
          fontSize: "15px",
          left: "20px",
          bottom: "20px",
          color: "white",
        }}
      >
        {status}
      </div>
      <div className="lg:pt-6">
        {/* Image gallery */}
        <div className="lg:mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8 sm:hidden">
          <div className="hidden aspect-w-3 aspect-h-4 lg:block">
            <Image
              src={product.images[0].src}
              alt={product.images[0].alt}
              width="640"
              height="900"
              className="w-full h-full object-center object-cover rounded-lg"
            />
          </div>
          <div
            className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8"
          >
            <div className="aspect-w-3 aspect-h-2">
              <Image
                src={product.images[1].src}
                alt={product.images[1].alt}
                width="640"
                height="419"
                className="w-full h-full object-center object-cover rounded-lg"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2">
              <Image
                src={product.images[2].src}
                alt={product.images[2].alt}
                width="640"
                height="419"
                className="w-full h-full object-center object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="hidden aspect-w-3 aspect-h-4 lg:block">
            <Image
              src={product.images[3].src}
              alt={product.images[3].alt}
              width="640"
              height="900"
              className="w-full h-full object-center object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-8 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-8 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-800 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              rajan agarwal.
            </h1>
            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:pr-8">
              <div>
                <div className="space-y-6">
                  <p className="text-base text-gray-800">
                    Seeking serendipity in code, craft & curiosity. <br />
                    Designing & engineering high-scale communities. <br />
                    Meeting wonderful people along the way.
                    <br />
                    <br />
                    Currently, I&#39;m building ConnexSci to make research
                    accessible and open to funding in the public sector. On the
                    side, I&#39;m working at JEC Toronto (COO), ChoiceDAO (Core)
                    and Cobweb (Researcher). Previously, I worked at Camp Social
                    as a Software Engineer Intern.
                    <br />
                    <br />
                    In my free time, I enjoy writing and spending time outdoors.
                    I&#39;m currently writing a novel, The Platonist, and
                    playing competitive golf, tennis and long distance running.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <div className="mt-6 text-gray-800">
              <p className="text-lg text-gray-800 py-2">
                <em>
                  People grow old only by deserting their ideals. <br />
                  <br />
                  Worry, doubt, self-distrust and fear; these are the long years
                  that bow the head and turn the growing spirit back to dust.{" "}
                  <br />
                  <br />
                  Whatever the years, there is in every being the love of
                  wonder, the undaunted challenge of events, the unfailing
                  childlike appetite for what next, and the joy in the game of
                  life.
                </em>
              </p>
            </div>

            {/* Reviews 
            <p className="text-2xl text-gray-900 font-bold hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              latest
            </p>
            <div className="mt-6 text-gray-800">
              <p className="text-lg text-gray-800 pb-1">
                <Link href="writings/soulbound">blind spot (bs)</Link>
              </p>
              <p className="text-md text-gray-300 pb-6">
                What if the world around us, and the things we do, could be
                soulbound?
              </p>

              <p className="text-lg text-gray-800 pb-1">
                <Link href="writings/surveillance-capitalism">
                  surveillance capitalism.
                </Link>
              </p>
              <p className="text-md text-gray-300 pb-6">
                How do we as ordinary people, take our self-determination back?
              </p>

              <p className="text-lg text-gray-800 pb-1">
                <Link href="writings/ethnocentrism">ethnocentrism.</Link>
              </p>
              <p className="text-md text-gray-300 pb-6">
                The contextual debate of universalism vs relativism.
              </p>
  </div>*/}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-3 sm:py-3 lg:py-3 lg:max-w-none">
          <h2 className="text-2xl font-bold text-gray-800">highlighted work</h2>
          <br />

          <div className="mt-3 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <Image
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    width="700"
                    height="480"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-400">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-800">
                  {callout.description}
                </p>
                <br />
                <br />
              </div>
            ))}
          </div>
          <p style={{ color: 'white', textAlign: 'center' }}><a href="https://twitter.com/rajanwastaken" rel="noreferrer" target="_blank">twitter</a> | <a href="https://github.com/rajanwastaken" target="_blank" rel="noreferrer">github</a> | <a href="https://instagram.com/rajanwastaken" target="_blank" rel="noreferrer">instagram</a> | <a href="https://linkedin.com/in/rajansagarwal" target="_blank" rel="noreferrer">linkedin</a> | <a href="mailto:rajan.ag005@gmail.com" target="_blank" rel="noreferrer">email</a></p><br/>
        </div>
      </div>
      {/*
      <Blog />
            */}
    </div>
  );
}
