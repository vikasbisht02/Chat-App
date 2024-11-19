import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered rounded-full"
        />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white"><IoSearchSharp className="w-6 h-5 outline-none"/></button>
      </div>
    </form>
  );
};

export default SearchInput;
