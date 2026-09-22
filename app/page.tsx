import Header from "@/components/Header";
import OperationsDashboard from "@/components/OperationsDashboard";
import AnimatedButton from "@/components/AnimatedButton";
import BusinessValueStrip from "@/components/BusinessValueStrip";
import SolutionsExplorer from "@/components/SolutionsExplorer";
import TransformationComparison from "@/components/TransformationComparison";
import SystemShowcase from "@/components/SystemShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const whatsapp = "https://wa.me/2348072011614?text=Hello%20MASTER%27S%20WEB%20SOLUTIONS%2C%20I%27d%20like%20to%20discuss%20a%20website%20or%20business%20system%20for%20my%20business.";

const heroBenefits = [
  {
    title: "Keep everything together",
    brief: "Customers, staff, sales, expenses and reports in one place.",
    detail: "Instead of checking many spreadsheets, notebooks and chats, your team can open one system and find the information they need."
  },
  {
    title: "Reduce repeated work",
    brief: "Let the system handle routine steps and reminders.",
    detail: "Approvals, follow-ups, notifications and repeated data entry can be arranged to move automatically, so your staff spend less time chasing people."
  },
  {
    title: "Know what is happening",
    brief: "See important business information without asking everybody for updates.",
    detail: "A clear dashboard can show sales, customers, tasks, approvals and reports so you can quickly understand what needs attention."
  }
] as const;

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero" id="home">
          <div className="hero-ambient hero-ambient--one" aria-hidden="true" />
          <div className="hero-ambient hero-ambient--two" aria-hidden="true" />
          <div className="shell hero__grid">
            <Reveal className="hero__copy">
              <div className="eyebrow">Business software that makes daily work easier</div>
              <h1>Run your business from <span>one clear digital system.</span></h1>
              <p className="hero__lead">
                If your staff still depend on many spreadsheets, notebooks, WhatsApp messages or repeated phone calls to get work done, MASTER’S WEB SOLUTIONS can build one web system that brings the work together. Manage customers, staff, expenses, approvals, reports and daily tasks from one place.
              </p>
              <div className="hero__actions">
                <AnimatedButton href={whatsapp} external>Book a Free Consultation</AnimatedButton>
                <AnimatedButton href="#solutions" variant="secondary">See What We Can Build</AnimatedButton>
              </div>
              <div className="hero-benefits" aria-label="How our systems help your business">
                {heroBenefits.map((item) => (
                  <article className="hover-explain" tabIndex={0} key={item.title}>
                    <strong>{item.title}</strong>
                    <div className="hover-explain__text">
                      <p className="hover-explain__brief">{item.brief}</p>
                      <p className="hover-explain__detail">{item.detail}</p>
                    </div>
                    <span className="hover-explain__hint">Hover to read more</span>
                  </article>
                ))}
              </div>
            </Reveal>
            <Reveal className="hero__product" delay={120}><OperationsDashboard /></Reveal>
          </div>
        </section>

        <BusinessValueStrip />
        <SolutionsExplorer />
        <TransformationComparison />
        <SystemShowcase />
        <ProcessTimeline />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
