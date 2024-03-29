import { AppProvider } from "@components/appProvider";
import { AppRoutes } from "@routes/index";

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
