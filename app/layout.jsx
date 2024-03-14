import "@styles/globals.css";
import Nav from "@app/components/Nav";

export const metadata = {
  title: "ToDo List",
  description: "Lista di attività molto molto utile",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="it">
      <body>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
