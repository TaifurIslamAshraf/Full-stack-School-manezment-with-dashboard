import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string | undefined;
}

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <div className="max-w-7xl mx-auto lg:px-5 sm:px-2 px-4 w-full overflow-x-auto">
      {children}
    </div>
  );
};

export default SectionWrapper;

