import React from 'react';

export default function(params: {
  children: React.ReactNode;
}) {
  return <>
    {params.children}
  </>;
}
