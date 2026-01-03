import React from "react";

export default function SecretariatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // We remove <html>, <body>, and the font import here 
  // because they are already provided by the Root Layout.
  return (
    <div className="flex flex-col w-full">
      {/* If you want a specific sidebar for secretariat, it goes here */}
      {children}
    </div>
  );
}