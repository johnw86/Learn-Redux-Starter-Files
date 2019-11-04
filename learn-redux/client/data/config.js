import Raven from 'raven-js';

const sentry_key = '561074ae81df4030adf56fe51822dd44';
const sentry_app = '1807662';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
    Raven.captureException(ex, {
        extra: context
    });
    /*eslint no-console:0*/
    window && window.console && console.error && console.error(ex);
}
