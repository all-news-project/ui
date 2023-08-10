import React from "react";

const DBStats = ({ data }) => {
  console.log("data: ", data);
  return (
    <section className="card">
      <h3>DB Stats</h3>
      <div className="db_stats_text">
        {Object.entries(data).map(([key, value]) => (
          <div>
            <label>{key}: </label>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DBStats;
