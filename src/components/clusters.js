import React from "react";
import Graph from "react-graph-vis";

const Clusters = ({ nodes, edges }) => {
  // console.log("nodes: ", nodes);
  // console.log("edges: ", edges);
  const graph = {
    nodes: nodes,
    edges: edges,
  };

  // Options
  const options = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: "#000000",
    },
    height: "600px",
  };

  // Events
  const events = {
    select: function(event) {
      var { nodes, edges } = event;
    },
  };

  return (
    <section className="card">
      <h3>Clusters</h3>
      <Graph
        graph={graph}
        options={options}
        events={events}
        getNetwork={(network) => {
          network.on("click", function(properties) {
            var ids = properties.nodes;
            console.log(ids);
          });
        }}
      />
    </section>
  );
};

export default Clusters;
