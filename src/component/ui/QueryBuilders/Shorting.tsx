const Sorting = ({
  onSort,
  sort,
}: {
  onSort: (value: string) => void;
  sort: any[];
}) => {
  return (
    <select
      className="border-2 border-blue-500 bg-white md:px-6 px-2 py-2 rounded-lg shadow-md outline-none transition-all duration-300 hover:border-blue-600 focus:ring-2 focus:ring-blue-300 focus:border-blue-600"
      onChange={(e) => onSort(e.target.value)}
    >
      <option value={''}>Sort reviews</option>
      {sort?.map((item, index) => (
        <option key={index} value={item?.value}>
          {item?.label}
        </option>
      ))}
    </select>
  );
};

export default Sorting;
