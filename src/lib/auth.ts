const TOKEN_KEY = "clear_audit_token";
const USERS_KEY = "clear_audit_users";

export const setToken = (token: string) => {
  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch (e) {
    // ignore
  }
};

export const getToken = (): string | null => {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch (e) {
    return null;
  }
};

export const clearToken = () => {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch (e) {
    // ignore
  }
};

export const isAuthenticated = () => !!getToken();

type RegisterResult = { success: boolean; message?: string };

export const registerUser = (email: string, password: string, name?: string): RegisterResult => {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    const users = raw ? JSON.parse(raw) as Record<string, any> : {};

    if (users[email]) {
      return { success: false, message: "User already exists" };
    }

    users[email] = { password, name: name || "" };
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return { success: true };
  } catch (e) {
    return { success: false, message: "Could not register user" };
  }
};

export default { setToken, getToken, clearToken, isAuthenticated };
