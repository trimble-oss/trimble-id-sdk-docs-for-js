### Table of Contents

*   [ImplicitGrantTokenProvider][1]
    *   [constructor][2]
        *   [Parameters][3]
    *   [WithScopes][4]
        *   [Parameters][5]
    *   [WithIDTokenValidation][6]
        *   [Parameters][7]
    *   [WithSilentAuthentication][8]
        *   [Parameters][9]
    *   [WithLogoutRedirect][10]
        *   [Parameters][11]
    *   [GetOAuthRedirect][12]
        *   [Parameters][13]
    *   [DecodeHash][14]
        *   [Parameters][15]
    *   [RetrieveToken][16]
    *   [RevokeToken][17]
    *   [GetOAuthLogoutRedirect][18]
        *   [Parameters][19]
*   [ITokenProvider][20]
*   [RetrieveToken][21]
*   [IEndpointProvider][22]
*   [RetrieveAuthorizationEndpoint][23]
*   [RetrieveTokenEndpoint][24]
*   [RetrieveUserInfoEndpoint][25]
*   [RetrieveTokenRevocationEndpoint][26]
*   [RetrieveJSONWebKeySetEndpoint][27]
*   [IClaimsetProvider][28]
*   [RetrieveClaimset][29]
*   [IPersistantStorage][30]
*   [SetItem][31]
    *   [Parameters][32]
*   [GetItem][33]
    *   [Parameters][34]
*   [RemoveItem][35]
    *   [Parameters][36]

## ImplicitGrantTokenProvider

In the Implicit Grant flow, Application gets an access token directly without an intermediate code exchange step.

### constructor

Public constructor for ImplicitGrantTokenProvider class

#### Parameters

*   `endpointProvider` **[IEndpointProvider][22]** An endpoint provider that provides the URL for the Trimble Identity authorization and token endpoints.      
    It can be be OpenIdEndpointProvider/FixedEndpointProvider
*   `consumerKey` **[string][37]** The consumer key for the calling application
*   `redirectUrl` **[string][37]** The URL to which Trimble Identity should redirect after successfully authenticating a user

### WithScopes

Fluent extension to add scopes

#### Parameters

*   `scopes` **IEnumerable<[string][37]>** The scopes to add to the token provider

Returns **this**&#x20;

### WithIDTokenValidation

Add ID token validation to an ImplicitGrantTokenProvider

#### Parameters

*   `persistantStorage` **[IPersistantStorage][30]** A store that persists the nonce value during the OAuth redirect workflow
*   `claimsetProvider` **[IClaimsetProvider][28]** A claimset provider that returns the JSON web keyset for validating the JWT ID token

Returns **this**&#x20;

### WithSilentAuthentication

Add silent authentication to an ImplicitGrantTokenProvider

#### Parameters

*   `state` **[string][37]** The state parameter to pass with silent authentication
*   `callback` **[string][37]** The callback URL for silent authentication

Returns **this**&#x20;

### WithLogoutRedirect

Fluent extension to add logout redirect URL

#### Parameters

*   `logoutRedirectUrl` **[string][37]**&#x20;

Returns **this**&#x20;

### GetOAuthRedirect

Get a redirect URL for Trimble Identity

#### Parameters

*   `state` **[string][37]** An optional state parameter that will be passed back to the caller via the redirect URL

<!---->

*   Throws **any** Thrown when an authorization endpoint is not provided by the endpoint provider

Returns **PromiseLike<[string][37]>** An awaitable Task that resolves to the redirect URL

### DecodeHash

Validate the hash parameters passed back to the application by Trimble Identity

#### Parameters

*   `hash` **[string][37]** The hash string from the URL

<!---->

*   Throws **any** Thrown when a token endpoint is not provided by the endpoint provider
*   Throws **any** Thrown when a call to the token endpoint fails

Returns **PromiseLike<[string][37]>** An awaitable Task

### RetrieveToken

Retrieves an access token for the authenticated user

*   Throws **any** Thrown when a token endpoint is not provided by the endpoint provider
*   Throws **any** Thrown when a call to the token endpoint fails

Returns **PromiseLike<[string][37]>** A Task that resolves to the value of the access token on completion

### RevokeToken

Revoke the token for the authenticated user and return a redirect URL to log them out of all Trimble Identity applications

*   Throws **any** Thrown when a token revocation endpoint is not provided by the endpoint provider
*   Throws **any** Thrown when a call to the token revocation endpoint fails

Returns **PromiseLike<[string][37]>** A Task that resolves to the value of the redirect URL on completion

### GetOAuthLogoutRedirect

Return a redirect URL to log out of all Trimble Identity applications

#### Parameters

*   `state` **[string][37]** An optional state parameter that will be passed back to the caller via the redirect URL

Returns **PromiseLike<[string][37]>** A promise that resolves to the value of the redirect URL on completion

## ITokenProvider

Interface for a token provider

## RetrieveToken

Returns **PromiseLike<[string][37]>** A promise that resolves to the value of the token on completion

## IEndpointProvider

Interface for an endpoint provider

## RetrieveAuthorizationEndpoint

Returns **PromiseLike<[string][37]>** A promise that resolves to the value of the authorization endpoint on completion

## RetrieveTokenEndpoint

Returns **PromiseLike<[string][37]>** A promise that resolves to the value of the token endpoint on completion

## RetrieveUserInfoEndpoint

Returns **PromiseLike<[string][37]>** A promise that resolves to the value of the user information endpoint on completion

## RetrieveTokenRevocationEndpoint

Returns **PromiseLike<[string][37]>** A promise that resolves to the value of the token revocation endpoint on completion

## RetrieveJSONWebKeySetEndpoint

Returns **PromiseLike<[string][37]>** A promise that resolves to the value of the JWKS endpoint on completion

## IClaimsetProvider

Interface for a claimset provider

## RetrieveClaimset

Returns **PromiseLike\<any>** A promise that resolves to the value of the claimset on completion

## IPersistantStorage

Interface for persistant storage

## SetItem

### Parameters

*   `key` **[string][37]** The key to store the value under
*   `value` **[string][37]** The value to store

## GetItem

### Parameters

*   `key` **[string][37]** The key to retrieve the value from

Returns **[string][37]** The value to stored

## RemoveItem

### Parameters

*   `key` **[string][37]** The key the value is stored under

[1]: #implicitgranttokenprovider

[2]: #constructor

[3]: #parameters

[4]: #withscopes

[5]: #parameters-1

[6]: #withidtokenvalidation

[7]: #parameters-2

[8]: #withsilentauthentication

[9]: #parameters-3

[10]: #withlogoutredirect

[11]: #parameters-4

[12]: #getoauthredirect

[13]: #parameters-5

[14]: #decodehash

[15]: #parameters-6

[16]: #retrievetoken

[17]: #revoketoken

[18]: #getoauthlogoutredirect

[19]: #parameters-7

[20]: #itokenprovider

[21]: #retrievetoken-1

[22]: #iendpointprovider

[23]: #retrieveauthorizationendpoint

[24]: #retrievetokenendpoint

[25]: #retrieveuserinfoendpoint

[26]: #retrievetokenrevocationendpoint

[27]: #retrievejsonwebkeysetendpoint

[28]: #iclaimsetprovider

[29]: #retrieveclaimset

[30]: #ipersistantstorage

[31]: #setitem

[32]: #parameters-8

[33]: #getitem

[34]: #parameters-9

[35]: #removeitem

[36]: #parameters-10

[37]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String