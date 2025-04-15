import Link from "next/link";

const SideBar = () => {
  return (
    <aside className="hidden md:flex md:w-64 flex-col border-r bg-muted/40 p-4">
      {/* Logo Placeholder */}
      <div className="mb-6 h-10">
        <Link href="/dashboard" className="text-lg font-semibold">
          Oleras Systems
        </Link>
      </div>

      {/* Navigation Placeholder */}
      <nav className="flex flex-col space-y-2">
        <p className="text-sm text-muted-foreground">Navigation Placeholder</p>
        {/* Links will go here */}
      </nav>

      {/* Settings Footer Placeholder */}
      <div className="mt-auto">
        <p className="text-sm text-muted-foreground">Settings Placeholder</p>
      </div>
    </aside>
  );
};

export default SideBar;
