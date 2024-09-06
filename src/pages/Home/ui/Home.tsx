import { Head } from "../../../widgets/Head";
import { Features } from "../../../widgets/Features";
import { Portfolio } from "../../../widgets/Portfolio";
import { Resume } from "../../../widgets/Resume";
import { Certificates } from "../../../widgets/certificates";

export const Home = () => {
  const frontendSkills = [
    { id: '1', type: 'JavaScript', procent: 90 },
    { id: '2', type: 'React', procent: 85 },
  ];
  
  const backendSkills = [
    { id: '1', type: 'Node.js', procent: 80 },
    { id: '2', type: 'Express', procent: 75 },
  ];
  
  return (
    <main>
      <Head />
      <Features />
      <Portfolio />
      <Certificates />
      <Resume frontendSkills={frontendSkills} backendSkills={backendSkills} />
    </main>
  );
};
