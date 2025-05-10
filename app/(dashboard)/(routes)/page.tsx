
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Welcome to the Dashboard</h1>
      <p className="mt-4 text-lg">This is the main dashboard page.</p>
      <p className="mt-2 text-lg">You can navigate to different sections using the sidebar.</p>
      <p className="mt-2 text-lg">This page is protected by middleware, so it will only be accessible to authenticated users.</p>
      <p className="mt-2 text-lg">If you are not authenticated, you will be redirected to the login page.</p>
      <p className="mt-2 text-lg">If you are authenticated, you will see the content of this page.</p>
      <p className="mt-2 text-lg">You can also access the teacher page by clicking on the link in the sidebar.</p>
      <p className="mt-2 text-lg">This page is protected by middleware, so it will only be accessible to authenticated users.</p>
      
    </div>
  );
}
