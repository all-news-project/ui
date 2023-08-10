// function get_data_collections() {
//   var collections = ["articles", "clusters"];
//   for (var collection of collections) {
//     set_data_to_local_storage(collection);
//   }
// }

// async function set_data_to_local_storage(collection_name) {
//   const promise = fetch(
//     `https://all-news-project.github.io/api-data/${collection_name}.json`
//   );
//   promise
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error(`Error fetching data of :${collection_name}`, response);
//       }
//     })
//     .then((data) => {
//       localStorage.setItem(collection_name, JSON.stringify(data));
//       console.log(`Set localStorage of ${collection_name}`);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }
