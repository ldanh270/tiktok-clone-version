// Import libraries

// Import files
import Header from './Header';
import Sidebar from './Sidebar';

// Function component
function DefaultLayout({ children }) {
  return (
    <div>
      <div className="control">
        <Header />
        <Sidebar />
      </div>
      <div className="content">{children}</div>
    </div>
  );
}

export default DefaultLayout;
