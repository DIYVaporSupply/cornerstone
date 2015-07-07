import utils from 'bigcommerce/stencil-utils';

/**
 * European websites must notify users of cookies to comply with European Union law.
 * This will alert shoppers that this website uses cookies.
 */
export default function () {
    // Here you can override the default browser alert box by hooking to the 'cookie-privacy-notification' hook.
    utils.hooks.on('cookie-privacy-notification', (privacyMessage) => {

        // You can make your own custom modal or alert box appear in your theme using the privacyMessage provided
        // myCustomAlert(privacyMessage);

        // Return true in this hook to prevent the default browser alert from occurring in stencil-utils
        //return true;
    });
}
