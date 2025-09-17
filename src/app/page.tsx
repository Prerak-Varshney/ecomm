import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-start justify-start">
      <Navbar />
      <div className={`w-full h-[calc(100vh-3.5rem)] flex`}>
        <Sidebar />
        <div className={`flex-1 h-full bg-background flex flex-col items-center justify-start gap-y-6 py-6 pr-4 overflow-y-auto scrollbar-thin`}>
           <div className="w-full min-h-screen bg-blue-500"></div>
            <div className="w-full min-h-screen bg-blue-500"></div>
            <div className="w-full min-h-screen bg-blue-500"></div>
            <div className="w-full min-h-screen bg-blue-500"></div>
        </div>
      </div>
    </div>
  )
}

export default Home;