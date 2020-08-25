// sorts the carrier card array
export default function sortCarrierCards(arr, sortBy) { 
  return arr.sort((a, b) => {
   
     if (sortBy === 'name') {
       return a[sortBy].localeCompare(b[sortBy]);
     }
     else if (sortBy === 'stars') {
       return ((typeof b[sortBy] == 'number') ? b[sortBy] : 0) - ((typeof a[sortBy] == 'number') ? a[sortBy] : 0);
     } else if (sortBy === 'rate') {
     
       return ((typeof a[sortBy] == 'number') ? a[sortBy] : Infinity) - ((typeof b[sortBy] == 'number') ? b[sortBy] : Infinity)
     } else { 
       return a[sortBy] - b[sortBy]
     }
  });
 }