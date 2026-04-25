const isDev = import.meta.env.DEV
export const logger = {
    log: (...args: any[]) => {
        console.log('[ClientFlow]', ...args)
    },
    error: (...args: any[]) => {
        console.error('[ClientFlow Error]', ...args)
    },
    warn: (...args: any[]) => {
        console.warn('[ClientFlow Warning]', ...args)
    },
    info: (...args: any[]) => {
        console.info('[ClientFlow Info]', ...args)
    },
    debug: (...args: any[]) => {
        if (isDev) {
            console.debug('[ClientFlow Debug]', ...args)
        }
    },
    table: (data: any) => {
        if (isDev) {
            console.table(data)
        }
    },
}
export default logger
