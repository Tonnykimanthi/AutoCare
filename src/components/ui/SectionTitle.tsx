type TitleProps = {
  text: string;
};

const SectionTitle = ({ text }: TitleProps) => {
  return (
    <h2 className="relative text-center text-4xl font-bold after:absolute after:-bottom-1 after:left-1/2 after:block after:h-1 after:w-10 after:-translate-x-1/2 after:bg-primary">
      {text}
    </h2>
  );
};

export default SectionTitle;
