"use client";

import { resumeData } from "@/content/resume";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-black print:bg-white print:text-black">
      <style jsx global>{`
        @media print {
          @page {
            margin: 0.5in;
            size: A4;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          a {
            text-decoration: none !important;
          }
        }
      `}</style>
      <div className="max-w-4xl mx-auto p-8 print:p-0 print:max-w-none">
        {/* Header */}
        <header className="mb-8 border-b pb-6">
          <h1 className="text-3xl font-bold mb-2">{resumeData.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{resumeData.headline}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>{resumeData.email}</span>
            <span>•</span>
            <span>{resumeData.phone}</span>
            <span>•</span>
            <span>{resumeData.location}</span>
            <span>•</span>
            <a href={resumeData.links.linkedin} className="text-blue-600">
              LinkedIn
            </a>
            <span>•</span>
            <a href={resumeData.links.github} className="text-blue-600">
              GitHub
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Summary</h2>
          <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
        </section>

        {/* Core Strengths */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Core strengths</h2>
          <div className="grid grid-cols-2 gap-2">
            {resumeData.coreStrengths.map((strength, idx) => (
              <p key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-gray-400">•</span>
                {strength}
              </p>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {resumeData.skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="font-medium text-sm text-gray-600 mb-1">
                  {group.category}
                </h3>
                <p className="text-sm text-gray-700">
                  {group.skills.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Deployed Projects */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Deployed, up & running projects
          </h2>
          <div className="space-y-4">
            {resumeData.projects.map((project) => (
              <div key={project.title}>
                <h3 className="font-semibold">{project.title}</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-1">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 mt-1">Tech: {project.tech}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Education
          </h2>
          <div className="space-y-3">
            {resumeData.education.map((edu) => (
              <div key={edu.degree} className="flex justify-between">
                <div>
                  <h3 className="font-medium">{edu.degree}</h3>
                  <p className="text-sm text-gray-600">
                    {edu.institution}, {edu.location}
                  </p>
                </div>
                <span className="text-sm text-gray-500">{edu.dates}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            Certifications
          </h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.certifications.map((cert) => (
              <span
                key={cert.name}
                className="text-sm bg-gray-100 px-2 py-1 rounded"
              >
                {cert.name}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Experience
          </h2>
          <div className="space-y-6">
            {resumeData.experience.map((exp) => (
              <div key={`${exp.company}-${exp.title}`}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    {exp.dates}
                  </span>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Print Button - Hidden in print */}
        <div className="print:hidden mt-8 text-center">
          <button
            onClick={() => window.print()}
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Print Resume
          </button>
        </div>
      </div>
    </div>
  );
}
