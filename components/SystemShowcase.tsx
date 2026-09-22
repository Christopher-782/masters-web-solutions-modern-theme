function CommandCenter() {
  return (
    <div className="command-center" aria-label="Operations Command Center concept interface">
      <aside>
        <div className="command-brand">MWS</div>
        <span className="is-active">Dashboard</span><span>Customers</span><span>Finance</span><span>Reports</span><span>Staff</span>
      </aside>
      <main>
        <div className="command-top"><div><small>Operations Command Center</small><strong>Today&apos;s business overview</strong></div><span>Updated 2 min ago</span></div>
        <div className="command-metrics"><article><small>Active customers</small><strong>128</strong></article><article><small>Open requests</small><strong>21</strong></article><article><small>Available cash</small><strong>₦4.2m</strong></article><article><small>Staff online</small><strong>18</strong></article></div>
        <div className="command-grid">
          <section className="command-chart"><div><strong>Business activity</strong><span>Last 7 days</span></div><div className="command-bars"><i style={{ height: "42%" }} /><i style={{ height: "55%" }} /><i style={{ height: "48%" }} /><i style={{ height: "68%" }} /><i style={{ height: "60%" }} /><i style={{ height: "84%" }} /><i style={{ height: "72%" }} /></div></section>
          <section className="command-feed"><strong>Recent activity</strong><span><i /> Invoice INV-402 approved</span><span><i /> New customer added</span><span><i /> Staff leave request sent</span><span><i /> Weekly report created</span></section>
        </div>
      </main>
    </div>
  );
}

export default function SystemShowcase() {
  return (
    <section className="systems section-light" id="systems">
      <div className="shell">
        <div className="systems-intro">
          <div>
            <div className="section-kicker">System examples</div>
            <h2>See the kind of tools we can build for everyday business work.</h2>
          </div>
          <p>These examples are not claims about a particular customer. They simply show how a custom system can bring customers, money, staff, requests and reports into a clearer working environment.</p>
        </div>

        <article className="system-feature">
          <div className="system-feature__copy hover-explain" tabIndex={0}>
            <span>Example system</span>
            <h3>Operations Command Center</h3>
            <div className="hover-explain__text hover-explain__text--large">
              <p className="hover-explain__brief">One screen where a business owner or manager can see the most important parts of the company.</p>
              <p className="hover-explain__detail">Instead of asking different staff members for separate updates, this type of system can show customers, money, requests, staff activity and reports in one place so management can quickly see what needs attention.</p>
            </div>
            <span className="hover-explain__hint">Hover to read the full explanation</span>
            <ul><li>Business overview</li><li>Customer records</li><li>Money and expenses</li><li>Reports and staff activity</li></ul>
          </div>
          <div className="system-feature__ui"><CommandCenter /></div>
        </article>

        <div className="secondary-systems">
          <article className="approval-engine hover-explain" tabIndex={0}>
            <div className="secondary-system-copy">
              <span>Example system</span>
              <h3>Approval & Request System</h3>
              <div className="hover-explain__text hover-explain__text--large">
                <p className="hover-explain__brief">Send a request to the right person and know exactly where it is.</p>
                <p className="hover-explain__detail">A staff member can send a purchase, leave or service request. The system sends it to the correct manager, records the decision, notifies the next person and keeps the full history for future checking.</p>
              </div>
              <span className="hover-explain__hint">Hover to see the full example</span>
            </div>
            <div className="approval-flow" aria-hidden="true">
              <div><strong>Request sent</strong><span>Operations</span></div><i /><div className="is-current"><strong>Manager checks</strong><span>Waiting for decision</span></div><i /><div><strong>Finance receives it</strong><span>Sent automatically</span></div>
            </div>
          </article>

          <article className="role-portal hover-explain" tabIndex={0}>
            <div className="role-portal__ui" aria-hidden="true">
              <div className="role-portal__head"><strong>User access</strong><span>Operations Manager</span></div>
              <div className="permission-row"><span>Dashboard</span><b>Can view & edit</b></div><div className="permission-row"><span>Finance</span><b>Can view only</b></div><div className="permission-row"><span>Staff records</span><b>Not allowed</b></div><div className="permission-row"><span>Reports</span><b>Can export</b></div>
            </div>
            <div className="secondary-system-copy">
              <span>Example system</span>
              <h3>Staff Portal With Different Access Levels</h3>
              <div className="hover-explain__text hover-explain__text--large">
                <p className="hover-explain__brief">Each staff member sees only the tools and information needed for their job.</p>
                <p className="hover-explain__detail">For example, Finance can see payment information while another staff member cannot. A manager may approve requests, while a normal user can only send a request and check its status.</p>
              </div>
              <span className="hover-explain__hint">Hover to read the full explanation</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
