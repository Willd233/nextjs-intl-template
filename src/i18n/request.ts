import { getUserLocale } from "./locales";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

type TLocale = "en" | "es";

const defaultLocale: TLocale = "en";

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const nameCookie = "locale";

  const locale =
    (await cookieStore).get(nameCookie)?.value ||
    (await getUserLocale({ name: nameCookie, defaultLocale }));

  try {
    const messages = (await import(`@/lang/${locale}.json`)).default;
    return { messages, locale };
  } catch (error) {
    console.error(
      `Error de carga para la traduccion de idioma ${locale}`,
      error
    );
    return { locale: defaultLocale, messages: {} };
  }
});
