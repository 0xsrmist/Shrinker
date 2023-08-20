"use client";
import React, { useState, useEffect } from "react";

export default function Hero() {
  const words = ["Speedy", "Quick", "Fast", "Swift"];
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
    <div>
      <h1 className="mb-2 font-title text-2xl text-gray-100 md:text-6xl mt-40 text-center ">
        A <br className="block md:hidden" />
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
      <div className=" mt-24">
        <div className="bg-white rounded-2xl flex items-center justify-between p-1 space-x-1">
          <input
            type="text"
            placeholder="Paste your Link here"
            class="bg-transparent py-1 text-black px-4 focus:outline-0 w-full border-none"
          />{" "}
          <button
            className="inline-block rounded-xl border border-black bg-black px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-black"
            href="/download"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
