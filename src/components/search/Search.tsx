const Search = () => {
  return (
<div className="w-full h-24 lg:px-80 py-6 border-t border-zinc-300 justify-start items-center flex">
  <div className="grow shrink basis-0 h-12 p-4 bg-stone-100 rounded justify-start items-center gap-2.5 flex">
    <input placeholder="search" className="text-neutral-500 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight outline-none bg-transparent"></input>
  </div>
  <div className="p-4 rounded justify-start items-center gap-2.5 flex">
    <div className="text-neutral-500 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">Cancel</div>
  </div>
</div>
  );
};

export default Search;
