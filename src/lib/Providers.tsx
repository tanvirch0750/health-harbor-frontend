'use client';

import { store } from '@/redux/store';
import { Tchildren } from '@/types/global';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import StyledComponentsRegistry from './AntdRegistry';

function Providers({ children }: Tchildren) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </Provider>
    </SessionProvider>
  );
}

export default Providers;
