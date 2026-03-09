"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiZap, FiMapPin, FiCalendar } from "react-icons/fi";

const experiences = [
  {
    company: "Capgemini",
    location: "Melbourne, Victoria, Australia",
    roles: [
      {
        title: "Associate Manager",
        date: "April 2024 - Present",
        highlights: [
          "Driving automation project on tribe level which consist of 4 mid size teams.",
          "Helping teams to setup new test framework, pipeline, guide them through the journey of testing.",
          "Managing and leading 5 members of team as lead testers, responsible to overlook testing and also work as individual contributor.",
          "Training team members on GraphQL testing using Postman, NodeJS, SuperTest, typescript.",
          "Advocating clean code practices. Incorporating code quality checks like lint, husky, PR checks."
        ]
      },
      {
        title: "Lead Consultant",
        date: "July 2022 - March 2024",
        highlights: [
          "Leading, guiding and monitoring the analysis, design, implementation and execution of the test cases, test procedures and test suites.",
          "Participate in test estimation effort, resource planning in collaboration with the other stakeholders.",
          "Reviewing code written by engineers to make sure best practise, code formatting, readability and code coverage is appropriately followed.",
          "Integrated API operation within UI automation script to save overall execution time.",
          "Closely worked with DevOps team to setup pipeline using codefresh, initial level of troubleshooting pipeline issues.",
          "Migrated API automation suite from Java based karate framework to NodeJS based SuperTest library with mocha framework."
        ]
      }
    ]
  },
  {
    company: "Capgemini",
    location: "Bengaluru, Karnataka, India",
    roles: [
      {
        title: "Senior Consultant",
        date: "April 2021 - July 2022",
        highlights: [
          "Developed cucumber BDD Framework using NodeJS based tool WebdriverIO and TypeScript.",
          "Implemented Page Object Design pattern and Parallel/Cross browser execution.",
          "Use of SuperTest package to make API calls for test data preparation.",
          "Mocking network logs, browser and environment control from command line execution (compatible with CICD pipeline)."
        ]
      },
      {
        title: "Consultant",
        date: "March 2020 - March 2021",
        highlights: [
          "Developed BDD framework for Regression UI Testing and Mocha framework for System UI Testing resulted in saving 60 hours per sprint.",
          "Developed BDD framework from scratch for back-end testing resulted in saving 1 execution days.",
          "Worked with DevOps team to configure CI pipeline using bamboo, also supported in setting up Jenkins jobs.",
          "Converting business scenario document into feature, creating test plan, test execution, bug reporting.",
          "Participating in manual testing as and when required.",
          "Participating in code review, daily stand-up call, defect triage, mentoring team members to take up automation activities."
        ]
      }
    ]
  },
  {
    company: "Wipro Limited",
    location: "Bengaluru, Karnataka, India",
    roles: [
      {
        title: "Project Engineer",
        date: "July 2016 - February 2020",
        highlights: [
          "Prepared test case and executed manual System and Regression testing.",
          "Built automated test framework from scratch.",
          "Test Automation scripts maintenance such as providing script fix, modifying existing test and adding new scripts.",
          "Participated in automating regression test cases.",
          "Executed automation script on daily basis from quality center, shared report to client.",
          "Identified the pain areas in project & providing solutions using Selenium Automation."
        ]
      },
      {
        title: "Project Engineer",
        date: "September 2015 - June 2016",
        highlights: [
          "User account creation, modification and deletion using Active Directory and Exchange.",
          "File Share creation, deletion, granting access to users.",
          "Escalation contact, On-call contact creation in SharePoint site.",
          "Handled critical incidents adhering SOP defined by organization."
        ]
      }
    ]
  }
];

// Utility to highlight metrics in text
const HighlightMetrics = ({ text }: { text: string }) => {
  // Regex to match numbers, percentages, durations like "60 hours", "1 day", "5 members"
  const parts = text.split(/(\d+%|\d+\s?hours?|\d+\s?days?|\d+\s?members?|\d+\s?mid size teams|\d+\s?years?)/gi);

  return (
    <span>
      {parts.map((part, i) => {
        const isMetric = /(\d+%|\d+\s?hours?|\d+\s?days?|\d+\s?members?|\d+\s?mid size teams|\d+\s?years?)/gi.test(part);
        if (isMetric) {
          return (
            <span key={i} className="px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-mono border border-indigo-500/20 shadow-[0_0_10px_rgba(99,102,241,0.1)]">
              {part}
            </span>
          );
        }
        return part;
      })}
    </span>
  );
};

