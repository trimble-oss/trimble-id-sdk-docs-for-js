### Table of Contents

*   [FixedKeysetProvider][1]
    *   [constructor][2]
        *   [Parameters][3]
    *   [RetrieveKeyset][4]
*   [Keyset][5]
*   [IKeysetProvider][6]
*   [RetrieveKeyset][7]

## FixedKeysetProvider

FixedKeysetProvider helps to return a fixed key set

### constructor

Public constructor for FixedKeySetProvider class

#### Parameters

*   `keyset` **\[[Keyset][5]]** A dictionary of named keys

### RetrieveKeyset

Retrieves an dictionary of named keys

Returns **PromiseLike<\[[Keyset][5]]>** A Task that resolves to a dictionary of named keys on completion

## Keyset

Interface for Keyset

## IKeysetProvider

Interface for a JSON web keyset (JWKS) provider

## RetrieveKeyset

Returns **PromiseLike\<any>** A promise that resolves to a dictionary of named keys on completion

[1]: #fixedkeysetprovider

[2]: #constructor

[3]: #parameters

[4]: #retrievekeyset

[5]: #keyset

[6]: #ikeysetprovider

[7]: #retrievekeyset-1