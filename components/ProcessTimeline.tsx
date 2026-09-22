"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Discover",
    copy: "We first understand how your business works today.",
    detail: "You show us the tasks your staff do, where information is kept, what takes too much time and where mistakes or delays usually happen."
  },
  {
    title: "Design",
    copy: "We plan a simpler way for the work to move.",
    detail: "We decide what each person should see, what information should be collected, which steps should happen automatically and what reports you need."
  },
  {
    title: "Build",
    copy: "We turn the plan into a working website or software system.",
    detail: "We build the screens, connect the features, test the system and make sure it works properly on the devices your team will use."
  },
  {
    title: "Launch",
    copy: "We put the system into use and help your team understand it.",
    detail: "After launch, we can guide users, fix issues and improve the system as your business grows or your process changes."
  }
] as const;

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = rect.height + viewport * 0.25;
      const passed = viewport * 0.72 - rect.top;
      setProgress(Math.max(0, Math.min(1, passed / total)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="process section-soft" id="process" ref={sectionRef} style={{ "--timeline-progress": progress } as React.CSSProperties}>
      <div className="shell">
        <div className="process-heading">
          <div className="section-kicker">How we work</div>
          <h2>We understand your work first.<br />Then we build the right solution.</h2>
          <p>We do not start by forcing software on your business. We first understand the problem, then we build only the tools that will make the work easier.</p>
        </div>

        <div className="process-timeline">
          <div className="timeline-track" aria-hidden="true"><span /></div>
          {steps.map((step) => (
            <article key={step.title} className="timeline-step hover-explain" tabIndex={0}>
              <div className="timeline-step__marker" aria-hidden="true"><i /></div>
              <h3>{step.title}</h3>
              <div className="hover-explain__text">
                <p className="hover-explain__brief">{step.copy}</p>
                <p className="hover-explain__detail">{step.detail}</p>
              </div>
              <span className="hover-explain__hint">Hover to read the full step</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
