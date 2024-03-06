import { ReduxProvider } from "@/redux/store";
import ReactQueryProvider from "./reactQuery.context";
import AuthProvider from "@/contexts/auth.context";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <ReduxProvider>
        <AuthProvider>{children}</AuthProvider>
      </ReduxProvider>
    </ReactQueryProvider>
  );
}

export default Providers;
