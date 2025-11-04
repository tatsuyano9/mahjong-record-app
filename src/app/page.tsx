import { redirect } from "next/navigation";

type DefaultLocaleType = "en" | "ja";

const defaultLocale: DefaultLocaleType = "ja";

const HomeRedirect = () => {
  redirect(`/${defaultLocale}/home`);
};

export default HomeRedirect;
