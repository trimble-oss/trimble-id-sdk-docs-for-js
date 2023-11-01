### Table of Contents

*   [OpenIdKeysetProvider][1]
    *   [constructor][2]
        *   [Parameters][3]
    *   [RetrieveKeyset][4]
*   [IKeysetProvider][5]
    *   [RetrieveKeyset][6]
*   [IEndpointProvider][7]
*   [RetrieveAuthorizationEndpoint][8]
*   [RetrieveTokenEndpoint][9]
*   [RetrieveUserInfoEndpoint][10]
*   [RetrieveTokenRevocationEndpoint][11]
*   [RetrieveJSONWebKeySetEndpoint][12]
*   [Keyset][13]

## OpenIdKeysetProvider

OpenIdKeysetProvider provides a keyset for JSON web token

### constructor

Public constructor for OpenIdKeySetProvider class

#### Parameters

*   `endpointProvider` **[IEndpointProvider][7]** An endpoint provider that provides the URL for the Trimble Identity JSON web keyset endpoint

### RetrieveKeyset

Retrieves an dictionary of named keys

*   Throws **any** Thrown when a JSON web keyset endpoint is not provided by the endpoint provider
*   Throws **any** Thrown when a call to the JSON web keyset endpoint fails

Returns **PromiseLike<\[[Keyset][13]]>** A Task that resolves to a dictionary of named keys on completion

## IKeysetProvider

Interface for a JSON web keyset (JWKS) provider

### RetrieveKeyset

Retrieves an dictionary of named keys

Returns **PromiseLike<\[[Keyset][13]]>** A Task that resolvesss to a dictionary of named keys on completion

## IEndpointProvider

Interface for an endpoint provider

## RetrieveAuthorizationEndpoint

Returns **PromiseLike<[string][14]>** A promise that resolves to the value of the authorization endpoint on completion

## RetrieveTokenEndpoint

Returns **PromiseLike<[string][14]>** A promise that resolves to the value of the token endpoint on completion

## RetrieveUserInfoEndpoint

Returns **PromiseLike<[string][14]>** A promise that resolves to the value of the user information endpoint on completion

## RetrieveTokenRevocationEndpoint

Returns **PromiseLike<[string][14]>** A promise that resolves to the value of the token revocation endpoint on completion

## RetrieveJSONWebKeySetEndpoint

Returns **PromiseLike<[string][14]>** A promise that resolves to the value of the JWKS endpoint on completion

## Keyset

Interface for Keyset

[1]: #openidkeysetprovider

[2]: #constructor

[3]: #parameters

[4]: #retrievekeyset

[5]: #ikeysetprovider

[6]: #retrievekeyset-1

[7]: #iendpointprovider

[8]: #retrieveauthorizationendpoint

[9]: #retrievetokenendpoint

[10]: #retrieveuserinfoendpoint

[11]: #retrievetokenrevocationendpoint

[12]: #retrievejsonwebkeysetendpoint

[13]: #keyset

[14]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String