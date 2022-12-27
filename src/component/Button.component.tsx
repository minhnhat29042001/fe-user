const Button = (props: {
  className?: string;
  onClick?: () => void;
  children?: string | JSX.Element;
  style?: string;
  onMouseLeave?: any;
  onMouseEnter?: any;
}) => {
  const { className, onClick, children, onMouseEnter, onMouseLeave } = props;
  return (
    <button
      onClick={onClick}
      className={className}
      type="button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      {children}
    </button>
  );
};

export default Button;
