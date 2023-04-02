import React, {useState} from 'react'
import { classes as classesData } from '../utils/classesData';
import { FormControlLabel, Checkbox, Stack} from '@mui/material';

const ClassesCheckboxSelect = () => {
    const [isOpen, setIsOpen] = useState({});
    const [selectedClasses, setSelectedClasses] = useState([]);
  
    const handleToggle = (subject, event) => {
      // Check if the clicked element is a checkbox
      if (event && event.target && event.target.nodeName === 'INPUT') {
        return;
      }
  
      setIsOpen({ ...isOpen, [subject]: !isOpen[subject] });
    };
  
    const handleCheckboxChange = (event) => {
      event.stopPropagation(); // Stop the event from propagating to parent elements
      const { value, checked } = event.target;
      if (checked) {
        setSelectedClasses([...selectedClasses, value]);
      } else {
        setSelectedClasses(selectedClasses.filter((c) => c !== value));
      }
    };
  
    return (
      <div>
        {Object.keys(classesData).map((subject) => (
          <div key={subject} onClick={(event) => handleToggle(subject, event)}>
            {subject} {isOpen[subject] ? '▼' : '▶'}
            {isOpen[subject] && (
              <div>
                {Object.keys(classesData[subject]).map((yearGroup) => (
                  <div key={`${subject}-year${yearGroup}`}>
                    <strong>year {yearGroup}:</strong>
                    <div>
                    <Stack direction='row'>
                        {classesData[subject][yearGroup].map((className) => (
                        <div key={className}>
                            <FormControlLabel
                            control={
                                <Checkbox
                                checked={selectedClasses.includes(className)}
                                onChange={handleCheckboxChange}
                                value={className}
                                />
                            }
                            label={className}
                            />
                        </div>
                        ))}
                        
                    </Stack>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    ); 
  }
  
  export default ClassesCheckboxSelect;