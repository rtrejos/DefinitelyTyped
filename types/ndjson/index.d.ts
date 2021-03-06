// Type definitions for ndjson 1.5
// Project: https://github.com/maxogden/ndjson
// Definitions by: Junxiao Shi <https://github.com/yoursunny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { ThroughStream } from "through";
import { DuplexOptions, Transform } from "stream";

export interface ParseOptions {
    strict?: boolean;
}

export function parse(opts?: ParseOptions): ThroughStream;

export function serialize(opts?: DuplexOptions): Transform;

export function stringify(opts?: DuplexOptions): Transform;
