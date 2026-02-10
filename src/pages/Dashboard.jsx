import { Link } from "react-router-dom";
import { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Dashboard({ ideas, setIdeas }) {

useEffect(() => {
  const token = localStorage.getItem("token");

fetch(`${import.meta.env.VITE_API_URL}/ideas`, {
  headers: {
    "Authorization": "Bearer " + token
  }
})

    .then(res => res.json())
    .then(data => {
      setIdeas(data);
    });
}, []);

    const navigate = useNavigate();


    const [filter, setFilter] = useState("All")
     const filteredIdeas =
    filter === "All"
      ? ideas
      : ideas.filter((idea) => idea.Category === filter);

 function deleteIdea(id) {
    const token = localStorage.getItem("token")


  fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
    method: "DELETE",
      headers: {
      "Authorization": "Bearer " + token
    }
  })
    .then(()=>{
         setIdeas(prevIdeas => prevIdeas.filter(idea => idea._id !== id));
    })
}

function handleLogout() {
  localStorage.removeItem("token");
  navigate("/login");
}


    return (
      <div className="flex items-center  min-h-screen bg-[url('/bodybg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="min-h-screen  text-white p-8">
            <div  className="flex justify-between gap-190 items-center mb-8">
                <h2 className="text-3xl  font-extrabold text-amber-500"> DIGITAL GRAVE-YARD 💀</h2>
                <div className="space-x-4">
                    <Link to="/add" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg">Add Idea</Link> {""}
                    <Link to="/analytics" className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg">Analytics</Link> {""}
                    <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg">Logout</button>
                </div>
            </div>
<hr className="text-slate-700 font-bold"/>
          
            {/* {filter section} */}
            <div>
                <select value={filter} className="bg-slate-50 text-black my-4" onChange={(e) => setFilter(e.target.value)}>
                    <option>All</option>
                    <option className=" hover:bg-red-400 ">Tech</option>
                    <option className=" hover:bg-red-400">Business</option>
                    <option className="hover:bg-red-400">Personal</option>
                </select>
            </div>
          

            <div className="py-10">
  {ideas.length === 0 ? (
    <p>No Ideas Yet. Click "Add Idea" To Create One.</p>
  ) : (
    <div className="grid md:grid-cols-3 gap-6">
      {filteredIdeas.map((idea) => (
        <div key={idea._id} className="bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-800" >
          <h4 className="text-xl font-bold text-purple-400 mb-2 ">
            {idea.title}
          </h4>

          <p className="text-slate-300 mb-3">
            {idea.description}
          </p>

          <p className="text-sm text-slate-400 mb-2">
            Reason: {idea.reason}
          </p>

          <span className="inline-block bg-slate-800 px-3 py-1 rounded-full text-sm mb-4">
            Category: {idea.Category}
          </span>

          <div className="flex justify-between">
            <button
              onClick={() => deleteIdea(idea._id)}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg text-sm"
            >
              Delete
            </button>

            <button
              onClick={() => navigate(`/add/${idea._id}`)}
              className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded-lg text-sm"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

        </div>
        </div>
    )

}
export default Dashboard;
