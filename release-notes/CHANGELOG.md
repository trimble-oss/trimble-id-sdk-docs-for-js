## 0.0.7 (2025-02-25)

* Fixed the compatibility issue for webpack bundling

# 0.0.6 (2024-07-16)

* Type declaration added as an interface for HttpClient providers, therefore any API service client will utilize this type for service creation

# 0.0.5 (2024-05-30)

* Added SimpleHttpClientProvider to make API calls
* Fixed the type declaration for function types

# 0.0.4 (2024-04-29)

* Resolved issue with token refresh mechanism to properly handle scope
* Eliminated TypeScript warnings that contain some uncompiled .ts files for the interfaces.

# 0.0.3 (2024-02-28)

* Security vulnerability fixes
* Improved Analytics tracking with inclusion of application id all type of events

# 0.0.2 (2024-01-08)

CORS issue fix, Axios vulnerability fix and some improvements on capturing analytics events

# 0.0.1 (2023-11-03)

Initial stable version of trimble-id SDK

- It is a JavaScript/TypeScript library for OAuth2.0 related protocol operations. It provides:
    - Discovery of endpoints
    - Supported Grant Types Token Providers
    - Token Validation
    - HTTP Client Handler to access a given API with the access token
