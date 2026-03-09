"use client";

import { motion } from "framer-motion";
import { FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

export default function YouTube() {
  const webdriverioMochaVideos = [
    {
      title: "#01 | Setup | WebdriverIO Mocha Framework",
      description: "how to set up WebdriverIO with Mocha framework for test automation",
      thumbnail: "https://img.youtube.com/vi/BXAgREPDBxk/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=BXAgREPDBxk",
      duration: "19:04",
      publishedAt: "2024-01-15"
    },
    {
      title: "#02 | Documentation Overview | WebdriverIO Mocha Framework",
      description: "how to navigate and use the WebdriverIO Mocha framework documentation",
      thumbnail: "https://img.youtube.com/vi/CQdC8DxxvD0/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=CQdC8DxxvD0",
      duration: "10:52",
      publishedAt: "2024-01-10"
    },
    {
      title: "#03 | Understand Project Structure | WebdriverIO Mocha Framework",
      description: "how to understand the project structure of the WebdriverIO Mocha framework",
      thumbnail: "https://img.youtube.com/vi/9MYUOjGLocg/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=9MYUOjGLocg",
      duration: "08:55",
      publishedAt: "2024-01-05"
    },
    {
      title: "#04 | Mocha Basics | WebdriverIO Mocha Framework",
      description: "how to get started with Mocha for test automation using WebdriverIO",
      thumbnail: "https://img.youtube.com/vi/agFSJ6K_bYk/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=agFSJ6K_bYk",
      duration: "14:18",
      publishedAt: "2024-01-01"
    }
  ];

  const webdriverioBddVideos = [
    {
      title: "Part1: WebdriverIO with TypeScript - SetUp",
      description: "Common test automation interview questions and answers",
      thumbnail: "https://img.youtube.com/vi/FnC--5WB8ow/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=FnC--5WB8ow&list=PLGk7ftfMz7jbZcArQU894rAfo6B1PbXbG&index=1",
      duration: "27:31",
      publishedAt: "2024-02-01"
    },
    {
      title: "Part2: WebdriverIO with TypeScript - Create first Test",
      description: "Advanced test automation interview preparation",
      thumbnail: "https://img.youtube.com/vi/WdePAfsPiM4/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=WdePAfsPiM4&list=PLGk7ftfMz7jbZcArQU894rAfo6B1PbXbG&index=2",
      duration: "30:44",
      publishedAt: "2024-02-05"
    },
    {
      title: "Part3: WebdriverIO with TypeScript - Test Data from feature file",
      description: "Framework design questions in test automation interviews",
      thumbnail: "https://img.youtube.com/vi/R5iUjyTJOOM/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=R5iUjyTJOOM&list=PLGk7ftfMz7jbZcArQU894rAfo6B1PbXbG&index=3",
      duration: "29:57",
      publishedAt: "2024-02-10"
    },
    {
      title: "Part4: WebdriverIO with TypeScript - Page Objects",
      description: "CI/CD and DevOps questions for test automation roles",
      thumbnail: "https://img.youtube.com/vi/myzMuXLOBTY/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=myzMuXLOBTY&list=PLGk7ftfMz7jbZcArQU894rAfo6B1PbXbG&index=4",
      duration: "22:42",
      publishedAt: "2024-02-15"
    }
  ];

  // Helper function to render video grid
  const renderVideoGrid = (videos: typeof webdriverioMochaVideos, playlistTitle: string, playlistUrl: string) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md mb-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <FaYoutube className="text-red-500 text-2xl" />
        <h3 className="text-xl font-bold text-white">{playlistTitle}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {videos.map((video, index) => (
          <motion.a
            key={index}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group block bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/30 rounded-xl overflow-hidden transition-all duration-300"
          >
            <div className="relative">
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={400}
                height={225}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaExternalLinkAlt className="text-white text-lg" />
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-white font-semibold text-sm mb-2 line-clamp-2 group-hover:text-red-400 transition-colors">
                {video.title}
              </h4>
              <p className="text-gray-400 text-xs line-clamp-2">
                {video.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="text-center">
        <a
          href={playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 text-sm font-semibold uppercase tracking-wider rounded-xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
        >
          <FaYoutube />
          View Full Playlist
        </a>
      </div>
    </motion.div>
  );

  return (
    <section className="bg-[#121212] px-6 md:px-24">
      <div className="max-w-6xl mx-auto pb-12 border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaYoutube className="text-red-500 text-3xl" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">YouTube Videos</h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Explore my latest test automation tutorials, framework setups, and interview preparation content
          </p>
        </motion.div>

        {renderVideoGrid(
          webdriverioMochaVideos,
          "WebdriverIO with Mocha Framework",
          "https://www.youtube.com/playlist?list=PLGk7ftfMz7jbF-vCLxaE0-zrW_gj6V9YG"
        )}

        {renderVideoGrid(
          webdriverioBddVideos,
          "WebdriverIO with BDD Gherkin Framework",
          "https://www.youtube.com/playlist?list=PLGk7ftfMz7jbZcArQU894rAfo6B1PbXbG"
        )}

        <div className="text-center">
          <a
            href="https://www.youtube.com/@TestAutomationHub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 text-sm font-semibold uppercase tracking-wider rounded-xl border border-red-500/30 hover:border-red-500/50 transition-all duration-300"
          >
            <FaYoutube />
            Visit My YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
}