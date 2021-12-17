import Homepage from "../Homepage";
import StudentRegistration from "../Student_Facing/StudentRegistration";
import InstrumentAssessment from "../Assessor_Facing/InstrusmentAssessmentMain";
import DirectorMain from "../Director_Facing/DirectorMain";
import StudentLogIn from "../Student_Facing/StudentInterestForm";
import DirectorLogIn from "../Director_Facing/DirectorLogIn";
import StudentInterestForm from "../Student_Facing/StudentInterestForm";
import DirectorCHangePassword from "../Director_Facing/DirectorChangePassword";
import DirectorChangePassword from "../Director_Facing/DirectorChangePassword";
import DirectorLogOut from "../Director_Facing/DirectorLogOut";
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
  {
    path: "/DirectorLogIn",
    component: DirectorLogIn,
    name: "Director Login Page",
    protected: true,
  },
  {
    path: "/studentInterestForm",
    component: StudentInterestForm,
    name: "Student Interest Form",
    protected: true,
  },
  {
    path: "/directorChangePassword",
    component: DirectorChangePassword,
    name: "Director Change Password",
    protected: true,
  },
  {
    path: "/DirectorLogOut",
    component: DirectorLogOut,
    name: "Director Log Out Page",
    protected: true,
  },
];

export default routes;
