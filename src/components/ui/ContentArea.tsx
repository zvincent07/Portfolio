import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Typewriter from "typewriter-effect";
import emailjs from "@emailjs/browser";

// Icon components for CTAs
const ArrowRightIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
);

const DownloadIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

// Tech Icons - Proper Brand Icons
const ReactIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    <ellipse
      cx="12"
      cy="12"
      rx="11"
      ry="4.2"
      stroke="#61DAFB"
      strokeWidth="1"
      fill="none"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="11"
      ry="4.2"
      stroke="#61DAFB"
      strokeWidth="1"
      fill="none"
      transform="rotate(60 12 12)"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="11"
      ry="4.2"
      stroke="#61DAFB"
      strokeWidth="1"
      fill="none"
      transform="rotate(120 12 12)"
    />
  </svg>
);

const TypeScriptIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="20" height="20" rx="2" fill="#3178C6" />
    <path
      d="M13.5 11.5v-1h-3v1h1v5h-1v1h3v-1h-1v-5zm4-1h-1v7h1v-7zm-7-1h-1v1h.5v6h-1v1h2v-1h-.5v-6h.5v-1z"
      fill="white"
    />
  </svg>
);

const NodeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.236,0.228-0.236h1.049c0.124,0,0.228,0.094,0.228,0.236v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.648-0.375-1.281-1.296-1.281-2.202V6.921 c0-0.903,0.633-1.831,1.281-2.216l8.795-5.082c0.649-0.375,1.703-0.375,2.35,0l8.794,5.082c0.648,0.38,1.282,1.313,1.282,2.216 v9.554c0,0.894-0.634,1.829-1.282,2.218l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z"
      fill="#339933"
    />
    <path
      d="M8.625,15.933c0-0.036,0.017-0.123,0.033-0.18c0.163-0.551,0.549-1.003,1.111-1.301 c0.562-0.297,1.119-0.446,1.67-0.446c0.55,0,0.787,0.111,1.003,0.223c0.216,0.111,0.36,0.26,0.36,0.445c0,0.416-0.324,0.703-0.972,0.859 c-0.649,0.156-1.536,0.341-2.663,0.556c-0.562,0.108-1.003,0.26-1.323,0.456c-0.32,0.196-0.48,0.445-0.48,0.747 c0,0.551,0.433,0.972,1.3,1.263c0.866,0.29,1.893,0.436,3.08,0.436c1.188,0,2.188-0.145,3-0.436c0.813-0.29,1.219-0.703,1.219-1.239 c0-0.26-0.108-0.48-0.324-0.66c-0.216-0.18-0.52-0.324-0.912-0.432c-0.393-0.108-0.912-0.216-1.56-0.324 c-0.649-0.108-1.188-0.216-1.62-0.324c-0.433-0.108-0.747-0.26-0.943-0.456C8.717,16.189,8.625,16.069,8.625,15.933z"
      fill="white"
    />
  </svg>
);

const MongoIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.533 3.682-4.533 10.02 0 7.029 5.597 11.32 6.512 11.835.913.52 1.652.302 1.983-.43.52-1.17 2.388-6.51 2.388-6.51.364-1.25.179-1.733-.898-1.733-.52 0-.792.07-1.112.18-.064-.495-.104-1.06-.135-1.53-.011-.204-.02-.38-.02-.52 0-.282.024-.42.024-.42s.688.27 1.975.405c.52.054 1.2.06 1.897.06.697 0 1.377-.006 1.897-.06 1.287-.135 1.975-.405 1.975-.405s.024.138.024.42c0 .14-.009.316-.02.52-.031.47-.071 1.035-.135 1.53-.32-.11-.592-.18-1.112-.18-1.077 0-1.262.483-.898 1.733 0 0 1.868 5.34 2.388 6.51.331.732 1.07.95 1.983.43.915-.515 6.512-4.806 6.512-11.835 0-6.338-3.81-9.454-4.533-10.02-.468-.499-.487-.689-.523-1.184-.205.486-.455 1.046-.735 1.44-.321.701-3.31 2.535-4.573 8.115z"
      fill="#47A248"
    />
  </svg>
);

const TailwindIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1.01 2.12 2.19 4.59 2.19 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1.01 2.12 2.19 4.59 2.19 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z"
      fill="#06B6D4"
    />
  </svg>
);

const FigmaIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.48 2.005 4.48 4.49s-2.004 4.491-4.48 4.491zM12.264 7.51h3.588c1.665 0 3.013-1.349 3.013-3.01s-1.349-3.01-3.013-3.01h-3.588V7.51zm0 1.471H8.352c-2.476 0-4.48-2.005-4.48-4.49S5.876 0 8.352 0h3.912v8.981zm-3.912-7.51c-1.665 0-3.013 1.349-3.013 3.01s1.349 3.01 3.013 3.01h3.912V1.471H8.352zm3.912 15.019H8.352c-2.476 0-4.48-2.005-4.48-4.49s2.004-4.491 4.48-4.491h3.912v8.981zM8.352 8.981c-1.665 0-3.013 1.349-3.013 3.01s1.349 3.01 3.013 3.01h3.912V8.981H8.352zm4.588 7.509H8.352c-2.476 0-4.48-2.005-4.48-4.49s2.004-4.491 4.48-4.491h4.588c2.476 0 4.48 2.005 4.48 4.491s-2.004 4.49-4.48 4.49zm0-8.981H8.352c-1.665 0-3.013 1.349-3.013 3.01s1.349 3.01 3.013 3.01h4.588c1.665 0 3.013-1.349 3.013-3.01s-1.349-3.01-3.013-3.01z"
      fill="#F24E1E"
    />
  </svg>
);

const ZapIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const PenToolIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
    />
  </svg>
);

