export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold">{"404 - Page Not Found"}</h1>
      <p className="mt-2 text-stone-400">
        {"The page you're looking for doesn't exist."}
      </p>
    </div>
  );
}
