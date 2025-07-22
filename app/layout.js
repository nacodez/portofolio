import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nazik Nassar - Senior Full-Stack Developer | React & Node.js Expert",
  description: "Senior Full-Stack Developer with 7+ years experience in React, Node.js, TypeScript, and modern web technologies. Based in Dubai, UAE. Specialized in enterprise applications and performance optimization.",
  keywords: "Full-Stack Developer, React Developer, Node.js, TypeScript, JavaScript, Web Development, Dubai Developer, Frontend, Backend, Enterprise Applications",
  author: "Nazik Nassar",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Nazik Nassar - Senior Full-Stack Developer",
    description: "Senior Full-Stack Developer with 7+ years experience in React, Node.js, and modern web technologies. Based in Dubai, UAE.",
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Nazik Nassar Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Nazik Nassar - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazik Nassar - Senior Full-Stack Developer",
    description: "Senior Full-Stack Developer with 7+ years experience in React, Node.js, and modern web technologies.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nazik Nassar",
    "jobTitle": "Senior Full-Stack Developer",
    "description": "Senior Full-Stack Developer with 7+ years experience in React, Node.js, TypeScript, and modern web technologies.",
    "url": "https://your-domain.com",
    "sameAs": [
      "https://www.linkedin.com/in/nazik-nassar-514a7baa/",
      "https://github.com/Nacodez"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "UAE"
    },
    "knowsAbout": [
      "React",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "MongoDB",
      "Express.js",
      "Full-Stack Development",
      "Web Development"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="32x32" href="/favicon.jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
