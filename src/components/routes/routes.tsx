import Homepage from "../Homepage";
import StudentRegistration from "../Student_Facing/StudentRegistration";
import InstrumentAssessment from "../Assessor_Facing/InstrusmentAssessmentMain";
import DirectorMain from "../Director_Facing/DirectorMain";
import StudentLogIn from "../Student_Facing/StudentLogIn";

interface IRoute {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: IRoute[] = [
  {
    path: "/",
    component: Homepage,
    name: "Home Page",
    protected: false,
  },
  {
    path: "/StudentRegistration",
    component: StudentRegistration,
    name: "Student Registration",
    protected: false,
  },
  {
    path: "/InstrumentAssessment",
    component: InstrumentAssessment,
    name: "Instrument Assessment",
    protected: true,
  },
  {
    path: "/DirectorMain",
    component: DirectorMain,
    name: "Director Main Page",
    protected: true,
  },
  {
    path: "/StudentLogIn",
    component: StudentLogIn,
    name: "Student Login Page",
    protected: true,
  },
];

export default routes;
