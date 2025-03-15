/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAIL_JS_PUBLIC_KEY: string
  readonly VITE_EMAIL_JS_SERVICE_ID: string
  readonly VITE_EMAIL_JS_TEMPLATE_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 