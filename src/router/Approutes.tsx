import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainMenuPage } from '@/features/main-menu';
import { CheckoutPage } from '@/features/checkout';
import { LoginPage } from '@/features/auth';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenuPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/auth" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
