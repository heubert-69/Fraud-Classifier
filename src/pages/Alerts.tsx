import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, AlertCircle } from "lucide-react";

const Alerts = () => {
  const alerts = [
    {
      id: 1,
      title: "High-Risk Transaction Detected",
      description: "₱118.7M unspent LDRRMF funds flagged for irregular utilization pattern",
      severity: "high",
      time: "2 hours ago",
      document: "COA Audit Report 2023",
    },
    {
      id: 2,
      title: "Budget Reallocation Anomaly",
      description: "Unauthorized fund realignment detected in disaster preparedness budget",
      severity: "high",
      time: "5 hours ago",
      document: "LDRRMF Fund Utilization Q2",
    },
    {
      id: 3,
      title: "Structural Safety Violation",
      description: "₱50M evacuation center construction flagged for compliance issues",
      severity: "critical",
      time: "1 day ago",
      document: "Evacuation Center Budget",
    },
    {
      id: 4,
      title: "Unusual Spending Pattern",
      description: "Irregular disbursement timing detected in quarterly fund release",
      severity: "medium",
      time: "2 days ago",
      document: "Disaster Fund Allocation 2024",
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "destructive";
      case "high":
        return "destructive";
      case "medium":
        return "default";
      default:
        return "secondary";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <AlertTriangle className="h-5 w-5" />;
      case "high":
        return <AlertCircle className="h-5 w-5" />;
      default:
        return <TrendingUp className="h-5 w-5" />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Fraud Alerts</h1>
              <p className="text-muted-foreground">
                Real-time notifications of suspicious financial activities
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground mt-1">Requires immediate attention</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">High Priority</CardTitle>
                    <AlertCircle className="h-4 w-4 text-destructive" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground mt-1">Review within 24 hours</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">Medium Priority</CardTitle>
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground mt-1">Monitor closely</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              {alerts.map((alert) => (
                <Card key={alert.id} className="border-l-4" style={{
                  borderLeftColor: alert.severity === "critical" || alert.severity === "high" 
                    ? "hsl(var(--destructive))" 
                    : "hsl(var(--primary))"
                }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        alert.severity === "critical" || alert.severity === "high"
                          ? "bg-destructive/10 text-destructive"
                          : "bg-primary/10 text-primary"
                      }`}>
                        {getSeverityIcon(alert.severity)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-lg">{alert.title}</h3>
                          <Badge variant={getSeverityColor(alert.severity) as any}>
                            {alert.severity.toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{alert.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{alert.time}</span>
                          <span>•</span>
                          <span>Document: {alert.document}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Alerts;
