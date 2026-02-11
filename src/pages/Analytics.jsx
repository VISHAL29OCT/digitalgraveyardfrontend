import { Link } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function Analytics({ ideas }) {
  const total = ideas.length;
  const techCount = ideas.filter(i => i.Category === "Tech").length;
  const businessCount = ideas.filter(i => i.Category === "Business").length;
  const personalCount = ideas.filter(i => i.Category === "Personal").length;

  // Reason frequency count
const reasonCount = {
  Time: 0,
  Money: 0,
  Team: 0,
  Motivation: 0,
  Other: 0
};

ideas.forEach((idea) => {
  const reason = idea.reason?.toLowerCase();

  if (!reason) return;

  if (reason.includes("time")) {
    reasonCount.Time++;
  } 
  else if (reason.includes("money") || reason.includes("fund")) {
    reasonCount.Money++;
  } 
  else if (reason.includes("team")) {
    reasonCount.Team++;
  } 
  else if (reason.includes("motivation")) {
    reasonCount.Motivation++;
  } 
  else {
    reasonCount.Other++;
  }
});

const sortedReasons = Object.entries(reasonCount)
  .sort((a, b) => b[1] - a[1]);

const categoryData = [
  { name: "Tech", value: techCount },
  { name: "Business", value: businessCount },
  { name: "Personal", value: personalCount },
].filter(item => item.value > 0);

const COLORS = ["#8b5cf6", "#3b82f6", "#f43f5e"];


  return (
    <div className="relative min-h-screen text-white p-8">
     <div className="absolute inset-0 bg-[url('/analytics.jpg')] bg-cover bg-center"></div>
  <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/90"></div>

 <div className="relative z-10">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-purple-500 " >Analytics</h2>
        <Link to="/dashboard" className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg">
          Back to Dashboard
        </Link>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-xl text-slate-400">Total Dead Ideas  </h3>
          <p className="text-3xl font-bold">{total}</p>
        </div>

<div className="bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-800">
                 <h3 className="text-lg text-slate-400 mb-2">Tech Ideas :</h3>
          <p className="text-3xl font-bold text-blue-400">
            {techCount}
          </p>
        </div>


<div className="bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-800">
                 <h3 className="text-lg text-slate-400 mb-2">Business Ideas:</h3>
          <p className="text-3xl font-bold text-blue-400">
            {businessCount}
          </p>
        </div>

<div className="bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-800">
                 <h3 className="text-lg text-slate-400 mb-2">personal Ideas :</h3>
          <p className="text-3xl font-bold text-blue-400"> {personalCount}</p>
        </div>
      </div>


<div className="mt-10">
  <h4 className="text-2xl font-bold text-purple-400 mb-6">
    Top Failure Reasons 💀
  </h4>

  {sortedReasons.length === 0 ? (
    <p className="text-slate-400">No failure data yet.</p>
  ) : (
    <div className="space-y-4">
      {sortedReasons.slice(0, 3).map(([reason, count], index) => (
        <div
          key={index}
          className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex justify-between w-50 items-center"
        >
          <span>{reason}</span>
          <span className="text-yellow-400 font-semibold">
            {count}
          </span>
        </div>
      ))}
    </div>
  )}
</div>

<div className="mt-16 bg-slate-900 p-8 rounded-2xl border border-slate-800">
  <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">
    Category Distribution 📊
  </h3>

  {total === 0 ? (
    <p className="text-center text-slate-400">
      No data to display.
    </p>
  ) : (
    <div className="w-full h-80">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={categoryData}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            innerRadius={60}
            label
          >
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>

        
      </ResponsiveContainer>
      {sortedReasons[0] && (
  <div className="mt-6 text-center text-purple-400 font-semibold">
    Your biggest failure pattern: {sortedReasons[0][0]} 💡
  </div>
)}

    </div>
  )}
</div>


     
    </div>
    </div>
  )
}
export default Analytics;
