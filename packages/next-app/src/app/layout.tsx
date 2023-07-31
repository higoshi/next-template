import React from 'react';

export default function(params: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {params.children}
      </body>
    </html>
  );
}
