import API_URL from "./apiURL.js";

export const API = {};

API.get = (endpoint) => callFetch(endpoint, "GET", null);
API.post = (endpoint, data) => callFetch(endpoint, "POST", data);
API.put = (endpoint, data) => callFetch(endpoint, "PUT", data);
API.delete = (endpoint) => callFetch(endpoint, "DELETE", null);

const callFetch = async (endpoint, method, dataObj) => {
  // Build request object
  let requestObj = { method: method }; // GET, POST, PUT, DELETE
  if (dataObj)
    requestObj = {
      ...requestObj,
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(dataObj),
    };

  // Call the Fetch object the return
  try {
    let result = null;
    const endpointFullAddress = API_URL + endpoint;
    const response = await fetch(endpointFullAddress, requestObj);
    if (response.status !== 204) result = await response.json();
    return response.status >= 200 && response.status < 300
      ? { isSuccess: true, result: result }
      : {
          isSuccess: false,
          message: `Error recovering records: status code ${response.status}`,
        };
  } catch (error) {
    return { isSuccess: false, message: error.message };
  }
};

export default callFetch;
