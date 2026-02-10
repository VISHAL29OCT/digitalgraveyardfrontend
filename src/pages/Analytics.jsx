import { Link } from "react-router-dom";
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


  return (
    
    <div className="min-h-screen bg-[url('analytics.jpg')] text-white p-8 ">


      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-purple-500 " >Analytics</h2>
        <Link to="/dashboard" className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg">
          Back to Dashboard
        </Link>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-xl-400">Total Dead Ideas  </h3>
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

     
    </div>
  )
}
export default Analytics;
