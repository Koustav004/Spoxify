import React from "react";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col md:flex-row overflow-hidden items-center justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-6 md:p-12"
    >
      <div className="w-full">
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex gap-3 py-4 w-full">
            <IoArrowForward size={30} className="mt-1" />

            <span className="w-full md:w-96">
              <h1 className="text-lg md:text-2xl font-semibold leading-normal">
                AI-Driven Music Personalization and Remixing System
              </h1>
              <p className="text-xs md:text-md leading-tight">
                <li>
                Increased user engagement by 70% through AI-driven music
                personalization. 
                </li>
                <li>
                Developed a personalized remixing system
                using fine-tuned open-sources LLMs and FFmpeg, powered by a
                scalable microservices architecture.
                </li>
                <li>
                Engineered a LangChain-powered algorithm leveraging RAG to identify
                high-emotion segments and blend them with refreshed backing
                tracks, reimagining classic tracks. 
                </li>
                <li>
                Deployed to a live Android
                App via Google Cloud Infra with 500+ Monthly Active Users
                (MAUs); 80%+ positive feedback and 60% longer session time. 
                </li>
                <li>
                Led a cross-functional team, handled AI pipeline, API
                development, app development, and cloud deployment gaining
                hands-on experience in software design & teamwork.
                </li>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
