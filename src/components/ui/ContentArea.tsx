import { useEffect, useState, type ReactElement } from "react";
import { ContactForm } from "./ContactForm";
import { ProjectsSection } from "./ProjectsSection";
import { AboutSection } from "./AboutSection";
import { ExperienceSection } from "./ExperienceSection";
import { EducationSection } from "./EducationSection";

export function ContentArea() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set(["About Me"])
  );

  useEffect(() => {
    const sectionOrder = ["About Me", "Projects", "Experience", "Education", "Contact"];
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
        animationObserver.observe(element);
      }
    });

    return () => {
      animationObserver.disconnect();
    };
  }, []);

  const content: Record<string, ReactElement> = {
    "About Me": <AboutSection />,
    Education: <EducationSection />,
    Projects: <ProjectsSection />,
    Experience: <ExperienceSection />,
    Contact: <ContactForm />,
  };

  // Section order for scrollable layout
  const sectionOrder = ["About Me", "Projects", "Experience", "Education", "Contact"];

  return (
    <div className="flex flex-col">
      {sectionOrder.map((sectionName) => {
        const sectionContent = content[sectionName];
        const isContactSection = sectionName === "Contact";
        const isAboutSection = sectionName === "About Me";

        if (!sectionContent) return null;

        const isVisible = visibleSections.has(sectionName);

        return (
          <section
            key={sectionName}
            id={`section-${sectionName.toLowerCase().replace(/\s+/g, "-")}`}
            className={`
              snap-start scroll-mt-2 ${
                isContactSection
                  ? "flex flex-col justify-start items-start pt-2 sm:pt-3 lg:pt-4 pb-16 px-4 sm:pb-20 sm:px-6 md:px-8 lg:px-12 min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-8rem)]"
                  : isAboutSection
                    ? "flex flex-col justify-start items-start pt-4 pb-16 px-4 sm:pt-6 sm:pb-20 sm:px-6 md:px-8 lg:pt-8 lg:px-12 min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-8rem)]"
                    : "flex flex-col justify-start items-start pt-2 pb-16 px-4 sm:pt-3 sm:pb-20 sm:px-6 md:px-8 lg:pt-4 lg:px-12 min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-8rem)]"
              }
            `}
          >
            {sectionName !== "About Me" && (
              <h1
                className={`py-2 text-white text-2xl sm:text-3xl lg:text-4xl font-bold w-full transition-all duration-500 ease-out ${
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
