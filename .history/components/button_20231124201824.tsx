type ButtonProps = {
    type: 'button' | "submit";
    title: 
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