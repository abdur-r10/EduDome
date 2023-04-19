import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Suspense, lazy } from 'react'
import { Box } from '@mui/material'
import LogInPage from './pages/LogInPage';
import Loading from './components/Loading';

const AdminUI = lazy(() => import ('./pages/For_Admin/AdminUI'));
const TeacherUI = lazy(() => import('./pages/For_Teacher/TeacherUI'));
const StudentUI = lazy(() => import('./UIs/StudentUI'));
const AddStaff = lazy(() => import('./pages/For_Admin/AddStaff'));
const EditStaff = lazy(() => import('./pages/For_Admin/EditStaff'));
const AddStudent = lazy(() => import('./pages/For_Admin/AddStudent'));
const EditStudent = lazy(() => import('./pages/For_Admin/EditStudent'));
const AddRoom = lazy(() => import('./pages/For_Admin/AddRoom'));
const EditRoom = lazy(() => import('./pages/For_Admin/EditRoom'));
const CreateAndTrackNotifications = lazy(() => import('./pages/For_Teacher/CreateAndTrackNotifications'))
const MessageGuardian = lazy(() => import('./pages/For_Teacher/MessageGuardian'))
const MessageByClass = lazy(() => import('./pages/For_Teacher/MessageByClass'))
const MessageByForm = lazy(() => import('./pages/For_Teacher/MessageByForm'))
const MessageIndividuals = lazy(() => import('./pages/For_Teacher/MessageIndividuals'))
const SearchForTeachers = lazy(() => import('./pages/For_Teacher/SearchForTeachers'))
const SearchForStudents = lazy(() => import('./pages/For_Teacher/SearchForStudents'))
const StudentInfo = lazy(() => import('./pages/StudentInfo'))

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
            <Route path='/addStaff' element={<AddStaff />}/>
            <Route path='/editStaff' element={<EditStaff />}/>
            <Route path='/addStudent' element={<AddStudent />}/>
            <Route path='/editStudent' element={<EditStudent />}/>
            <Route path='/addRoom' element={<AddRoom />}/>
            <Route path='/editRoom' element={<EditRoom />}/>
            <Route path='/create-and-track-notifications' element={<CreateAndTrackNotifications />}/>
            <Route path='/request-to-message-guardian' element={<MessageGuardian />}/>
            <Route path='/message-subject-class' element={<MessageByClass />}/>
            <Route path='/message-form-group' element={<MessageByForm />}/>
            <Route path='/message-individuals' element={<MessageIndividuals />}/>
            <Route path='/search-for-teacher' element={<SearchForTeachers />} />
            <Route path='/search-for-student' element={<SearchForStudents />} />
            <Route path='/studentInfo' element={<StudentInfo />} />
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
