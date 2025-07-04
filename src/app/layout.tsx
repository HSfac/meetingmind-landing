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
        url: "/og/og-main.png", // 메인 OG 이미지 (og-main.png 파일을 /og/ 폴더에 추가하세요)
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
    images: ["/og/og-main.png"], // 메인 OG 이미지
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/icons/safari-pinned-tab.svg", color: "#111827" },
    ],
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
