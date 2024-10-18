import React from "react";
import Card from "@/Components/Card";
import Image from "next/image";

export default function HomePage() {
  return (
    // adding background image with tailwind CSS

    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Image
        src="/background.png"
        alt="backgroundImage"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      <div className="flex flex-col items-center justify-center space-y-4 p-8">
        <Card name="Zimal" rollno={1033875} day="Tuesday" />
        <br />
        <Card name="Sharjeena" rollno={1023596} day="Thursday" />
        <br />
        <Card name="Helena" rollno={1014357} day="Saturday" />
      </div>
    </div>
  );
}
