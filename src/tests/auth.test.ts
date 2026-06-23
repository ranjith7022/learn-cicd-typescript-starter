import { describe, it, expect } from "vitest";
import type { IncomingHttpHeaders } from "http";
import { getAPIKey } from "@/api/auth.js";

describe("getAPIKey", () => {
  it("returns API key when authorization header is valid", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey abc123",
    };

    const result = getAPIKey(headers);

    expect(result).toBe("abc123");
  });

  it("returns null when authorization header is missing", () => {
    const headers: IncomingHttpHeaders = {};

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  it("returns null when authorization type is not ApiKey", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Bearer abc123",
    };

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });

  it("returns null when authorization header has no key", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey",
    };

    const result = getAPIKey(headers);

    expect(result).toBeNull();
  });
});
