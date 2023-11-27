// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

let root = [3,9,20,null,null,15,7];
// Output: 3

// let root = [1,null,2]
// Output: 2

// O(n) recursively DFS
// const maxDepth = (root) =>
// {
//     if(root === null) return 0;

//     return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
// }


console.log(maxDepth(root));