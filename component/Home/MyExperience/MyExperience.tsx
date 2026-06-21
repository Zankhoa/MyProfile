"use client";

import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

const experiences = [
  {
    companyName: "Roman Property",
    role: "Fullstack Developer",
    time: "Oct 2025 – Present",
    projects: [
      {
        name: "CRM Roman",
        tech: {
          "Backend": "C#, ASP.NET Core",
          "Database ORM & Cache": "SQL Server, Entity Framework Core, Redis",
          "Frontend": "Angular, TypeScript, TailwindCSS",
          "Real-time & Message Broker": "RabbitMQ, SignalR, Firebase Cloud Messaging",
          "DevOps": "Docker, GitLab CI/CD",
        },
        Reponsible: {
          Description1: "Designed and developed .NET backend utilizing Clean Architecture and Domain-Driven Design (DDD), building RESTful APIs to isolate complex CRM business rules and standardize data integration across web and mobile.",
          Description2: "Designed and implemented end-to-end CRM workflows, including lead management, customer segmentation, communication tracking, task automation, and analytics reporting, enabling efficient customer relationship management and data-driven decision making.",
          Description3: "Developed asynchronous background services using .NET IHostedService and RabbitMQ to automate lead lifecycle workflows, including auto-recall, scheduling, cooldown handling, and notification processing, successfully processing 10,000 leads monthly and reducing manual follow-up operations.",
          Description4: "Implemented a comprehensive real-time notification using SignalR for web and Firebase (FCM) for mobile devices, enabling instant lead assignments and cross-platform status synchronization.",
          Description5: "Secured RESTful APIs using JWT Authentication and dynamic Role-Based Access Control (RBAC) via .NET Policy-Based Authorization, ensuring granular access control and safeguarding sensitive CRM data.",
          Description6: "Optimized the analytics dashboard performance by implementing Redis caching and advanced SQL indexing strategies, reducing complex report generation.",
          Description7: "Built a modern Admin Dashboard using Angular, TailwindCSS, Signals, RxJS, and Lazy Loading to enhance maintainability, optimize state management, and improve application performance.",
          Description8: "Automated build, testing, and deployment processes utilizing GitLab CI/CD and Docker, cutting deployment time from 15 to under 10 minutes while completely eliminating manual intervention.",
        },
      },
    ],
  },
  {
    companyName: "Novaon Tech Company",
    role: "Backend Developer",
    time: "Mar 2024 – Sep 2025",
    projects: [
      {
        name: "ClickTracking",
        tech: {
          "Backend": "C#, ASP.NET",
          "Database & ORM": "SQL Server, Entity Framework (Code First Migrations)",
          "Frontend": "HTML, CSS, JavaScript, jQuery (AJAX)",
          "API Integration": "Google Ads API, Google Analytics API",
        },
        Reponsible: {
          Description1: "Collect Google Ads API data and present it to users, allowing them to monitor the effectiveness of click fraud protection and track the performance of their advertising campaigns.",
          Description2: "Implemented background jobs to send alerts for expiring services and automate report generation.",
          Description3: "Collected and aggregated advertising campaign data from multiple sources to create detailed summary tables, then visualized key performance metrics such as impressions, clicks, and conversions in an interactive dashboard using Chart.js.",
        },
      },
      {
        name: "OnMarketer",
        tech: {
          "Backend": "ASP.NET, C#, ADO.NET",
          "Database & ORM": "SQL Server, Entity Framework (Code First Migrations)",
          "Frontend": "HTML, CSS, JavaScript, jQuery (AJAX)",
          "API Integration": "Google Sheets API, HubSpot API",
        },
        Reponsible: {
          Description1: "Implemented customer data synchronization with Google Sheets using Google Sheets API, ensuring real-time updates and efficient data management. Automated the process of pushing customer information from the system to Google Sheets for campaign tracking and analysis.",
          Description2: "Implemented integration with HubSpot API to synchronize customer data, automate marketing workflows, and manage leads efficiently. Enabled seamless communication between internal systems and HubSpot, improving campaign management and customer engagement.",
        },
      },
    ],
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
          My Experience
        </h2>
        <div className="hidden sm:block flex-1 h-px bg-gray-600/60 ml-6" />
      </div>

      <div className="space-y-10">
        {experiences.map((exp, expIndex) => (
          <div key={exp.companyName} className="rounded-xl bg-AAsecondary/5 border border-white/5 p-6 sm:p-8 hover:border-AAsecondary transition">
            {/* Company + Time */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-gray-200">
                  {exp.companyName}
                </h3>
                <h4 className="text-lg text-gray-400 mt-1">
                  {exp.role}
                </h4>
              </div>
              <span className="text-AAsecondary font-mono text-sm mt-1 sm:mt-0">
                {exp.time}
              </span>
            </div>

            {/* Projects */}
            <div className="space-y-12">
              {exp.projects.map((project, index) => (
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
                    Tech Stack:
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

                  {index !== exp.projects.length - 1 && (
                    <div className="mt-10 h-px bg-white/5" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyExperience;
