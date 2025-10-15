import { Search, Bell, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/lib/theme";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-card px-6">
      <div className="flex-1">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search documents..."
            className="pl-10"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        {/** Theme toggle */}
        <ThemeToggle />

        {/* Notifications dropdown */}
        <NotificationsMenu />
      </div>
    </header>
  );
};

 
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} title="Toggle theme" className="inline-flex items-center justify-center p-2 rounded-md border">
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};

export default Header;

const NotificationsMenu = () => {
  const STORAGE_KEY = "clear_audit_notifications_v1";
  const initial: Array<{ id: string; title: string; body: string; read?: boolean }> = [
    { id: "1", title: "System maintenance", body: "Scheduled for Oct 20, 2025", read: false },
    { id: "2", title: "New analysis completed", body: "LDRRMF Audit Report 2023", read: false },
    { id: "3", title: "New alert detected", body: "Unspent disaster funds", read: false },
  ];

  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return initial;
      return JSON.parse(raw);
    } catch (e) {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {}
  }, [items]);

  const unread = items.filter((i) => !i.read).length;

  const markRead = (id: string) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, read: true } : it)));
  };

  const markAllRead = () => {
    setItems((prev) => prev.map((it) => ({ ...it, read: true })));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unread > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-destructive text-xs">
              {unread}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={12} align="end" className="w-96">
        <div className="flex items-center justify-between px-3 py-2">
          <div className="text-sm font-semibold">Notifications</div>
          <button className="text-xs text-muted-foreground hover:underline" onClick={markAllRead}>Mark all read</button>
        </div>
        <DropdownMenuSeparator />

        <div className="max-h-64 overflow-y-auto">
          {items.map((it) => (
            <DropdownMenuItem
              key={it.id}
              onSelect={() => markRead(it.id)}
              className={`flex flex-col items-start gap-1 ${it.read ? "opacity-60" : ""}`}
            >
              <span className="font-medium">{it.title}</span>
              <span className="text-xs text-muted-foreground">{it.body}</span>
            </DropdownMenuItem>
          ))}
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => { /* view all - noop for now */ }}>
          View all notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
