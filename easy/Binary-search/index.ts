 /**
  * Algorithm
  * 
  * 1. The array must be sorted and initialize the target value.
  * 
  * 2. Calculate the middle point. (start index as (left index) and end index as (right index) calculate average (rounded))
  * 
  * 3. check the value at index of midpoint.
  *   
  *  i. if it is equal to the target 
  *       return midpoint index value
  * 
  *  ii. if it is smaller then target value. 
  *       left index = midpoint + 1 
  *       go to step 2
  * 
  *  iii. if it is greater then middle value
  *         right index = midpoint -1
  *         go to step 2
  * 
  * 4. if left index > right index 
  *     return "The target node doesnot exists"
  * 
  * 
  * Time complexity = O(log(n)) // we are eliminating half of our input in every iterations 
  * Space complexity = O(1) // no extra memory  or O(log(n)) // when applied recursively
  * 
  */



 // recursive implementation
  function binarySearchRecursiveHelper(array:Array<number>,target:number,left:number,right:number){
    if(left>right) return -1; // step 4
    let midpoint = Math.floor((left+right)/2); // step 2
    let potentialTarget = array[midpoint]; // step 3
    if(potentialTarget === target){
      return potentialTarget; // step 3(i)
    }else if(target > potentialTarget){
      return binarySearchRecursiveHelper(array,target,midpoint+1,right); // step 3(ii)
    }else{
      return binarySearchRecursiveHelper(array,target,left,right-1); // step 3(iii)
    }
  }

  export function binarySearchRecursive(array:Array<number>,target:number){
    return binarySearchRecursiveHelper(array,target,0,array.length-1);
  }
 

 // iterative implementation

  export function binarySearch(array:Array<number>,target:number){
    let left:number = 0;
    let right:number = array.length - 1;
    while(left <= right){
      let midpoint = Math.floor((left+right)/2); // step 2
      let potentialTarget = array[midpoint];
      if(potentialTarget === target){
        return potentialTarget; // step 3(i)
      }else if(target > potentialTarget){
        left = midpoint+1; // step 3(ii)
      }else{
        right = midpoint-1; // step 3(iii)
      }
    }
    return -1; // step 4
  }

 