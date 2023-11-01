### Table of Contents

*   [BearerTokenHttpClientProvider][1]
    *   [Parameters][2]
*   [ITokenProvider][3]
*   [RetrieveToken][4]

## BearerTokenHttpClientProvider

Http client provider for API using bearer token authorization

Type: function (tokenProvider: [ITokenProvider][3], baseAddress: [string][5]): void

### Parameters

*   `tokenProvider`  can be a token provider like ClientCredentialTokenProvider
*   `baseAddress` **[string][5]**&#x20;

## ITokenProvider

Interface for a token provider

## RetrieveToken

Returns **PromiseLike<[string][5]>** A promise that resolves to the value of the token on completion

[1]: #bearertokenhttpclientprovider

[2]: #parameters

[3]: #itokenprovider

[4]: #retrievetoken

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String