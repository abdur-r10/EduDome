export function generateId(role) {
    // Define a prefix based on the given role
    let prefix;
    switch (role) {
      case 'staff':
        prefix = 'S';
        break;
      case 'pupil':
        prefix = 'P';
        break;
      case 'guardian':
        prefix = 'G';
        break;
      default:
        throw new Error('Invalid role');
    }
  
    // Generate a unique ID using the built-in UUID function
    const uuid = generateUUID().replace(/-/g, '');
    const id = prefix + uuid.slice(0, 6);
  
    // Truncate the ID if necessary
    return id.length > 7 ? id.slice(0, 7) : id;
  }
  
  function generateUUID() {
    let d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }
  