import { Link } from "react-router-dom";
import { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Dashboard({ ideas, setIdeas }) {

useEffect(() => {
  const token = localStorage.getItem("token");
  
  if (!token) {
    navigate("/login");
    return;
  }

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


  fetch(`${import.meta.env.VITE_API_URL}/ideas/${id}`, {
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
      <div className="min-h-screen bg-[url('/bodybg.jpg')] bg-cover bg-center text-white">
        <div className="max-w-7xl mx-auto p-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                <h2 className="text-3xl  font-extrabold text-amber-500"> DIGITAL GRAVE-YARD 💀</h2>
                <div className="flex flex-wrap gap-3">
                    <Link to="/add" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg">Add Idea</Link> {""}
                    <Link to="/analytics" className="bg-blue-400 hover:bg-slate-700 px-4 py-2 rounded-lg">Analytics</Link> {""}
                    <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg">Logout</button>
                </div>
            </div>
<hr className="text-slate-700 font-bold"/>
          
            {/* {filter section} */}
            <div>
                <select value={filter} className="bg-teal-800 text-white px-4 py-2 rounded-lg my-4" onChange={(e) => setFilter(e.target.value)}>
                    <option>All</option>
                    <option className=" bg-teal-600  ">Tech</option>
                    <option className="bg-teal-700">Business</option>
                    <option className="bg-teal-500">Personal</option>
                </select>
            </div>
          

            <div className="py-10">
  {ideas.length === 0 ? (
    <p>No Ideas Yet. Click "Add Idea" To Create One.</p>
  ) : (
    <div className="grid md:grid-cols-3 gap-6">
      {filteredIdeas.map((idea) => (
        <div key={idea._id} className="bg-gray-600 p-6 rounded-2xl shadow-lg border border-slate-800 hover:scale-105 transition duration-300">
          <h4 className="text-xl font-bold text-purple-400 mb-2 ">
            {idea.title}
          </h4>

          <p className="text-slate-300 mb-3">
           idea : {idea.description}
          </p>

          <p className="text-sm text-slate-300 mb-2">
            Reason : {idea.reason}
          </p>

          <span className="inline-block bg-slate-600 px-3 py-1 rounded-b-xl text-shadow-md mb-4">
            Category : {idea.Category}
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
