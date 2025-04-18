import { FaChevronRight } from 'react-icons/fa'; // Freccina

const ExploreButton = ({ text }) => (
  <button className="flex justify-between items-center w-full bg-[#1c1c1e] text-red-500 p-4 rounded-xl text-left hover:bg-[#2c2c2e]">
    <span>{text}</span>
    <FaChevronRight />
  </button>
);

export default ExploreButton;
