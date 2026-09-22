import AnimatedButton from "./AnimatedButton";

const whatsapp = "https://wa.me/2348072011614?text=Hello%20MASTER%27S%20WEB%20SOLUTIONS%2C%20I%27d%20like%20to%20discuss%20a%20website%20or%20business%20system%20for%20my%20business.";

const frictionPoints = [
  {
    title: "Too much manual work",
    text: "Your team keeps typing the same information, copying records or doing tasks that could be automated."
  },
  {
    title: "Slow approvals",
    text: "Requests wait too long because people must call, message or chase someone before work can move forward."
  },
  {
    title: "Scattered information",
    text: "Important customer, staff, payment or project information is spread across files, notebooks and different apps."
  },
  {
    title: "A website that is not helping",
    text: "People visit your website but still do not clearly understand your business, trust the offer or know what to do next."
  }
];

export default function CTASection() {
  return (
    <section className="final-cta" id="contact">
      <div className="shell final-cta__frame">
        <div className="final-cta__main">
          <div className="final-cta__eyebrow">Free business consultation</div>

          <h2>
            What is making your business <span>harder to run</span> than it should be?
          </h2>

          <p>
            Tell us how your work is done today. You do not need to know any technical words. Explain the problem in your own way and we will help you understand what can be simplified, automated or moved into one better system.
          </p>

          <div className="final-cta__actions">
            <AnimatedButton href={whatsapp} external>
              Book a Free Consultation
            </AnimatedButton>
            <a
              className="final-cta__phone"
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: 08072011614 <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="final-cta__assurance" aria-label="Consultation information">
            <span>Free consultation</span>
            <span>No technical knowledge needed</span>
            <span>Clear explanation of the next step</span>
          </div>
        </div>

        <aside className="final-cta__problems" aria-label="Common business problems we can help with">
          <div className="final-cta__problems-head">
            <span>Common problems we can help with</span>
            <strong>Where is work getting stuck?</strong>
          </div>

          <div className="final-cta__problem-list">
            {frictionPoints.map((item) => (
              <article className="final-cta__problem" key={item.title} tabIndex={0}>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
                <span aria-hidden="true">↗</span>
              </article>
            ))}
          </div>

          <div className="final-cta__mini-note">
            <span>Start simple</span>
            <p>Send us a WhatsApp message describing the part of your work that takes too much time.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
