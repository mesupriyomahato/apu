import "./styles/globals.scss";
import SmoothScrolling from "@/components/smoothscroll";


export default async function RootLayout(
  {
    children
  }: {
    children: React.ReactNode;
  }
) {

  return (

    <html lang="en">
      <body>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
