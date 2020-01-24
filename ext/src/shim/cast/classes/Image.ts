"use strict";

// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Image
export default class Image {
    public width: (number | null) = null;
    public height: (number | null) = null;

    constructor (public url: string) {}
}
