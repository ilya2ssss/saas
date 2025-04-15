const TopBar = () => {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 lg:px-8">
      {/* Mobile Sidebar Toggle (For later) */}
      {/* <Button size="icon" variant="outline" className="sm:hidden">...</Button> */}

      {/* Global Owner Filter Placeholder */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-muted-foreground">
          Viewing:
        </span>
        <p className="text-sm font-medium">[Owner filter Placeholder]</p>
      </div>

      <div className="ml-auto flex items-center gap-4">
        {/* Search Placeholder */}
        <p className="text-sm text-muted-foreground">[Search Placeholder]</p>
        {/* Notifications Placeholder */}
        <p className="text-sm text-muted-foreground">[🔔]</p>
        {/* User Menu Placeholder */}
        <p className="text-sm text-muted-foreground">[👤]</p>
      </div>
    </header>
  );
};

export default TopBar;
