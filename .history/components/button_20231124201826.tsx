type ButtonProps = {
    type: 'button' | "submit";
    title: string
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