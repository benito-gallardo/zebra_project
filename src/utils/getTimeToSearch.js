  // format time from mill to mins
export default function getTimeToSearch(time) { 
  const millis = time;
  const minutes = Math.floor(millis / 60000);
  
  return `${minutes} ${minutes <= 1 ? 'miniute' : 'miniutes'}`;
}