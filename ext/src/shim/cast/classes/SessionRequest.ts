"use strict";

import { Capability } from "../enums";
import Timeout from "./Timeout";


// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.SessionRequest
export default class SessionRequest {
    public language: (string | null) = null;
    public dialRequest: any = null;

    constructor (
            public appId: string
          , public capabilities = [
                Capability.VIDEO_OUT
              , Capability.AUDIO_OUT ]
          , public requestSessionTimeout: number
                    = (new Timeout()).requestSession) {}
}
