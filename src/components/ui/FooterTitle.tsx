type TitleProps = {
  text: string;
};

const FooterTitle = ({ text }: TitleProps) => {
  return (
    <h5 className="relative w-fit text-xl font-medium after:absolute after:-bottom-1 after:block after:h-0.5 after:w-10 after:bg-primary">
      {text}
    </h5>
  );
};

export default FooterTitle;
