import Image from "next/image";

const beforeLabels = [
  "Information is spread across files, chats and paper records.",
  "The same information may be entered more than once.",
  "Approvals and follow-ups depend on people remembering.",
  "Reports take longer because figures must be gathered manually.",
  "It is difficult to see what is pending or who is responsible."
];

const afterLabels = [
  "Important business information is kept in one structured system.",
  "Repeated tasks can be handled automatically.",
  "Approvals, reminders and updates move through a clear workflow.",
  "Reports are easier to view and understand when needed.",
  "Your team can quickly see the status of work and what needs attention."
];

export default function TransformationComparison() {
  return (
    <section className="transformation section-dark" id="transformation">
      <div className="shell">
        <div className="section-kicker section-kicker--light">Transformation</div>

        <div className="transformation-heading transformation-heading--showcase">
          <h2>Move from stressful manual work to a simpler, connected way of running your business.</h2>
          <p>
            When information is scattered across notebooks, spreadsheets, WhatsApp messages and paper files,
            everyday work becomes harder than it should be. We build one digital system that brings the work together,
            reduces repeated tasks and makes it easier to know what is happening in your business.
          </p>
        </div>

        <figure className="transformation-showcase" tabIndex={0}>
          <div className="transformation-showcase__image">
            <Image
              src="/transformation-showcase.png"
              alt="Illustration showing the change from stressful manual business processes to a connected automated business system"
              width={1672}
              height={941}
              sizes="(max-width: 760px) 100vw, (max-width: 1200px) 94vw, 1500px"
              className="transformation-showcase__asset"
              priority={false}
            />
            <div className="transformation-showcase__veil" aria-hidden="true" />
            <div className="transformation-showcase__hover-note" aria-hidden="true">
              <strong>One connected system</strong>
              <span>Less chasing. Less repeated work. More visibility.</span>
            </div>
          </div>
          <figcaption>
            A simple example of the change we help businesses make: from scattered manual work to a more organized digital system.
          </figcaption>
        </figure>

        <div className="comparison-notes comparison-notes--showcase">
          <div className="comparison-note comparison-note--before">
            <span>Before</span>
            <div>{beforeLabels.map((label) => <p key={label}>{label}</p>)}</div>
          </div>
          <div className="comparison-note comparison-note--after">
            <span>After</span>
            <div>{afterLabels.map((label) => <p key={label}>{label}</p>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
