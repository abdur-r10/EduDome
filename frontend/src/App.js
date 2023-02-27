import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Suspense, lazy } from 'react'
import { Box } from '@mui/material'
import LogInPage from './pages/LogInPage';
import Loading from './components/Loading';
import EditStaffInfo from './pages/EditStaffInfo';

const AdminUI = lazy(() => import ('./UIs/AdminUI'));
const TeacherUI = lazy(() => import('./UIs/TeacherUI'));
const StudentUI = lazy(() => import('./UIs/StudentUI'));

/* 
sampleData = {
  {id: 'p1' fname: 'Parent', lname: 'One' , email: 'parent1@hotmail.com' , password: 'aaa', role: 'parent'},
  {id: 's1' fname: 'Student', lname: 'One' , email: 'student1@hotmail.com' , password: 'aaa', role: 'student'},
  {id: 't1' fname: 'Teacher', lname: 'One' , email: 'teacher1@hotmail.com' , password: 'aaa', role: 'teacher'},
  {id: 'a1' fname: 'Admin', lname: 'One' , email: 'admin1@hotmail.com' , password: 'aaa', role: 'admin'},
}
*/

//!USe this when creating login option
// const [user, setUser] = useState(null);

//  Set the user state when the user logs in
//   const handleLogin = (user) => {
//     setUser(user);
//   };

function App() {
  return (
    <Box>
      {/* have a default log in page here which once details put in will direct to the correct page (admin, teacher, parent/student) */}
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<LogInPage /*onLogin={handleLogin}*//>}/>
            <Route path='/admin/dashboard' element={<AdminUI />}/>
            <Route path='/teacher/dashboard' element={<TeacherUI />}/>
            <Route path='/student/dashboard' element={<StudentUI />}/>
            <Route path='/editStaffInfo' element={<EditStaffInfo />}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Box>
    
  );
}

export default App;

/*
THESE PATHS SHOULD BE PRIVATISED TO ONLY THE ADMIN
path='${adminID}/parents-evening'
path='${adminID}/edit-student-info'
path='${adminID}/send-email'
path='${adminID}/edit-staff-info'
path='${adminID}/edit-schedules'

THESE SHOULD BE FOR TEACHERS AND ADMINS (MAYBE)
path='${userID}/adjust-register'
path='${userID}/create-notifications'


{adminMenuOptions.map(({key,link,componentName}) => (
<Route key={key} path={link} render={() => (
    user && user.role === 'admin'  ? (
      React.createElement(componentName, { user })
    ) : (
      <Redirect to="/" />
    )
  )} />
))}
*/
