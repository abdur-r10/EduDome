import React from 'react'
import { useNavigate } from "react-router-dom"
import { Button, Stack } from '@mui/material';
import UserAppBar from '../../components/UserAppBar';




const MessageGuardian = () => {
  const navigate = useNavigate();


  return (
    <div>
      <UserAppBar user={'teacher'} />
      <Stack direction="row" spacing={2} width='auto' justifyContent="center" alignItems="center" mt='30px'>
        <Button variant="contained" color="primary" onClick={() => navigate('/message-subject-class')}>Messsage By Subject Class</Button>
        <Button variant="contained" color="primary" onClick={() => navigate('/message-form-group')}>Message By Form Group</Button>
        <Button variant="contained" color="primary" onClick={() => navigate('/message-individuals')}>Search for Individuals</Button>
      </Stack>
    </div>
  )
}

export default MessageGuardian



