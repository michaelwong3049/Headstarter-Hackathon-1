import './global.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="ml-5">
      <div className="flex flex-col max-w-sm w-full">
        <div className="bg-cyan-400 p-6 font-bold text-4xl rounded-2xl my-4">
          <Link href="/study-plans">+Create</Link>
        </div>

        <div className="inline-block bg-orange-400 p-6 font-bold text-2xl rounded-2xl my-4">
          <Link href="/study-plans/Data-Structures-and-Algorithms">Data Structures and Algorithms</Link>
        </div>
      </div>
    </div>
  );
}
