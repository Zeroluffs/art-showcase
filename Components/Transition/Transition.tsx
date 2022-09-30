import "animate.css";
import { NavigationBar } from "../Navigation/NavigationBar";
import { FooterComponent,ScrollToTop } from "../index";

export interface childrenProps {
  children: React.ReactNode;
}
export const Transition = ({ children }: childrenProps) => {
  return (
    <div className="animate__animated animate__fadeIn">
      <NavigationBar />
      {children}
      <ScrollToTop/>
      <FooterComponent/>
    </div>
  );
};
