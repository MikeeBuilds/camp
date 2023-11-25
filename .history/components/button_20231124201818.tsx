type ButtonProps = {
    type: 'button' | "submit"
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