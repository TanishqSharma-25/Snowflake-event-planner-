"use client";

const baseUrl = process.env.NEXT_PUBLIC_AUTH_URL;

if (!baseUrl) {
  throw new Error("NEXT_PUBLIC_AUTH_URL is not defined");
}

export const authClient = createAuthClient({
  baseUrl,
});

function createAuthClient(arg0: { baseUrl: string; }) {
    throw new Error("Function not implemented.");
}
