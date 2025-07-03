import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from '@/contexts/LanguageContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "MeetingMind - 회의는 녹음만, 정리는 AI가!",
  description: "Record your meeting—MeetingMind does the rest. AI-powered meeting transcription, summary, and mind-mapping.",
  keywords: ["AI", "meeting", "transcription", "summary", "mind-map", "회의", "녹음", "요약"],
  authors: [{ name: "MeetingMind Team" }],
  openGraph: {
    title: "MeetingMind - AI Meeting Assistant",
    description: "Record your meeting—MeetingMind does the rest.",
    url: "https://meetingmind.com",
    siteName: "MeetingMind",
    images: [
      {
        url: "/og_meetingmind.png",
        width: 1200,
        height: 630,
        alt: "MeetingMind - AI Meeting Assistant",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MeetingMind - AI Meeting Assistant",
    description: "Record your meeting—MeetingMind does the rest.",
    images: ["/og_meetingmind.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
