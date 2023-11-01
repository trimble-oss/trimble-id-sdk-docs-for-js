import { BearerTokenHttpClientProvider } from '@trimble-oss/trimble-id';
import { ClientCredentialTokenProvider } from '@trimble-oss/trimble-id';
import { endpointProvider, CONSUMER_KEY, CONSUMER_SECRET, REQUESTED_SCOPE } from "./Constants";
let tokenProvider = new ClientCredentialTokenProvider(endpointProvider, CONSUMER_KEY, CONSUMER_SECRET).WithScopes([REQUESTED_SCOPE]);


var httpClientProvider = new BearerTokenHttpClientProvider(tokenProvider, "BASE_URL");

(async () => {
    
    // Retrieve Client
    httpClientProvider.RetrieveClient()
        .then((httpClient) => { httpClient.httpGetJSON("API_URL", ""); })
        .catch(() => { });

})()

