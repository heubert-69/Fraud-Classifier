import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme";

const Landing = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/20 p-6">
            <ThemeToggle />
            <div className="max-w-5xl w-full text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">FinAI — AI-Powered Financial Fraud Detection</h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                    Automate audits, detect anomalies, and produce transparent reports for better governance. Fast, secure, and
                    designed for public sector workflows.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <Link to="/login">
                        <Button className="px-6 py-3" size="lg">Get started</Button>
                    </Link>
                    <Link to="/learnmore">
                        <Button variant="ghost" className="px-6 py-3" size="lg">Learn more</Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Automated Anomaly Detection</CardTitle>
                            <CardDescription>Find suspicious transactions and irregularities with explainable AI.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Uses model-backed rules and statistical checks to flag issues.</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Secure & Compliant</CardTitle>
                            <CardDescription>Keep data private and auditable with access controls and logs.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Role-based access and exportable audit trails for transparency.</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Reports & Visualization</CardTitle>
                            <CardDescription>Interactive dashboards and downloadable reports for stakeholders.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Charts, timelines, and granular document views to investigate findings.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Landing;

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            onClick={toggleTheme}
            title="Toggle theme"
            className="fixed top-4 right-4 z-50 inline-flex items-center justify-center p-2 rounded-md border bg-card"
        >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
    );
};
