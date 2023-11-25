type ButtonProps = {
    type: 'button' | "submit";
    title: string;
    icon?: string;
    variant: 'btn_dark_green'
}


const button = ({ type, title, icon, variant}: ButtonProps) => {
  return (
    <button
        type={type}
    >
        {icon && }
        Log In
    </button>
  )
}

export default button