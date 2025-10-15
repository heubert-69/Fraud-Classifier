import { Card } from "@/components/ui/card";
import { Upload, FileText, AlertTriangle, CheckCircle2, TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme";

const Dashboard = () => {
  const metrics = [
    {
      title: "Documents Analyzed",
      value: "1,247",
      change: "+12.3%",
      trend: "up",
      icon: FileText,
      color: "text-primary",
    },
    {
      title: "Fraud Detected",
      value: "₱118.7M",
      change: "+8.2%",
      trend: "up",
      icon: AlertTriangle,
      color: "text-destructive",
    },
    {
      title: "Clean Reports",
      value: "892",
      change: "+5.1%",
      trend: "up",
      icon: CheckCircle2,
      color: "text-success",
    },
    {
      title: "Funds Monitored",
      value: "₱450M",
      change: "+2.4%",
      trend: "up",
      icon: DollarSign,
      color: "text-accent",
    },
  ];

  const recentAnalysis = [
    {
      id: 1,
      name: "LDRRMF Audit Report 2023",
      date: "Oct 30, 2024",
      status: "fraud",
      confidence: 94,
      amount: "₱118.7M",
      description: "Unspent disaster funds detected",
    },
    {
      id: 2,
      name: "Evacuation Center Budget",
      date: "May 7, 2024",
      status: "fraud",
      confidence: 89,
      amount: "₱50M",
      description: "Structural safety violations found",
    },
    {
      id: 3,
      name: "Monthly Financial Statement",
      date: "Oct 15, 2024",
      status: "clean",
      confidence: 98,
      amount: "₱2.3M",
      description: "No anomalies detected",
    },
    {
      id: 4,
      name: "Procurement Report Q3",
      date: "Sep 28, 2024",
      status: "clean",
      confidence: 96,
      amount: "₱5.8M",
      description: "All transactions verified",
    },
  ];

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">AI-powered financial fraud detection for Naga City</p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-gradient-primary hover:opacity-90">
            <Upload className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                <div className="flex items-baseline gap-2 mt-2">
                  <h3 className="text-2xl font-bold">{metric.value}</h3>
                  <span className={`text-xs font-medium flex items-center gap-1 ${metric.trend === "up" ? "text-success" : "text-destructive"
                    }`}>
                    {metric.trend === "up" ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {metric.change}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-xl bg-muted ${metric.color}`}>
                <metric.icon className="h-6 w-6" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Analysis */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Recent Analysis</h2>
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            View all
          </Button>
        </div>
        <div className="space-y-4">
          {recentAnalysis.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 rounded-lg border border-slate-200 dark:border-slate-600 bg-card hover:bg-muted/50 dark:hover:bg-slate-600 transition-colors"
            >
              <div className="flex items-start gap-4 flex-1">
                <div className={`p-2 rounded-lg ${item.status === "fraud" ? "bg-destructive-light" : "bg-success-light"
                  }`}>
                  {item.status === "fraud" ? (
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  ) : (
                    <CheckCircle2 className="h-5 w-5 text-success" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium">{item.name}</h3>
                    <Badge
                      variant={item.status === "fraud" ? "destructive" : "default"}
                      className={item.status === "fraud" ? "" : "bg-success text-success-foreground"}
                    >
                      {item.status === "fraud" ? "Fraud Detected" : "Clean"}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{item.confidence}% confidence</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                    <span className="text-sm font-medium">{item.amount}</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                View Details
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
