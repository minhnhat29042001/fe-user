const Image = (props: {
  src: string | any;
  height: string | number;
  width: string | number;
  containerTwClass?: string;
  className?: string;
  children?: any;
}) => {
  const { src, height, width, containerTwClass, className, children } = props;
  return (
    <div className={containerTwClass ?? ''}>
      <img src={src} height={height} width={width} className={className} />
      {children}
    </div>
  );
};

export default Image;
