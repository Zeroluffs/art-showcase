import "animate.css";
import { NavigationBar } from "../Navigation/NavigationBar";
export interface childrenProps {
  children: React.ReactNode;
}
export const Transition = ({ children }: childrenProps) => {
  return (
    <div className="animate__animated animate__fadeIn">
      <NavigationBar />
      {children}
    </div>
  );
};
