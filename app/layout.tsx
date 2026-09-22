import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://masterswebsolutions.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Master's Web Solutions",
  description:
    "MASTER’S WEB SOLUTIONS builds custom websites and simple business systems that help companies organize information, reduce repeated work, manage approvals and run daily operations more easily.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Master's Web Solutions",
    description:
      "Custom websites, business management systems, workflow automation and operations portals built around how your business really works.",
    url: siteUrl,
    siteName: "Master's Web Solutions",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Master's Web Solutions",
    description:
      "Custom websites and business systems that make everyday work easier to manage.",
  },
  icons: { icon: "/icon.png" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Master's Web Solutions",
  url: siteUrl,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+2348072011614",
    contactType: "sales",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom websites, business systems and workflow automation",
  provider: { "@type": "Organization", name: "Master's Web Solutions" },
  // description: "Custom websites, business management systems, workflow automation tools, internal dashboards and operations portals."
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </body>
    </html>
  );
}
