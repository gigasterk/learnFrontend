import {BuildOptions} from "./types/config";
import type {Configuration as DevConfiguration} from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevConfiguration{
    return {
        port: options.PORT,
        open: true ,
        historyApiFallback: true,
    }
}