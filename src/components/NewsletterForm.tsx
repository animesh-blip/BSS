"use client";

export default function NewsletterForm() {
  return (
    <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Your email"
        className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
      />
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
      >
        Join
      </button>
    </form>
  );
}
