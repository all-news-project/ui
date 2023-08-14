import React from "react";

const ClusterDetails = ({ cluster }) => {
  let articles_list = "No Articles";
  const DEFAULT_ICON_URL =
    "https://cdn-icons-png.flaticon.com/128/2807/2807258.png";
  if (cluster && cluster.articles) {
    articles_list = cluster.articles.map((article) => (
      <li className="article_details">
        <div>
          <h4>{article.title ? article.title : "No title"}</h4>
          <p>{article.publishing_time ? article.publishing_time : ""}</p>
        </div>
        <a href={article.url} target="_blank">
          <img
            src={article.icon_url ? article.icon_url : DEFAULT_ICON_URL}
          ></img>
        </a>
      </li>
    ));
  }

  return (
    <section className="card cluster_details">
      <h3>Cluster details</h3>
      {cluster ? (
        <div>
          <p>
            <b>Topic:</b> {cluster.trend ? cluster.trend : "No topic"}
          </p>
          <p>
            <b>Created time:</b>{" "}
            {cluster.creation_time ? cluster.creation_time : "No creation time"}
          </p>
          <details>
            <summary>Articles</summary>
            <ul>{articles_list}</ul>
          </details>
        </div>
      ) : (
        "Click on cluster to see details"
      )}
    </section>
  );
};

export default ClusterDetails;
