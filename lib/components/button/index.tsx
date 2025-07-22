interface ButtonProps {
  label: string;
  theme?: "primary" | "secondary";
  icon?: React.ReactNode;
}
const themeClasses = {
  primary: "bg-primary hover:bg-primary-dark",
  secondary: "bg-secondary hover:bg-secondary-dark",
};
const Button: React.FC<ButtonProps> = ({ label, theme = "primary", icon }) => {
  return (
    <button
      className={`${themeClasses[theme]} text-red-900 px-[8px] py-[10px] rounded-lg flex flex-row gap-2 justify-center items-center`}>
      {icon && <span className="icon text-center">{icon}</span>}

      {label}
    </button>
  );
};

export default Button;
