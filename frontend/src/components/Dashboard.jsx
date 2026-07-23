import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Navbar.jsx';

const Dashboard = () => {
  const [applications, setApplications] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const fetchApplications = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/v1/applications', {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch applications');
      }

      setApplications(data.applications || []);

    } catch (error) {
        setError(error.message);
        console.error('Fetch error:', error.message);
    } finally {
        setLoading(false);
    }

  }

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleDelete = async (id) => {

    if (!window.confirm('Are you sure you want to delete this application?')) {
      return;
    }

    try {
      const token = localStorage.getItem('token');

      const response = await fetch(`/api/v1/applications/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to delete application');
      }

      setApplications(applications.filter((app) => app.id !== id));
      alert('Application deleted successfully!');

    } catch (error) {
        setError(error.message);
        console.error('Delete error:', error.message);
    } finally {
        setLoading(false);
    }

  };

  if (loading) {
    return (
      <>
        <Navbar/>
        <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 dark:bg-gray-900">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading your applications...</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar/>
        <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 dark:bg-gray-900 px-4 text-center">
          <div className="text-4xl mb-3">⚠️</div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Failed to load applications</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{error}</p>
          <button onClick={fetchApplications} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm">Try Again</button>
        </div>
      </>
    );
  }

  return (
    <>
        <Navbar/>
        <div className="max-w-full mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">My Applications</h1>
              <button onClick={() => navigate('/add')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm font-medium flex items-center gap-1">＋ Add Application</button>
            </div>
            {applications.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-gray-500 dark:text-gray-400">No applications yet. </p>
                  <Link to="/add" className="block mt-4 text-blue-600 dark:text-blue-400 hover:underline">Start adding some!</Link>
                </div>
            ) : (
                <div className="overflow-x-auto">
                  <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr className="text-center text-xs text-gray-700 dark:text-gray-300 divide-x divide-gray-300 dark:divide-gray-800 uppercase tracking-wider">
                        <th className="px-4 py-3 font-medium">Company</th>
                        <th className="px-4 py-3 font-medium">Position</th>
                        <th className="px-4 py-3 font-medium">Status</th>
                        <th className="px-4 py-3 font-medium">Application Date</th>
                        <th className="px-4 py-3 font-medium">Salary</th>
                        <th className="px-4 py-3 font-medium">Next Action</th>
                        <th className="px-4 py-3 font-medium">Website</th>
                        <th className="px-4 py-3 font-medium">Contact</th>
                        <th className="px-4 py-3 font-medium">Notes</th>
                        <th className="px-4 py-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {applications.map((app) => (
                        <tr key={app.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 divide-x divide-gray-200 dark:divide-gray-700 transition text-sm text-center">
                          <td className="px-4 py-3 text-gray-900 dark:text-white">{app.companyName}</td>
                          <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{app.position}</td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full font-medium ${
                              app.status === "Applied" ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300" : app.status === "Interviewed" ? "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300" : app.status === "Offer" ? "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300" : app.status === "Rejected" ? "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                            }`}>{app.status}</span>
                          </td>
                          <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{app.applicationDate ? new Date(app.applicationDate).toLocaleDateString() : "-"}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{app.salary || "-"}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{app.nextAction || "-"}</td>
                          <td className="px-4 py-3 text-sm max-w-45">{app.website ? <Link to={app.website} className="text-blue-600 dark:text-blue-400 hover:underline block truncate">{app.website}</Link> : "-"}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{app.contactName || "-"}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{app.notes || "-"}</td>
                          <td className="px-4 py-3 text-sm flex items-center justify-center gap-2">
                            <button onClick={() => navigate(`/edit/${app.id}`)} type="button" title="Edit" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition text-xl cursor-pointer py-1 px-2 rounded-md hover:shadow-sm dark:hover:shadow-gray-600">✏️</button>
                            <button onClick={() => handleDelete(app.id)} type="button" title="Delete" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition text-xl cursor-pointer py-1 px-2 rounded-md hover:shadow-sm dark:hover:shadow-gray-600">🗑️</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            )}
        </div>
    </>
  )
};

export default Dashboard;