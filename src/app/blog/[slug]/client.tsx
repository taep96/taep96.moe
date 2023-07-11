"use client";

import { useRef, useState } from "react";
import { Check, Clipboard } from "react-feather";

export function Pre({ children, ...props }: React.HTMLProps<HTMLPreElement>) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  async function copyToClipboard() {
    await navigator.clipboard.writeText(preRef.current?.innerText || "");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }

  return (
    <pre className="relative" ref={preRef} {...props}>
      <button
        className="absolute right-2 rounded text-violet"
        onClick={() => void copyToClipboard()}
        disabled={copied}
      >
        {copied ? (
          <Check className="h-5 w-5" />
        ) : (
          <Clipboard className="h-5 w-5" />
        )}
      </button>
      {children}
    </pre>
  );
}
