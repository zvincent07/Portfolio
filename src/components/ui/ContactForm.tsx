import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import emailjs from "@emailjs/browser";
import {
  MailIcon,
  SendIcon,
  TerminalIcon,
  Loader2Icon,
  CopyIcon,
  CheckIcon,
  CalendarIcon,
  GithubIcon,
  LinkedinIcon,
} from "./Icons";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const SERVICE_ID = "service_b5d1aem";
  const TEMPLATE_ID = "template_yetzp89";
  const PUBLIC_KEY = "F861GsSBkGVMj6g7o";

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
    } catch (err: unknown) {
      setLoading(false);
      console.error("EmailJS Error:", err);
      const errorObj =
        typeof err === "object" && err !== null ? (err as Record<string, unknown>) : null;
      const errText =
        (typeof errorObj?.text === "string" && errorObj.text) ||
        (typeof errorObj?.message === "string" && errorObj.message) ||
        "";
      const status =
        typeof errorObj?.status === "number" ? errorObj.status : undefined;

      const is412 =
        status === 412 ||
        /insufficient authentication scopes|gmail_api|precondition/i.test(
          errText
        );
      if (is412) {
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
        <div className="space-y-6">
          <p className="text-zinc-400 leading-relaxed text-sm">
            Open to freelance opportunities, internships, and technical
            consulting.
            <br />
            Based in Batangas, City of Lipa, Philippines (GMT+8).
          </p>

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

          <div className="flex gap-3">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-sm transition-all border border-zinc-700 hover:border-zinc-600"
            >
              <CalendarIcon className="w-4 h-4 text-purple-400" />
              <span>Book a Call</span>
            </a>

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
