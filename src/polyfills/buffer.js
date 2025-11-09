// src/polyfills/buffer.js
// Polyfill for gray-matter / Node Buffer in the browser environment.
import { Buffer } from "buffer";

if (typeof globalThis !== "undefined" && !globalThis.Buffer) {
  globalThis.Buffer = Buffer;
}
