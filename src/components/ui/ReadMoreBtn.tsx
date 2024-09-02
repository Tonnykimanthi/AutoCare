import { FaArrowRight } from "react-icons/fa6";

type ButtonProps = {
  styles?: string;
}
const ReadMoreBtn = ({styles}: ButtonProps) => {
  return (
    <button className={`flex w-fit items-center gap-x-2 rounded-sm border border-primary bg-primary px-5 py-2 font-medium text-light transition duration-300 hover:bg-transparent hover:text-primary ${styles}`}>
      READ MORE
      <FaArrowRight />
    </button>
  );
};

export default ReadMoreBtn;
