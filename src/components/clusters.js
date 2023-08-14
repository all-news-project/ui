import React from "react";
import Graph from "react-graph-vis";

const Clusters = ({ nodes, edges, setCurrentClusterIndex }) => {
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
            setCurrentClusterIndex(ids);
          });
        }}
      />
    </section>
  );
};

export default Clusters;
