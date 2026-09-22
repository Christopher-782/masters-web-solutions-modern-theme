"use client";

import { useEffect, useRef, useState } from "react";

function useCount(target: number, duration = 950) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);
  return value;
}

function PerformanceChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActive(true);
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const points = [32, 41, 37, 56, 61, 73, 69, 86];
    const secondary = [24, 29, 33, 38, 44, 47, 56, 64];
    let raf = 0;
    const start = performance.now();

    const draw = (now: number) => {
      const dpr = window.devicePixelRatio || 1;
      const width = wrap.clientWidth;
      const height = wrap.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const padX = 18;
      const padY = 16;
      ctx.strokeStyle = "rgba(83, 104, 80, 0.14)";
      ctx.lineWidth = 1;
      for (let i = 1; i <= 4; i += 1) {
        const y = padY + ((height - padY * 2) / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padX, y);
        ctx.lineTo(width - padX, y);
        ctx.stroke();
      }

      const progress = Math.min((now - start) / 1150, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const maxSegments = (points.length - 1) * eased;

      const line = (data: number[], color: string, alpha = 1) => {
        ctx.strokeStyle = color;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = 2.2;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.beginPath();
        data.forEach((value, index) => {
          if (index > Math.ceil(maxSegments)) return;
          const x = padX + (index / (data.length - 1)) * (width - padX * 2);
          const y = height - padY - (value / 100) * (height - padY * 2);
          if (index === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.stroke();
      };

      line(points, "#2F6A3B");
      line(secondary, "#93AD84", 0.8);
      ctx.globalAlpha = 1;
      if (progress < 1) raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(draw);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [active]);

  return (
    <div className="dashboard-chart" ref={wrapRef}>
      <canvas ref={canvasRef} role="img" aria-label="Animated sample business performance chart" />
    </div>
  );
}

export default function OperationsDashboard() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const revenue = useCount(284);
  const customers = useCount(128);
  const projects = useCount(24);
  const approvals = useCount(6);

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -1.3, y: px * 1.5 });
  };

  return (
    <div className="dashboard-stage" onPointerMove={onPointerMove} onPointerLeave={() => setTilt({ x: 0, y: 0 })}>
      <div className="demo-note">Example screen · sample figures</div>
      <div
        className="operations-dashboard"
        style={{ transform: `perspective(1500px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <aside className="dashboard-sidebar">
          <div className="dashboard-brand" aria-label="Sample product mark"><span /><i /></div>
          <div className="dashboard-nav-item dashboard-nav-item--active"><i />Overview</div>
          <div className="dashboard-nav-item"><i />Customers</div>
          <div className="dashboard-nav-item"><i />Projects</div>
          <div className="dashboard-nav-item"><i />Approvals</div>
          <div className="dashboard-nav-item"><i />Finance</div>
          <div className="dashboard-nav-item"><i />Reports</div>
          <div className="dashboard-sidebar__status"><i />Settings</div>
        </aside>

        <div className="dashboard-main">
          <div className="dashboard-topbar">
            <div>
              <strong>Good morning, Admin</strong>
              <span>Here&apos;s a simple view of what is happening in the business today.</span>
            </div>
            <div className="dashboard-actions">
              <span className="dashboard-search">Search…</span>
              <b>A</b>
            </div>
          </div>

          <div className="dashboard-metrics">
            <div><span>Revenue</span><strong>₦{revenue.toLocaleString()}k</strong><small>↑ 12.8% this period</small></div>
            <div><span>Active customers</span><strong>{customers}</strong><small>18 awaiting follow-up</small></div>
            <div><span>Projects</span><strong>{projects}</strong><small>7 in review</small></div>
            <div><span>Pending approvals</span><strong>{approvals}</strong><small className="dashboard-overdue">2 overdue</small></div>
          </div>

          <div className="dashboard-grid">
            <section className="dashboard-card dashboard-card--chart">
              <div className="dashboard-card__heading">
                <div><strong>Business trend</strong><span>Sales and completed work</span></div>
                <small>Last 8 weeks</small>
              </div>
              <PerformanceChart />
              <div className="chart-legend">
                <span><i className="legend-blue" /> Sales activity</span>
                <span><i className="legend-soft" /> Completed work</span>
              </div>
            </section>

            <section className="dashboard-card dashboard-card--activity">
              <div className="dashboard-card__heading"><div><strong>Common actions</strong><span>Things you may do often</span></div></div>
              <div className="activity-row"><i /><div><strong>Add new customer</strong><small>Create a customer record</small></div><b>→</b></div>
              <div className="activity-row"><i /><div><strong>Create project</strong><small>Start a new project</small></div><b>→</b></div>
              <div className="activity-row"><i /><div><strong>View reports</strong><small>Review performance</small></div><b>→</b></div>
              <div className="activity-row"><i /><div><strong>Manage approvals</strong><small>Check requests waiting for you</small></div><b>→</b></div>
            </section>
          </div>

          <div className="dashboard-saving">
            <i aria-hidden="true">↗</i>
            <div><strong>12.4 hours saved this week</strong><span>Example figures only · this shows how a dashboard could display time saved through automatic processes.</span></div>
            <b>View details →</b>
          </div>
        </div>
      </div>
    </div>
  );
}
