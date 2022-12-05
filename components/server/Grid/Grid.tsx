type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const Grid = ({ title, children, className }: Props) => (
  <div className="container">
    <h2 className="text-2xl font-bold pb-3">{title}</h2>
    <div className={className}>{children}</div>
  </div>
);

export default Grid;
