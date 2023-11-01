### Table of Contents

*   [RefreshableTokenProvider][1]
    *   [constructor][2]
        *   [Parameters][3]
    *   [WithProofKeyForCodeExchange][4]
        *   [Parameters][5]
    *   [WithConsumerSecret][6]
        *   [Parameters][7]
    *   [WithAccessToken][8]
        *   [Parameters][9]
    *   [WithIdToken][10]
        *   [Parameters][11]
    *   [WithRefreshToken][12]
        *   [Parameters][13]
    *   [WithPersistentStorage][14]
        *   [Parameters][15]
    *   [WithLogoutRedirect][16]
        *   [Parameters][17]
    *   [RetrieveToken][18]
    *   [RetrieveTokenExpiry][19]
    *   [RetrieveIdToken][20]
    *   [RetrieveRefreshToken][21]
    *   [RevokeRefreshToken][22]
    *   [GenerateCodeVerifier][23]
*   [ITokenProvider][24]
*   [RetrieveToken][25]
*   [IEndpointProvider][26]
*   [RetrieveAuthorizationEndpoint][27]
*   [RetrieveTokenEndpoint][28]
*   [RetrieveUserInfoEndpoint][29]
*   [RetrieveTokenRevocationEndpoint][30]
*   [RetrieveJSONWebKeySetEndpoint][31]
*   [IPersistantStorage][32]
*   [SetItem][33]
    *   [Parameters][34]
*   [GetItem][35]
    *   [Parameters][36]
*   [RemoveItem][37]
    *   [Parameters][38]

## RefreshableTokenProvider

The Refresh Token grant type is used by clients to exchange a refresh token for an access token when the access token has expired.

### constructor

Public constructor for RefreshableTokenProvider class

#### Parameters

*   `endpointProvider` **[IEndpointProvider][26]** An endpoint provider that provides the URL for the Trimble Identity token endpoint.
    It can be be OpenIdEndpointProvider/FixedEndpointProvider
*   `consumerKey` **[string][39]** The consumer key for the calling application

### WithProofKeyForCodeExchange

Fluent extension for Authorization Code with PKCE

#### Parameters

*   `codeVerifier` **[string][39]** The PKCE code verifier for the calling application

Returns **this**&#x20;

### WithConsumerSecret

Fluent extension for Authorization Code with client secret

#### Parameters

*   `consumerSecret` **[string][39]** The consumer secret for the calling application

Returns **this**&#x20;

### WithAccessToken

Fluent extension for Authorization Code with access token

#### Parameters

*   `accessToken` **[string][39]** The access token for the calling application
*   `tokenExpiry` **datetime** The access token expiry for the calling application

Returns **this**&#x20;

### WithIdToken

Fluent extension for Authorization Code with id token

#### Parameters

*   `idToken` **[string][39]** The ID token for the calling application

Returns **this**&#x20;

### WithRefreshToken

Fluent extension for Authorization Code with refresh token

#### Parameters

*   `refreshToken` **[string][39]** The refresh token for the calling application

Returns **this**&#x20;

### WithPersistentStorage

Fluent extension for Authorization Code with persistent storage

#### Parameters

*   `persistentStorage` **IPersistentStorage** The persistent storage method for the calling application

Returns **this**&#x20;

### WithLogoutRedirect

Fluent extension to add logout redirect URL

#### Parameters

*   `logoutRedirectUrl` **[string][39]**&#x20;

Returns **this**&#x20;

### RetrieveToken

Retrieves an access token for the authenticated user

*   Throws **any** Thrown when a token endpoint is not provided by the endpoint provider
*   Throws **any** Thrown when a call to the token endpoint fails

Returns **PromiseLike<[string][39]>** A Task that resolves to the value of the access token on completion

### RetrieveTokenExpiry

Retrieves an access token expiry for the authenticated user

Returns **PromiseLike<[string][39]>** A Task that resolves to the value of the access token expiry on completion

### RetrieveIdToken

Retrieves an ID token for the authenticated user

*   Throws **any** Thrown when a token endpoint is not provided by the endpoint provider
*   Throws **any** Thrown when a call to the token endpoint fails

Returns **PromiseLike<[string][39]>** A Task that resolves to the value of the ID token on completion

### RetrieveRefreshToken

Retrieves a refresh token for the authenticated user

*   Throws **any** Thrown when a token endpoint is not provided by the endpoint provider
*   Throws **any** Thrown when a call to the token endpoint fails

Returns **PromiseLike<[string][39]>** A Task that resolves to the value of the refresh token on completion

### RevokeRefreshToken

Revokes refresh token for the authenticated user

*   Throws **any** Thrown when a token endpoint is not provided by the endpoint provider
*   Throws **any** Thrown when a call to the token endpoint fails

Returns **PromiseLike\<void>** A Task that revokes the refresh token on completion

### GenerateCodeVerifier

Static method to generate a code verifier

Returns **[string][39]** A code verifier string

## ITokenProvider

Interface for a token provider

## RetrieveToken

Returns **PromiseLike<[string][39]>** A promise that resolves to the value of the token on completion

## IEndpointProvider

Interface for an endpoint provider

## RetrieveAuthorizationEndpoint

Returns **PromiseLike<[string][39]>** A promise that resolves to the value of the authorization endpoint on completion

## RetrieveTokenEndpoint

Returns **PromiseLike<[string][39]>** A promise that resolves to the value of the token endpoint on completion

## RetrieveUserInfoEndpoint

Returns **PromiseLike<[string][39]>** A promise that resolves to the value of the user information endpoint on completion

## RetrieveTokenRevocationEndpoint

Returns **PromiseLike<[string][39]>** A promise that resolves to the value of the token revocation endpoint on completion

## RetrieveJSONWebKeySetEndpoint

Returns **PromiseLike<[string][39]>** A promise that resolves to the value of the JWKS endpoint on completion

## IPersistantStorage

Interface for persistant storage

## SetItem

### Parameters

*   `key` **[string][39]** The key to store the value under
*   `value` **[string][39]** The value to store

## GetItem

### Parameters

*   `key` **[string][39]** The key to retrieve the value from

Returns **[string][39]** The value to stored

## RemoveItem

### Parameters

*   `key` **[string][39]** The key the value is stored under

[1]: #refreshabletokenprovider

[2]: #constructor

[3]: #parameters

[4]: #withproofkeyforcodeexchange

[5]: #parameters-1

[6]: #withconsumersecret

[7]: #parameters-2

[8]: #withaccesstoken

[9]: #parameters-3

[10]: #withidtoken

[11]: #parameters-4

[12]: #withrefreshtoken

[13]: #parameters-5

[14]: #withpersistentstorage

[15]: #parameters-6

[16]: #withlogoutredirect

[17]: #parameters-7

[18]: #retrievetoken

[19]: #retrievetokenexpiry

[20]: #retrieveidtoken

[21]: #retrieverefreshtoken

[22]: #revokerefreshtoken

[23]: #generatecodeverifier

[24]: #itokenprovider

[25]: #retrievetoken-1

[26]: #iendpointprovider

[27]: #retrieveauthorizationendpoint

[28]: #retrievetokenendpoint

[29]: #retrieveuserinfoendpoint

[30]: #retrievetokenrevocationendpoint

[31]: #retrievejsonwebkeysetendpoint

[32]: #ipersistantstorage

[33]: #setitem

[34]: #parameters-8

[35]: #getitem

[36]: #parameters-9

[37]: #removeitem

[38]: #parameters-10

[39]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String