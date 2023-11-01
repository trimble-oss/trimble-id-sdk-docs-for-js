### Table of Contents

*   [FixedEndpointProvider][1]
    *   [constructor][2]
        *   [Parameters][3]
    *   [WithAuthorizationEndpoint][4]
        *   [Parameters][5]
    *   [WithTokenEndpoint][6]
        *   [Parameters][7]
    *   [WithUserInfoEndpoint][8]
        *   [Parameters][9]
    *   [WithTokenRevocationEndpoint][10]
        *   [Parameters][11]
    *   [WithEndSessionEndpoint][12]
        *   [Parameters][13]
    *   [WithJWKSEndpoint][14]
        *   [Parameters][15]
    *   [RetrieveAuthorizationEndpoint][16]
*   [IEndpointProvider][17]
*   [RetrieveAuthorizationEndpoint][18]
*   [RetrieveTokenEndpoint][19]
*   [RetrieveUserInfoEndpoint][20]
*   [RetrieveTokenRevocationEndpoint][21]
*   [RetrieveJSONWebKeySetEndpoint][22]

## FixedEndpointProvider

FixedEndpointProvider helps to configure the fixed oauth endpoints like authorization\_endpoint, token\_endpoint, userinfo\_endpoint etc.

### constructor

Public constructor for FixedEndpointProvider class

#### Parameters

*   `authorizationEndpoint` **[string][23]?** The URL for the Trimble Identity authorization endpoint
*   `tokenEndpoint` **[string][23]?** The URL for the Trimble Identity token endpoint
*   `userInfoEndpoint` **[string][23]?** The URL for the Trimble Identity user information endpoint
*   `tokenRevocationEndpoint` **[string][23]?** The URL for the Trimble Identity token revocation endpoint, if not supplied this is computed relative to the token endpoint
*   `jwksEndpoint` **[string][23]?** The URL for the Trimble Identity JSON web keyset endpoint

### WithAuthorizationEndpoint

Add an authorization endpoint

#### Parameters

*   `authorizationEndpoint` **[string][23]** The URL for the Trimble Identity authorization endpoint

Returns **[IEndpointProvider][17]** A new instance of a FixedEndpointProvider

### WithTokenEndpoint

Add a token endpoint

#### Parameters

*   `tokenEndpoint` **[string][23]** The URL for the Trimble Identity token endpoint

Returns **[IEndpointProvider][17]** A new instance of a FixedEndpointProvider

### WithUserInfoEndpoint

Add a user info endpoint

#### Parameters

*   `userInfoEndpoint` **[string][23]** The URL for the Trimble Identity user information endpoint

Returns **[IEndpointProvider][17]** A new instance of a FixedEndpointProvider

### WithTokenRevocationEndpoint

Add a token revocation endpoint

#### Parameters

*   `tokenRevocationEndpoint` **[string][23]** The URL for the Trimble Identity token revocation endpoint

Returns **[IEndpointProvider][17]** A new instance of a FixedEndpointProvider

### WithEndSessionEndpoint

Add an end session endpoint

#### Parameters

*   `endSessionEndpoint` **[string][23]** The URL for the Trimble Identity end session endpoint, if not supplied this is computed relative to the token endpoint

Returns **[IEndpointProvider][17]** A new instance of a FixedEndpointProvider

### WithJWKSEndpoint

Add a JWKS endpoint

#### Parameters

*   `jwksEndpoint` **[string][23]** The URL for the Trimble Identity JSON web keyset endpoint

Returns **[IEndpointProvider][17]** A new instance of a FixedEndpointProvider

### RetrieveAuthorizationEndpoint

Retrieves a URL for the Trimble Identity authorization endpoint

Returns **PromiseLike<[string][23]>** A Task that resolves to the value of the URL on completion

## IEndpointProvider

Interface for an endpoint provider

## RetrieveAuthorizationEndpoint

Returns **PromiseLike<[string][23]>** A promise that resolves to the value of the authorization endpoint on completion

## RetrieveTokenEndpoint

Returns **PromiseLike<[string][23]>** A promise that resolves to the value of the token endpoint on completion

## RetrieveUserInfoEndpoint

Returns **PromiseLike<[string][23]>** A promise that resolves to the value of the user information endpoint on completion

## RetrieveTokenRevocationEndpoint

Returns **PromiseLike<[string][23]>** A promise that resolves to the value of the token revocation endpoint on completion

## RetrieveJSONWebKeySetEndpoint

Returns **PromiseLike<[string][23]>** A promise that resolves to the value of the JWKS endpoint on completion

[1]: #fixedendpointprovider

[2]: #constructor

[3]: #parameters

[4]: #withauthorizationendpoint

[5]: #parameters-1

[6]: #withtokenendpoint

[7]: #parameters-2

[8]: #withuserinfoendpoint

[9]: #parameters-3

[10]: #withtokenrevocationendpoint

[11]: #parameters-4

[12]: #withendsessionendpoint

[13]: #parameters-5

[14]: #withjwksendpoint

[15]: #parameters-6

[16]: #retrieveauthorizationendpoint

[17]: #iendpointprovider

[18]: #retrieveauthorizationendpoint-1

[19]: #retrievetokenendpoint

[20]: #retrieveuserinfoendpoint

[21]: #retrievetokenrevocationendpoint

[22]: #retrievejsonwebkeysetendpoint

[23]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String