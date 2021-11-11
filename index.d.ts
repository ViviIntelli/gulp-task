/// <reference types="node" />
import type { SrcOptions } from 'vinyl-fs';
declare type TaskStream = NodeJS.ReadWriteStream;
declare type TaskCallback = (stream: TaskStream) => TaskStream;
export default class CreateTask {
    private readonly _src;
    private _common;
    private _developing;
    private _production;
    constructor(glob: string | string[], options?: SrcOptions);
    set common(callback: TaskCallback);
    set developing(callback: TaskCallback);
    set production(callback: TaskCallback);
    result(mode: 'dev' | 'prod'): () => TaskStream;
}
export {};
