import { useState, useEffect } from "react";
import {
  Linkedin,
  Youtube,
  Instagram,
  Mail,
  MessageSquare,
  FileText,
} from "lucide-react";

import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80";
    img.onload = () => {
      setImageLoaded(true);
      setTimeout(() => setAnimate(true), 100);
    };
  }, []);

  return (
    <section className="portfolio-container mb-3">
      <div className="glass-card overflow-hidden relative">
        {/* Hero background image with parallax effect */}
        <div
          className={`relative h-[230px] bg-center bg-cover transition-opacity duration-1000 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80)",
            backgroundPosition: "center 30%",
          }}
        >
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 delay-200 ${
              animate ? "opacity-100 top-32" : "opacity-0 top-36"
            }`}
          >
            <div className="speech-bubble">
              <Typewriter
                options={{
                  strings: [
                    "Hello, I'm Udita!",
                    "A Web Developer",
                    "Available to work!",
                    "Let's Build Something Cool!",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </div>
          </div>
        </div>

        {/* Profile section */}
        <div className="px-8 pb-8 relative">
          {/* Avatar */}
          <div className="absolute -top-20 left-8">
            <div
              className={`left-1/2 transform transition-all duration-500 delay-200 ${
                animate ? "opacity-100 top-32" : "opacity-0 top-36"
              }`}
            >
              <div className="speech-bubble">
                <Typewriter
                  options={{
                    strings: [
                      "Hello, I'm Udita!",
                      "A Web Developer",
                      "Available to work!",
                      "Let's Build Something Cool!",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
              </div>
            </div>
            <div
              className={`h-40 w-40 rounded-full border-4 border-[#111827] overflow-hidden bg-gray-800 transition-all duration-500 ${
                animate ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <img
                src="public/WhatsApp Image 2025-03-22 at 3.15.14 AM.jpeg"
                alt="Udita"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="pt-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
              <div
                className={`transition-all duration-500 delay-300 ${
                  animate
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <h2 className="text-3xl font-bold mb-1 mt-10">Udita</h2>
                <div className="space-y-1 text-gray-300">
                  <p className="flex items-center gap-2">
                    <span className="inline-block">🖥️</span> SDE Intern
                    @RazorPay | Wikimedia Hackathon Scholar'24 | NSTXRU'27
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="inline-block">🎨</span> Creative
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="inline-block">🔗</span>
                    <a
                      href="https://linktr.ee/AlexRosales.Dev"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linktr.ee/AlexRosales.Dev
                    </a>
                  </p>
                </div>
              </div>

              <div
                className={`flex gap-2 mt-6 md:mt-0 transition-all duration-500 delay-400 ${
                  animate
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <a
                  href="https://www.linkedin.com/in/udita-singh-047b77301/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            <div
              className={`flex flex-wrap gap-3 transition-all duration-500 delay-500 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="mailto:udita.23csai@nst.rishihood.edu.in"
                className="flex text-white items-center gap-2 py-2 px-3 sm:px-5 bg-blue-700 hover:bg-blue-800 font-semibold text-sm sm:text-base text-white rounded-xl lg:hover:bg-brandeis-blue-hover transition-all shadow-sm"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
              <a
                href="https://wa.me/1234567890"
                className="flex text-white items-center gap-2 py-2 px-3 sm:px-5 bg-blue-700 hover:bg-blue-800 font-semibold text-sm sm:text-base text-white rounded-xl lg:hover:bg-brandeis-blue-hover transition-all shadow-sm"
              >
                <MessageSquare size={18} />
              </a>
              <a
                href="/resume.pdf"
                className="flex items-center gap-2 py-2 px-3 sm:px-5 border text-sm sm:text-base border-black/25 text-black dark:text-white rounded-xl dark:border-white/25 lg:hover:bg-anti-flash-white lg:hover:border-black/40 dark:hover:border-white/40 lg:dark:hover:bg-chinese-black transition-all shadow-sm"
              >
                <FileText size={18} />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
