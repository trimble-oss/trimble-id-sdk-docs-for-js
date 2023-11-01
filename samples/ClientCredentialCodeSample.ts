import { ClientCredentialTokenProvider } from "@trimble-oss/trimble-id";
import { endpointProvider, CONSUMER_KEY, CONSUMER_SECRET, REQUESTED_SCOPE } from "./Constants";

let tokenProvider = new ClientCredentialTokenProvider(endpointProvider, CONSUMER_KEY, CONSUMER_SECRET).WithScopes([REQUESTED_SCOPE]);

(async () => {

    //Retrieve access token
    let accessToken = await tokenProvider.RetrieveToken();

})()
