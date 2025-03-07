interface ButtonProps{
  label:string
}
const Button:React.FC<ButtonProps> = ({label}) => {
    return <button className="bg-red-300 text-red-900 px-[8px] py-[10px] rounded-lg">{label}</button>;
  };
  
  export default Button;
  