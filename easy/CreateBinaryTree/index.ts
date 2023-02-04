/**
 * Algorithms
 * 
 * 1. make the first elment root;
 * 
 * 2 for next element 
 * 
 *  a. if value is greater than root.value
 *     go to right
 * 
 *  b. if the value is less than or equal to root.value
 *     go to left 
 * 
 *  c if the place is empty 
 *     place the value 
 */

/**
 * Defining an interface 
 */
 


export interface Node<U>{
  value:U,
  left:Node<U> | null,
  right:Node<U> | null
}


class BinaryTree<U>{

  public root:Node<U>;

  public createNode = (value : U):Node<U>=>{
    return{
      value:value,
      left:null,
      right:null
    }
  }

  public insert = (value:U) => {
    const currentNode = this.createNode(value);
    if(!this.root){
      this.root = currentNode;
    }else{
      this.insertIntoBranch(currentNode);
    }
  }

  public insertIntoBranch = (currentNode:Node<U>) => {
    const {value} = currentNode;
    const traverse = (node:Node<U>)=>{
      if(value > node.value){
        if(!node.right){
          node.right = currentNode
        }else traverse(node.right);
      }else{
        if(!node.left){
          node.left = currentNode
        }else traverse(node.left);
      }
    }
    traverse(this.root);
  }

}


export const makeBinaryTree = (array:Array<number>)=>{
  const BT = new BinaryTree();
  array.forEach(item=>{
    BT.insert(item);
  })
  return BT.root;
}
