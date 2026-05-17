// app/layout.tsx — Javari Weddings
import type { Metadata } from 'next'
import './globals.css'
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: 'Javari Weddings | Javari by CR AudioViz AI',
  description: 'Wedding planning AI',
}
import AppShell from '@/components/AppShell'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body style={{ margin: 0, padding: 0 }}><AppShell appName="Javari Weddings" appColor="#ec4899" appEmoji="💍" appDesc="Wedding planning AI">{children}</AppShell></body></html>)
}
