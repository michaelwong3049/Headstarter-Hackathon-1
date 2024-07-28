import '../../global.css'

export default function StudyPlan1() {
    return (
        <div className="px-2 flex justify-around">
            <div className="w-[48%]">
                <h1 className="bg-cyan-400 p-6 font-bold text-4xl rounded-2xl my-4 w-full text-center">Week 1</h1>
                <div className="flex-col justify-between items-center">
                    <h2 className="text-2xl font-bold">Day 1</h2>
                    <h2 className="text-2xl font-bold">Day 2</h2>
                    <h2 className="text-2xl font-bold">Day 3</h2>
                    <h2 className="text-2xl font-bold">Day 4</h2>
                    <h2 className="text-2xl font-bold">Day 5</h2>
                    <h2 className="text-2xl font-bold">Day 6</h2>
                    <h2 className="text-2xl font-bold">Day 7</h2>
                </div>
            </div>
            <div className="w-[48%]">
                <h1 className="bg-cyan-400 p-6 font-bold text-4xl rounded-2xl my-4 w-full text-center">Week 2</h1>
                <div>
                    <h2 className="text-2xl font-bold">Day 8</h2>
                    <h2 className="text-2xl font-bold">Day 9</h2>
                    <h2 className="text-2xl font-bold">Day 10</h2>
                    <h2 className="text-2xl font-bold">Day 11</h2>
                    <h2 className="text-2xl font-bold">Day 12</h2>
                    <h2 className="text-2xl font-bold">Day 13</h2>
                    <h2 className="text-2xl font-bold">Day 14</h2>
                </div>
            </div>
        </div>
    )
}