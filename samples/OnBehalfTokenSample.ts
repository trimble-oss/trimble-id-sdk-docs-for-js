import { OnBehalfGrantTokenProvider } from '@trimble-oss/trimble-id';
import { endpointProvider, CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, REQUESTED_SCOPE } from "./Constants";

let onBehalfTokenProvider = new OnBehalfGrantTokenProvider(endpointProvider, CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN).WithScopes([REQUESTED_SCOPE]);


(async () => {

    //Retrieve token
    let accessToken = await onBehalfTokenProvider.RetrieveToken()
    
})()