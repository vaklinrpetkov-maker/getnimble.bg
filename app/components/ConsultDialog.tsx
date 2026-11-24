"use client";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

// Consultation form in a modal dialog.
// Any element with a `data-consult` attribute opens it. Without JavaScript those
// elements keep working as normal links. The form posts to /contact.php, which
// only exists on the hosting server, so sending fails under `npm run dev`.
export default function ConsultDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const trigger = (event.target as Element | null)?.closest("[data-consult]");
      if (!trigger || !dialogRef.current) return;
      event.preventDefault();
      setStatus((s) => (s === "sending" ? s : "idle"));
      dialogRef.current.showModal();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/contact.php", { method: "POST", body: new FormData(form) });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) throw new Error("send failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      className="nb-dialog"
      aria-labelledby="consult-title"
      onClick={(e) => {
        // A click on the backdrop lands on the <dialog> element itself.
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="nb-dialog-body">
        <button type="button" className="nb-dialog-close" aria-label="Затвори" onClick={close}>
          ×
        </button>
        <h2 id="consult-title" className="nb-dialog-title">
          Заявете консултация
        </h2>

        {status === "sent" ? (
          <div role="status" className="nb-dialog-done">
            <p>Благодарим! Получихме запитването и ще се свържем с вас.</p>
            <button type="button" className="nb-submit" onClick={close}>
              Затвори
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="nb-form">
            <label className="nb-field">
              <span>Име</span>
              <input name="name" type="text" required maxLength={100} autoComplete="name" autoFocus />
            </label>
            <label className="nb-field">
              <span>Контакт</span>
              <input name="contact" type="text" required maxLength={150} placeholder="Телефон или имейл" />
            </label>
            <label className="nb-field">
              <span>Запитване</span>
              <textarea name="message" required maxLength={3000} rows={4} />
            </label>
            {/* Spam trap: hidden from people, filled in by bots. */}
            <label className="nb-hp" aria-hidden="true">
              Website
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </label>
            {status === "error" && (
              <p role="alert" className="nb-form-error">
                Не успяхме да изпратим запитването. Пишете ни на{" "}
                <a href="mailto:office@getnimble.bg">office@getnimble.bg</a>.
              </p>
            )}
            <button type="submit" className="nb-submit" disabled={status === "sending"}>
              {status === "sending" ? "Изпращане…" : "Изпрати"}
            </button>
            <p className="nb-form-note">Използваме данните само за да се свържем с вас.</p>
          </form>
        )}
      </div>
    </dialog>
  );
}
