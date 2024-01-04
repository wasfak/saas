import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <div>
      Landing Page unprotected
      <Link href="/sign-in">
        <Button>Login</Button>
      </Link>
      <Link href="/sign-up">
        <Button>Register</Button>
      </Link>
    </div>
  );
}
