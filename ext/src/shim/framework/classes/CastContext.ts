"use strict";

import CastOptions from "./CastOptions";
import CastSession from "./CastSession";


export default class CastContext extends EventTarget {
    public endCurrentSession (_stopCasting: boolean): void {
        console.info("STUB :: CastContext#endCurrentSession");
    }

    // @ts-ignore
    public getCastState (): string {
        console.info("STUB :: CastContext#getCastState");
    }

    // @ts-ignore
    public getCurrentSession (): CastSession {
        console.info("STUB :: CastContext#getCurrentSession");
    }

    // @ts-ignore
    public getSessionState (): string {
        console.info("STUB :: CastContext#getSessionState");
    }

    // @ts-ignore
    public requestSession (): Promise<string> {
        console.info("STUB :: CastContext#requestSession");
    }

    public setOptions (_options: CastOptions): void {
        console.info("STUB :: CastContext#setOptions");
    }
}

export const instance = new CastContext();
