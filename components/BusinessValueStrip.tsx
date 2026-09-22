const values = [
  {
    title: "LESS MANUAL WORK",
    brief: "Spend less time writing the same information again and again.",
    detail: "Your system can store information once and reuse it where needed, reducing repeated typing, paper work and unnecessary follow-up calls."
  },
  {
    title: "ONE PLACE FOR INFORMATION",
    brief: "Keep important business records together instead of everywhere.",
    detail: "Customer details, staff records, invoices, expenses, requests and reports can be kept in one organized system that is easier to search and update."
  },
  {
    title: "KNOW WHAT IS HAPPENING",
    brief: "See the important parts of your business more clearly.",
    detail: "A dashboard can show what is completed, what is still pending and what needs your attention without waiting for different people to send updates."
  },
  {
    title: "MOVE WORK FASTER",
    brief: "Requests and approvals can reach the right person quickly.",
    detail: "Instead of carrying documents around or sending repeated messages, the system can send a request to the right person, record the decision and notify the next person."
  }
] as const;

export default function BusinessValueStrip() {
  return (
    <section className="value-strip" aria-label="How a business system can help">
      <div className="shell value-strip__inner">
        {values.map((item) => (
          <article className="value-strip__item hover-explain" tabIndex={0} key={item.title}>
            <h2>{item.title}</h2>
            <div className="hover-explain__text">
              <p className="hover-explain__brief">{item.brief}</p>
              <p className="hover-explain__detail">{item.detail}</p>
            </div>
            <span className="hover-explain__hint">Hover to see how it works</span>
          </article>
        ))}
      </div>
    </section>
  );
}
