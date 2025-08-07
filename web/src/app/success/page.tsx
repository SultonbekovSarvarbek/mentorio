"use client";

import { Suspense } from "react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    // You can verify the session with Stripe here if needed
    console.log('Payment successful for session:', sessionId);
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="text-2xl">Спасибо за предзаказ!</CardTitle>
          <CardDescription>
            Ваша подписка успешно оформлена
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Что дальше?</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Мы отправили подтверждение на вашу почту</li>
              <li>• Вы получите доступ к Mentorio в течение 24 часов</li>
              <li>• Наша команда свяжется с вами для онбординга</li>
            </ul>
          </div>
          
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            Номер заказа: {sessionId ? sessionId.slice(0, 20) + "..." : ""}
          </div>

          <div className="flex flex-col gap-2">
            <Link href="/">
              <Button className="w-full">
                Вернуться на главную
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="text-center text-xs text-gray-500">
            Есть вопросы? Напишите нам:{" "}
            <a href="mailto:sarvarbeksultonbekov@gmail.com" className="text-blue-600 hover:underline">
              sarvarbeksultonbekov@gmail.com
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Загрузка...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
} 