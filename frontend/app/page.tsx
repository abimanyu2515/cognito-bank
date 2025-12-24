import { redirect } from "next/navigation";

export default function Home() {
  const isLoggedIn = false; // Replace with actual authentication check
  redirect(isLoggedIn ? "/dashboard" : "/login");
}