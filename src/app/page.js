"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  const [list, setList] = useState(1);

  const arrayItem = [
    [
      {
        image: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png",
        text: "TOI 3D Customize E-commerce",
      },
      {
        image: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
        text: "E-learning – Internal training platform",
      },
      {
        image:
          "https://tekup.vn/wp-content/uploads/2022/08/summer21-thumbnail.png",
        text: "Summer 21 Cosmetic E-commerce Platform",
      },
      {
        image: "https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png",
        text: "Kiva – Ambition to digital transformation in the brokerage assiduity",
      },
      {
        image:
          "https://tekup.vn/wp-content/uploads/2022/08/boxgo-thumbnail.png",
        text: "Boxgo – Professional Warehouse Management",
      },
    ],
    [
      {
        image: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
        text: "TOI 3D Customize E-commerce",
      },
      {
        image: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
        text: "TOI 3D Customize E-commerce",
      },
      {
        image: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
        text: "TOI 3D Customize E-commerce",
      },
      {
        image: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
        text: "TOI 3D Customize E-commerce",
      },
      {
        image: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
        text: "TOI 3D Customize E-commerce",
      },
      {
        image: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
        text: "TOI 3D Customize E-commerce",
      },
    ],
    [
      {
        image: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
        text: "TOI 3D Customize E-commerce",
      },
      {
        image: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
        text: "TOI 3D Customize E-commerce",
      },
      {
        image: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
        text: "TOI 3D Customize E-commerce",
      },
      {
        image: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
        text: "TOI 3D Customize E-commerce",
      },
      {
        image: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
        text: "TOI 3D Customize E-commerce",
      },
    ],
    [
      {
        image: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
        text: "TOI 3D Customize E-commerce",
      },
      {
        image: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
        text: "TOI 3D Customize E-commerce",
      },
      {
        image: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
        text: "TOI 3D Customize E-commerce",
      },
      {
        image: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
        text: "TOI 3D Customize E-commerce",
      },
    ],
  ];

  return (
    <main className={styles.main}>
      <link
        href="https://fonts.googleapis.com/css?family=Barlow"
        rel="stylesheet"
      ></link>
      <section className={styles.sectionContainer}>
        <div className={styles.navbar}>
          <button
            className={`${styles.navbarButton} ${
              list === 1 ? styles.active : ""
            }`}
            onClick={() => setList(1)}
          >
            All
          </button>
          <button
            className={`${styles.navbarButton} ${
              list === 2 ? styles.active : ""
            }`}
            onClick={() => setList(2)}
          >
            Manpower Supply
          </button>
          <button
            className={`${styles.navbarButton} ${
              list === 3 ? styles.active : ""
            }`}
            onClick={() => setList(3)}
          >
            Mobile App / Websites
          </button>
          <button
            className={`${styles.navbarButton} ${
              list === 4 ? styles.active : ""
            }`}
            onClick={() => setList(4)}
          >
            UI/UX Design
          </button>
        </div>
        <div className={styles.listItem}>
          {arrayItem[list - 1]?.map((item, index) => (
            <div className={styles.item} key={index}>
              <img className={styles.itemImg} src={item?.image} />
              <div className={styles.itemText}>
                <span>{item?.text}</span>
                <span>{">"}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
