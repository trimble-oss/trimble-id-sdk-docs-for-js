import { OpenIdEndpointProvider } from '@trimble-oss/trimble-id';
export const CONSUMER_KEY = '<CLIENT_ID>';
export const CONSUMER_SECRET = '<CLIENT_SECRET>';
export const REQUESTED_SCOPE = '<SCOPE>';
export const REDIRECT_URI = '<REDIRECT_URI>';
export const ACCESS_TOKEN = '<ACCESS_TOKEN>';
export const ID_TOKEN = '<ID_TOKEN>'
export const REFRESH_TOKEN = '<REFRESH_TOKEN>'
export const TOKEN_EXPIRY = '<TOKEN_EXPIRY>'
export const OPENID_CONFIGURATION_URL = '<OPENID_CONFIGURATION_URL>';
export const endpointProvider = new OpenIdEndpointProvider(OPENID_CONFIGURATION_URL);
export const CODE_VERIFIER = '<CODE_VERIFIER>'
export const AUTH_ENDPOINT = '<AUTH_ENDPOINT>';
export const TOKEN_ENDPOINT = '<TOKEN_ENDPOINT>';
export const JWKS_ENDPOINT = '<JWKS_ENDPOINT>';
export const TOKEN_REVOCATION_ENDPOINT = '<TOKEN_REVOCATION_ENDPOINT>';