# @trimble-oss/trimble-id

Trimble Identity SDK developer documentation for JavaScript/ TypeScript.

📚 [Documentation](#documentation) - 🚀 [Getting Started](#getting-started) - 💬 [Support](#support)

## Documentation

- [developer guide](https://github.com/trimble-oss/trimble-id-sdk-docs-for-js/blob/main/docs/DeveloperGuide.md) - Our Dev guide to work with various authentication grant types and its providers.
- [Samples](https://github.com/trimble-oss/trimble-id-sdk-docs-for-js/blob/main/samples) - a code guided samples for various supporeted grant type token providers.
- [FAQs](https://github.com/trimble-oss/trimble-id-sdk-docs-for-js/blob/main/docs/FAQ.md) - frequently asked questions answering the most common questions.
- [Release Notes](https://github.com/trimble-oss/trimble-id-sdk-docs-for-js/blob/main/release-notes) - release notes about trimble-id SDK.

## Getting Started

### Installation

Using [npm](https://npmjs.org) in your project directory run the following command:

```sh
npm install @trimble-oss/trimble-id
```

### Configure Trimble Identity

Create a new application in the [Trimble Developer Console](https://developer.console.trimble.com) portal and configure the following settings:

To register your service application in Trimble Developer Console:

1. On the left pane select Identity Management > Applications.

2. On the Applications home page, in the top right corner select + NEW APPLICATION. The Create Application page displays.

3. Select Continue to enter the applications details.

    | Field       | Description |
    | ----------- | ----------- |
    | Name        | Name of your application                    |
    | Display Name| Provide a display name of the application.  |
    | Description | Provide a description for the application.  |

4. Configure Grant Type and Token preferences of your application choice.

    | Field       | Description |
    | ----------- | ----------- |
    | Application Grant Types        | Select the grant types that will be used for authenticating users or applications.                    |
    | Allowed Callback URLS| Refers to the redirect URI of the application after logging into Identity. More than one URL can be added to this field. The total URI length should not exceed 400kb. This field appears only when you select the Authorization Grant type.  |
    | Allowed Logout URLS | The URIs that Identity can redirect to after log out. More than one UL can be added to this field. The total URI length should not exceed 400kb. This field appears only when you select the Authorization Grant type.  |

5. Select "Create Application" to save changes.

Take note of the Client ID and URLs under the "Basic Information" section. You'll need these values to configure the SDK.

For more information, see [Authentication documentation](https://developer.trimble.com/docs/authentication).

## Raise an issue

To provide feedback or report a bug, please [raise an issue on our issue tracker](https://github.com/trimble-oss/tcp-sdk-docs-for-net/issues).

## <a name="support">Support</a>

Send email to [cloudplatform_support@trimble.com](mailto:cloudplatform_support@trimble.com)