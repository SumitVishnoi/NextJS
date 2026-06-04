import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Header */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>

        <p className="mt-4 text-muted-foreground">
          We&apos;d love to hear from you. Send us a message and we&apos;ll respond as
          soon as possible.
        </p>
      </section>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <Mail className="h-6 w-6" />

              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">support@example.com</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <Phone className="h-6 w-6" />

              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">+91 98765 43210</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <MapPin className="h-6 w-6" />

              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-muted-foreground">
                  123 Business Street
                  <br />
                  Jaipur, Rajasthan, India
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>

              <CardDescription>
                Fill out the form below and our team will get back to you.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>

                    <Input id="name" placeholder="John Doe" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>

                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>

                  <Input id="subject" placeholder="How can we help?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>

                  <Textarea
                    id="message"
                    placeholder="Write your message here..."
                    className="min-h-37.5"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
