type ButtonProps = {
  text: string;
  styles?: string;
};

const Button = ({ text, styles }: ButtonProps) => {
  return (
    <button
      className={`bg-secondary py-2 font-medium transition hover:bg-secondary active:scale-95 max-sm:text-sm ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
