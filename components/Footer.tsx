import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__top">
        <div className="footer__brand">
          <Image src="/masters-web-solutions-logo.png" alt="MASTER'S WEB SOLUTIONS" width={384} height={307} />
          <p>We build websites and business software that help companies keep information organized, reduce repeated work and make everyday operations easier to manage.</p>
        </div>
        <nav aria-label="Footer navigation">
          <strong>Navigate</strong>
          <Link href="#solutions">Solutions</Link>
          <Link href="#transformation">Transformation</Link>
          <Link href="#systems">Systems</Link>
          <Link href="#process">Process</Link>
        </nav>
        <div className="footer__contact">
          <strong>Talk to us</strong>
          <a href="https://wa.me/2348072011614" target="_blank" rel="noopener noreferrer">WhatsApp · 08072011614</a>
          <span>Ask about a website, business system or workflow problem.</span>
        </div>
      </div>
      <div className="shell footer__bottom"><span>© {new Date().getFullYear()} MASTER’S WEB SOLUTIONS</span><Link href="#home">Back to top ↑</Link></div>
    </footer>
  );
}
