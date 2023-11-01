### Table of Contents

*   [ValidatedClaimsetProvider][1]
    *   [Parameters][2]
    *   [WithClockSkew][3]
        *   [Parameters][4]
    *   [WithTokenValidation][5]
        *   [Parameters][6]
    *   [RetrieveClaimset][7]
        *   [Parameters][8]

## ValidatedClaimsetProvider

Provides validated claimset for a JSON web token

### Parameters

*   `keysetProvider` **IKeysetProvider** A provider for the keyset used to validate the JWT claimset.
    It can be OpenIdKeysetProvider/FixedKeysetProvider

### WithClockSkew

Fluent extension for setting clock skew/grace period while validating the token.

#### Parameters

*   `clockSkewInSeconds` **[number][9]** is the acceptable time difference between signer and verifier in seconds.

### WithTokenValidation

Fluent extension for allowing token validation.

#### Parameters

*   `tokenValidationRequired` &#x20;
*   `token` **[boolean][10]** is validated before retrieving claims if tokenValidationRequired is set to true.

### RetrieveClaimset

Retrieves a validated claimset from a given JSON web token

#### Parameters

*   `token` &#x20;

<!---->

*   Throws **any** Thrown when the keyset provider does not provide the named key
*   Throws **any** Thrown when the JSON web token is invalid

Returns **PromiseLike\<any>** A Task that resolves to the claimset completion

[1]: #validatedclaimsetprovider

[2]: #parameters

[3]: #withclockskew

[4]: #parameters-1

[5]: #withtokenvalidation

[6]: #parameters-2

[7]: #retrieveclaimset

[8]: #parameters-3

[9]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[10]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean