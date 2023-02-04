import {binarySearch,binarySearchRecursive} from './index';
import {failMesage,passMesage} from '../../settings';

const array = [1,12,15,17,18,24,27,30,35,45,55,59,68,74,75,79,81];

const test = () =>{

  // first test 
  const first_test_iterative = binarySearch(array,24);
  const first_test_recursive = binarySearchRecursive(array,24);  
  if(first_test_iterative === 24 && first_test_recursive===24){
    passMesage('First test passed');
  }else{
    failMesage('First test fail');
  }

  //second test
  const second_test_iterative = binarySearch(array,0);
  const second_test_recursive = binarySearchRecursive(array,0);
  if(!!second_test_iterative  && !!second_test_recursive){
    passMesage('Second test passed');
  }else{
    failMesage('Second test fail');
  }

  // third test
  const third_test_iterative = binarySearch(array,75);
  const third_test_recursive = binarySearchRecursive(array,75);
  if(third_test_iterative === 75 && third_test_recursive=== 75){
    passMesage('Third test passed');
  }else{
    failMesage('Third test fail');
  }

  //fourth test
  const fourth_test_iterative = binarySearch(array,85);
  const fourth_test_recursive = binarySearchRecursive(array,85);
  if(!!fourth_test_iterative  && !!fourth_test_recursive){
    passMesage('Fourth test passed');
  }else{
    failMesage('Fourth test fail');
  }


}

test();