//A Data structure made up of nodes or vertices an edges or the connections between nodes.
//Time complexity to find adjacent nodes -> O(e) where e is the number of edges.
//Time complexity to check if two nodes are connected -> O(e)
//Space complexity -> O(v+e) Where v is number of vertices and e is the number of edges.
const vertices = ['A','B','C','D','E'];
const edges = [
    ['A','B'],
    ['A','D'],
    ['B','D'],
    ['B','C'],
    ['C','D'],
    ['D','E'],
]

const findAdjacent = (node) => {
    let adjacentnodes = [];
 for(let edge of edges){
    let nodeindex = edge.indexOf(node)
    if(nodeindex > -1){
    let adjacentnode = nodeindex==0 ? edge[1] : edge[0];
    adjacentnodes.push(adjacentnode);
    }    
 }  
 return adjacentnodes;
}
//console.log(findAdjacent('C'));

const isConnected = (node1,node2)=>{
    return edges.some((edge)=>{
        return edge.indexOf(node1)>-1 && edge.indexOf(node2)>-1
    }) 

}
// console.log(isConnected('A','E'))


