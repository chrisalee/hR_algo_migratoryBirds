/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const migratoryBirds = (arr) => {
    let sightings = 1;
    let counter = sightings;
    let birdID = 0;
    let sortedArr = arr.sort();
  
    for (let i = 0; i < sortedArr.length; i++) {
        sightings = (sortedArr.lastIndexOf(sortedArr[i]) - sortedArr.indexOf(sortedArr[i])) + 1;
      
        if (sightings > counter) {
            counter = sightings;
            birdID = sortedArr[i];
        }
      
        i = sortedArr.lastIndexOf(sortedArr[i]);
    }
  
    return birdID;   
}
