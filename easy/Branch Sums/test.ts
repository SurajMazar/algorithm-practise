import {branchSum} from '.';
import {makeBinaryTree} from '../CreateBinaryTree';
import {failMesage,passMesage} from '../../settings';

const tests ={
  arr1:[12,15,5,9,1,3,20,17,19,2,4,16],
  arr2:[10,15,2,5,17,19,18,7,4,3],
  arr3:[21,23,15,7,8,20,18,11,9,12,6,5,24]
}
const results = {
  arr1:[23,25,26,80,83],
  arr2:[24,24,79],
  arr3:[54,71,74,74,68]
}

const equals = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

const test = () =>{
  const b1 = makeBinaryTree(tests.arr1);
  const bs1 = branchSum(b1);

  const b2 = makeBinaryTree(tests.arr2);
  const bs2 = branchSum(b2);


  const b3 = makeBinaryTree(tests.arr3);
  const bs3 = branchSum(b3);

  if(equals(bs1,results.arr1)  && equals(bs2,results.arr2) && equals(bs3,results.arr3)){
    passMesage('Test passed');
  }else{
    failMesage('Test Failed');
  }
}

test();