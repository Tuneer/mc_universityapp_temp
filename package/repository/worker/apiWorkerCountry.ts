const apiWorkerCountry: Worker = self as any;
apiWorkerCountry.addEventListener("message", (event) => {
  // console.log("inside g " + event.data);
  apicall(event.data);
  // postMessage("result");
});

const apicall = async (request: any): Promise<any> => {
  try {
    //console.log("inside apicall " + request);
    const req = JSON.parse(request);
    //console.log(req.url);

    const response = await fetch(req.url, {
      method: req.method,
      headers: req.headers,
      //body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      console.error(`API request failed with status: ${response.status}`);
    }
    // Clone the response to work with it
    const modifiedResponse = response.clone();

    // Create a new response with modified headers
    const newHeaders = new Headers(modifiedResponse.headers);
    newHeaders.append("X-Content-Type-Options", "nosniff");
    newHeaders.append("Content-Type", "application/json");

    const modifiedHeadersResponse = new Response(modifiedResponse.body, {
      status: modifiedResponse.status,
      statusText: modifiedResponse.statusText,
      headers: newHeaders,
    });

    // return modifiedHeadersResponse;
    //response.headers:string = {"Content-Type": "application/json"}
    const data = await modifiedHeadersResponse.json();
    // After you have the data you want to send back to the main thread
    const responseData = { data: data };
    self.postMessage(responseData);
  } catch (error) {
    console.error(`API request failed: ${error}`);
  }
};

export default apiWorkerCountry;
