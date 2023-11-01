import { RefreshableTokenProvider } from '@trimble-oss/trimble-id';
import { endpointProvider, CONSUMER_KEY, CONSUMER_SECRET, REFRESH_TOKEN } from "./Constants";

let refreshableProvider = new RefreshableTokenProvider(endpointProvider, CONSUMER_KEY).WithConsumerSecret(CONSUMER_SECRET).WithRefreshToken(REFRESH_TOKEN);

(async () => {

    //Retrieve token
    let token = await refreshableProvider.RetrieveToken();
    
})()
