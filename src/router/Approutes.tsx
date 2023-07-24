import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CheckoutPage } from '@/features/checkout';
import { LoginPage } from '@/features/auth';
import { BusinessMainPage } from '@/features/business-main/businessMainPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BusinessMainPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/auth" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
