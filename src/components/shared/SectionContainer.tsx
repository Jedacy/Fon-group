import type { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

function SectionContainer({ children, className = "" }: SectionContainerProps) {
  return <div className={`mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 ${className}`}>{children}</div>;
}

export default SectionContainer;
