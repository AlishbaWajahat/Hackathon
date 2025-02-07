"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/app/context/context";
import { product } from "@/types/types";

const SuccessPageContent = () => {
  const obj = useContext(CartContext);
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/payment?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setStatus(data.payment_status);

          // ✅ If payment is successful, clear the cart
          if (data.payment_status === "paid") {
            localStorage.removeItem("cart");
          }
        })
        .catch((err) => console.error("Error fetching session:", err));
    }
  }, [sessionId]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md">
        <CheckCircle className="text-green-500 mx-auto w-16 h-16 animate-bounce" />
        <h2 className="text-2xl font-semibold mt-4">Success!</h2>
        <p className="text-gray-600 mt-2">Your payment was {status || "processing"}.</p>
        <Button 
          className="mt-6 px-6 py-2" 
          onClick={() => router.push("/shop")}
        >
          Back to shopping
        </Button>
      </div>
    </div>
  );
};

export default SuccessPageContent;
