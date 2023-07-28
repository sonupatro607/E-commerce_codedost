// A mock function to mimic making an async request for data

//for ALL products API
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO : we will not hard-code server URL here
    // json-server ka use kr ke maine server mai data.json ko daal diya ha or new port mai usko data ko run krwana pd raha ha bas uske url se fetch kr raha hu data ko
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

// for filter API
export function fetchProductsbyfilter(filter) {
  // filter = {"category":"mobile"}
  //TODO: on server we will support multipke values
  var queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}

//for sorting produts API
export function fetchProductsbysorting(sorts) {
  // filter = {"category":"mobile"}
  //TODO: on server we will support multipke values

  var queryString = `_sort=${sorts._sort}&_order=${sorts._order}&`;

  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
