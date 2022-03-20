/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SPOONACULAR_API_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
