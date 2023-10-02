'use client';

import { store } from '@/redux/store';
import { Tchildren } from '@/types/global';
import { Provider } from 'react-redux';
import StyledComponentsRegistry from './AntdRegistry';

function Providers({ children }: Tchildren) {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </Provider>
  );
}

export default Providers;
