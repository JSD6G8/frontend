function Navbar() {
    return (
      <ul className="flex flex-row justify-end gap-3">
        <li><a href="/">Home</a></li>
        <li><a href="/activities">Activity List</a></li>
        <li><a href="/activities/create">Create Activity</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/settings">Profile</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Sign Up</a></li>
      </ul>
    );
}

export default Navbar;