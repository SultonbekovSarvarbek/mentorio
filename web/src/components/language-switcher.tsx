"use client";

import { Button } from "@/components/ui/button";

interface LanguageSwitcherProps {
  currentLang: "en" | "ru";
  onLanguageChange: (lang: "en" | "ru") => void;
}

export function LanguageSwitcher({ currentLang, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div className="flex gap-2">
      <Button
        variant={currentLang === "ru" ? "default" : "outline"}
        size="sm"
        onClick={() => onLanguageChange("ru")}
      >
        RU
      </Button>
      <Button
        variant={currentLang === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => onLanguageChange("en")}
      >
        EN
      </Button>
    </div>
  );
} 