export default function Experience() {
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({ "0-0": true });

  const toggleRole = (compId: number, roleId: number) => {
    const key = `${compId}-${roleId}`;
    setExpandedRoles(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };


  return (
    <section className="bg-[#121212] py-24 px-6 md:px-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4"
            >
              <FiZap className="w-3 h-3" />
              PROFESSIONAL JOURNEY
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              Career Timeline
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mt-6 text-lg leading-relaxed"
            >
              A timeline of leadership, automation innovation, and delivering high-impact testing solutions across global teams.
            </motion.p>
          </div>

        </div>

        <div className="relative">
          {/* Futuristic Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/20 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, expIdx) => (
              <div key={expIdx} className="relative">
                {/* Company Header */}
                <div className="flex items-center gap-4 mb-8 md:justify-center relative">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10 hidden md:block" />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="px-6 py-2 rounded-xl bg-[#1a1a1a] border border-white/10 text-white font-bold text-xl shadow-xl z-10"
                  >
                    {exp.company}
                  </motion.div>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10 hidden md:block" />
                </div>

                <div className="space-y-8">
                  {exp.roles.map((role, roleIdx) => {
                    const isExpanded = expandedRoles[`${expIdx}-${roleIdx}`];
                    const isEven = roleIdx % 2 === 0;

                    return (
                      <motion.div
                        key={roleIdx}
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 group`}
                      >
                        {/* Timeline Node */}
                        <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-indigo-500 -translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-20 hidden md:block" />

                        {/* Spacer for symmetrical layout */}
                        <div className="flex-1 hidden md:block" />

                        {/* Role Card */}
                        <div className="flex-1 w-full">
                          <div
                            className={`p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 transition-all duration-500 backdrop-blur-sm cursor-pointer ${isExpanded ? 'shadow-[0_0_40px_rgba(99,102,241,0.05)] ring-1 ring-indigo-500/20' : ''}`}
                            onClick={() => toggleRole(expIdx, roleIdx)}
                          >
                            <div className="flex justify-between items-start gap-4">
                              <div>
                                <h4 className="text-xl font-bold text-gray-100 group-hover:text-indigo-300 transition-colors">{role.title}</h4>
                                <div className="flex flex-wrap items-center gap-4 mt-2">
                                  <span className="flex items-center gap-1.5 text-gray-400 text-xs font-mono">
                                    <FiCalendar className="w-3 h-3 text-indigo-400" />
                                    {role.date}
                                  </span>
                                  <span className="flex items-center gap-1.5 text-gray-400 text-xs font-mono">
                                    <FiMapPin className="w-3 h-3 text-indigo-400" />
                                    {exp.location}
                                  </span>
                                </div>
                              </div>
                              <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                className="p-1 rounded-full bg-white/5 text-gray-400 group-hover:text-indigo-400"
                              >
                                <FiChevronDown className="w-5 h-5" />
                              </motion.div>
                            </div>

                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}
                                  className="overflow-hidden"
                                >
                                  <ul className="pt-6 space-y-4 border-t border-white/5 mt-6">
                                    {role.highlights.map((highlight, hIdx) => (
                                      <li key={hIdx} className="flex gap-4 group/item">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500/50 group-hover/item:bg-indigo-400 transition-colors shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.3)]" />
                                        <p className="text-gray-400 text-sm leading-relaxed group-hover/item:text-gray-300 transition-colors">
                                          <HighlightMetrics text={highlight} />
                                        </p>
                                      </li>
                                    ))}
                                  </ul>

                                  {/* Action chips for futuristic feel */}
                                  <div className="mt-8 flex flex-wrap gap-2">
                                    <span className="text-[10px] font-mono text-indigo-500 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 uppercase tracking-widest">Leadership</span>
                                    <span className="text-[10px] font-mono text-violet-500 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20 uppercase tracking-widest">Automation</span>
                                    <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-widest">CI/CD</span>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
