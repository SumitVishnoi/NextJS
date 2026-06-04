"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { api } from "@/lib/api";

export default function RegisterPage() {
    const [formData, setFormData] = useState({})
    console.log(formData)
    const handleCheck = (e)=> {
        const { name, value } = e.target; 
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (e)=> {
        e.preventDefault()

        try {
            const res = await api.post("/api/auth/register", formData)
            console.log(res.data)
        } catch (error) {
            console.log("register error", error)
        }
    }
    
  return (
    <main className="container flex min-h-[calc(100vh-4rem)] items-center justify-center py-10">
      <Card className="w-full max-w-md">
        <CardHeader>

          <CardTitle className="text-2xl">
            Create Account
          </CardTitle>

          <CardDescription>
            Sign up to start shopping
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                Full Name
              </Label>

              <Input
              name="name"
                id="name"
                placeholder="John Doe"
                onChange={handleCheck}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email
              </Label>

              <Input
              name="email"
                id="email"
                type="email"
                placeholder="john@example.com"
                onChange={handleCheck}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">
                Password
              </Label>

              <Input
              name="password"
                id="password"
                type="password"
                placeholder="••••••••"
                onChange={handleCheck}
              />
            </div>

            <Button className="w-full">
              Create Account
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-medium text-primary hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}