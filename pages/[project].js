import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { projects } from "./index";

export default function Route() {
  const router = useRouter();
  const select = projects.filter((x) => x.slug === router.query.project);

  return (
    <div>
      <section style={{
        padding: "3rem",
      }}>
        <div className="container">
            <h1>{select[0]?.title}</h1>
        </div>
      </section>
      <section
        style={{
          position: "fixed",
          top: 0,
          right: 0,
        }}
      >
        <Image
          width={880}
          height={1150}
          layout="intrinsic"
          objectFit="cover"
          style={{
            zIndex: -999,
            overflow: "hidden",
            opacity: 0.5,
          }}
          src={select[0]?.image}
        />
      </section>
    </div>
  );
}
