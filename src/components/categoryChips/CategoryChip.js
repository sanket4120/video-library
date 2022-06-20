const CategoryChip = ({ category, isActive }) => {
  return (
    <span
      className={`border rounded-full py-1 px-3 m-1 inline-block txt-capitalize pointer ${
        isActive && 'bg-primary border-none'
      } `}
    >
      {category}
    </span>
  );
};

export { CategoryChip };
