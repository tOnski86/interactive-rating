/* eslint-disable react/prop-types */
function Button({ children, variant, onClick }) {
  const { button } = customTheme;

  return (
    <button className={button[variant]} onClick={onClick}>
      {children}
    </button>
  );
}

const customTheme = {
  button: {
    filled:
      "bg-orange text-blue uppercase font-bold p-3 rounded-full tracking-widest hover:bg-white transition-colors",
    text: "text-orange/80 hover:text-orange transition-colors uppercase tracking-widest text-xs",
  },
};

export default Button;