// Project Icons
const ExternalLinkIcon = ({
  className = "w-4 h-4",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const SmartphoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);

const LayoutDashboardIcon = ({
  className = "w-5 h-5",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
    />
  </svg>
);

// Education Icons
const BookOpenIcon = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

// Experience Icons
const BriefcaseIcon = ({
  className = "w-4.5 h-4.5",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

// Contact Icons
const MailIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const SendIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);

const TerminalIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const Loader2Icon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
);

const CopyIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);

const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

// Social & Action Icons
const CalendarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// Database & Backend Icons - Proper Brand Icons
const PostgresIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.5594 14.4062c-.3047 1.6875-1.6875 2.625-3.375 2.625-.6094 0-1.2188-.0938-1.6875-.3047-.4688-.2109-.9375-.5156-1.2188-.8906-.2812-.375-.375-.8438-.375-1.3125v-.0938c0-.4688.1875-.9375.4688-1.2188.2812-.2812.6562-.4688 1.0312-.5625.375-.0938.75-.1875 1.125-.1875.4688-.0938.9375-.1875 1.3125-.375.375-.1875.6562-.4688.8438-.8438.1875-.375.2812-.8438.2812-1.3125 0-.6562-.1875-1.2188-.5625-1.5938-.375-.375-.9375-.5625-1.5938-.5625-.4688 0-.9375.0938-1.3125.2812-.375.1875-.6562.4688-.8438.8438-.1875.375-.2812.8438-.2812 1.3125v.0938h-2.625v-.0938c0-1.125.2812-2.0625.8438-2.8125.5625-.75 1.3125-1.3125 2.25-1.6875.9375-.375 1.9688-.5625 3-.5625 1.6875 0 3.0938.375 4.2188 1.125 1.125.75 1.875 1.875 2.25 3.375.1875.75.2812 1.5938.2812 2.5312 0 .9375-.0938 1.7812-.2812 2.5312zm-7.5938-3.0938c0 .4688.1875.8438.4688 1.125.2812.2812.6562.4688 1.125.4688.4688 0 .8438-.1875 1.125-.4688.2812-.2812.4688-.6562.4688-1.125 0-.4688-.1875-.8438-.4688-1.125-.2812-.2812-.6562-.4688-1.125-.4688-.4688 0-.8438.1875-1.125.4688-.2812.2812-.4688.6562-.4688 1.125z"
      fill="#336791"
    />
    <path
      d="M9.28125 2.625c-1.6875 0-3.09375.5625-4.21875 1.6875C3.9375 5.4375 3.375 6.84375 3.375 8.53125c0 1.6875.5625 3.09375 1.6875 4.21875 1.125 1.125 2.53125 1.6875 4.21875 1.6875.46875 0 .9375-.09375 1.3125-.28125.375-.1875.65625-.46875.84375-.84375.1875-.375.28125-.84375.28125-1.3125v-.09375h2.625v.09375c0 1.125-.28125 2.0625-.84375 2.8125-.5625.75-1.3125 1.3125-2.25 1.6875-.9375.375-1.96875.5625-3 .5625-1.6875 0-3.09375-.375-4.21875-1.125C1.21875 15.46875.46875 14.34375.09375 12.84375c-.1875-.75-.28125-1.59375-.28125-2.53125 0-.9375.09375-1.78125.28125-2.53125.375-1.5 1.125-2.625 2.25-3.375C3.46875 3.65625 4.875 3.28125 6.5625 3.28125c1.03125 0 2.0625.1875 3 .5625.9375.375 1.6875.9375 2.25 1.6875.5625.75.84375 1.6875.84375 2.8125v.09375h-2.625v-.09375c0-.46875-.09375-.9375-.28125-1.3125-.1875-.375-.46875-.65625-.84375-.84375-.375-.1875-.84375-.28125-1.3125-.28125-.65625 0-1.21875.1875-1.59375.5625-.375.375-.5625.9375-.5625 1.59375 0 .46875.09375.9375.28125 1.3125.1875.375.46875.65625.84375.84375.375.1875.84375.28125 1.3125.375.375.09375.75.1875 1.125.1875.375.09375.75.1875 1.03125.5625.28125.28125.46875.75.46875 1.21875 0 .46875-.09375.9375-.375 1.3125-.28125.375-.75.6796875-1.21875.890625-.46875.2109375-1.078125.3046875-1.6875.3046875zm1.59375-3.09375c-.46875 0-.84375.1875-1.125.46875-.28125.28125-.46875.65625-.46875 1.125 0 .46875.1875.84375.46875 1.125.28125.28125.65625.46875 1.125.46875.46875 0 .84375-.1875 1.125-.46875.28125-.28125.46875-.65625.46875-1.125 0-.46875-.1875-.84375-.46875-1.125-.28125-.28125-.65625-.46875-1.125-.46875z"
      fill="#336791"
    />
  </svg>
);

const MySQLIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.405 5.501c-.085 0-.136-.051-.136-.136v-2.72c0-.085.051-.136.136-.136h1.53c.085 0 .136.051.136.136v2.72c0 .085-.051.136-.136.136h-1.53zm-2.72 0c-.085 0-.136-.051-.136-.136v-2.72c0-.085.051-.136.136-.136h1.53c.085 0 .136.051.136.136v2.72c0 .085-.051.136-.136.136h-1.53zm-2.72 0c-.085 0-.136-.051-.136-.136v-2.72c0-.085.051-.136.136-.136h1.53c.085 0 .136.051.136.136v2.72c0 .085-.051.136-.136.136h-1.53zm-2.72 0c-.085 0-.136-.051-.136-.136v-2.72c0-.085.051-.136.136-.136h1.53c.085 0 .136.051.136.136v2.72c0 .085-.051.136-.136.136H8.245zm-2.72 0c-.085 0-.136-.051-.136-.136v-2.72c0-.085.051-.136.136-.136h1.53c.085 0 .136.051.136.136v2.72c0 .085-.051.136-.136.136H5.525z"
      fill="#00758F"
    />
    <path
      d="M16.405 5.501c-.085 0-.136-.051-.136-.136v-2.72c0-.085.051-.136.136-.136h1.53c.085 0 .136.051.136.136v2.72c0 .085-.051.136-.136.136h-1.53zm-2.72 0c-.085 0-.136-.051-.136-.136v-2.72c0-.085.051-.136.136-.136h1.53c.085 0 .136.051.136.136v2.72c0 .085-.051.136-.136.136h-1.53zm-2.72 0c-.085 0-.136-.051-.136-.136v-2.72c0-.085.051-.136.136-.136h1.53c.085 0 .136.051.136.136v2.72c0 .085-.051.136-.136.136h-1.53zm-2.72 0c-.085 0-.136-.051-.136-.136v-2.72c0-.085.051-.136.136-.136h1.53c.085 0 .136.051.136.136v2.72c0 .085-.051.136-.136.136H8.245zm-2.72 0c-.085 0-.136-.051-.136-.136v-2.72c0-.085.051-.136.136-.136h1.53c.085 0 .136.051.136.136v2.72c0 .085-.051.136-.136.136H5.525z"
      fill="#F29111"
    />
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"
      fill="#00758F"
    />
    <path
      d="M12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"
      fill="#F29111"
    />
  </svg>
);

const PythonIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.821 5.769c-.193-.545-.483-1.05-.87-1.5a5.5 5.5 0 0 0-2.25-1.68c-.75-.24-1.56-.36-2.43-.36h-4.5c-.87 0-1.68.12-2.43.36a5.5 5.5 0 0 0-2.25 1.68c-.387.45-.677.955-.87 1.5-.193.545-.29 1.125-.29 1.74v2.25h10.5v.75H4.5c-.87 0-1.68.12-2.43.36a5.5 5.5 0 0 0-2.25 1.68c-.387.45-.677.955-.87 1.5-.193.545-.29 1.125-.29 1.74v2.25c0 .615.097 1.195.29 1.74.193.545.483 1.05.87 1.5a5.5 5.5 0 0 0 2.25 1.68c.75.24 1.56.36 2.43.36h2.25c.87 0 1.68-.12 2.43-.36a5.5 5.5 0 0 0 2.25-1.68c.387-.45.677-.955.87-1.5.193-.545.29-1.125.29-1.74v-1.5h-10.5v-.75h12.75c.87 0 1.68-.12 2.43-.36a5.5 5.5 0 0 0 2.25-1.68c.387-.45.677-.955.87-1.5.193-.545.29-1.125.29-1.74V7.509c0-.615-.097-1.195-.29-1.74zM6.75 4.5c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zm10.5 14.25c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75z"
      fill="#3776AB"
    />
    <path
      d="M19.821 5.769c-.193-.545-.483-1.05-.87-1.5a5.5 5.5 0 0 0-2.25-1.68c-.75-.24-1.56-.36-2.43-.36h-4.5c-.87 0-1.68.12-2.43.36a5.5 5.5 0 0 0-2.25 1.68c-.387.45-.677.955-.87 1.5-.193.545-.29 1.125-.29 1.74v2.25h10.5v.75H4.5c-.87 0-1.68.12-2.43.36a5.5 5.5 0 0 0-2.25 1.68c-.387.45-.677.955-.87 1.5-.193.545-.29 1.125-.29 1.74v2.25c0 .615.097 1.195.29 1.74.193.545.483 1.05.87 1.5a5.5 5.5 0 0 0 2.25 1.68c.75.24 1.56.36 2.43.36h2.25c.87 0 1.68-.12 2.43-.36a5.5 5.5 0 0 0 2.25-1.68c.387-.45.677-.955.87-1.5.193-.545.29-1.125.29-1.74v-1.5h-10.5v-.75h12.75c.87 0 1.68-.12 2.43-.36a5.5 5.5 0 0 0 2.25-1.68c.387-.45.677-.955.87-1.5.193-.545.29-1.125.29-1.74V7.509c0-.615-.097-1.195-.29-1.74zM6.75 4.5c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zm10.5 14.25c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75z"
      fill="#FFD43B"
    />
  </svg>
);

const GitIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.546 10.93L13.067 0.45c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.44.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.083 1.903.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-2.007l-2.497-2.49c-.05.02-.1.041-.15.062l-4.803 4.795c-.645.223-1.39.083-1.906-.435-.72-.72-.72-1.884 0-2.604.719-.719 1.881-.719 2.6 0 .539.539.673 1.334.402 2.004l2.507 2.498c.05-.019.098-.039.146-.057l3.407 3.4c-.215.644-.07 1.398.44 1.889.515.516 1.258.658 1.903.438l2.658 2.66c.223.646.082 1.388-.435 1.903-.72.721-1.884.721-2.604 0-.72-.72-.72-1.884 0-2.604.512-.513 1.233-.658 1.937-.405l-2.658-2.66c-.645.223-1.387.082-1.902-.435-.72-.72-.72-1.884 0-2.604.719-.719 1.881-.719 2.6 0 .539.541.673 1.337.403 2.006l2.658 2.66c.05-.02.098-.04.146-.057l1.407-1.402-4.803-4.795c-.05.02-.1.04-.15.062L9.19 8.45c-.215.645-.07 1.398.44 1.89.516.515 1.258.657 1.903.437l2.658 2.658c.223.644.082 1.388-.435 1.902-.72.722-1.884.722-2.604 0-.72-.72-.72-1.884 0-2.604.512-.514 1.234-.658 1.937-.405l-2.658-2.658c-.645.22-1.387.08-1.902-.435-.72-.72-.72-1.884 0-2.604.719-.72 1.881-.72 2.6 0 .539.539.673 1.335.403 2.004L8.708 7.55l-2.76-2.76L.45 10.93c-.603.604-.603 1.582 0 2.186l10.479 10.478c.604.604 1.582.604 2.186 0l10.431-10.429c.605-.603.605-1.582 0-2.186z"
      fill="#F05033"
    />
  </svg>
);

