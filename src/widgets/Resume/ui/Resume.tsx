import { Line } from "../../../shared/Line";
import { ProgressList } from "../../../shared/ProgressList";

interface Skill {
  id: string;
  type: string;
  procent: number;
}

interface ResumeProps {
  frontendSkills: Skill[];
  backendSkills: Skill[];
}

export const Resume: React.FC<ResumeProps> = ({ frontendSkills, backendSkills }) => {
  return (
    <section className="section-resume">
      <div className="container">
        <p className="text-center text--custom fs-7 mb-0">
          2+ YEARS OF EXPERIENCE
        </p>
        <h1 className="text-center text--light">Resume</h1>
        <div className="row mt-5">
          <div className="col-xl-6">
            <div className="resume-progress-head mb-3">
              <p className="text--custom mb-1 fs-7 text-uppercase fw-bold">
                Features
              </p>
              <h3 className="text--light fs-4">Frontend skills</h3>
            </div>
            {frontendSkills.length ? (
              frontendSkills.map((skill) => (
                <ProgressList key={skill.id} data={skill} />
              ))
            ) : (
              <p>Not found!</p>
            )}
          </div>

          <div className="col-xl-6">
            <div className="resume-progress-head mb-3">
              <p className="text--custom mb-1 fs-7 text-uppercase fw-bold">
                Features
              </p>
              <h3 className="text--light fs-4">Backend skills</h3>
            </div>
            {backendSkills.length ? (
              backendSkills.map((skill) => (
                <ProgressList key={skill.id} data={skill} />
              ))
            ) : (
              <p>Not found!</p>
            )}
          </div>
        </div>

        <Line />
      </div>
    </section>
  );
};