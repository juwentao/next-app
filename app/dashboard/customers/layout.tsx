// This file is for server-side logic, such as metadata
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chat',
};

import Chat from './page';
export default function Page() {
  return <Chat />;
}