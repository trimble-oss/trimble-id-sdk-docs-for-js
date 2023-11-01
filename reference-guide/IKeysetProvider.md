### Table of Contents

*   [IKeysetProvider][1]
    *   [RetrieveKeyset][2]
*   [Keyset][3]

## IKeysetProvider

Interface for a JSON web keyset (JWKS) provider

### RetrieveKeyset

Retrieves an dictionary of named keys

Returns **PromiseLike<\[[Keyset][3]]>** A Task that resolves to a dictionary of named keys on completion

## Keyset

Interface for Keyset

[1]: #ikeysetprovider

[2]: #retrievekeyset

[3]: #keyset