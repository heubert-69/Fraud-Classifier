import { useState, useRef, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const Settings = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    return () => {
      if (avatarUrl) URL.revokeObjectURL(avatarUrl);
    };
  }, [avatarUrl]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setAvatarUrl(url);
  };

  const triggerUpload = () => inputRef.current?.click();

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto w-full grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="mb-4">
                <h1 className="text-3xl font-bold mb-2">Settings</h1>
                <p className="text-muted-foreground">Manage your account and application preferences</p>
              </div>

              <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-6 md:grid-cols-3 items-center">
                  <div className="flex flex-col items-center md:items-start md:col-span-1">
                    <div className="h-28 w-28 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                      <img src={avatarUrl ?? "/placeholder.svg"} alt="avatar" className="h-full w-full object-cover" />
                    </div>
                    <div className="mt-3">
                      <button type="button" onClick={triggerUpload} className="inline-block px-3 py-2 bg-white border rounded-md text-sm">
                        Upload photo
                      </button>
                      <input ref={inputRef} onChange={handleFileChange} type="file" accept="image/*" className="hidden" id="avatarInput" />
                    </div>
                  </div>

                  <div className="md:col-span-2 space-y-3">
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="space-y-1">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue="Naga Admin" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="admin@naga.gov.ph" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="organization">Organization</Label>
                      <Input id="organization" defaultValue="Naga City Government" />
                    </div>

                    <div className="flex justify-end">
                      <Button>Save Changes</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              </Card>

              <div className="mt-8">
              <Card>
              <CardHeader>
                <CardTitle>Analysis Settings</CardTitle>
                <CardDescription>Configure fraud detection parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="threshold">Confidence Threshold (%)</Label>
                  <Input id="threshold" type="number" defaultValue="75" min="0" max="100" />
                  <p className="text-sm text-muted-foreground">
                    Minimum confidence level to flag a document as fraudulent
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Auto-Process Documents</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically analyze documents upon upload
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Button>Update Settings</Button>
              </CardContent>
            </Card>
            </div>
            </div>

            {/* Right column: Notifications (fills the whitespace on larger screens) */}
            <div className="md:col-span-1">
              <div className="md:sticky md:top-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Configure how you receive alerts</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive email alerts for high-priority fraud detections</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Real-time Alerts</Label>
                        <p className="text-sm text-muted-foreground">Get instant notifications for critical fraud cases</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Weekly Reports</Label>
                        <p className="text-sm text-muted-foreground">Receive weekly summary of fraud detection activities</p>
                      </div>
                      <Switch />
                    </div>
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

export default Settings;
