### Table of Contents

*   [AuthorizationCodeGrantTokenProvider][1]
    *   [constructor][2]
        *   [Parameters][3]
    *   [WithScopes][4]
        *   [Parameters][5]
    *   [WithLogoutRedirect][6]
        *   [Parameters][7]
    *   [WithIdentityProvider][8]
        *   [Parameters][9]
    *   [GetOAuthRedirect][10]
        *   [Parameters][11]
    *   [ValidateQuery][12]
        *   [Parameters][13]
    *   [ValidateCode][14]
        *   [Parameters][15]
    *   [GetOAuthLogoutRedirect][16]
        *   [Parameters][17]
*   [IEndpointProvider][18]
*   [RetrieveAuthorizationEndpoint][19]
*   [RetrieveTokenEndpoint][20]
*   [RetrieveUserInfoEndpoint][21]
*   [RetrieveTokenRevocationEndpoint][22]
*   [RetrieveJSONWebKeySetEndpoint][23]
*   [RefreshableTokenProvider][24]
    *   [Parameters][25]
    *   [WithProofKeyForCodeExchange][26]
        *   [Parameters][27]
    *   [WithConsumerSecret][28]
        *   [Parameters][29]
    *   [WithAccessToken][30]
        *   [Parameters][31]
    *   [WithIdToken][32]
        *   [Parameters][33]
    *   [WithRefreshToken][34]
        *   [Parameters][35]
    *   [WithPersistentStorage][36]
        *   [Parameters][37]
    *   [WithLogoutRedirect][38]
        *   [Parameters][39]
    *   [RetrieveToken][40]
    *   [RetrieveTokenExpiry][41]
    *   [RetrieveIdToken][42]
    *   [RetrieveRefreshToken][43]
    *   [RevokeRefreshToken][44]
    *   [GenerateCodeVerifier][45]
*   [ITokenProvider][46]
*   [RetrieveToken][47]

## AuthorizationCodeGrantTokenProvider

**Extends RefreshableTokenProvider**

The Authorization Code grant type is intended to be used by user-facing web applications with a server-side component. When the user grants authorization, the 
Identity authorization endpoint provides the client with a short-lived authorization code through a browser redirect. The client subsequently exchanges the authorization\_code for an access\_token.
The Authorization Code with Proof Key for Code Exchange (PKCE) flow is an extension of the Authorization Code grant flow. Along with the request, the client application sends code\_challenge and code\_challenge\_method.

### constructor

Public constructor for AuthorizationCodeGrantTokenProvider class

#### Parameters

*   `endpointProvider` **[IEndpointProvider][18]** An endpoint provider that provides the URL for the Trimble Identity authorization and token endpoints.      
    It can be OpenIdEndpointProvider/FixedEndpointProvider
*   `consumerKey` **[string][48]** The consumer key for the calling application
*   `redirectUrl` **[string][48]** The URL to which Trimble Identity should redirect after successfully authenticating a user

### WithScopes

Fluent extension to add scopes

#### Parameters

*   `scopes` **IEnumerable<[string][48]>** The scopes to add to the token provider

Returns **this**&#x20;

### WithLogoutRedirect

Fluent extension to add logout redirect URL

#### Parameters

*   `logoutRedirectUrl` **[string][48]**&#x20;

Returns **this**&#x20;

### WithIdentityProvider

Fluent extension to add identity provider

#### Parameters

*   `identityProvider` **[string][48]**&#x20;

Returns **this**&#x20;

### GetOAuthRedirect

Get a redirect URL for Trimble Identity

#### Parameters

*   `state` **[string][48]** An optional state parameter that will be passed back to the caller via the redirect URL

<!---->

*   Throws **any** Thrown when an authorization endpoint is not provided by the endpoint provider

Returns **PromiseLike<[string][48]>** A promise that resolves to the redirect URL

### ValidateQuery

Validate the query parameters passed back to the application by Trimble Identity

#### Parameters

*   `query` **[string][48]** The query string from the URL

<!---->

*   Throws **any** Thrown when a token endpoint is not provided by the endpoint provider
*   Throws **any** Thrown when a call to the token endpoint fails

Returns **PromiseLike<[boolean][49]>** A promise that resolves to true if the query string is valid

### ValidateCode

Validate the code passed back to the application by Trimble Identity

#### Parameters

*   `code` **[string][48]** from the URL

<!---->

*   Throws **any** Thrown when a token endpoint is not provided by the endpoint provider
*   Throws **any** Thrown when a call to the token endpoint fails

Returns **PromiseLike<[boolean][49]>** A promise that resolves to true if the code is valid

### GetOAuthLogoutRedirect

Return a redirect URL to log out of all Trimble Identity applications

#### Parameters

*   `state` **[string][48]** An optional state parameter that will be passed back to the caller via the redirect URL

Returns **PromiseLike<[string][48]>** A promise that resolves to the value of the redirect URL on completion

## IEndpointProvider

Interface for an endpoint provider

## RetrieveAuthorizationEndpoint

Returns **PromiseLike<[string][48]>** A promise that resolves to the value of the authorization endpoint on completion

## RetrieveTokenEndpoint

Returns **PromiseLike<[string][48]>** A promise that resolves to the value of the token endpoint on completion

## RetrieveUserInfoEndpoint

