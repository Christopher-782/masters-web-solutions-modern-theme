"use client";

import { useMemo, useState } from "react";

const solutions = [
  {
    title: "Business Management Systems",
    short: "Keep the main records of your business in one organized place.",
    intro: "We can build one system where you manage customers, staff, expenses, invoices and reports instead of keeping the information in many different files or notebooks.",
    detail: "For example, when a customer pays, the payment can be recorded in the same system that keeps the customer record, invoice and report. This makes it easier to find information and reduces repeated work.",
    label: "Keep records together",
    features: [
      ["Customers", "Keep names, phone numbers, history and follow-up information together."],
      ["Staff records", "Store employee details, roles and other information your business needs."],
      ["Expenses", "Record money spent and make it easier to understand where money is going."],
      ["Invoices", "Create, track and check the payment status of invoices."],
      ["Reports", "See useful summaries without manually joining many spreadsheets together."]
    ],
    type: "management" as const
  },
  {
    title: "Workflow Automation Systems",
    short: "Let routine requests, approvals and reminders move automatically.",
    intro: "We can turn repeated office steps into a digital process so your staff do not need to keep calling, sending messages or carrying documents from one person to another.",
    detail: "For example, when a staff member sends a purchase request, the system can send it to the manager, record the approval, notify Finance and keep the full history without anyone chasing the next person manually.",
    label: "Reduce repeated follow-up",
    features: [
      ["Approvals", "Send requests to the correct person and record who approved or rejected them."],
      ["Requests", "Collect leave, purchase, service or internal requests in one place."],
      ["Notifications", "Automatically remind the right person when an action is waiting."],
      ["Documents", "Keep supporting files attached to the correct request or record."],
      ["Repeated tasks", "Automate steps your staff currently repeat every day or every week."]
    ],
    type: "workflow" as const
  },
  {
    title: "Custom Operations Portals",
    short: "Give your team a secure workspace made for the way your company works.",
    intro: "We can build a private portal where staff log in and see the tools, tasks and information that match their job. Different people can have different levels of access.",
    detail: "For example, a manager may see approvals and reports, Finance may see payment information, while another staff member only sees the tasks assigned to them. Everybody works in the same system but only sees what they need.",
    label: "Give each person the right tools",
    features: [
      ["Internal dashboards", "Show important information and daily tasks on one screen."],
      ["Role-based access", "Control what each type of user can see or change."],
      ["Business-specific workflows", "Build the steps around how your own company works."],
      ["Custom operational tools", "Add special features that ordinary ready-made software does not provide."]
    ],
    type: "portal" as const
  },
  {
    title: "Custom Websites",
    short: "Get a professional website built around what you want visitors to do.",
    intro: "We build modern websites that clearly explain your business and guide visitors to buy, contact you, make a booking, request a service or view your previous work.",
    detail: "The website is planned around your actual business goal. A shop needs products and checkout, a professional may need a portfolio and enquiry form, while a campaign may only need one focused landing page.",
    label: "Help customers find and choose you",
    features: [
      ["E-commerce stores", "Show products online, receive orders and connect payment options."],
      ["Landing pages", "Create one focused page for an advert, product, service or campaign."],
      ["Portfolio websites", "Show your work, projects, photographs, designs or completed jobs professionally."],
      ["Corporate websites", "Explain your company, services, team, contact details and important information clearly."],
      ["Booking & service websites", "Allow customers to request appointments, bookings, quotations or services online."]
    ],
    type: "websites" as const
  }
];

function ManagementPreview() {
  return (
    <div className="solution-ui solution-ui--management" aria-label="Business management system interface demonstration">
      <div className="solution-ui__top"><strong>Business Center</strong><span>Overview</span><span>Today</span></div>
      <div className="solution-ui__metrics">
        <div><small>Customers</small><strong>128</strong><span>12 new this month</span></div>
        <div><small>Open invoices</small><strong>24</strong><span>6 due this week</span></div>
        <div><small>Expenses</small><strong>₦842k</strong><span>Current period</span></div>
      </div>
      <div className="solution-ui__split">
        <div className="solution-ui__table">
          <div className="table-row table-row--head"><span>Customer</span><span>Status</span><span>Balance</span></div>
          <div className="table-row"><span>Northpoint Ltd</span><b>Active</b><span>₦0</span></div>
          <div className="table-row"><span>Atlas Foods</span><b>Follow-up</b><span>₦120k</span></div>
          <div className="table-row"><span>Prime Schools</span><b>Active</b><span>₦45k</span></div>
        </div>
        <div className="solution-ui__mini-chart">
          <span style={{ height: "36%" }} /><span style={{ height: "52%" }} /><span style={{ height: "44%" }} /><span style={{ height: "70%" }} /><span style={{ height: "61%" }} /><span style={{ height: "84%" }} />
        </div>
      </div>
    </div>
  );
}

function WorkflowPreview() {
  return (
    <div className="solution-ui solution-ui--workflow" aria-label="Workflow automation interface demonstration">
      <div className="flow-head"><span>Automatic work queue</span><strong>6 active processes</strong></div>
      <div className="flow-lane">
        <div className="flow-node"><small>Request</small><strong>Purchase request sent</strong><span>Operations</span></div>
        <i aria-hidden="true" />
        <div className="flow-node flow-node--active"><small>Approval</small><strong>Manager checks request</strong><span>Waiting · 14 min</span></div>
        <i aria-hidden="true" />
        <div className="flow-node"><small>Next step</small><strong>Finance is notified</strong><span>Automatic</span></div>
      </div>
      <div className="flow-footer"><span>Rule: requests above ₦250,000 also go to Finance</span><b>On</b></div>
    </div>
  );
}

