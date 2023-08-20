"use client";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";

export default function Hero() {
  const words = ["Speedy", "Quick", "Fast", "Swifty"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const word = words[currentWordIndex];
    const typingInterval = 100; // Adjust typing speed if needed
    const erasingInterval = 50; // Adjust erasing speed if needed

    let i = 0;
    let isErasing = false;

    const typingTimer = setInterval(() => {
      if (!isErasing) {
        document.querySelector("#typewriter").textContent += word[i];
        i++;

        if (i === word.length) {
          isErasing = true;
          setTimeout(() => {
            clearInterval(typingTimer);
            const erasingTimer = setInterval(() => {
              const currentText =
                document.querySelector("#typewriter").textContent;
              document.querySelector("#typewriter").textContent =
                currentText.substring(0, currentText.length - 1);
              if (currentText.length === 0) {
                isErasing = false;
                setCurrentWordIndex(
                  (prevIndex) => (prevIndex + 1) % words.length
                );
                clearInterval(erasingTimer);
              }
            }, erasingInterval);
          }, 1000);
        }
      }
    }, typingInterval);

    return () => {
      clearInterval(typingTimer);
    };
  }, [currentWordIndex]);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-20 lg:h-screen lg:items-center">
        <div class="">
          <h1 className="mb-2 font-title text-xl text-gray-100 md:text-4xl lg:text-6xl mt-56 text-center ">
            A <br className="md:hidden" />
            <span
              id="typewriter"
              className="relative h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent"
            >
              {/* Placeholder for the typed text */}
            </span>
            <br />
            <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
              QR-Code Generator
            </span>
          </h1>
          <div className="mt-10 md:mt-20 flex items-center justify-between ">
            <div className="bg-white rounded-2xl flex items-center justify-between p-1 space-x-1 w-11/12 sm:w-full mx-auto">
              <input
                type="text"
                placeholder="Paste your Link here"
                class="bg-transparent py-1 text-black px-4 focus:outline-0 w-full border-none"
              />{" "}
              <Modal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
