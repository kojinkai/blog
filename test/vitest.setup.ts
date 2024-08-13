import "@testing-library/jest-dom";
import { noop } from "lodash/fp";
import { vi } from "vitest";
// import { server } from "./mocks/node";

beforeAll(() => {
  // server.listen();

  vi.mock("next/headers", async (/*importOriginal*/) => {
    return {
      cookies: () => {
        return {
          get: (/*name: string*/) => {
            return {
              value: "cookie",
            };
          },
          set: (/*name: string*/) => {
            return "bar";
          },
        };
      },
    };
  });
});

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: noop,
    events: {
      on: noop,
      off: noop,
      emit: noop,
    },
    isFallback: false,
    refresh: noop,
  }),
  usePathname: () => "http://localhost:3000/en/properties",
}));

vi.mock("next/font/google", () => ({
  default: () => ({
    src: "foo",
    className: "foo",
    style: {
      fontFamily: "foo",
      fontWeight: 500,
      fontStyle: "foo",
    },
  }),
  IBM_Plex_Sans: () => ({
    src: "foo",
    className: "foo",
    style: {
      fontFamily: "foo",
      fontWeight: 500,
      fontStyle: "foo",
    },
  }),
  IBM_Plex_Mono: () => ({
    src: "foo",
    className: "foo",
    style: {
      fontFamily: "foo",
      fontWeight: 500,
      fontStyle: "foo",
    },
  }),
}));

afterEach(() => {
  // server.resetHandlers();
});

afterAll(() => {
  // server.close();
});
