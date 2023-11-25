type ButtonProps = {
    type: 'button' | "submit";
    title: string;
    icon?: string;
    variant: 'btn_dar_green'
}


const button = ({ type, title, icon, variant}: ButtonProps) => {
  return (
    <button
        type='button'
    >
        Log In
    </button>
  )
}

export default button