import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Analytics = () => {
  const monthlyData = [
    { month: "Jan", fraudulent: 4, nonFraudulent: 12 },
    { month: "Feb", fraudulent: 3, nonFraudulent: 15 },
    { month: "Mar", fraudulent: 6, nonFraudulent: 10 },
    { month: "Apr", fraudulent: 5, nonFraudulent: 14 },
    { month: "May", fraudulent: 8, nonFraudulent: 9 },
    { month: "Jun", fraudulent: 7, nonFraudulent: 11 },
  ];

  const categoryData = [
    { name: "Disaster Funds", value: 35 },
    { name: "Infrastructure", value: 25 },
    { name: "Budget Allocation", value: 20 },
    { name: "Procurement", value: 15 },
    { name: "Other", value: 5 },
  ];

  const trendData = [
    { week: "Week 1", fraudRate: 12 },
    { week: "Week 2", fraudRate: 15 },
    { week: "Week 3", fraudRate: 22 },
    { week: "Week 4", fraudRate: 18 },
  ];

  const COLORS = ["hsl(var(--primary))", "hsl(var(--destructive))", "hsl(var(--secondary))", "hsl(var(--accent))", "hsl(var(--muted))"];

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
              <p className="text-muted-foreground">
                Comprehensive fraud detection insights and trends
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Document Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="fraudulent" fill="hsl(var(--destructive))" name="Fraudulent" />
                      <Bar dataKey="nonFraudulent" fill="hsl(var(--primary))" name="Non-Fraudulent" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fraud Distribution by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Fraud Detection Rate Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="week" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="fraudRate" 
                        stroke="hsl(var(--destructive))" 
                        strokeWidth={2}
                        name="Fraud Rate (%)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
