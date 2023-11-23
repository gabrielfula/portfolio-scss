"use client";

import "./header.scss";
import { useState } from "react";
import Navbar from "../navbar/navbar";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="navbar">
        <div className="contentNavbar">
          <div>
            <h2>Fula</h2>
          </div>
        </div>

        <div className="buttonPosition" onClick={handleClick}>
          <div className={isActive ? `buttonActive` : `button`} />
        </div>
        <AnimatePresence mode="wait">{isActive && <Navbar />}</AnimatePresence>
      </div>
    </>
  );
}
