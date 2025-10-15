import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload as UploadIcon, FileText, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    toast({
      title: "Document Uploaded",
      description: "Your document is being analyzed for fraud detection.",
    });
  };

  const handleFileSelect = () => {
    toast({
      title: "Document Uploaded",
      description: "Your document is being analyzed for fraud detection.",
    });
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Upload Documents</h1>
              <p className="text-muted-foreground">
                Upload financial documents for AI-powered fraud detection analysis
              </p>
            </div>

            <Card
              className={`border-2 border-dashed transition-colors ${
                isDragging ? "border-primary bg-primary/5" : "border-muted"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <UploadIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Drop files here or click to browse</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Supports PDF, Excel, CSV, and image files
                </p>
                <Button onClick={handleFileSelect}>
                  <UploadIcon className="mr-2 h-4 w-4" />
                  Select Files
                </Button>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-3">
                  <FileText className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Audit Reports</CardTitle>
                  <CardDescription>COA and financial audit documents</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <FileText className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Budget Records</CardTitle>
                  <CardDescription>Fund allocation and utilization data</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CheckCircle className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Transaction Logs</CardTitle>
                  <CardDescription>Payment and transfer statements</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Upload;
