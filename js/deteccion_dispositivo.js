const d = document;
const n = navigator;
const ua = n.userAgent;

export function userDeviceInfo(id){
    const $id = d.getElementById(id);
    const isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/i),
        any: function () {
            return this.android() || this.ios() || this.windows();
        }
    };
    const isDesktop = {};
    const isBrowser = {};
}