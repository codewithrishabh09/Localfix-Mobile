import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { getCurrentUser, login } from "./authApi";
import {
  getAccessToken,
  removeAccessToken,
  saveAccessToken,
} from "@/services/storage/authStorage";
import type {
  LoginRequest,
  User,
} from "@/types/auth";

type AuthContextValue = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: (payload: LoginRequest) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    restoreSession();
  }, []);

  async function restoreSession() {
    try {
      const storedToken = await getAccessToken();

      if (!storedToken) {
        return;
      }

      const currentUser = await getCurrentUser(storedToken);

      setToken(storedToken);
      setUser(currentUser);
    } catch {
      await removeAccessToken();
      setToken(null);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }

  async function signIn(payload: LoginRequest) {
    const response = await login(payload);

    await saveAccessToken(response.access_token);

    const currentUser = await getCurrentUser(
      response.access_token,
    );

    setToken(response.access_token);
    setUser(currentUser);
  }

  async function signOut() {
    await removeAccessToken();

    setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        isAuthenticated: Boolean(token && user),
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider",
    );
  }

  return context;
}