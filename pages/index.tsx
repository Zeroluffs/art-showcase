import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import styles from "../styles/Home.module.css";
import "animate.css";
import { ImageCard } from "../Components/Home/ImageCard";

const Home: NextPage = () => {
  return (
    <div>
      <ImageCard/>
    </div>
  );
};

export default Home;
