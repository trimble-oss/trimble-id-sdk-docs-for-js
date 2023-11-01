### Table of Contents

*   [OpenIdEndpointProvider][1]
    *   [constructor][2]
        *   [Parameters][3]
    *   [RetrieveAuthorizationEndpoint][4]
    *   [RetrieveTokenEndpoint][5]
    *   [RetrieveUserInfoEndpoint][6]
    *   [RetrieveTokenRevocationEndpoint][7]
    *   [RetrieveEndSessionEndpoint][8]
    *   [RetrieveJSONWebKeySetEndpoint][9]
*   [IEndpointProvider][10]
*   [RetrieveAuthorizationEndpoint][11]
*   [RetrieveTokenEndpoint][12]
*   [RetrieveUserInfoEndpoint][13]
*   [RetrieveTokenRevocationEndpoint][14]
*   [RetrieveJSONWebKeySetEndpoint][15]

## OpenIdEndpointProvider

OpenIdEndpointProvider helps to discover various endpoints like authorization\_endpoint, token\_endpoint, userinfo\_endpoint etc.

### constructor

Public constructor for OpenIdEndpointProvider class

#### Parameters

*   `configurationEndpoint` **[string][16]** The URL for the Trimble Identity OpenID well known configuration endpoint
    Production : [https://id.trimble.com/.well-known/openid-configuration][18]
*   `tokenRevocationEndpoint` **[string][16]?** The URL for the Trimble Identity token revocation endpoint, if not supplied this is computed relative to the token endpoint

### RetrieveAuthorizationEndpoint

Retrieves a URL for the Trimble Identity authorization endpoint

*   Throws **any** Thrown if the configuration endpoint returns an error

Returns **PromiseLike<[string][16]>** A Task that resolves to the value of the URL on completion

### RetrieveTokenEndpoint

Retrieves a URL for the Trimble Identity authorization endpoint

*   Throws **any** Thrown if the configuration endpoint returns an error

Returns **PromiseLike<[string][16]>** A Task that resolves to the value of the URL on completion

### RetrieveUserInfoEndpoint

Retrieves a URL for the Trimble Identity authorization endpoint

*   Throws **any** Thrown if the configuration endpoint returns an error

Returns **PromiseLike<[string][16]>** A Task that resolves to the value of the URL on completion

### RetrieveTokenRevocationEndpoint

Retrieves a URL for the Trimble Identity token revocation endpoint

*   Throws **any** Thrown if the configuration endpoint returns an error

Returns **PromiseLike<[string][16]>** A Task that resolves to the value of the URL on completion

### RetrieveEndSessionEndpoint

Retrieves a URL for the Trimble Identity end session endpoint

*   Throws **any** Thrown if the configuration endpoint returns an error

Returns **PromiseLike<[string][16]>** A Task that resolves to the value of the URL on completion

### RetrieveJSONWebKeySetEndpoint

Retrieves a URL for the Trimble Identity authorization endpoint

*   Throws **any** Thrown if the configuration endpoint returns an error

Returns **PromiseLike<[string][16]>** A Task that resolves to the value of the URL on completion

## IEndpointProvider

Interface for an endpoint provider

## RetrieveAuthorizationEndpoint

Returns **PromiseLike<[string][16]>** A promise that resolves to the value of the authorization endpoint on completion

## RetrieveTokenEndpoint

Returns **PromiseLike<[string][16]>** A promise that resolves to the value of the token endpoint on completion

## RetrieveUserInfoEndpoint

Returns **PromiseLike<[string][16]>** A promise that resolves to the value of the user information endpoint on completion

## RetrieveTokenRevocationEndpoint

Returns **PromiseLike<[string][16]>** A promise that resolves to the value of the token revocation endpoint on completion

## RetrieveJSONWebKeySetEndpoint

Returns **PromiseLike<[string][16]>** A promise that resolves to the value of the JWKS endpoint on completion

[1]: #openidendpointprovider

[2]: #constructor

[3]: #parameters

[4]: #retrieveauthorizationendpoint

[5]: #retrievetokenendpoint

[6]: #retrieveuserinfoendpoint

[7]: #retrievetokenrevocationendpoint

[8]: #retrieveendsessionendpoint

[9]: #retrievejsonwebkeysetendpoint

[10]: #iendpointprovider

[11]: #retrieveauthorizationendpoint-1

[12]: #retrievetokenendpoint-1

[13]: #retrieveuserinfoendpoint-1

[14]: #retrievetokenrevocationendpoint-1

[15]: #retrievejsonwebkeysetendpoint-1

[16]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[18]: https://id.trimble.com/.well-known/openid-configuration