import { LayoutDashboard, Upload, FileText, AlertTriangle, BarChart3, Settings, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Upload", href: "/upload", icon: Upload },
    { name: "Documents", href: "/documents", icon: FileText },
    { name: "Alerts", href: "/alerts", icon: AlertTriangle },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
  ];

  const secondary = [
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Help", href: "/help", icon: HelpCircle },
  ];

  return (
    <div className="flex h-screen w-64 flex-col bg-card border-r">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 px-6 border-b">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary">
          <FileText className="h-5 w-5 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold">FinAI</h1>
          <p className="text-xs text-muted-foreground">Fraud Detection</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        <div className="space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              end
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )
              }
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="pt-4 mt-4 border-t">
          <p className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            General
          </p>
          <div className="space-y-1">
            {secondary.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )
                }
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* User Profile */}
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
            NA
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Naga Admin</p>
            <p className="text-xs text-muted-foreground">admin@naga.gov.ph</p>
          </div>
        </div>
        <div className="mt-3">
          <NavLink
            to="/logout"
            className="w-full inline-flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50"
          >
            Log out
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
