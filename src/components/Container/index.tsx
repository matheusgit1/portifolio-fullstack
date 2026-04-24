export default function Container({
  children,
  rest,
}: {
  children: React.ReactNode;
  rest?: React.HTMLAttributes<HTMLDivElement>;
}) {
  return (
    <div className={` w-full mx-auto md:w-[80%] `} {...rest}>
      {children}
    </div>
  );
}
