export default function Card({ title, description }) {
  return (
    <div className="bg-slate-200 border border-slate-300 rounded-xl w-[22rem] mt-10 mx-10">
      <h1 className="my-2 mx-4 font-bold text-slate-700">{title}</h1>
      <div className="border-b border-b-slate-300"></div>
      <h2 className="my-2 mx-4 text-slate-600">{description}</h2>
    </div>
  );
}
