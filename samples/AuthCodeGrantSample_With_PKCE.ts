import { AuthorizationCodeGrantTokenProvider } from '@trimble-oss/trimble-id'
import { endpointProvider, CONSUMER_KEY, REQUESTED_SCOPE, REDIRECT_URI } from "./Constants";

let codeVerifier = AuthorizationCodeGrantTokenProvider.GenerateCodeVerifier();
let tokenProvider = new AuthorizationCodeGrantTokenProvider(endpointProvider, CONSUMER_KEY, REDIRECT_URI)
    .WithScopes([REQUESTED_SCOPE]).WithProofKeyForCodeExchange(codeVerifier);

(async () => {

    // Get oauth redirect URL for Trimble Identity and launch browswer with this url 
    await tokenProvider.GetOAuthRedirect()

    /* On successful login in the browser, User receives authorization code.
    * Validate the authorization code
    */
    await tokenProvider.ValidateCode("<Authorization_Code>")

    // Retrieve access token
    await tokenProvider.RetrieveIdToken()

})()