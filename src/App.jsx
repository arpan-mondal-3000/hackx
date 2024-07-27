import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import HackathonCard from "./components/HackathonCard.jsx";

function App() {
  return (
    <>
      <HackathonCard
        name="Hackathon Name"
        imgSrc="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        themes={["Web3", "Mobile", "Dev"]}
        desc="This is the short description of the hackathon."
      />
    </>
  );
}

export default App;
