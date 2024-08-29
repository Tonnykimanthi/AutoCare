type ButtonProps = {
  text: string;
  styles?: string;
};

const Button = ({ text, styles }: ButtonProps) => {
  return (
    <button
      className={`bg-primary hover:bg-secondary px-5 py-2 active:scale-95 ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
