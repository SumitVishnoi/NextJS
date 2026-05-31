"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { api } from "@/lib/api";

export default function Register() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e)=> {
    e.preventDefault()

    try {
        const res = await api.post("/api/auth/register", formData)
        console.log(res.data)
    } catch (error) {
        console.log("error in register", error)
    }
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Create Account</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="name" type="name" placeholder="Full Name" onChange={handleChange} />

            <Input name="email" type="email" placeholder="Email Address" onChange={handleChange} />

            <Input name="password" type="password" placeholder="Password" onChange={handleChange} />

            <Button className="w-full">Register</Button>
          </form>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-700 hover:underline ">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
