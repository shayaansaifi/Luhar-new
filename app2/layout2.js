export const metadata = {
  title: "LUHAAR",
  description: "Premium Fabrication & Construction Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#ffffff",
        }}
      >
        {children}
      </body>
    </html>
  );
}
