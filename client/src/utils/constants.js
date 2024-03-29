import ulog from "ulog";

function setLogLevelIfDefault() {
    const urlString = window.location.search;
    const urlParams = new URLSearchParams(urlString);
    if(!urlParams.has("log")) {
        ulog.level = ulog.ERROR
    }
}

setLogLevelIfDefault();

export const LOG = ulog("App");

export const CLIENT_TEAM_NAME = "t11 NULL Terminators";

export const EARTH_RADIUS_UNITS_DEFAULT = {"miles": 3959};

export const PROTOCOL_VERSION = 4;

export const HTTP_OK = 200;
export const HTTP_BAD_REQUEST = 400;
export const HTTP_INTERNAL_SERVER_ERROR = 500;
