"use client";

import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

const projects = [
  {
    name: "ClickTracking",
    role: "Full-stack Developer",
    tech: {
      Backend: "C#, ASP.NET Core Web API",
      Database: "SQL Server",
      Frontend: "HTML, CSS, JavaScript, jQuery (AJAX)",
      "API Integration": "Google Ads API, Google Analytics API",
    },
    Reponsible: {
      Description1:
        "Collect Google Ads API data and present it to users, allowing them to monitor the effectiveness of click fraud protection and track the performance of advertising campaigns.",
      Description2:
        "Implemented background jobs with Hangfire to send alerts for expiring services and automate report generation.",
      Description3:
        "Collected and aggregated advertising campaign data from multiple sources to create summary tables and visualized key metrics such as impressions, clicks, and conversions using Chart.js.",
    },
  },
  {
    name: "OnMarketer",
    role: "Full-stack Developer",
    tech: {
      Backend: "C#, ASP.NET Core Web API",
      Database: "SQL Server",
      Frontend: "HTML, CSS, JavaScript, jQuery (AJAX)",
      "API Integration": "Google Ads API, Google Analytics API",
    },
    Reponsible: {
      Description1:
        "Implemented customer data synchronization with Google Sheets using Google Sheets API, enabling real-time updates and automated campaign tracking.",
      Description2:
        "Integrated HubSpot API to synchronize customer data, automate marketing workflows, and improve lead management and customer engagement.",
    },
  },
];

const MyExperience = () => {
  return (
    <section
      id="MyExperienceSection"
      className="bg-AAprimary w-full py-24 px-4 sm:px-8 md:px-12 lg:px-20 2xl:px-48"
    >
      {/* ===== Title ===== */}
      <div className="flex items-center mb-14">
        <ArrowIcon className="h-5 w-5 text-AAsecondary translate-y-[2px]" />
        <span className="text-AAsecondary font-mono ml-3">02.</span>
        <h2 className="text-gray-200 font-bold text-2xl sm:text-3xl ml-4">
          Kinh nghiệm làm việc
        </h2>
        <div className="hidden sm:block flex-1 h-px bg-gray-600/60 ml-6" />
      </div>

      {/* ===== Experience Card ===== */}
      <div className="rounded-xl bg-AAsecondary/5 border border-white/5 p-6 sm:p-8 hover:border-AAsecondary transition">
        {/* Company + Time */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <h3 className="text-xl font-bold text-gray-200">
            Novaon Company
          </h3>
          <span className="text-AAsecondary font-mono text-sm mt-1 sm:mt-0">
            06/2023 – 12/2025
          </span>
        </div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={project.name}>
              {/* Project Header */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono text-AAsecondary border border-AAsecondary/40 px-3 py-1 rounded-full">
                  Project
                </span>
                <h4 className="text-lg font-semibold text-gray-200">
                  {project.name}
                </h4>
              </div>

              {/* Role */}
              <p className="text-gray-400 mb-4">
                <span className="text-gray-300 font-semibold">
                  Role:
                </span>{" "}
                {project.role}
              </p>

              {/* Responsibilities */}
              {project.Reponsible && (
                <div className="mb-6">
                  <p className="text-gray-300 font-semibold mb-2">
                    Responsibilities:
                  </p>
                  <ul className="space-y-2 text-gray-400 list-disc list-inside">
                    {Object.values(project.Reponsible).map(
                      (desc, i) => (
                        <li key={i}>{desc}</li>
                      )
                    )}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
               <p className="text-gray-300 font-semibold mb-2">
                    Tech:
                  </p>
              <ul className="space-y-2 text-gray-400 list-disc list-inside">
                {Object.entries(project.tech).map(([key, value]) => (
                  <li key={key}>
                    <span className="text-gray-300 font-medium">
                      {key}:
                    </span>{" "}
                    {value}
                  </li>
                ))}
              </ul>

              {index !== projects.length - 1 && (
                <div className="mt-10 h-px bg-white/5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyExperience;
