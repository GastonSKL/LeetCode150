// Given the root of a binary tree, invert the tree, and return its root.

let root = [4,2,7,1,3,6,9];
// Output: [4,7,2,9,6,3,1]

// let root = [2,1,3];
// Output: [2,3,1]

// let root = []
// Output: [];

// var invertTree = function(root) {
//     if (root === null) {
//         return root;
//     }

    // if (root.left !== null) {
    //     invertTree(root.left);
    // }
    
    // if (root.right !== null) {
    //     invertTree(root.right);
    // }

    // const temp = root.left;
    // root.left = root.right;
    // root.right = temp;

    // return root;
// };

const invertTree = (root) => 
{
    if(root === null) return root;

    if(root.left !== null) invertTree(root.left);

    if(root.right !== null) invertTree(root.right);

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    return root;
}

console.log(invertTree(root));