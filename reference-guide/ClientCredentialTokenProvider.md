### Table of Contents

*   [ClientCredentialTokenProvider][1]
    *   [constructor][2]
        *   [Parameters][3]
    *   [WithScopes][4]
        *   [Parameters][5]
    *   [RetrieveToken][6]
*   [ITokenProvider][7]
*   [RetrieveToken][8]
*   [IEndpointProvider][9]
*   [RetrieveAuthorizationEndpoint][10]
*   [RetrieveTokenEndpoint][11]
*   [RetrieveUserInfoEndpoint][12]
*   [RetrieveTokenRevocationEndpoint][13]
*   [RetrieveJSONWebKeySetEndpoint][14]

## ClientCredentialTokenProvider

The Client Credentials grant is used when applications request an access token to access their own resources.

### constructor

Public constructor for ClientCredentialTokenProvider class

#### Parameters

*   `endpointProvider` **[IEndpointProvider][9]** An endpoint provider that provides the URL for the Trimble Identity token endpoint.
    It can be OpenIdEndpointProvider/FixedEndpointProvider
*   `consumerKey` **[string][15]** The consumer key for the calling application
*   `consumerSecret` **[string][15]** The consumer secret for the calling application

### WithScopes

Fluent extension to add scopes

#### Parameters

*   `scopes` **IEnumerable<[string][15]>** The scopes to add to the token provider

Returns **this**&#x20;

### RetrieveToken

Retrieves an access token for the application

*   Throws **any** Thrown when a token endpoint is not provided by the endpoint provider
*   Throws **any** Thrown when a call to the token endpoint fails

Returns **PromiseLike<[string][15]>** A promise that resolves to the value of the access token on completion

## ITokenProvider

Interface for a token provider

## RetrieveToken

Returns **PromiseLike<[string][15]>** A promise that resolves to the value of the token on completion

## IEndpointProvider

Interface for an endpoint provider

## RetrieveAuthorizationEndpoint

Returns **PromiseLike<[string][15]>** A promise that resolves to the value of the authorization endpoint on completion

## RetrieveTokenEndpoint

Returns **PromiseLike<[string][15]>** A promise that resolves to the value of the token endpoint on completion

## RetrieveUserInfoEndpoint

Returns **PromiseLike<[string][15]>** A promise that resolves to the value of the user information endpoint on completion

## RetrieveTokenRevocationEndpoint

Returns **PromiseLike<[string][15]>** A promise that resolves to the value of the token revocation endpoint on completion

## RetrieveJSONWebKeySetEndpoint

Returns **PromiseLike<[string][15]>** A promise that resolves to the value of the JWKS endpoint on completion

[1]: #clientcredentialtokenprovider

[2]: #constructor

[3]: #parameters

[4]: #withscopes

[5]: #parameters-1

[6]: #retrievetoken

[7]: #itokenprovider

[8]: #retrievetoken-1

[9]: #iendpointprovider

[10]: #retrieveauthorizationendpoint

[11]: #retrievetokenendpoint

[12]: #retrieveuserinfoendpoint

[13]: #retrievetokenrevocationendpoint

[14]: #retrievejsonwebkeysetendpoint

[15]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String