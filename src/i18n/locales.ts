"use server";

import { cookies } from "next/headers";

type TSetCookie = {
  name: string;
  value: "en" | "es";
};

type TGetCookie = {
  name: string;
  defaultLocale: "en" | "es";
};

export async function getUserLocale(props: TGetCookie) {
  const { name, defaultLocale } = props;

  return (await cookies()).get(name)?.value || defaultLocale;
}

export async function setUserLocale(props: TSetCookie) {
  const { name, value } = props;

  (await cookies()).set(name, value);
}
