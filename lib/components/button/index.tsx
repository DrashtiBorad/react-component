interface ButtonProps{
  label:string;
  theme?: "primary" | "secondary";

}
const Button:React.FC<ButtonProps> = ({label,theme="primary"}) => {
    return <button className={`bg-${theme} text-red-900 px-[8px] py-[10px] rounded-lg`}>{label}</button>;
  };
  
  export default Button;
  