import React, {useState} from 'react'
import { classes as classesData} from '../../utils/classesData'


const MessageByClass = () => {
    const [isOpen, setIsOpen] = useState({});
const [selectedClasses, setSelectedClasses] = useState([]);

const handleToggle = (subject) => {
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
      <div key={subject} onClick={() => handleToggle(subject)}>
        {subject} {isOpen[subject] ? '▼' : '▶'}
        {isOpen[subject] && (
          <div>
            {Object.keys(classesData[subject]).map((grade) => (
              <div key={grade}>
                <strong>{grade}th Grade:</strong>
                {classesData[subject][grade].map((className) => (
                  <div key={className}>
                    <input type="checkbox" id={className} name={className} value={className} onChange={handleCheckboxChange} />
                    <label htmlFor={className}>{className}</label>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>  
);
    
}
    

export default MessageByClass

/*
object.keys(classesData).map(subjectName => 
<div onClick={handleToggle}>{subjectName} {isOpen ? '-' : '+'}</div>
    {isOpen && (
    <ul>
        {Object.keys(classesData[subjectName]).map((year) => (
            <li key={year}>
            year {year}
        <ul>
        {classesData.[subjectName][year].map((classCode) => (
            <li key={classCode}>
                <label>
                    <input
                        type="checkbox"
                        value={classCode}
                        checked={selectedClasses.includes(classCode)}
                        onChange={handleCheckboxChange}
                    />
                    {classCode}
                </label>
            </li>
        ))}
        </ul>
        </li>
    ))}
    </ul>
    )}
</div>
            )
*/