function PortalPreview() {
  return (
    <div className="solution-ui solution-ui--portal" aria-label="Custom operations portal interface demonstration">
      <aside><strong>Operations</strong><span className="is-active">Dashboard</span><span>Requests</span><span>Teams</span><span>Reports</span></aside>
      <main>
        <div className="portal-top"><div><small>User role</small><strong>Operations Manager</strong></div><span>3 notifications</span></div>
        <div className="portal-grid">
          <article><small>My tasks</small><strong>8</strong><span>3 due today</span></article>
          <article><small>Waiting for approval</small><strong>5</strong><span>Needs attention</span></article>
          <article className="portal-grid__wide"><small>Team activity</small><div className="portal-bars"><i style={{ width: "74%" }} /><i style={{ width: "55%" }} /><i style={{ width: "82%" }} /></div></article>
        </div>
      </main>
    </div>
  );
}

function WebsitesPreview() {
  return (
    <div className="solution-ui solution-ui--websites" aria-label="Custom website examples interface demonstration">
      <div className="website-browser-bar">
        <div className="website-browser-dots" aria-hidden="true"><i /><i /><i /></div>
        <span>yourbusiness.com</span>
        <b>Live preview</b>
      </div>
      <div className="website-preview-shell">
        <div className="website-preview-copy">
          <small>Custom website</small>
          <strong>Built around what you want customers to do.</strong>
          <p>Sell products, receive enquiries, show your work or allow customers to book a service.</p>
          <div className="website-preview-actions"><span>Contact / Buy</span><span>See details</span></div>
        </div>
        <div className="website-preview-panel">
          <div className="website-product-card"><i /><strong>Product or service</strong><span>Clear information and a simple next step</span></div>
          <div className="website-product-card"><i /><strong>Previous work</strong><span>Portfolio, project or customer example</span></div>
        </div>
      </div>
      <div className="website-types" aria-label="Examples of custom websites">
        <span>Online shop</span><span>Landing page</span><span>Portfolio</span><span>Company website</span><span>Booking website</span>
      </div>
    </div>
  );
}

function Preview({ type }: { type: (typeof solutions)[number]["type"] }) {
  if (type === "workflow") return <WorkflowPreview />;
  if (type === "portal") return <PortalPreview />;
  if (type === "websites") return <WebsitesPreview />;
  return <ManagementPreview />;
}

export default function SolutionsExplorer() {
  const [active, setActive] = useState(0);
  const selected = useMemo(() => solutions[active], [active]);

  return (
    <section className="solutions section-light" id="solutions">
      <div className="shell">
        <div className="section-kicker">What we can build</div>
        <div className="section-heading section-heading--dark">
          <h2>Digital solutions built around the way your business really works.</h2>
          <p>You do not need to understand technical words before talking to us. Tell us the problem in your own words, and we will help you choose the right type of website or business system.</p>
        </div>

        <div className="solutions-desktop">
          <div className="solution-selector" role="tablist" aria-label="Business technology solutions">
            {solutions.map((item, index) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={active === index}
                id={`solution-tab-${index}`}
                aria-controls="solution-panel"
                className={active === index ? "is-active" : ""}
                onClick={() => setActive(index)}
              >
                <strong>{item.title}</strong>
                <small>{item.label}</small>
              </button>
            ))}
          </div>

          <div className="solution-panel" id="solution-panel" role="tabpanel" aria-labelledby={`solution-tab-${active}`}>
            <div className="solution-panel__copy">
              <h3>{selected.title}</h3>
              <p className="solution-panel__intro">{selected.intro}</p>
              <div className="solution-more hover-explain" tabIndex={0}>
                <strong>Simple example</strong>
                <div className="hover-explain__text">
                  <p className="hover-explain__brief">{selected.short}</p>
                  <p className="hover-explain__detail">{selected.detail}</p>
                </div>
                <span className="hover-explain__hint">Hover to see a full example</span>
              </div>
              <strong className="solution-feature-title">What it can include</strong>
              <ul className="solution-feature-list">
                {selected.features.map(([feature, explanation]) => (
                  <li key={feature} className="feature-explain" tabIndex={0}>
                    <span>{feature}</span>
                    <small>{explanation}</small>
                  </li>
                ))}
              </ul>
            </div>
            <div className="solution-panel__preview" key={selected.type}><Preview type={selected.type} /></div>
          </div>
        </div>

        <div className="solutions-mobile" aria-label="Business technology solutions">
          {solutions.map((item, index) => {
            const open = active === index;
            return (
              <article key={item.title} className={open ? "is-open" : ""}>
                <button type="button" aria-expanded={open} onClick={() => setActive(index)}>
                  <strong>{item.title}</strong><i aria-hidden="true">+</i>
                </button>
                <div className="mobile-solution-content">
                  <p>{item.intro}</p>
                  <p className="mobile-solution-detail">{item.detail}</p>
                  <ul>{item.features.map(([feature, explanation]) => <li key={feature}><strong>{feature}:</strong> {explanation}</li>)}</ul>
                  <Preview type={item.type} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
