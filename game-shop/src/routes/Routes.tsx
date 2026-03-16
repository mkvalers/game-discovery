import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import FullWidthLayout from "../layout/FullWidthLayout";
import GameGridPage from "../pages/GameGridPage";
import GameInfoPage from "../pages/GameInfoPage";
import CartPage from "../pages/CartPage";
import PaymentPage from "../pages/PaymentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <GameGridPage />,
      },
      {
        path: "game/:id",
        element: <GameInfoPage />,
      },
    ],
  },
  {
    element: <FullWidthLayout />,
    children: [
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "payment",
        element: <PaymentPage />,
      },
    ],
  },
]);

export default router;
