const Searching = ({ onSearch }: { onSearch: (value: string) => void }) => {
    return (
      <input
        onChange={(e) => onSearch(e.target.value)}
        className="border-2 rounded-md outline-none md:px-4 px-2 py-2"
        placeholder="Search reviews"
        type="search"
      />
    );
  };
  
  export default Searching;
  