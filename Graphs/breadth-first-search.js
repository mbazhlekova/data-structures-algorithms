function BreadthFirstSearch(graph, root) {
  var nodesLength = {};

  for (let i = 0; i < graph.length; i++) {
    nodesLength[i] = Infinity;
  }
  nodesLength[root] = 0;

  var queue = [root];
  var current;

  while (queue.length != 0) {
    current = queue.shift();

    var currentConnected = graph[current];
    var neighborIndex = [];
    var index = currentConnected.indexOf(1);
    while (index != -1) {
      neighborIndex.push(index);
      index = currentConnected.indexOf(1, index + 1);
    }

    for (let j = 0; j < neighborIndex.length; j++) {
      if (nodesLength[neighborIndex[j]] === Infinity) {
        nodesLength[neighborIndex[j] = nodesLength[current]] + 1;
        queue.push(neighborIndex[j])
      }
    }
  }
  return nodesLength;
}