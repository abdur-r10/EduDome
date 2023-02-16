import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Suspense, lazy } from 'react'
import { Box } from '@mui/material'
import LogInPage from './pages/LogInPage';
import Loading from './components/Loading';

const AdminUI = lazy(() => import ('./UIs/AdminUI'));
const TeacherUI = lazy(() => import('./UIs/TeacherUI'));
const StudentUI = lazy(() => import('./UIs/StudentUI'));

/* 
sampleData = {
  {fname: 'Parent', lname: 'One' , email: 'parent1@hotmail.com , password: 'aaa', role: 'parent'},
  {fname: 'Student', lname: 'One' , email: 'student1@hotmail.com , password: 'aaa', role: 'student'},
  {fname: 'Teacher', lname: 'One' , email: 'teacher1@hotmail.com , password: 'aaa', role: 'teacher'},
  {fname: 'Admin', lname: 'One' , email: 'admin1@hotmail.com , password: 'aaa', role: 'admin'},
}
*/

function App() {
  return (
    <Box>
      {/* have a default log in page here which once details put in will direct to the correct page (admin, teacher, parent/student) */}
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<LogInPage />}/>
            <Route path='/admin/dashboard' element={<AdminUI />}/>
            <Route path='/teacher/dashboard' element={<TeacherUI />}/>
            <Route path='/student/dashboard' element={<StudentUI />}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Box>
    
  );
}

export default App;
