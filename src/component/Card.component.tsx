const Card = (props: { children: string | JSX.Element; className?: string }) => {
  const { children, className } = props;
  return <div className={`${className} rounded-md`}>{children}</div>;
};

export default Card;
