import React from "react";
import styles from "./AboutUs.module.css"
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About us",
  description: "Welcome to About Us page.",
  keywords: ['shopname', 'product', 'sell']
};
const page = () => {
  console.log("This is about page")
  return (
    <div className={styles.heading}>
     This is about page
    </div>
  );
};

export default page;
