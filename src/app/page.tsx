'use client';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <h1 className="title is-1 has-text-primary">Hello Bulma!</h1>
      <button className="button is-primary">Button</button>
    </div>
  );
}
