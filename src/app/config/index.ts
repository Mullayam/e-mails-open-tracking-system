const APP_ENV = String(Bun.env.APP_ENV) || "DEV"
const APP_PORT = Number(Bun.env.APP_PORT) || 7800
const APP_DOMAIN = String(Bun.env.APP_DOMAIN) || "localhost"
const __config = {
    APP: {
        APP_PORT,
        APP_ENV,
        APP_DOMAIN,
        APP_URL: APP_ENV === "DEV" || APP_ENV === "undefined" ? `http://localhost:${APP_PORT}` : `https://${APP_DOMAIN}`,
        API_KEY: String(Bun.env.API_KEY),
        ALLOWED_PRIMARY_DOMAINS: String(Bun.env.ALLOWED_PRIMARY_DOMAINS),
        ALLOWED_IP: String(Bun.env.ALLOWED_IP),
        BLACKLISTED_IP: String(Bun.env.BLACKLISTED_IP),
        MAIL_TEMPLATE_PATH: String(Bun.env.MAIL_TEMPLATE_PATH),
    },
    STORAGE_DRIVER: String(Bun.env.STORAGE_DRIVER),
    SECRETS: {
        SALT: String(Bun.env.SALT),
        JWT_SECRET_KEY: String(Bun.env.JWT_SECRET_KEY),
        APP_SECRET: String(Bun.env.APP_SECRET),
        COOKIE_SECRET: String(Bun.env.COOKIE_SECRET),
        SESSION_SECRET: String(Bun.env.SESSION_SECRET),
    },
    DATABASE: {
        DB_NAME: String(Bun.env.DB_NAME),
        DB_HOST: String(Bun.env.DB_HOST),
        DB_USER: String(Bun.env.DB_USER),
        DB_PASS: String(Bun.env.DB_PASS),
        DB_PORT: Number(Bun.env.DB_PORT) || 5432,
    },
    MAIL_SETTINGS: {
        SMTP_HOST: String(Bun.env.SMTP_HOST),
        SMTP_HOST_USER: String(Bun.env.SMTP_HOST_USER),
        SMTP_HOST_PASS: String(Bun.env.SMTP_HOST_PASS),
        SMTP_HOST_PORT: Number(Bun.env.SMTP_HOST_PORT) || 465,
        SMTP_TYPE: String(Bun.env.SMTP_TYPE),
    },
    CACHE: {
        CACHE_ENBALED: String(Bun.env.CACHE_ENBALED),
        CACHE_HOST: String(Bun.env.CACHE_HOST),
        CACHE_PORT: Number(Bun.env.PORT) || 6379,
    },
    PROVIDERS: {
        
    },
};
export const ConfigService = {
    /**
     * A function that retrieves a value from the config based on the provided key.
     *
     * @param {keyof typeof __config} key - the key of the config to retrieve the value from
     * @return {typeof __config[key]} the value associated with the key in the config
     */
    get: (key: keyof typeof __config) => {
        const value = __config[key]
        if (!value) {
            throw new Error(`Missing config: ${key}`)
        }
        return value as typeof __config[typeof key]
    }
}

export const CONFIG = Object.freeze(__config)