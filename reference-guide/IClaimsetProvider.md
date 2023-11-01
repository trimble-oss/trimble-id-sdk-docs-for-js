### Table of Contents

*   [IClaimsetProvider][1]
    *   [RetrieveClaimset][2]
        *   [Parameters][3]
*   [Claimset][4]

## IClaimsetProvider

Interface for a claimset provider

### RetrieveClaimset

Retrieves a validate claimset from a given JSON web token

#### Parameters

*   `token` **[string][5]**&#x20;

Returns **PromiseLike<[Claimset][4]>** A Task that resolves to the claimset completion

## Claimset

Interface for claimset data

[1]: #iclaimsetprovider

[2]: #retrieveclaimset

[3]: #parameters

[4]: #claimset

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String