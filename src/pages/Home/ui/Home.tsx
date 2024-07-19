import { Head } from "../../../widgets/Head";
import { Features } from "../../../widgets/Features";
import { Portfolio } from "../../../widgets/Portfolio";
import { Resume } from "../../../widgets/Resume";
import { Certificates } from "../../../widgets/certificates";
export const Home = () => {
  return (
    <main>
      <Head />
      <Features />
      <Portfolio />
      <Certificates />
      <Resume />
    </main>
  );
};