Returns **PromiseLike<[string][48]>** A promise that resolves to the value of the user information endpoint on completion

## RetrieveTokenRevocationEndpoint

Returns **PromiseLike<[string][48]>** A promise that resolves to the value of the token revocation endpoint on completion

## RetrieveJSONWebKeySetEndpoint

Returns **PromiseLike<[string][48]>** A promise that resolves to the value of the JWKS endpoint on completion

## RefreshableTokenProvider

The Refresh Token grant type is used by clients to exchange a refresh token for an access token when the access token has expired.

### Parameters

*   `endpointProvider` **[IEndpointProvider][18]** An endpoint provider that provides the URL for the Trimble Identity token endpoint.
    It can be be OpenIdEndpointProvider/FixedEndpointProvider
*   `consumerKey` **[string][48]** The consumer key for the calling application
*   `consumerSecret` **[string][48]** The consumer secret for the calling application

### WithProofKeyForCodeExchange

Fluent extension for Authorization Code with PKCE

#### Parameters

*   `codeVerifier` **[string][48]** The PKCE code verifier for the calling application

### WithConsumerSecret

Fluent extension for Authorization Code with client secret

#### Parameters

*   `consumerSecret` **[string][48]** The consumer secret for the calling application

### WithAccessToken

Fluent extension for Authorization Code with access token

#### Parameters

*   `accessToken` **[string][48]** The access token for the calling application
*   `tokenExpiry` **datetime** The access token expiry for the calling application

### WithIdToken

Fluent extension for Authorization Code with id token

#### Parameters

*   `idToken` **[string][48]** The ID token for the calling application

### WithRefreshToken

Fluent extension for Authorization Code with refresh token

#### Parameters

*   `refreshToken` **[string][48]** The refresh token for the calling application

### WithPersistentStorage

Fluent extension for Authorization Code with persistent storage

#### Parameters

*   `persistentStorage` **IPersistentStorage** The persistent storage method for the calling application

### WithLogoutRedirect

Fluent extension to add logout redirect URL

#### Parameters

*   `logoutRedirectUrl` **[string][48]**&#x20;

### RetrieveToken

Retrieves an access token for the authenticated user

*   Throws **any** Thrown when a token endpoint is not provided by the endpoint provider
*   Throws **any** Thrown when a call to the token endpoint fails

Returns **PromiseLike<[string][48]>** A Task that resolves to the value of the access token on completion

### RetrieveTokenExpiry

Retrieves an access token expiry for the authenticated user

Returns **PromiseLike<[string][48]>** A Task that resolves to the value of the access token expiry on completion

### RetrieveIdToken

Retrieves an ID token for the authenticated user

*   Throws **any** Thrown when a token endpoint is not provided by the endpoint provider
*   Throws **any** Thrown when a call to the token endpoint fails

Returns **PromiseLike<[string][48]>** A Task that resolves to the value of the ID token on completion

### RetrieveRefreshToken

Retrieves a refresh token for the authenticated user

*   Throws **any** Thrown when a token endpoint is not provided by the endpoint provider
*   Throws **any** Thrown when a call to the token endpoint fails

Returns **PromiseLike<[string][48]>** A Task that resolves to the value of the refresh token on completion

### RevokeRefreshToken

Revokes a refresh token for the authenticated user

*   Throws **any** Thrown when a token endpoint is not provided by the endpoint provider
*   Throws **any** Thrown when a call to the token endpoint fails

Returns **PromiseLike\<void>** A Task that revokes refreshtoken

### GenerateCodeVerifier

Static method to generate a code verifier

Returns **[string][48]** A code verifier string

## ITokenProvider

Interface for a token provider

## RetrieveToken

Returns **PromiseLike<[string][48]>** A promise that resolves to the value of the token on completion

[1]: #authorizationcodegranttokenprovider

[2]: #constructor

[3]: #parameters

[4]: #withscopes

[5]: #parameters-1

[6]: #withlogoutredirect

[7]: #parameters-2

[8]: #withidentityprovider

[9]: #parameters-3

[10]: #getoauthredirect

[11]: #parameters-4

[12]: #validatequery

[13]: #parameters-5

[14]: #validatecode

[15]: #parameters-6

[16]: #getoauthlogoutredirect

[17]: #parameters-7

[18]: #iendpointprovider

[19]: #retrieveauthorizationendpoint

[20]: #retrievetokenendpoint

[21]: #retrieveuserinfoendpoint

[22]: #retrievetokenrevocationendpoint

[23]: #retrievejsonwebkeysetendpoint

[24]: #refreshabletokenprovider

[25]: #parameters-8

[26]: #withproofkeyforcodeexchange

[27]: #parameters-9

[28]: #withconsumersecret

[29]: #parameters-10

[30]: #withaccesstoken

[31]: #parameters-11

[32]: #withidtoken

[33]: #parameters-12

[34]: #withrefreshtoken

[35]: #parameters-13

[36]: #withpersistentstorage

[37]: #parameters-14

[38]: #withlogoutredirect-1

[39]: #parameters-15

[40]: #retrievetoken

[41]: #retrievetokenexpiry

[42]: #retrieveidtoken

[43]: #retrieverefreshtoken

[44]: #revokerefreshtoken

[45]: #generatecodeverifier

[46]: #itokenprovider

[47]: #retrievetoken-1

[48]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[49]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean