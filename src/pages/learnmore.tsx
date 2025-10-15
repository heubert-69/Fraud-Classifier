import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/10 py-12 px-6">
      <div className="relative">
        {/* Decorative background blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-emerald-300 via-lime-300 to-teal-300 opacity-30 blur-3xl transform -rotate-12 dark:from-emerald-900 dark:via-lime-800 dark:to-teal-800 dark:opacity-20 -z-10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-tr from-yellow-300 via-green-300 to-lime-200 opacity-25 blur-3xl transform rotate-6 dark:from-yellow-800 dark:via-green-700 dark:to-lime-700 dark:opacity-18 -z-10"
        />

        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50">
              About FinAI
            </h1>
            <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
              Empowering transparent governance through AI-driven financial integrity.
            </p>
          </header>

          <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <section className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What We Do</CardTitle>
                  <CardDescription>AI for financial accountability</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    FinAI uses artificial intelligence to identify signs of corruption, fraud, or fund
                    mismanagement in public financial transactions. By analyzing data from banks and
                    local government ledgers, it detects unusual spending patterns, duplicate fund
                    releases, and vendor irregularities.
                  </p>
                  <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground">
                    <li>Flag anomalies in government financial records automatically.</li>
                    <li>Detect duplicate or suspicious fund transfers.</li>
                    <li>Generate explainable insights for auditors and decision-makers.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How It Works</CardTitle>
                  <CardDescription>Data-driven corruption detection</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our model processes transaction datasets from local banks and financial
                    institutions. It uses machine learning to classify each transaction as{" "}
                    <strong>fraudulent</strong> or <strong>non-fraudulent</strong>, providing a confidence
                    score and rationale for each result. This empowers auditors to act quickly and verify
                    anomalies with evidence-backed reports.
                  </p>
                  <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground">
                    <li>AI-assisted anomaly detection using supervised and unsupervised learning.</li>
                    <li>Transparency-first design — every flag includes a reason and traceability.</li>
                    <li>Customizable detection thresholds for different government agencies.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security & Transparency</CardTitle>
                  <CardDescription>Protecting public data with integrity</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    FinAI prioritizes data privacy and transparency. All financial data is processed
                    securely within authorized systems and encrypted at rest and in transit. Every AI
                    decision is logged and reproducible, ensuring the platform aligns with national audit
                    and data protection policies.
                  </p>
                  <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground">
                    <li>Encryption in transit (TLS) and at rest (AES-256).</li>
                    <li>Immutable audit logs and accountability reports.</li>
                    <li>Complies with Philippine data privacy standards (RA 10173).</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Policy & Ethical AI</CardTitle>
                  <CardDescription>Guided by fairness, accountability, and transparency</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    FinAI upholds strict ethical standards in AI use and data processing. Our models are
                    designed to support — not replace — human judgment, ensuring every flagged transaction
                    is subject to proper review and context-based interpretation. We operate under a
                    commitment to fairness, data minimization, and responsible innovation.
                  </p>
                  <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground">
                    <li>Human-in-the-loop verification for every AI-generated flag.</li>
                    <li>No collection of personally identifiable information beyond what is necessary.</li>
                    <li>AI models regularly audited for bias, accuracy, and transparency.</li>
                    <li>Aligned with national anti-corruption and digital governance frameworks.</li>
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground">
                    This policy ensures that FinAI strengthens integrity in governance while maintaining
                    public trust and compliance with local ethical standards.
                  </p>
                </CardContent>
              </Card>
            </section>

            <aside className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Get Started</CardTitle>
                  <CardDescription>Experience FinAI in action</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Upload sample government financial data and see how FinAI detects potential anomalies.
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link to="/signup">
                      <Button>Try FinAI</Button>
                    </Link>
                    <Link to="/help">
                      <Button variant="ghost">Request Demo</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Trusted By</CardTitle>
                  <CardDescription>For transparent governance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>Local Government Units (LGUs)</p>
                    <p>Commission on Audit Offices</p>
                    <p>Anti-Corruption Task Forces</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Developers</CardTitle>
                  <CardDescription>The team behind FinAI</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <strong>Jorge Creian</strong>
                      <div className="text-xs text-muted-foreground">Lead ML Engineer — model development & explainability</div>
                    </div>

                    <div>
                      <strong>Gian Dolor</strong>
                      <div className="text-xs text-muted-foreground">Full-stack Engineer — platform & integrations</div>
                    </div>

                    <div>
                      <strong>Mia Mien</strong>
                      <div className="text-xs text-muted-foreground">Product Designer — UX, accessibility & research</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </main>

          <footer className="mt-10 text-center">
            <Link to="/" className="inline-block">
              <Button variant="ghost">Back to Home</Button>
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
