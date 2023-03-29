export const adminMenuOptions = [
    {key: 1, name: 'Adjust registers', colour: '#1b5e20', link: '/adjust-registers', componentName: 'AdjustRegister', options: [{name: 'Mark Student Absent', link:'/markStudentAbsent'}, {name: 'View Registers', link:'/viewRegisters'}] }, 
    {key: 2, name: 'Create Notifications', colour: '#e65100', link: '/create-notifications', componentName: 'EditNotifications', options: [{name: 'Create notifications', link:'/createNotifications'}, {name: 'Edit or Remove notifications', link:'/editNotifications'}] }, 
    {key: 3, name: 'Start/Stop Parents Evening', colour: '#1b5e20', link: '/parents-evening', componentName: 'ParentsEvening', options: [{name: 'Start Parents Evening', link:'/startParentsEvening'}, {name: 'Stop Parents Evening', link:'/stopParentsEvening'}] }, 
    {key: 4, name: 'Add/Remove/Edit Student Info', colour: '#e65100', link: '/edit-student-info', componentName: 'EditStudentInfo', options: [{name: 'Add Student', link:'/addStudent'}, {name: 'Edit or Remove Student', link:'/editStudent'}] }, 
    {key: 5, name: 'Send Message to Parents', colour: '#1b5e20', link: '/send-email', componentName: 'SendEmails', options: [{name: 'Send Text', link:'/sendTextToParent'}, {name: 'Send Email', link:'/sendEmailToParent'}, {name: 'Send Letter', link:'/sendLetterToParents'}] }, 
    {key: 6, name: 'Add/Remove/Edit Staff Info', colour: '#e65100', link: '/edit-staff-info', componentName: 'EditStaffInfo', options: [{name: 'Add Staff', link:'/addStaff'}, {name: 'Edit or Remove Staff', link:'/editStaff'}] }, 
    {key: 7, name: 'Create/Edit Schedules', colour: '#1b5e20', link: '/edit-schedules', componentName: 'EditSchedules', options: [{name: 'Create Classes', link:'/createClasses'}, {name: 'Edit Classes', link:'/editClasses'}, {name: 'Create Timetables', link:'/createTimetables'}, {name: 'Edit Timetables', link: '/editTimetables'}] },
    {key: 8, name: 'Add/Remove/Edit Room', colour: '#e65100', link: '/edit-room-info', componentName: 'EditRoomInfo', options: [{name: 'Add Room', link:'/addRoom'}, {name: 'Edit or Remove Room', link:'/editRoom'}] },  
    {key: 9, name: 'Back To Dashboard', colour: '#1b5e20', link: '/admin/dashboard', componentName: 'AdminUI' }
]

export const teacherMenuOptions = [
    {key: 1, name: 'Create and track notifications', colour: '#1b5e20', link: '/create-and-track-notifications', componentName: 'CreateAndTrackNotifications'},
    {key: 2, name: 'Send Message To Guardian', colour: '#e65100', link: '/request-to-message-guardian', componentName: 'MessageGuardian'},
    {key: 3, name: 'Search For Teacher', colour: '#1b5e20', link: '/search-for-teacher', componentName: 'SearchForTeacher'},
    {key: 4, name: 'Search For Student', colour: '#1b5e20', link: '/search-for-sudent', componentName: 'SearchForSudent'},
    {key: 5, name: 'Parents Evening Schedule', colour: '#1b5e20', link: '/parents-evening-schedule', componentName: 'ParentsEveningSchedule'},
    {key: 6, name: 'Back To Dashboard', colour: '#1b5e20', link: '/teacher/dashboard', componentName: 'TeacherUi' }
]


export const guardianMenuOptions = []

export const studentMenuOptions = []

