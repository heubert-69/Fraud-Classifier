import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileQuestion, MessageCircle, Mail } from "lucide-react";

const Help = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto w-full grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="mb-4">
                <h1 className="text-3xl font-bold mb-2">Help & Support</h1>
                <p className="text-muted-foreground">Find answers and get assistance with FinAI</p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-3">
                    <FileQuestion className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Documentation</CardTitle>
                    <CardDescription>Comprehensive guides and tutorials</CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <MessageCircle className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Live Chat</CardTitle>
                    <CardDescription>Get instant support from our team</CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <Mail className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Email Support</CardTitle>
                    <CardDescription>Contact us at support@finai.ph</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Contact Support</CardTitle>
                  <CardDescription>Send us a message and we'll get back to you soon</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Input placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="Subject" />
                  </div>
                  <div className="space-y-2">
                    <Textarea placeholder="Describe your issue or question..." rows={5} />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-1">
              <div className="md:sticky md:top-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>How does FinAI detect fraud?</AccordionTrigger>
                        <AccordionContent>
                          FinAI uses advanced AI algorithms to analyze financial documents and identify patterns
                          indicative of fraud. It examines fund utilization, budget allocations, transaction patterns,
                          and compliance violations to flag suspicious activities with high accuracy.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger>What types of documents can I upload?</AccordionTrigger>
                        <AccordionContent>
                          FinAI supports PDF, Excel spreadsheets, CSV files, and scanned images of financial documents
                          including audit reports, budget records, transaction statements, and fund utilization reports.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger>How accurate is the fraud detection?</AccordionTrigger>
                        <AccordionContent>
                          FinAI achieves high accuracy rates through machine learning models trained on extensive
                          financial data. The system provides a confidence score with each analysis, and results
                          should be reviewed by qualified auditors for final determination.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger>Is my data secure?</AccordionTrigger>
                        <AccordionContent>
                          Yes. All uploaded documents are encrypted and stored securely. We follow industry-standard
                          security practices and comply with data protection regulations to ensure your sensitive
                          financial information remains confidential.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5">
                        <AccordionTrigger>Can I export analysis reports?</AccordionTrigger>
                        <AccordionContent>
                          Yes, you can export detailed analysis reports in PDF or Excel format from the Documents
                          section. Reports include fraud detection results, confidence scores, and identified anomalies.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Help;
