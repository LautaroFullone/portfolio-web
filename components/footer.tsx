"use client";

import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { locale, t } = useI18n();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          {t.footer.rights[locale]}
        </p>
      </div>
    </footer>
  );
}
