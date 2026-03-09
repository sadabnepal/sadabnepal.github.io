import {
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiSelenium,
  SiDocker,
  SiAppium,
  SiCypress,
  SiPostman,
  SiAxios,
  SiGithubactions,
  SiGithubcopilot,
  SiJenkins,
  SiDotenv,
  SiEslint,
  SiNodedotjs,
  SiCodefresh
} from "react-icons/si";
import { TbApi, TbBrandGit } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { PlaywrightIcon } from "./icons/playwright";
import { WdioIcon } from "./icons/wdio";
import { HoppscotchIcon } from "./icons/hoppscotch";
import { K6Icon } from "./icons/k6";
import { FiServer } from "react-icons/fi";

export default function Skills() {
  const topSkills = [
    { name: "Playwright", icon: <PlaywrightIcon /> },
    { name: "WebdriverIO", icon: <WdioIcon /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Cypress", icon: <SiCypress /> },
    { name: "GraphQL", icon: <SiGraphql /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Hoppscotch", icon: <HoppscotchIcon /> },
    { name: "SuperTest", icon: <TbApi /> },
    { name: "Axios", icon: <SiAxios /> },
    { name: "Selenium", icon: <SiSelenium /> },
    { name: "Java", icon: <FaJava /> },
    { name: "RestAssured", icon: <TbApi /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Mountebank", icon: <FiServer /> },
    { name: "GitHub Actions", icon: <SiGithubactions /> },
    { name: "GitHub Copilot", icon: <SiGithubcopilot /> },
    { name: "CodeFresh", icon: <SiCodefresh /> },
    { name: "Jenkins", icon: <SiJenkins /> },
    { name: "K6", icon: <K6Icon /> },
    { name: "dotenv", icon: <SiDotenv /> },
    { name: "ESLint", icon: <SiEslint /> },
    { name: "Husky", icon: <TbBrandGit /> },
    { name: "NodeJs", icon: <SiNodedotjs /> },
    { name: "Appium", icon: <SiAppium /> }
  ];

  return (
    <section className="bg-[#121212] px-6 md:px-24">
      <div className="max-w-6xl mx-auto py-12 border-b border-white/5">
        <h2 className="text-3xl font-bold text-white mb-8">Top Skills</h2>
        <div className="flex flex-wrap gap-4">
          {topSkills.map((skill) => (
            <div key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-white/5 text-gray-300 rounded-xl border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 hover:text-white transition-all cursor-default">
              <span className="text-xl">{skill.icon}</span>
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
