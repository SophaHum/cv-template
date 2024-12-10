import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HUM SOPHA - Web Developer CV',
  description: 'Professional CV of HUM SOPHA, Web Developer with 4+ years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          @page {
            size: A4;
            margin: 20mm 25mm;
          }
          
          @media print {
            html, body {
              width: 210mm;
              height: 297mm;
              margin: 0;
              padding: 0;
            }
            
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            /* Enhanced break control */
            .print\\:keep-together {
              page-break-inside: avoid !important;
              break-inside: avoid !important;
            }
            
            .print\\:break-before {
              page-break-before: always !important;
              break-before: page !important;
            }
            
            .print\\:break-after {
              page-break-after: always !important;
              break-after: page !important;
            }
            
            /* Keep headings with their content */
            h1, h2, h3, h4, h5, h6 {
              page-break-after: avoid !important;
              break-after: avoid !important;
              page-break-inside: avoid !important;
              break-inside: avoid !important;
            }
            
            /* Keep lists together */
            ul, ol, dl {
              page-break-inside: avoid !important;
              break-inside: avoid !important;
            }
            
            /* Keep list items together */
            li {
              page-break-inside: avoid !important;
              break-inside: avoid !important;
            }
            
            /* Keep sections together */
            section {
              page-break-inside: avoid !important;
              break-inside: avoid !important;
            }
            
            /* Keep work experience entries together */
            .work-experience {
              page-break-inside: avoid !important;
              break-inside: avoid !important;
              margin-bottom: 1.5rem;
            }
            
            /* Orphan and widow control */
            p, h1, h2, h3, h4, h5, h6 {
              orphans: 3;
              widows: 3;
            }
          }
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

