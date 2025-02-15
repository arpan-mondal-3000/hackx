import "./login.css";
import { useFirebase } from "../../context/FirebaseContext";
import { useState } from "react";

function Login() {
  const firebase = useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("text-white");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await firebase.loginUserWithEmailAndPassword(email, password);
      setColor("text-white");
      setMessage("Successful");
    } catch (e) {
      setColor("text-red-500");
      if (e.code === "auth/invalid-email") {
        setMessage("Email is Invalid!");
      } else if (e.code === "auth/missing-password") {
        setMessage("Password is missing!");
      } else if (e.code === "auth/invalid-credential") {
        setMessage("Email or Password is incorrect!");
      } else {
        setMessage(`${e.message}`);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center align-middle min-h-screen">
        <span className="text-5xl mx-auto font-bold tracking-[0.25em] bg-gradient-to-t from-green-500 to-green-800 p-2 pl-5 rounded-lg">
          Hack X
        </span>
        <div className="flex justify-center border-2 rounded-xl border-green-700 font-sans flex-col align-middle max-w-2/6 mx-auto text-center p-10 m-5 shadow-2xl">
          <h1 className="text-green-500 text-3xl mt-6">Welcome Back!</h1>
          <h2>Enter your credentials to start hacking</h2>
          <form
            className="mt-10 text-left flex flex-col text-green-500"
            onSubmit={handleSubmit}
          >
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-inherit px-3 py-1 border-2 rounded-lg border-green-700"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" className="pt-5">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-inherit px-3 py-1 border-2 rounded-lg border-green-700"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-white text-sm underline">
              <span className="cursor-pointer mt-1">forgot password?</span>
            </div>
            <input
              type="submit"
              value="Login"
              className="text-white text-xl bg-green-600 py-2 mt-4 cursor-pointer rounded-lg hover:bg-white hover:text-green-900 transition duration-500"
            />
          </form>
          <div className="mt-10 flex justify-between gap-2">
            <button className="border-2 px-4 py-2 rounded-xl flex align-middle justify-center gap-2 hover:border-green-600 hover:text-green-600 transition duration-300">
              <img
                src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
                alt="G"
                className="w-5"
              />
              Sign in with Google
            </button>
            <button className="border-2 px-4 py-2 rounded-xl flex align-middle justify-center gap-2 hover:border-green-600 hover:text-green-600 transition duration-300">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg"
                alt="A"
                className="w-5"
              />
              Sign in with Apple
            </button>
          </div>
          <div className="mt-5 mb-6 text-green-500">
            Don't have an account? <span className="text-white">Sign up</span>
          </div>
          <div className={color}>{message}</div>
        </div>
      </div>
    </>
  );
}

export default Login;
