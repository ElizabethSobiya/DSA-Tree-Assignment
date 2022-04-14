// 1.) Implement Binary tree ///
class Node {
    constructor(val) {
      this.value = val;
      this.leftSide = null;
      this.rightSide = null;
    }
  }
  var root = null;
  
  
  function insertNode(root, val) {
    if (root == null) {
      var node = new Node(val);
      root = node;
      return root;
    }
    if (val < root.value) {
      root.leftSide = insertNode(root.leftSide, val);
    }
    if (val > root.value) {
      root.rightSide = insertNode(root.rightSide, val);
    }
    return root;
  }
  root = insertNode(root, 6);
  root = insertNode(root, 1);
  root = insertNode(root, 11);
  root = insertNode(root, 2);
  root = insertNode(root, 15);
  root = insertNode(root, 30);
  root = insertNode(root, 9);
  
  console.log(root);
  
  
  
  // 2.) Find height of a given tree ///

  function maxDepth(root) {
    if (root == null) return -1;
    else {
      var leftDepth = maxDepth(root.leftSide);
      var rightdepth = maxDepth(root.rightSide);
      if (leftDepth > rightdepth) return leftDepth + 1;
      else return rightdepth + 1;
    }
  }
  console.log(`Tree's height is ${maxDepth(root)}`);
  
  
  
  // 3.) Perform Pre-order, Post-order, In-order traversal
  
  
  
  function preOrder(root) {
    if (root == null) {
      return;
    }
    console.log(root.value);
    preOrder(root.leftSide);
    preOrder(root.rightSide);
  }
  
  
  function inOrder(root) {
    if (root == null) {
      return;
    }
    inOrder(root.leftSide);
    console.log(root.value);
    inOrder(root.rightSide);
  }
  
  function postOrder(root) {
    if (root == null) {
      return;
    }
    postOrder(root.leftSide);
    postOrder(root.rightSide);
    console.log(root.value);
  }
  
  preOrder(root);
  inOrder(root);
  postOrder(root);
  
  
  
  // 4.) Function to print all the leaves in a given binary tree
  
  function printLeafNodes(root) {
    if (root == null) return;
  
    if (root.leftSide == null && root.rightSide == null) {
      console.log(root.value + " ");
      return;
    }
    if (root.leftSide != null) printLeafNodes(root.leftSide);
    if (root.rightSide != null) printLeafNodes(root.rightSide);
  }
  printLeafNodes(root);
  
 
  
  // 5.) Implement BFS (Breath First Search) and DFS (Depth First Search) //
  
  
  function breadthFirstSearch() {
    var queue = [];
    var result = [];
    var node;
    queue.push(root);
    while (queue.length) {
      node = queue.shift();
      result.push(node);
      if (node.leftSide) queue.push(node.leftSide);
      if (node.rightSide) queue.push(node.rightSide);
    }
    return result;
  }
  console.log(breadthFirstSearch());
 
  function inOrderDFS() {
    var result = [];
    function traverse(node) {
      if (node.leftSide) traverse(node.leftSide);
      result.push(node);
      if (node.rightSide) traverse(node.rightSide);
    }
    traverse(root);
    return result;
  }
  console.log(inOrderDFS());
  
 
  
  // 6.) Find sum of all left leaves in a given Binary Tree//


  function isLeaf(root) {
    if (root == null) return false;
    if (root.leftSide == null && root.rightSide == null) return true;
    return false;
  }
  function leftLeavesSum(root) {
    var res = 0;
    if (root != null) {
      if (isLeaf(root.leftSide)) res += root.leftSide.value;
      else res += leftLeavesSum(root.leftSide);
      res += leftLeavesSum(root.rightSide);
    }
    return res;
  }
  
  console.log(leftLeavesSum(root));
  
  
  
  // 7.)Find sum of all nodes of the given perfect binary tree
  
  function sumNodes(l) {
    var leafNodeCount = Math.pow(2, l - 1);
    var vec = [];
    for (var i = 1; i <= l; i++) {
      vec.push([]);
    }
    for (var i = 1; i <= leafNodeCount; i++) {
      vec[l - 1].push(i);
    }
    for (var i = l - 2; i >= 0; i--) {
      var k = 0;
      while (k < vec[i + 1].length - 1) {
        vec[i].push(vec[i + 1][k] + vec[i + 1][k + 1]);
        k += 2;
      }
    }
    var sum = 0;
    for (var i = 0; i < l; i++) {
      for (var j = 0; j < vec[i].length; j++) {
        sum += vec[i][j];
      }
    }
    return sum;
  }
  var num = 5;
  console.log(sumNodes(num));
  
  
  // 8.)Count subtress that sum up to a given value x in a binary tree//
  
  var v;
  function getNode(data) {
    var newNode = new Node(data);
    return newNode;
  }
  function countSubtreesWithSumX(root, x) {
    if (root == null) return 0;
    var ls = countSubtreesWithSumX(root.leftSide, x);
    var rs = countSubtreesWithSumX(root.rightSide, x);
    var sum = ls + rs + root.value;
    if (sum == x) v++;
    return sum;
  }
  function countSubtreesWithSumXUtil(root, x) {
    if (root == null) return 0;
    v = 0;
    var ls = countSubtreesWithSumX(root.leftSide, x);
    var rs = countSubtreesWithSumX(root.rightSide, x);
    if (ls + rs + root.value == x) v++;
    return v;
  }
  var root = getNode(5);
  root.leftSide = getNode(-10);
  root.rightSide = getNode(3);
  root.leftSide.left = getNode(9);
  root.leftSide.left = getNode(9);
  root.leftSide.right = getNode(8);
  root.rightSide.left = getNode(-4);
  root.rightSide.right = getNode(7);
  var x = 9;
  console.log(countSubtreesWithSumXUtil(root, x));
  
 
  
  // 9.)Find maximum level sum in Binary Tree
  
  function maxLevelSum(root) {
    if (root == null) return 0;
    var result = root.value;
    var q = [];
    q.push(root);
    while (q.length != 0) {
      var count = q.length;
      var sum = 0;
      while (count-- > 0) {
        var temp = q.shift();
        sum = sum + temp.value;
        if (temp.leftSide != null) q.push(temp.leftSide);
        if (temp.rightSide != null) q.push(temp.rightSide);
      }
      result = Math.max(sum, result);
    }
    return result;
  }
  console.log(maxLevelSum(root));
  
 
  
  // 10.)Print the nodes at odd levels of a tree
  
  function printOddNodes(root, isOdd) {
    if (root == null) return;
  
    if (isOdd == true) console.log(root.value);
  
    printOddNodes(root.leftSide, !isOdd);
    printOddNodes(root.rightSide, !isOdd);
  }
  
  function newNode(data) {
    let node = new Node(data);
    return node;
  }
  var root = newNode(1);
  root.leftSide = newNode(2);
  root.rightSide = newNode(3);
  root.leftSide.left = newNode(4);
  root.leftSide.right = newNode(5);
  printOddNodes(root, true);
  console.group(root);
  
  