interface ContentAreaProps {
  activeItem: string;
  onSectionChange: (section: string) => void;
}

// Contact Form Component
function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);


  // EmailJS Configuration - Make sure these match your EmailJS dashboard
  const SERVICE_ID = "service_b5d1aem";
  const TEMPLATE_ID = "template_yetzp89";
  const PUBLIC_KEY = "F861GsSBkGVMj6g7o";

  // === FEATURE: CTRL+ENTER TO SEND ===
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        if (formRef.current && !loading) {
          formRef.current.requestSubmit();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [loading]);

  const handleCopy = () => {
    navigator.clipboard.writeText("zvincent.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      setLoading(false);
      setSuccess(true);
      formRef.current?.reset();
      setTimeout(() => setSuccess(false), 10000);
    } catch (err) {
      setLoading(false);
      console.error("EmailJS Error:", err);
      const errText = (err as any)?.text ?? (err as any)?.message ?? "";
      const status = (err as any)?.status;

      const is412 =
        status === 412 ||
        /insufficient authentication scopes|gmail_api|precondition/i.test(
          errText
        );
      if (is412) {
        // In-app error toast; no mailto fallback
        setError("Email service rejected this request (412). Gmail scopes may be restricted for this domain.");
        setTimeout(() => setError(null), 5000);
      } else if (errText.toLowerCase().includes("invalid")) {
        setError(
          "Invalid form data for EmailJS template. Please review your message and try again."
        );
        setTimeout(() => setError(null), 5000);
      } else {
        setError("Message failed to send. Try emailing directly instead.");
        setTimeout(() => setError(null), 5000);
      }
    }
  };

  return (
    <>
      {success &&
        ReactDOM.createPortal(
          <div className="fixed top-0 left-0 right-0 z-[9999] flex justify-center pt-4 px-4 pointer-events-none">
            <div
              className="pointer-events-auto flex items-center gap-3 px-5 py-3 rounded-lg bg-zinc-900/95 border border-emerald-600/70 backdrop-blur-md shadow-2xl shadow-black/50"
              style={{ animation: "slideDown 0.3s ease-out" }}
            >
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-mono text-xs">
                  [ SUCCESS ]
                </span>
                <span className="w-px h-4 bg-zinc-700"></span>
              </div>
              <p className="text-sm text-zinc-300">
                Message sent successfully. I will get back to you soon.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="ml-2 p-1 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>,
          document.body
        )}

      {/* Error Toast - Rendered via Portal to document.body */}
      {error &&
        ReactDOM.createPortal(
          <div className="fixed top-0 left-0 right-0 z-[9999] flex justify-center pt-4 px-4 pointer-events-none">
            <div
              className="pointer-events-auto flex items-center gap-3 px-5 py-3 rounded-lg bg-zinc-900/95 border border-zinc-700 backdrop-blur-md shadow-2xl shadow-black/50"
              style={{ animation: "slideDown 0.3s ease-out" }}
            >
              <div className="flex items-center gap-2">
                <span className="text-red-500 font-mono text-xs">
                  [ ERROR ]
                </span>
                <span className="w-px h-4 bg-zinc-700"></span>
              </div>
              <p className="text-sm text-zinc-300">{error}</p>
              <button
                onClick={() => setError(null)}
                className="ml-2 p-1 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>,
          document.body
        )}

      <div className="grid md:grid-cols-2 gap-8">
        {/* LEFT: IDENTITY & ACTIONS */}
        <div className="space-y-6">
          <p className="text-zinc-400 leading-relaxed text-sm">
            Open to freelance opportunities, internships, and technical
            consulting.
            <br />
            Based in Batangas, City of Lipa, Philippines (GMT+8).
          </p>

          {/* THE "TERMINAL" EMAIL CARD */}
          <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-between group hover:border-blue-500/30 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <MailIcon className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-zinc-500 font-mono">
                  /usr/bin/email
                </span>
                <span className="text-sm text-zinc-200 font-bold">
                  zvincent.dev@gmail.com
                </span>
              </div>
            </div>

            <button
              onClick={handleCopy}
              className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-white transition-colors"
              title="Copy Email"
            >
              {copied ? (
                <CheckIcon className="w-5 h-5 text-green-500" />
              ) : (
                <CopyIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* CALENDLY & SOCIALS ROW */}
          <div className="flex gap-3">
            {/* CALENDLY BUTTON */}
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-sm transition-all border border-zinc-700 hover:border-zinc-600"
            >
              <CalendarIcon className="w-4 h-4 text-purple-400" />
              <span>Book a Call</span>
            </a>

            {/* SOCIAL BUTTONS */}
            <a
              href="https://github.com/zvincent07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
              title="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-blue-400 hover:border-blue-500/30 transition-all"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono pt-2">
            <TerminalIcon className="w-4 h-4" />
            <span>
              System Status: <span className="text-emerald-500">Online</span> &
              Ready
            </span>
          </div>
        </div>

        {/* RIGHT: THE FORM */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs text-zinc-500 font-mono ml-1">
                var name =
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 text-zinc-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-zinc-700 text-sm"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-zinc-500 font-mono ml-1">
                var email =
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 text-zinc-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-zinc-700 text-sm"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-zinc-500 font-mono ml-1">
              var message =
            </label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 text-zinc-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-zinc-700 resize-none text-sm"
              placeholder="Project details or just saying hi..."
            />
          </div>

<button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 p-3 rounded-lg font-bold transition-all text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2Icon className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <SendIcon className="w-5 h-5" />
                <span>Execute Send</span>
                <span className="text-xs font-normal opacity-70 hidden sm:inline-block ml-1">
                  (Ctrl+Enter)
                </span>
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
}

export function ContentArea({ activeItem, onSectionChange }: ContentAreaProps) {
  const isNavClickRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevActiveItemRef = useRef(activeItem);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set(["About Me"])
  );

  // Scroll to section when activeItem changes (from nav click)
  useEffect(() => {
    // Only scroll if this is a nav click (activeItem changed externally)
    if (prevActiveItemRef.current !== activeItem) {
      isNavClickRef.current = true;
      prevActiveItemRef.current = activeItem;

      const sectionId = `section-${activeItem
        .toLowerCase()
        .replace(/\s+/g, "-")}`;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });

        // Reset nav click flag after scroll completes
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          isNavClickRef.current = false;
        }, 800);
      }
    }
  }, [activeItem]);

  // Track which section is in view and update nav + animations
  useEffect(() => {
    const sectionOrder = [
      "About Me",
      "Projects",
      "Experience",
      "Education",
      "Certifications",
      "Contact",
    ];

    // Observer for navbar highlight sync
    const navObserver = new IntersectionObserver(
      (entries) => {
        // Skip nav updates during programmatic scrolling
        if (isNavClickRef.current) return;

        // Find the most visible section
        let mostVisibleSection = "";
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            const sectionId = entry.target.id;
            const sectionName = sectionOrder.find(
              (name) =>
                `section-${name.toLowerCase().replace(/\s+/g, "-")}` ===
                sectionId
            );
            if (sectionName) {
              mostVisibleSection = sectionName;
            }
          }
        });

        if (mostVisibleSection && mostVisibleSection !== activeItem) {
          prevActiveItemRef.current = mostVisibleSection;
          onSectionChange(mostVisibleSection);
        }
      },
      { threshold: [0.1, 0.3, 0.5, 0.7], rootMargin: "-10% 0px -10% 0px" }
    );

    // Observer for scroll animations - tracks entering AND leaving
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          const sectionName = sectionOrder.find(
            (name) =>
              `section-${name.toLowerCase().replace(/\s+/g, "-")}` === sectionId
          );

          if (sectionName) {
            if (entry.isIntersecting) {
              // Section entering viewport - show animation
              setVisibleSections((prev) => new Set([...prev, sectionName]));
            } else {
              // Section leaving viewport - reset for next time
              setVisibleSections((prev) => {
                const newSet = new Set(prev);
                newSet.delete(sectionName);
                return newSet;
              });
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: "-5% 0px -5% 0px" }
    );

    sectionOrder.forEach((name) => {
      const element = document.getElementById(
        `section-${name.toLowerCase().replace(/\s+/g, "-")}`
      );
      if (element) {
        navObserver.observe(element);
        animationObserver.observe(element);
      }
    });

    return () => {
      navObserver.disconnect();
      animationObserver.disconnect();
    };
  }, [activeItem, onSectionChange]);

  const content: Record<string, React.ReactElement> = {
    "About Me": (
      <div className="space-y-8">
        {/* Hero Section - Stacked on Mobile, Side-by-side on Desktop */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 lg:gap-8 mb-8 pb-8 border-b border-gray-800/50">
          {/* Circular Profile Picture with Solid Color Segments Border */}
          <div className="relative flex-shrink-0">
            <div
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full p-[4px]"
              style={{
                background:
                  "conic-gradient(from 0deg, #ef4444 0deg 72deg, #f97316 72deg 144deg, #eab308 144deg 216deg, #22c55e 216deg 288deg, #3b82f6 288deg 360deg)",
              }}
            >
              <div className="w-full h-full rounded-full bg-[#1a1a1a] p-[3px]">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center overflow-hidden ring-2 ring-gray-700/50">
                  <img
                    src="/images/profile/avatar.png"
                    alt="John Vincent"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Name and Title - Centered on Mobile, Left Aligned on Desktop */}
          <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left w-full sm:w-auto">
            <div className="font-mono w-full">
              <div className="text-2xl sm:text-3xl lg:text-4xl text-white min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[3.5rem] flex items-center justify-center sm:justify-start">
                <Typewriter
                  options={{
                    strings: ["Hello, I'm John Vincent."],
                    autoStart: true,
                    loop: true,
                    cursor: "|",
                  }}
                />
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-zinc-200 font-medium mt-2 sm:mt-4">
              Developer & Business Analyst
            </p>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed max-w-4xl">
          I am a Developer & Business Analyst who bridges the gap between
          technical complexity and business goals. I build scalable full-stack
          applications (MERN/PERN) with a focus on data integrity and seamless
          user experiences.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          <button className="flex items-center gap-2 px-4 py-2 text-sm bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 group">
            View My Work
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-800/50 text-white border border-gray-700 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 group">
            <DownloadIcon className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            Download CV
          </button>
        </div>

        {/* Skills Section - Reorganized */}
        <div className="space-y-6 mt-8">
          {/* Frontend & Design */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              Frontend & Design
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                {
                  name: "React",
                  color: "bg-blue-500/20 text-blue-300 border-blue-500/40",
                  icon: <ReactIcon />,
                },
                {
                  name: "TypeScript",
                  color: "bg-blue-600/20 text-blue-200 border-blue-600/40",
                  icon: <TypeScriptIcon />,
                },
                {
                  name: "Tailwind CSS",
                  color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
                  icon: <TailwindIcon />,
                },
                {
                  name: "Figma",
                  color:
                    "bg-purple-500/20 text-purple-300 border-purple-500/40",
                  icon: <FigmaIcon />,
                },
              ].map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 py-1.5 ${skill.color} border rounded-lg text-xs font-medium flex items-center gap-1.5`}
                >
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & Data */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              Backend & Data
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                {
                  name: "Node.js",
                  color: "bg-green-500/20 text-green-300 border-green-500/40",
                  icon: <NodeIcon />,
                },
                {
                  name: "MongoDB",
                  color: "bg-green-600/20 text-green-200 border-green-600/40",
                  icon: <MongoIcon />,
                },
                {
                  name: "PostgreSQL",
                  color: "bg-blue-700/20 text-blue-300 border-blue-700/40",
                  icon: <PostgresIcon />,
                },
                {
                  name: "MySQL",
                  color:
                    "bg-orange-600/20 text-orange-300 border-orange-600/40",
                  icon: <MySQLIcon />,
                },
                {
                  name: "Python",
                  color:
                    "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
                  icon: <PythonIcon />,
                },
                {
                  name: "Git",
                  color: "bg-gray-600/20 text-gray-300 border-gray-600/40",
                  icon: <GitIcon />,
                },
              ].map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3 py-1.5 ${skill.color} border rounded-lg text-xs font-medium flex items-center gap-1.5`}
                >
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Refined Focus Section */}
        <div className="mt-6 pt-6 border-t border-zinc-800/50 flex items-center gap-4 text-sm">
          <span className="text-xs font-bold text-zinc-600 uppercase tracking-widest">
            Current Focus
          </span>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-zinc-400 px-2 py-1 rounded-md bg-zinc-900/50 border border-zinc-800/50">
              <ZapIcon className="w-3.5 h-3.5 text-yellow-500" />
              <span>Next.js Patterns</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-400 px-2 py-1 rounded-md bg-zinc-900/50 border border-zinc-800/50">
              <PenToolIcon className="w-3.5 h-3.5 text-purple-500" />
              <span>Design Systems</span>
            </div>
          </div>
        </div>
      </div>
    ),
    Education: (
      <div className="space-y-8">
        {/* Timeline */}
        <div className="relative border-l border-zinc-800 ml-3 space-y-12">
          {/* 1. UNIVERSITY (BatStateU - BSIT BA) */}
          <div className="relative pl-8 group">
            {/* Dot Indicator */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-zinc-900 group-hover:ring-blue-500/20 transition-all"></div>

            <h3 className="text-xl font-bold text-white">
              Bachelor of Science in Information Technology
            </h3>
            <p className="text-blue-400 font-medium mt-1">
              Major in Business Analytics
            </p>
            <p className="text-zinc-500 text-sm mt-1">
              Batangas State University
            </p>

            <p className="text-zinc-400 mt-4 leading-relaxed max-w-2xl">
              Specialized in data-driven decision making and software
              engineering. Bridged the gap between raw data and actionable
              business insights through full-stack development.
            </p>

            {/* Key Coursework */}
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Enterprise Data Management",
                "Analytics Modeling",
                "Systems Analysis & Design",
                "Technopreneurship",
              ].map((course) => (
                <div
                  key={course}
                  className="flex items-center gap-1.5 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-xs text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-default"
                >
                  <BookOpenIcon className="w-3 h-3 text-blue-500/50" />
                  {course}
                </div>
              ))}
            </div>
          </div>

          {/* 2. HIGH SCHOOL (The Mabini Academy - STEM) */}
          <div className="relative pl-8 group">
            {/* Dot Indicator */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-zinc-900 group-hover:ring-purple-500/20 transition-all"></div>

            <h3 className="text-xl font-bold text-white">
              Senior High School Diploma
            </h3>
            <p className="text-purple-400 font-medium mt-1">
              Science, Technology, Engineering & Mathematics (STEM)
            </p>
            <p className="text-zinc-500 text-sm mt-1">The Mabini Academy</p>

            <p className="text-zinc-400 mt-4 leading-relaxed max-w-2xl">
              Built a strong foundation in logic, calculus, and scientific
              research methods, preparing for intensive technical coursework in
              university.
            </p>
          </div>
        </div>
      </div>
    ),
    Projects: (
      <div className="space-y-8">
        {/* === PROJECT 1: INVENTRACK (Capstone) === */}
        <div className="group bg-zinc-900/20 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all overflow-hidden">
          <div className="grid md:grid-cols-12 gap-0">
            {/* LEFT: IDENTITY (Col-span-5) */}
            <div className="md:col-span-5 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800/50 bg-zinc-900/20">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  InvenTrack
                </h3>
                <p className="text-zinc-500 text-sm mb-4">
                  GSO Inventory Management System
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "PostgreSQL",
                    "Express.js",
                    "React.js",
                    "Node.js",
                    "Tailwind CSS",
                    "RBAC",
                    "Analytics",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-1 rounded bg-zinc-800 text-zinc-400 border border-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href="https://inventrackgso.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors"
                >
                  View Live <ExternalLinkIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* RIGHT: STORY (Col-span-7) */}
            <div className="md:col-span-7 p-6 flex flex-col justify-center">
              <div className="space-y-4 text-sm leading-relaxed">
                <div>
                  <span className="text-red-400 font-bold uppercase tracking-wider text-xs">
                    The Challenge:
                  </span>
                  <p className="text-zinc-400 mt-1">
                    The GSO faced difficulties with{" "}
                    <span className="text-zinc-200">
                      manual inventory monitoring
                    </span>
                    , leading to data redundancy, inaccurate stock records, and
                    time-consuming report generation during audits.
                  </p>
                </div>
                <div>
                  <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs">
                    The Fix:
                  </span>
                  <p className="text-zinc-400 mt-1">
                    A centralized <strong>Web-Based Inventory System</strong>{" "}
                    that digitizes the entire asset lifecycle. Features{" "}
                    <span className="text-zinc-200">
                      real-time stock level monitoring
                    </span>
                    , instant item search/filtering, and{" "}
                    <strong>automated report generation</strong> for seamless
                    auditing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === PROJECT 2: QROOM (Real World) === */}
        <div className="group bg-zinc-900/20 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all overflow-hidden">
          <div className="grid md:grid-cols-12 gap-0">
            {/* LEFT: IDENTITY (Col-span-5) */}
            <div className="md:col-span-5 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800/50 bg-zinc-900/20">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  QRoom
                </h3>
                <p className="text-zinc-500 text-sm mb-4">
                  Campus Room Management
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "MySQL",
                    "Express.js",
                    "React.js",
                    "Node.js",
                    "Bootstrap",
                    "RBAC",
                    "Real-time API",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-1 rounded bg-zinc-800 text-zinc-400 border border-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href="https://qroom-omega.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors"
                >
                  View Live <ExternalLinkIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* RIGHT: STORY (Col-span-7) */}
            <div className="md:col-span-7 p-6 flex flex-col justify-center">
              <div className="space-y-4 text-sm leading-relaxed">
                <div>
                  <span className="text-red-400 font-bold uppercase tracking-wider text-xs">
                    The Challenge:
                  </span>
                  <p className="text-zinc-400 mt-1">
                    Campuses struggle with{" "}
                    <span className="text-zinc-200">
                      lack of visibility on room availability
                    </span>
                    , making it hard to schedule classes or track room
                    conditions.
                  </p>
                </div>
                <div>
                  <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs">
                    The Fix:
                  </span>
                  <p className="text-zinc-400 mt-1">
                    A centralized dashboard with <strong>QR scanning</strong>{" "}
                    for instant room status. Features a{" "}
                    <span className="text-zinc-200">
                      utilization analytics board
                    </span>{" "}
                    and condition reporting module.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === SECONDARY PROJECTS (Grid Layout) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* SoundSprint */}
          <a
            href="https://github.com/xKobeni/SoundSprint"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 rounded-xl border border-zinc-800/50 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                  <SmartphoneIcon className="w-4.5 h-4.5 text-blue-400" />
                </div>
                <h4 className="font-bold text-zinc-300 group-hover:text-white">
                  SoundSprint
                </h4>
              </div>
              <ExternalLinkIcon className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white" />
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed mb-3 line-clamp-2">
              Flutter mobile app. Contributed to UI state management and
              cross-platform responsive layouts.
            </p>
            <div className="flex gap-2">
              {["Flutter", "Dart", "Mobile"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-wider text-zinc-600 font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>

          {/* RBAC Admin Dashboard */}
          <a
            href="https://github.com/zvincent07/Login-Admin-Dashboard-Themeplate"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 rounded-xl border border-zinc-800/50 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                  <LayoutDashboardIcon className="w-4.5 h-4.5 text-purple-400" />
                </div>
                <h4 className="font-bold text-zinc-300 group-hover:text-white">
                  RBAC Admin Dashboard
                </h4>
              </div>
              <ExternalLinkIcon className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white" />
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed mb-3 line-clamp-2">
              Open-source MERN boilerplate with secure Role-Based Access Control
              and JWT authentication.
            </p>
            <div className="flex gap-2">
              {["MERN", "Security", "Open Source"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-wider text-zinc-600 font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        </div>
      </div>
    ),
    Experience: (
      <div className="relative space-y-0">
        {/* Timeline Line Container */}
        <div className="absolute left-3 top-0 bottom-0 w-0.5">
          {/* Solid Gradient Line (Past/History) */}
          <div
            className="absolute top-0 w-full"
            style={{
              height: "calc(100% - 100px)", // Stops before "Open to Work"
              background:
                "linear-gradient(to bottom, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.3) 50%, rgba(59, 130, 246, 0.1) 100%)",
            }}
          />

          {/* Dashed Line (Future) */}
          <div
            className="absolute bottom-0 w-full border-l border-dashed border-blue-500/20"
            style={{
              height: "100px",
            }}
          />
        </div>

        {/* Freelance Technical Consultant */}
        <div className="relative pl-8 group experience-glow">
          {/* Pulsing Dot Indicator */}
          <div className="absolute -left-[20px] top-0 z-10">
            <div className="relative">
              {/* Pulse Ring Animation */}
              <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping-slow" />
              {/* Main Dot */}
              <div className="relative p-2 bg-zinc-950 border border-blue-500/50 rounded-full group-hover:border-blue-500 transition-colors">
                <BriefcaseIcon className="text-blue-400 w-4.5 h-4.5" />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-lg font-bold text-white">
              Freelance Technical Consultant
            </h3>
            <span className="font-mono text-xs font-medium px-2 py-1 rounded border border-blue-500/20 bg-blue-500/10 text-blue-400 w-fit mt-1 sm:mt-0">
              2022 - Present
            </span>
          </div>

          <p className="text-zinc-500 text-sm mb-4">
            Self-Employed • Various Clients
          </p>

          <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
            Providing on-demand technical solutions for students and small
            businesses. I handle diverse tasks requiring quick adaptation to
            different tools and technologies.
          </p>

          {/* Glass Pills - 2x2 Micro-Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="px-3 py-2 rounded-lg bg-blue-500/5 border border-blue-500/10 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all">
              <h4 className="font-mono text-xs font-semibold text-blue-300 mb-1">
                Technical Research & Docs
              </h4>
              <p className="text-xs text-zinc-400 leading-snug">
                Assisting with academic papers, system documentation, and
                requirements analysis.
              </p>
            </div>

            <div className="px-3 py-2 rounded-lg bg-blue-500/5 border border-blue-500/10 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all">
              <h4 className="font-mono text-xs font-semibold text-blue-300 mb-1">
                Network Engineering
              </h4>
              <p className="text-xs text-zinc-400 leading-snug">
                Configuring topologies and simulations in Cisco Packet Tracer.
              </p>
            </div>

            <div className="px-3 py-2 rounded-lg bg-blue-500/5 border border-blue-500/10 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all">
              <h4 className="font-mono text-xs font-semibold text-blue-300 mb-1">
                Scripting & Automation
              </h4>
              <p className="text-xs text-zinc-400 leading-snug">
                Data processing tasks using Python and Google Colab.
              </p>
            </div>

            <div className="px-3 py-2 rounded-lg bg-blue-500/5 border border-blue-500/10 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all">
              <h4 className="font-mono text-xs font-semibold text-blue-300 mb-1">
                UI/UX Design
              </h4>
              <p className="text-xs text-zinc-400 leading-snug">
                Creating prototypes and wireframes in Figma.
              </p>
            </div>
          </div>
        </div>

        {/* Open to Work - Status Indicator */}
        <div className="relative pl-8 group py-4" style={{ opacity: 0.65 }}>
          {/* Pulsing Status Dot (Live Signal) */}
          <div className="absolute -left-[20px] top-[1.5rem] z-10">
            <div className="relative flex items-center justify-center">
              {/* Outer Pulse Ring */}
              <div className="absolute w-3 h-3 rounded-full bg-emerald-500/40 animate-ping-slow" />
              {/* Inner Glowing Dot */}
              <div className="relative w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
            </div>
          </div>

          <h3 className="text-lg font-bold text-zinc-400 leading-tight">
            Open to Work
          </h3>
          <p className="text-zinc-500 text-sm mt-1">
            Ready for full-time opportunities or internships.
          </p>
        </div>
      </div>
    ),
    Tools: (
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              category: "Frontend",
              tools: [
                "React",
                "Vue.js",
                "TypeScript",
                "Tailwind CSS",
                "Next.js",
              ],
            },
            {
              category: "Backend",
              tools: [
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "REST APIs",
              ],
            },
            {
              category: "Design",
              tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
            },
            {
              category: "DevOps",
              tools: ["Git", "Docker", "AWS", "Vercel", "GitHub Actions"],
            },
            {
              category: "Testing",
              tools: ["Jest", "React Testing Library", "Cypress"],
            },
            {
              category: "Other",
              tools: [
                "VS Code",
                "Postman",
                "MongoDB Compass",
                "Chrome DevTools",
              ],
            },
          ].map((section, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800/30 border border-gray-700/50 space-y-3"
            >
              <h3 className="text-xl font-semibold text-white">
                {section.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {section.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    Certifications: (
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "AWS Certified Cloud Practitioner",
              issuer: "Amazon Web Services",
              date: "2024",
            },
            {
              title: "React Developer Certification",
              issuer: "Meta",
              date: "2023",
            },
            {
              title: "MongoDB Certified Developer",
              issuer: "MongoDB University",
              date: "2023",
            },
            {
              title: "UI/UX Design Specialization",
              issuer: "Coursera",
              date: "2022",
            },
          ].map((credential, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800/30 border border-gray-700/50 space-y-2"
            >
              <h3 className="text-xl font-semibold text-white">
                {credential.title}
              </h3>
              <p className="text-gray-400">{credential.issuer}</p>
              <p className="text-gray-500 text-sm">{credential.date}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    Events: (
      <div className="space-y-6">
        <div className="space-y-6">
          {[
            {
              title: "Tech Conference 2024",
              type: "Conference",
              date: "March 2024",
              description:
                "Attended workshops on modern web development and networking with industry professionals.",
            },
            {
              title: "Hackathon Winner",
              type: "Competition",
              date: "January 2024",
              description:
                "Won first place in a 48-hour hackathon with a team project focused on sustainability.",
            },
            {
              title: "Open Source Contributor",
              type: "Contribution",
              date: "Ongoing",
              description:
                "Active contributor to various open-source projects, focusing on React ecosystem libraries.",
            },
            {
              title: "Web Development Workshop",
              type: "Workshop",
              date: "November 2023",
              description:
                "Conducted a workshop on building modern web applications for university students.",
            },
          ].map((event, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800/30 border border-gray-700/50 space-y-2"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{event.type}</p>
                </div>
                <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                  {event.date}
                </span>
              </div>
              <p className="text-gray-300 mt-2">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    Contact: <ContactForm />,
  };

  // Section order for scrollable layout
  const sectionOrder = [
    "About Me",
    "Projects",
    "Experience",
    "Education",
    "Certifications",
    "Contact",
  ];

  return (
    <div className="flex flex-col">
      {sectionOrder.map((sectionName) => {
        const sectionContent = content[sectionName];
        const isContactSection = sectionName === "Contact";

        if (!sectionContent) return null;

        const isVisible = visibleSections.has(sectionName);

        return (
          <section
            key={sectionName}
            id={`section-${sectionName.toLowerCase().replace(/\s+/g, "-")}`}
            className={`
              ${
                isContactSection
                  ? "flex flex-col justify-start items-start pt-4 sm:pt-4 lg:pt-6 pb-16 px-4 sm:pb-20 sm:px-6 md:px-8 lg:px-12 min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-8rem)]"
                  : "flex flex-col justify-start items-start pt-6 pb-16 px-4 sm:pt-6 sm:pb-20 sm:px-6 md:px-8 lg:pt-8 lg:px-12 min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-8rem)]"
              }
            `}
          >
            {sectionName !== "About Me" && (
              <h1
                className={`text-white text-2xl sm:text-3xl lg:text-4xl font-bold w-full transition-all duration-500 ease-out ${
                  isContactSection ? "mb-2" : "mb-3 sm:mb-4"
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-6 scale-95"
                }`}
              >
                {sectionName}
              </h1>
            )}
            <div
              className={`w-full self-start transition-all duration-700 ease-out delay-150 ${
                isContactSection
                  ? "max-w-full mt-0 mb-12"
                  : "max-w-4xl mb-12 space-y-6"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transformOrigin: "top center" }}
            >
              {sectionContent}
            </div>
          </section>
        );
      })}
    </div>
  );
}
