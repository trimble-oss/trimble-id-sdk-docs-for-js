# @trimble-oss/trimble-id Developer Guide

### Content

1. [Overview](#overview)
2. [Authentication with Trimble Identity](#identity)
3. [Configure the endpoint](#configure-endpoint)
4. [Usage Reference](#code-snippets)
6. [FAQ](#faq)

## <a name="overview">Overview</a> ##

trimble-id is core helper library containing primitives and basic interaction with supported grant types. It is base library for OAuth 2.0 related protocol operations. It provides, 

- Discovery of endpoints
- Grant Types Token Providers
- Token Validation
- HTTP Client Handler to access a given API with the access token


## <a name="identity">Authentication with Trimble Identity</a> ##

To utilize TID authentication, the calling app must be registered with Trimble Identity. You can conveniently handle the application registration process on [Trimble Developer Console](https://developer.console.trimble.com)

## <a name="configure-endpoint">Configure the endpoint</a> ##

Configure the well-known URL endpoint is used to retrieve the authorization, token and user info endpoints for Trimble OAuth server. 

<table>
    <tbody>
        <tr>
            <th>Well-Known URL</th>
            <td>https://id.trimble.com/.well-known/openid-configuration</td>
        </tr>
    </tbody>
  </table>

## <a name="code-snippets">JavaScript Usage Reference</a> ##

trimble-id.OpenIdEndpointProvider
======
OpenIdEndpointProvider helps to discover various endpoints like authorization_endpoint, token_endpoint, userinfo_endpoint etc.
## Usage
```ts
import {OpenIdEndpointProvider} from '@trimble-oss/trimble-id';
var endpointProvider = new OpenIdEndpointProvider(WELL_KNOWN_ENDPOINT);
endpointProvider.retrieveAuthorizationEndpoint()
    .then((endpoint) => {})
    .catch(() => {});
```
#### WELL_KNOWN_ENDPOINT

<table>
    <tbody>
        <tr>
            <th>Production</th>
            <td>https://id.trimble.com/.well-known/openid-configuration</td>
        </tr>
    </tbody>
  </table>


trimble-id.ClientCredentialTokenProvider
======
The Client Credentials grant is used when applications request an access token to access their own resources, not on behalf of a user.
## Usage
```ts
import {ClientCredentialTokenProvider} from '@trimble-oss/trimble-id';
var endpointProvider = new OpenIdEndpointProvider(WELL_KNOWN_ENDPOINT);
var tokenProvider = new ClientCredentialTokenProvider(endpointProvider, CONSUMER_KEY, CONSUMER_SECRET).WithScopes([REQUESTED_SCOPE]);
tokenProvider.retrieveToken()
    .then((token) => {})
    .catch(() => {});
```

trimble-id.AuthorizationCodeGrantTokenProvider
======
AuthorizationCodeGrantTokenProvider is effectively composed of three stages:
* Discovering or specifying the endpoints to interact with the provider.
* Authorizing the user, via a browser, in order to obtain an authorization code.
* Exchanging the authorization code with the authorization server, to obtain tokens.
## Usage

### 1. Initialize the AuthorizationCode Provider

**Authorization code Grant**

```ts
import {AuthorizationCodeGrantTokenProvider} from '@trimble-oss/trimble-id';
var endpointProvider = new OpenIdEndpointProvider(WELL_KNOWN_ENDPOINT);
var tokenProvider = new AuthorizationCodeGrantTokenProvider(endpointProvider, CONSUMER_KEY, REDIRECT_URI).WithConsumerSecret(CONSUMER_SECRET).WithScopes([REQUESTED_SCOPE]);
```
**Authorization code Grant  With PKCE**
```ts
import {AuthorizationCodeGrantTokenProvider} from '@trimble-oss/trimble-id';
let codeVerifier = AuthorizationCodeGrantTokenProvider.GenerateCodeVerifier();
let tokenProvider = new AuthorizationCodeGrantTokenProvider(endpointProvider, CONSUMER_KEY, REDIRECT_URI).WithScopes([REQUESTED_SCOPE]).WithProofKeyForCodeExchange(codeVerifier);
```
### 2. Get Redirect URL for Trimble Identity
```ts
await tokenProvider.GetOAuthRedirect()
   .then((redirect) => { /* Launch browser with this redirect url*/ })
   .catch(() => {})
```
### 3. Validate the Redirect URL

Validation of redirect url can be done in two ways : 

#### a. Validate Query
After login, Validate the query parameters passed back to the application by Trimble Identity
```ts
tokenProvider.ValidateQuery(queryString) // Here queryString is the query string from the URL
    .then(() => {
       tokenProvider.retrieveToken() // Retrieves an access token for the authenticated user 
          .then((token) => {})
            .catch(() => {});
        })
    .catch(() => {});   
```

#### b. Validate Code
After login, Validate the authorization code passed back to the application by Trimble Identity
```ts
tokenProvider.ValidateCode(code) // Here code is the code from url
        .then(() => {
            tokenProvider.retrieveToken() // Retrieves an access token for the authenticated user
                .then((token) => {})
                .catch(() => {});
        })
        .catch(() => {});
```

> **_NOTE:_**  Authorization code with PKCE use [Serial PKCE](#https://docs.trimblecloud.com/identity_v4.0/Content/Identity/reference/tid-serial-refresh-with-pkce.htm?Highlight=serial) to refresh their access token. After every `retrieveToken()` call, we need to retrieve the code_verifier using `tokenProvider.RetrieveCodeVerifier()` and set it to tokenProvider using `tokenProvider.WithProofKeyForCodeExchange(code_verifier)`for future token request.
### Logout
```ts
tokenProvider.WithLogoutRedirect(LOGOUT_REDIRECT_URL); // Here LOGOUT_REDIRECT_URL refers to the Allowed Logout URL added for the application in Trimble cloud console.
tokenProvider.GetOAuthLogoutRedirect()
        .then((redirect) => { /* for the client browser to redirect */ })
        .catch(() => {})
```

trimble-id.ValidatedClaimsetProvider
======
Provides the validated claimset for a JSON web token. A default clock skew/ grace period of 5 minutes is enforced while retrieving the claimset. Clock skew is the acceptable time difference between signer and verifier in seconds.
## Usage
```ts
// Here token validation is performed with a clockskew/graceperiod of 5 minutes while retrieving claimset.

import {OpenIdKeysetProvider} from '@trimble-oss/trimble-id'
import {ValidatedClaimsetProvider} from '@trimble-oss/trimble-id'
var keysetProvider = new OpenIdKeysetProvider(endpointProvider)
var claimsetProvider = new ValidatedClaimsetProvider(keysetProvider);
var claimset = await claimsetProvider.RetrieveClaimset(ID_TOKEN);


--With custom clock skew---
// Here the clockskew is set to x minutes

var claimsetProvider = new ValidatedClaimsetProvider(keysetProvider).WithClockSkew(x*60);


---Without Token Validation-----
var claimsetProvider = new ValidatedClaimsetProvider(keysetProvider).WithTokenValidation(false);

//Here clockskew is ignored.
```

trimble-id.RefreshableTokenProvider
======
The Refresh Token grant type is used by clients to exchange a refresh token for an access token when the access token has expired.
## Usage
```ts
import {RefreshableTokenProvider} from '@trimble-oss/trimble-id';
var endpointProvider = new OpenIdEndpointProvider(WELL_KNOWN_ENDPOINT);
var tokenProvider = new RefreshableTokenProvider(endpointProvider, CONSUMER_KEY, CONSUMER_SECRET).WithRefreshToken(REFRESH_TOKEN);
tokenProvider.retrieveToken()
    .then((token) => {})
    .catch(() => {});

```
**With PKCE**
```ts
import {RefreshableTokenProvider} from '@trimble-oss/trimble-id';
var endpointProvider = new OpenIdEndpointProvider(WELL_KNOWN_ENDPOINT);
var tokenProvider = new RefreshableTokenProvider(endpointProvider, CONSUMER_KEY).WithRefreshToken(REFRESH_TOKEN).WithProofKeyForCodeExchange(CODE_VERIFIER);
tokenProvider.retrieveToken()
    .then((token) => {})
    .catch(() => {});

```

trimble-id.OnBehalfTokenProvider
======
The On Behalf grant flow allows an application to act on behalf of a user. The On Behalf grant is only supported for access tokens. It does not work with any other type of token, including refresh tokens.
## Usage
```ts
import {OnBehalfTokenProvider} from '@trimble-oss/trimble-id';
var endpointProvider = new OpenIdEndpointProvider(WELL_KNOWN_ENDPOINT);
var tokenProvider = new OnBehalfTokenProvider(endpointProvider, CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN).WithScopes([REQUESTED_SCOPE]);
tokenProvider.retrieveToken()
    .then((token) => {})
    .catch(() => {});

```

trimble-id.FixedTokenProvider
======
FixedTokenProvider helps to return the fixed tokens.
## Usage
```ts
import {FixedTokenProvider} from '@trimble-oss/trimble-id';
var tokenProvider = new FixedTokenProvider(ACCESS_TOKEN);
tokenProvider.retrieveToken()
    .then((token) => {})
    .catch(() => {});
```


trimble-id.FixedEndpointProvider
======
FixedEndpointProvider helps to configure the fixed oauth endpoints like authorization_endpoint, token_endpoint, userinfo_endpoint etc.
## Usage
```ts
import {FixedEndpointProvider} from '@trimble-oss/trimble-id';
var endpointProvider = new FixedEndpointProvider(AUTHORIZATION_ENDPOINT, TOKEN_ENDPOINT, USERINFO_ENDPOINT,TOKENREVOCATION_ENDPOINT, JWKS_ENDPOINT);
endpointProvider.retrieveAuthorizationEndpoint()
    .then((endpoint) => {})
    .catch(() => {});
```

trimble-id.BearerTokenHttpClientProvider
======
Http client provider for API using bearer token authorization
## Usage
```ts
import {BearerTokenHttpClientProvider} from '@trimble-oss/trimble-id';
var tokenProvider = new ClientCredentialTokenProvider(endpointProvider, CONSUMER_KEY, CONSUMER_SECRET).WithScopes([REQUESTED_SCOPE]);
var httpClientProvider = new BearerTokenHttpClientProvider(tokenProvider, BASE_URL);
httpClientProvider.RetrieveClient()
    .then((httpClient) => {})
    .catch(() => {});
```

trimble-id.SimpleHttpClientProvider
======
Http client provider for API
## Usage
```ts
import {SimpleHttpClientProvider} from '@trimble-oss/trimble-id';
var tokenProvider = new ClientCredentialTokenProvider(endpointProvider, CONSUMER_KEY, CONSUMER_SECRET).WithScopes([REQUESTED_SCOPE]);
var httpClientProvider = new SimpleHttpClientProvider();
httpClientProvider.RetrieveClient()
    .then((httpClient) => {})
    .catch(() => {});
```
## <a name="faq">FAQ</a> ##

Do you have questions? Do not worry, we have prepared a complete [FAQ](./FAQ.md) answering the most common questions.
