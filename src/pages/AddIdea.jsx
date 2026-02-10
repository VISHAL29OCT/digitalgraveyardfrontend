import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

function AddIdea({ ideas, setIdeas }) {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [reason, setreason] = useState("");
  const [Category, setCategory] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // EDIT MODE: form fill
  useEffect(() => {
    if (id) {
      const ideaToEdit = ideas.find(i => i._id === id);

      if (ideaToEdit) {
        settitle(ideaToEdit.title);
        setdescription(ideaToEdit.description);
        setreason(ideaToEdit.reason);
        setCategory(ideaToEdit.Category);
      }
    }
  }, [id, ideas]);


  async function handleSave() {
    const token = localStorage.getItem("token");

    if (!title.trim() || !description.trim() || !reason.trim() || !Category.trim()) {
      toast.error("Please fill all fields!");
      return;
    }

    const ideaData = {
      title,
      description,
      reason,
      Category
    };

    let res ;

    if (id) {
      // UPDATE
    res =   await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify(ideaData)
      });
    } else {
      // CREATE
     res = await fetch(`${import.meta.env.VITE_API_URL}/ideas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify(ideaData)
      });
    }

    if (!res.ok) {
  const errorData = await res.json();
  toast.error(errorData.message || "Something went wrong!");
  return;
}

toast.success(id ? "Idea Updated!" : "Idea Saved!");

setTimeout(() => {
  navigate("/dashboard");
}, 1000);
  }



  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/ideabg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="bg-slate-700 w-full max-w-xl p-8 rounded-2xl shadow-xl border border-slate-800 trans">
        <h2 className="text-2xl font-bold mb-6 text-purple-500 text-center ">{id ? "Edit Idea" : "Add New Idea"}</h2>

        <input
          type="text"
          placeholder="Idea Title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        <br /><br />

        <textarea
          placeholder="Describe Your Idea"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
        <br /><br />

        <input
          type="text"
          placeholder="Reason For Failure"
          value={reason}
          onChange={(e) => setreason(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <br /><br />

        <select value={Category} onChange={(e) => setCategory(e.target.value)} className="w-full mb-6 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
          <option value="">Select Category</option>
          <option value={"Tech"}>Tech</option>
          <option value={"Business"}>Business</option>
          <option value={"Personal"}>Personal</option>
        </select>

        <br /><br />
        <div className="flex justify-between items-center">
          <button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700 transition px-6 py-2 rounded-lg font-semibold">{id ? "Update Idea" : "Save Idea"}</button>
          <br /><br />

          <Link to="/dashboard" className="text-slate-400 hover:text-white">Back To DashBoard</Link>
        </div>
      </div>
    </div>
  );
}

export default AddIdea;
