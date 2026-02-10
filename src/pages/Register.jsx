import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Register() {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

useEffect(() => {
  setEmail("");
  setPassword("");
}, []);

async function handleRegister() {
  try { const res = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
if (!res.ok) {
        toast.error(data.message);
      } else {
        toast.success(data.message);

        setTimeout(() => {
          navigate("/login", {
            state: { email, password },
          });
        }, 1500);
      }
    } catch (error) {
      toast.error("Server error. Try again!");
    }
  }





return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/bg.jpeg')] bg-cover bg-center bg-no-repeat">

      <div className="bg-slate-900 p-8 rounded-2xl shadow-xl w-96">

      
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome To GraveYard ! </h2>

      <input type="text"  placeholder="Enter Your Name" className="w-full mb-4 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
      <br /><br />
      <input type="email" name= "login-email"  autoComplete="new-email" placeholder="Enter Your Email" className="w-full mb-4 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500" value={email} onChange={(e) =>setEmail(e.target.value)} />
      <br /><br />
      <input type="password" name= "login-password"  autoComplete="new-password" placeholder="Enter Your Password" className="w-full mb-4 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"  value={password} onChange={(e)=> setPassword(e.target.value)}/>
      <br /><br />
      <button className="w-full bg-purple-600 hover:bg-purple-700 transition py-2 rounded-lg font-semibold" onClick={handleRegister}>Create An Account</button>

      <p className="px-10 py-4">Already Have an Account ?  <Link to= "/login">Login</Link></p>




    </div>
    </div>
  )

}
export default Register;
