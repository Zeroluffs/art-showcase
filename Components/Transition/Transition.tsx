import "animate.css";
import { NavigationBar } from "../Navigation/NavigationBar";
import { FooterComponent } from "../index";
export interface childrenProps {
  children: React.ReactNode;
}
export const Transition = ({ children }: childrenProps) => {
  return (
    <div className="animate__animated animate__fadeIn">
      <NavigationBar />
      {children}
      <FooterComponent/>
    </div>
  );
};
