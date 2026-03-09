"use client";

import { motion } from "framer-motion";
import {
  SiTypescript,
  SiSelenium,
  SiDocker,
  SiAppium,
  SiMocha,
  SiGraphql
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FiServer } from "react-icons/fi";
import { PlaywrightIcon } from "./icons/playwright";

export default function GithubProjects() {
  const projects = [
    {
      title: "web-mobile-api-test-framework",
      desc: "Boilerplate project for Web, Mobile and API using WebdriverIO, Appium, SuperTest and TypeScript",
      url: "https://github.com/sadabnepal/web-mobile-api-test-framework",
      stars: 32,
      forks: 17,
      icons: [<SiTypescript key="ts" />, <SiAppium key="ap" />, <TbApi key="api" />],
      color: "from-blue-600/20 to-indigo-900/20"
    },
    {
      title: "playwright-test-ui-api",
      desc: "Test Automation framework using Playwright and TypeScript",
      url: "https://github.com/sadabnepal/playwright-test-ui-api",
      stars: 0,
      forks: 0,
      icons: [<PlaywrightIcon key="pw" />, <SiTypescript key="ts" />],
      color: "from-green-600/20 to-emerald-900/20"
    },
    {
      title: "mountebank-service-virtualization",
      desc: "Service virtualisation using mountebank",
      url: "https://github.com/sadabnepal/mountebank-service-virtualization",
      stars: 0,
      forks: 0,
      icons: [<FiServer key="mv" />],
      color: "from-yellow-600/20 to-orange-900/20"
    },
    {
      title: "supertest-ts-mocha-api-test",
      desc: "Boilerplate API test framework using Mocha, SuperTest, TypeScript and ReportPortal",
      url: "https://github.com/sadabnepal/supertest-ts-mocha-api-test",
      stars: 1,
      forks: 0,
      icons: [<SiMocha key="mc" />, <SiTypescript key="ts" />, <TbApi key="api" />],
      color: "from-red-600/20 to-rose-900/20"
    },
    {
      title: "graphql-testing-supertest-ts",
      desc: "GraphQL API Test framework using TypeScript supertest library and mocha framework",
      url: "https://github.com/sadabnepal/graphql-testing-supertest-ts",
      stars: 0,
      forks: 0,
      icons: [<SiGraphql key="gq" />, <SiMocha key="mc" />, <SiTypescript key="ts" />],
      color: "from-pink-600/20 to-purple-900/20"
    },
    {
      title: "selenium-javascript-test",
      desc: "Mocha framework using Selenium, TypeScript, Mocha, Chai, Docker to test web application",
      url: "https://github.com/sadabnepal/selenium-javascript-test",
      stars: 0,
      forks: 0,
      icons: [<SiSelenium key="se" />, <SiDocker key="dk" />, <SiTypescript key="ts" />],
      color: "from-cyan-600/20 to-blue-900/20"
    }
  ];

  return (
    <section className="bg-[#121212] pt-16 pb-16 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative h-80 flex flex-col justify-between rounded-3xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 backdrop-blur-md p-8 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2"
            >
              {/* Thumbnail Background Gradient mapped to Tech Stack */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${p.color} blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3`} />

              <div>
                {/* Tech Stack Icons Header */}
                <div className="flex items-center gap-4 mb-6 text-3xl text-gray-400 group-hover:text-white transition-colors duration-300">
                  {p.icons}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {p.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {p.desc}
                </p>
              </div>

              {/* Footer stats */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10 text-xs font-mono text-gray-500">
                {(p.stars > 0) && (
                  <span className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
                    ★ {p.stars}
                  </span>
                )}
                {(p.forks > 0) && (
                  <span className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                    ⑂ {p.forks}
                  </span>
                )}
                <span className="ml-auto text-indigo-400 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Repository →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
