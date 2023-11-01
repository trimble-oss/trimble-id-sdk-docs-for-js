import { RefreshableTokenProvider } from '@trimble-oss/trimble-id';
import { endpointProvider, CONSUMER_KEY, REFRESH_TOKEN, CODE_VERIFIER } from "./Constants";

let refreshableProvider = new RefreshableTokenProvider(endpointProvider, CONSUMER_KEY).WithProofKeyForCodeExchange(CODE_VERIFIER).WithRefreshToken(REFRESH_TOKEN);

(async () => {

    //Retrieve token
    let token = await refreshableProvider.RetrieveToken();

})()
