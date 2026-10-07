import { useState } from "react";
import Button from "./Button";

/**
 * Email input + gradient subscribe button.
 * `joined` renders the attached (footer) style; otherwise the spaced (newsletter) style.
 */
function EmailForm({ joined = false, onSubscribe }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    onSubscribe?.(email.trim());
    setEmail("");
  };

  const inputBase =
    "bg-white px-[30px] text-base text-ink placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-lime";

  if (joined) {
    return (
      <form onSubmit={handleSubmit} className="flex w-full">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          aria-label="Email address"
          className={`${inputBase} -mr-px min-w-0 flex-1 rounded-l-xl border border-white/15 py-3.5`}
        />
        <Button type="submit" variant="gradient" className="rounded-r-xl px-7.5 py-3.5 text-[#040d11]">
          Subscribe
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        aria-label="Email address"
        className={`${inputBase} w-full rounded-xl border border-ink/15 py-4.5 sm:w-100`}
      />
      <Button type="submit" variant="gradient" className="rounded-xl px-7.5 py-4.5">
        Subscribe
      </Button>
    </form>
  );
}

export default EmailForm;
