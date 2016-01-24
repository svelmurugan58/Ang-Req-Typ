declare var require;
declare var angular;
declare var sanitize;
declare function define(...params: any[]): void;

declare module "require" {
    export = require;
}

declare module "angular" {
    export = angular;
}

declare module "sanitize" {
    export = sanitize;
}


