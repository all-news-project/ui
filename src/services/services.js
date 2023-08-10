const SERVER = "https://all-news-api.onrender.com";

export const getClusters = async () => {
  try {
    const response = await fetch(SERVER + "/get_clusters_for_ui");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cluster data:", error);
    throw error;
  }
};

export const getWebsitesStats = async () => {
  try {
    const response = await fetch(SERVER + "/get_websites_stats");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching websites statistics data:", error);
    throw error;
  }
};

export const getDBStats = async () => {
  try {
    const response = await fetch(SERVER + "/get_db_stats");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching db statistics data:", error);
    throw error;
  }
};
