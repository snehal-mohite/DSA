//For every node, store list of what nodes it's connected to.
//Time complexity to find it's adjacency node->O(1)
//The time complexity to check is two nodes are connected->O(logv) if each adjacent node is sorted.
//Space complexity->O(e)
class Node {
  constructor(value) {
    this.value = value;
    this.edgesList = [];
  }
  connected(node){
    this.edgesList.push(node);
  }

  getAdjacentNodes(){
    //Optional
//     let adjacenctV = []
//     for(let adjacenct of this.edgesList){
//         adjacenctV.push(adjacenct.value)
//         }
//         console.log(`Adjacenct nodes of ${node1} are ${adjacenctV}`)

  return this.edgesList.map(nodes=>nodes.value)
     
 }

 isConnected(node1){
    return this.edgesList.map(edge=>edge.value).indexOf(node1.value)>-1
 }
}

class Graph {
  constructor(nodes) {
    this.nodes = [...nodes];
  }
  addToGraph(node) {
    this.nodes.push(node);
  }
}
const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");
const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE]);

nodeA.connected(nodeB)
nodeA.connected(nodeD)
nodeB.connected(nodeA)
nodeD.connected(nodeA)
nodeC.connected(nodeB)
nodeB.connected(nodeE)
nodeE.connected(nodeD)

for(let node of graph.nodes){
    for(let connectedNode of node.edgesList){
       console.log(`${node.value} is connected to ${connectedNode.value}`)
    }
}
console.log(nodeA.getAdjacentNodes())
nodeB.getAdjacentNodes()
nodeC.getAdjacentNodes()
nodeD.getAdjacentNodes()
nodeE.getAdjacentNodes()


console.log(nodeA.isConnected(nodeC))