/**
 * 
 * Algorithm
 * 
 * 1.Take a binary tree cleacre and empty array for collecting branch sums (let us consider sums[]).
 * 
 * 2.we use depth first serch. assing an initial running sum 0;
 * 
 * 3.Update the running sum as
 *    running sum += root node value
 * 
 * 4. If node is null o nothing.
 * 
 * 5 Check the left and right node of the root node
 *    
 *    I. If both left and right node are null
 *        push teh running sum into the sums array
 *    II.else,
 *       go to step 3 with root node as left node.
 *       go to step 3 with root node as right node.
 * 
 * 
 * 
 * Branch sums (sums of all value in branch of the binary tree).
 * 
 * Time complexity = O(n) // we have to traverse each node
 * space complexity = O(n) // we are eliminating half of the node in every recursive call stack and number of leaf node increases by 2
*/


import {Node} from '../CreateBinaryTree';

export function branchSum<U>(root:Node<U>){
  let sums:Array<number> = [];
  calculateBranchSums(root,0,sums);
  return sums;
}


function calculateBranchSums<U>(root:Node<U>,runningSum:number,sums:Array<number>){
  if(root===null) return;

  runningSum = runningSum + Number(root.value);
  
  if(root.left === null && root.right ==null ){
    sums.push(runningSum);
    return;
  }

  calculateBranchSums(root.left,runningSum,sums);
  calculateBranchSums(root.right,runningSum,sums);
}