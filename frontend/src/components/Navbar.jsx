import { AiFillHtml5 } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="w-full bg-black h-20 flex justify-center">
      <div className="flex justify-between items-center h-full w-[80%]">
        <h1 className="text-white flex">
          <AiFillHtml5 className="mt-[0.1rem] mr-2 text-2xl" />
          <span className="font-bold text-lg mr-1">Abstract</span> |
          <span className="font-semibold text-lg ml-1">Help Center</span>
        </h1>
        <button className="text-slate-300 px-4 py-2 border border-slate-300 bg-slate-900 rounded-lg hover:bg-slate-800 transition-all">
          Submit a Request
        </button>
      </div>
    </div>
  );
}
