### Table of Contents

*   [IEndpointProvider][1]
    *   [RetrieveAuthorizationEndpoint][2]
    *   [RetrieveTokenEndpoint][3]
    *   [RetrieveUserInfoEndpoint][4]
    *   [RetrieveTokenRevocationEndpoint][5]
    *   [RetrieveEndSessionEndpoint][6]
    *   [RetrieveJSONWebKeySetEndpoint][7]

## IEndpointProvider

Interface for an endpoint provider

### RetrieveAuthorizationEndpoint

Retrieves a URL for the Trimble Identity authorization endpoint

Returns **PromiseLike<[string][8]>** A Task that resolves to the value of the URL on completion

### RetrieveTokenEndpoint

Retrieves a URL for the Trimble Identity authorization endpoint

Returns **PromiseLike<[string][8]>** A Task that resolves to the value of the URL on completion

### RetrieveUserInfoEndpoint

Retrieves a URL for the Trimble Identity authorization endpoint

Returns **PromiseLike<[string][8]>** A Task that resolves to the value of the URL on completion

### RetrieveTokenRevocationEndpoint

Retrieves a URL for the Trimble Identity token revocation endpoint

Returns **PromiseLike<[string][8]>** A Task that resolves to the value of the URL on completion

### RetrieveEndSessionEndpoint

Retrieves a URL for the Trimble Identity end session endpoint

Returns **PromiseLike<[string][8]>** A Task that resolves to the value of the URL on completion

### RetrieveJSONWebKeySetEndpoint

Retrieves a URL for the Trimble Identity authorization endpoint

Returns **PromiseLike<[string][8]>** A Task that resolves to the value of the URL on completion

[1]: #iendpointprovider

[2]: #retrieveauthorizationendpoint

[3]: #retrievetokenendpoint

[4]: #retrieveuserinfoendpoint

[5]: #retrievetokenrevocationendpoint

[6]: #retrieveendsessionendpoint

[7]: #retrievejsonwebkeysetendpoint

[8]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String