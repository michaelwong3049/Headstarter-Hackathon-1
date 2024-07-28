import Link from 'next/link'

export const metadata = {
  title: 'StudyBlueprint',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <header className="mb-4">
          <div className="bg-orange-400 p-8">
            <h1 className="inline-block bg-white p-4 rounded-2xl text-5xl ml-20 font-bold">
              <Link href="/">CodeLeet</Link>
            </h1>
          </div>
        </header>

        {children}
        
        </body>
    </html>
  )
}
