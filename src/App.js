import React, { useEffect, useState, useMemo } from "react";
import "./App.css";
import Clusters from "./components/clusters";
import ClusterDetails from "./components/cluster_details"
import DBStats from "./components/db_stats";
import Websites from "./components/websites";
import Header from "./components/header";
import { getClusters, getWebsitesStats } from "./services/services";

function App() {
  // Cluster Data
  const getClusterRequest = useMemo(
    () => async () => {
      const graphData = await getClusters();
      return graphData;
    },
    []
  );

  const [graphData, setGraphData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getClusterRequest();
      setGraphData({ data });
    };

    fetchData();
  }, [getClusterRequest]);

  // Websites statistic data
  const getWebsitesStatsRequest = useMemo(
    () => async () => {
      const websitesData = await getWebsitesStats();
      return websitesData;
    },
    []
  );

  const [websitesData, setWebsitesData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWebsitesStatsRequest();
      setWebsitesData({ data });
    };

    fetchData();
  }, [getWebsitesStatsRequest]);

  // Render
  return (
    <div className="App">
      <Header />
      <main className="dashboard">
        <Clusters
          nodes={graphData.data ? graphData.data.nodes : []}
          edges={graphData.data ? graphData.data.edges : []}
        />
        <div className="dash_component">
          <div className="details_component">
            <ClusterDetails />
            <DBStats />
          </div>
          <Websites
            labels={websitesData.data ? websitesData.data.labels : []}
            values={websitesData.data ? websitesData.data.values : []}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
