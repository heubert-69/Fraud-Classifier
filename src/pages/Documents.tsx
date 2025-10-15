import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, AlertTriangle, CheckCircle } from "lucide-react";

const Documents = () => {
  const documents = [
    {
      id: 1,
      name: "COA Audit Report 2023",
      date: "2024-10-15",
      status: "fraudulent",
      confidence: 92,
      size: "2.4 MB",
    },
    {
      id: 2,
      name: "LDRRMF Fund Utilization Q2",
      date: "2024-09-20",
      status: "non-fraudulent",
      confidence: 87,
      size: "1.8 MB",
    },
    {
      id: 3,
      name: "Evacuation Center Budget",
      date: "2024-08-12",
      status: "fraudulent",
      confidence: 95,
      size: "3.1 MB",
    },
    {
      id: 4,
      name: "Disaster Fund Allocation 2024",
      date: "2024-07-30",
      status: "non-fraudulent",
      confidence: 78,
      size: "1.5 MB",
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Documents</h1>
              <p className="text-muted-foreground">
                View and manage all analyzed financial documents
              </p>
            </div>

            <div className="grid gap-4">
              {documents.map((doc) => (
                <Card key={doc.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{doc.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{doc.date}</span>
                            <span>•</span>
                            <span>{doc.size}</span>
                          </div>
                          <div className="flex items-center gap-3 mt-3">
                            <Badge
                              variant={doc.status === "fraudulent" ? "destructive" : "default"}
                              className="gap-1"
                            >
                              {doc.status === "fraudulent" ? (
                                <AlertTriangle className="h-3 w-3" />
                              ) : (
                                <CheckCircle className="h-3 w-3" />
                              )}
                              {doc.status === "fraudulent" ? "Fraudulent" : "Non-Fraudulent"}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              Confidence: {doc.confidence}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
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

export default Documents;
