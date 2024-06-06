function Navigation() {
  const location = useLocation();
  if (location.pathname !== '/') {
    return null;
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/form">DevExtreme Form</Link>
        </li>
        <li>
          <Link to="/table">DevExtreme Table</Link>
        </li>
      </ul>
    </nav>
  );
}

