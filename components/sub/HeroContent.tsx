"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => console.error("Audio play failed:", error));
    }
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => console.error("Audio play failed:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[18px]">
            Software Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Welcome to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Sroth Sinha{" "}
            </span>
            artwork
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.5)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Welcome to my World! I am a Junior at California State University Long Beach studying Computer Science and I am passionate about building applications that are secure and performant. I have experience in building applications using technologies like flutter, Next.js, and much more. I am looking for Summer 2025 Internships  to learn and grow as a developer. Feel free to check out my resume and projects and send me a messege on any of my social media platforms if you have any questions or just want to chat.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="https://drive.google.com/file/d/1wXHpjsdERFKf2oBaxB3EM1f0PvnBblhy/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Access Resume
        </motion.a>
        <button
          onClick={togglePlayPause}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mt-5"
        >
          {isPlaying ? "Pause Music" : "Play Music"}
        </button>
        <motion.a
          variants={slideInFromLeft(0.6)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="https://github.com/SrothCS"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github 
        </motion.a>
      </div>
    
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/sroth.png"
          alt="work icons"
          height={450}
          width={450}
        />
      </motion.div>

      <audio ref={audioRef} autoPlay loop>
        <source src="/space1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </motion.div>
  );
};

export default HeroContent;
