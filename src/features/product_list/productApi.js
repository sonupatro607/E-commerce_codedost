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

// for filter or sorting API
export function fetchProductsbyfilter(filter, sort, pagination) {
  // filter = {"category":["smartphone","laptoop"]}
  // sort= {_sort:"price" , _order:"desc}
  // pagination = {_page:1, _limit:10}

  //TODO: on server we will support multipke values
  var queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length > 0) {
      const lastValueinarray = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastValueinarray}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count");
    // resolve({ data });
    resolve({ data: { products: data, totalItems: totalItems } });
  });
}

// API FRO filters (brands and catgeories) it is similarly fetch as it is like a products
export function fetchBrands() {
  return new Promise(async (resolve) => {
    //TODO : we will not hard-code server URL here
    // json-server ka use kr ke maine server mai data.json ko daal diya ha or new port mai usko data ko run krwana pd raha ha bas uske url se fetch kr raha hu data ko
    const response = await fetch("http://localhost:8080/brands");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchCatgeories() {
  return new Promise(async (resolve) => {
    //TODO : we will not hard-code server URL here
    // json-server ka use kr ke maine server mai data.json ko daal diya ha or new port mai usko data ko run krwana pd raha ha bas uske url se fetch kr raha hu data ko
    const response = await fetch("http://localhost:8080/catgeories");
    const data = await response.json();
    resolve({ data });
  });
}

// fetch product by id
export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    //TODO : we will not hard-code server URL here
    // json-server ka use kr ke maine server mai data.json ko daal diya ha or new port mai usko data ko run krwana pd raha ha bas uske url se fetch kr raha hu data ko
    const response = await fetch("http://localhost:8080/products/" + id);
    const data = await response.json();
    resolve({ data });
  });
}
