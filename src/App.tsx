import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';

import { store } from '@/store';
import { AppRouter } from '@/router';
import { theme } from '@/constants';

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}
