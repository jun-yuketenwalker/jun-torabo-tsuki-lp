// ESM shim over the prebuilt UMD `protobuf.min.js` (the "minimal" runtime
// build of protobufjs), which attaches itself to `globalThis.protobuf`.
// Re-exports exactly what `protobufjs/minimal`'s real index module exports,
// so `@zmkfirmware/zmk-studio-ts-client`'s generated code (which does
// `import * as _m0 from "protobufjs/minimal"`) works unmodified via an
// import map pointing "protobufjs/minimal" at this file.
const g = globalThis.protobuf;
if (!g) {
  throw new Error('protobuf.min.js must be loaded via a classic <script> tag before this module runs');
}
export const build = g.build;
export const Writer = g.Writer;
export const BufferWriter = g.BufferWriter;
export const Reader = g.Reader;
export const BufferReader = g.BufferReader;
export const util = g.util;
export const rpc = g.rpc;
export const roots = g.roots;
export const configure = g.configure;
