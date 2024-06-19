import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,  modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,  modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },
  }
  interface PublicRuntimeConfig {
   environment: {
      npm_package_devDependencies_lint_staged: string,

      npm_package_devDependencies_prettier: string,

      npm_package_devDependencies__nuxt_devtools: string,

      TERM_PROGRAM: string,

      NODE: string,

      npm_package_dependencies_lodash_debounce: string,

      INIT_CWD: string,

      _P9K_TTY: string,

      npm_package_overrides_vue: string,

      npm_package_devDependencies_typescript: string,

      npm_package_dependencies_axios: string,

      npm_config_version_git_tag: string,

      SHELL: string,

      TERM: string,

      TMPDIR: string,

      npm_package_dependencies__vee_validate_rules: string,

      npm_package_scripts_lint: string,

      npm_config_init_license: string,

      TERM_PROGRAM_VERSION: string,

      npm_package_dependencies_tw_elements: string,

      npm_package_lint_staged____js_ts_vue_: string,

      npm_package_devDependencies_eslint_plugin_tailwindcss: string,

      npm_package_scripts_lint_ts: string,

      npm_package_scripts_dev: string,

      MallocNanoZone: string,

      ORIGINAL_XDG_CURRENT_DESKTOP: string,

      ZDOTDIR: string,

      npm_package_devDependencies_sass_loader: string,

      npm_package_lint_staged____md_json_yaml_html_: string,

      npm_package_private: string,

      npm_config_registry: string,

      ZSH: string,

      npm_package_devDependencies_stylelint_config_standard: string,

      npm_package_scripts_generate: string,

      npm_package_readmeFilename: string,

      npm_package_dependencies_dayjs: string,

      USER: string,

      npm_package_description: string,

      LS_COLORS: string,

      COMMAND_MODE: string,

      npm_package_dependencies_nprogress: string,

      npm_package_devDependencies_stylelint_config_tailwindcss: string,

      npm_package_dependencies_vue_multiselect: string,

      SSH_AUTH_SOCK: string,

      npm_package_dependencies_lodash: string,

      __CF_USER_TEXT_ENCODING: string,

      npm_package_devDependencies_postcss: string,

      npm_package_devDependencies_eslint_plugin_simple_import_sort: string,

      npm_package_devDependencies_eslint: string,

      npm_execpath: string,

      npm_package_devDependencies__typescript_eslint_eslint_plugin: string,

      npm_package_husky_hooks_pre_commit: string,

      PAGER: string,

      npm_package_devDependencies_stylelint_prettier: string,

      LSCOLORS: string,

      npm_package_devDependencies_eslint_plugin_prettier: string,

      npm_package_devDependencies__typescript_eslint_parser: string,

      PATH: string,

      npm_config_argv: string,

      npm_package_scripts_lint_fix: string,

      npm_package_scripts_postinstall: string,

      _: string,

      __CFBundleIdentifier: string,

      USER_ZDOTDIR: string,

      npm_package_dependencies_bignumber_js: string,

      PWD: string,

      npm_package_devDependencies_postcss_comment: string,

      VSCODE_NONCE: string,

      npm_package_scripts_preview: string,

      P9K_SSH: string,

      npm_lifecycle_event: string,

      LANG: string,

      P9K_TTY: string,

      npm_package_name: string,

      npm_package_devDependencies_eslint_plugin_import: string,

      npm_package_devDependencies_sass: string,

      npm_package_devDependencies__nuxtjs_eslint_config_typescript: string,

      npm_package_scripts_build: string,

      npm_config_version_commit_hooks: string,

      XPC_FLAGS: string,

      VSCODE_GIT_ASKPASS_EXTRA_ARGS: string,

      npm_package_devDependencies_stylelint: string,

      npm_package_dependencies_vee_validate: string,

      npm_config_bin_links: string,

      npm_package_devDependencies_eslint_config_prettier: string,

      npm_package_dependencies_vue_i18n: string,

      XPC_SERVICE_NAME: string,

      npm_package_version: string,

      npm_package_scripts_lint_style: string,

      VSCODE_INJECTION: string,

      npm_package_devDependencies_eslint_import_resolver_typescript: string,

      npm_package_devDependencies_autoprefixer: string,

      npm_package_dependencies_vue_echarts: string,

      npm_package_dependencies_pinia: string,

      HOME: string,

      SHLVL: string,

      npm_package_dependencies__types_nprogress: string,

      VSCODE_GIT_ASKPASS_MAIN: string,

      npm_package_devDependencies_eslint_plugin_vue: string,

      npm_package_devDependencies_prettier_eslint: string,

      npm_package_dependencies_mitt: string,

      npm_package_dependencies_lodash_merge: string,

      npm_config_save_prefix: string,

      npm_config_strict_ssl: string,

      npm_package_devDependencies_husky: string,

      npm_package_devDependencies__commitlint_cli: string,

      npm_package_dependencies__vee_validate_i18n: string,

      npm_config_version_git_message: string,

      npm_package_dependencies_echarts: string,

      npm_package_scripts_lint_prettier: string,

      npm_package_dependencies__nuxtjs_tailwindcss: string,

      LOGNAME: string,

      LESS: string,

      YARN_WRAP_OUTPUT: string,

      npm_lifecycle_script: string,

      npm_package_lint_staged____css_scss_sass_html_vue_: string,

      VSCODE_GIT_IPC_HANDLE: string,

      npm_package_devDependencies_eslint_plugin_nuxt: string,

      npm_package_dependencies_lodash_throttle: string,

      npm_package_dependencies__pinia_nuxt: string,

      npm_package_dependencies_ethers: string,

      npm_package_dependencies__vuepic_vue_datepicker: string,

      npm_package_devDependencies_nuxt: string,

      npm_config_version_git_sign: string,

      npm_config_ignore_scripts: string,

      npm_config_user_agent: string,

      GIT_ASKPASS: string,

      VSCODE_GIT_ASKPASS_NODE: string,

      _P9K_SSH_TTY: string,

      npm_package_scripts_prepare: string,

      npm_package_devDependencies_stylelint_config_recommended_vue: string,

      npm_config_init_version: string,

      npm_config_ignore_optional: string,

      npm_package_devDependencies__commitlint_config_conventional: string,

      npm_package_dependencies_vue_toastification: string,

      npm_package_scripts_lint_staged: string,

      COLORTERM: string,

      npm_node_execpath: string,

      npm_config_version_tag_prefix: string,

      NODE_ENV: string,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }