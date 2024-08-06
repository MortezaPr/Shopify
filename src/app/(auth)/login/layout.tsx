import { Rtl } from "./Rtl";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Rtl>{children}</Rtl>;
}
