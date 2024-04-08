//A 2-D array filled out with 1's and 0's where each array represents a node and each index in the subarray, represent a potential connection to another node.
//The time complexity to find adjacent nodes -> O(v) where v is number of vertices
//Time complexity to check the two node connected -> O(1)
//space complexity -> O(v^2) where v is the number of vertices

const vertices=['A','B','C','D','E']
const adjacency_matrix = [
    [0,1,0,1,0],
    [1,0,1,0,1],
    [1,0,0,0,1],
    [0,1,1,0,0],
    [1,0,1,1,0]
]

const findAdjacent = (node)=>{
    let nodeindex = vertices.indexOf(node);   
    let adjacentnodes = [];
    for(let i=0;i<adjacency_matrix[nodeindex].length;i++){
        if( adjacency_matrix[nodeindex][i]===1){
            adjacentnodes.push(vertices[i])
        }
       
    }
    return adjacentnodes;

}
//console.log(findAdjacent('E'))

const isConnected = (node1,node2)=>{
    let isConnected = false;
    let indexnode1 = vertices.indexOf(node1);//0
    let indexnode2 = vertices.indexOf(node2);//1
    return !!adjacency_matrix[indexnode1][indexnode2]        
    
}
console.log(isConnected('A','B'))
