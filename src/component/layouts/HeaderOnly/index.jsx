// Import libraries

// Import files
import Header from './Header';

// Function component
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
    </div>
  );
}

export default DefaultLayout;
