// High level of the component tree. Allows components to access session data such as user login status, user roles, and other user-specific data.

'use client';

import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => (
  <SessionProvider session={session}>
    {children}
  </SessionProvider>
)

export default Provider;