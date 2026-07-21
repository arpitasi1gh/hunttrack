import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Navbar.jsx';

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
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
        console.error('Fetch error:', error.message);
    } finally {
        setLoading(false);
    }

  }

  useEffect(() => {
    fetchApplications();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-gray-600">Loading.....</div>;
  }

  return (
    <>
        <Navbar/>
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">My Applications</h1>
            {applications.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400">No applications yet. Start adding some!</p>
            ) : (
                <div className="space-y-4">
                    {applications.map((app) => (
                        <div key={app.id} className="bg-white shadow rounded-lg p-4 border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-800">{app.companyName}</h3>
                            <p className="text-gray-600">{app.position}</p>
                            <p className="text-sm text-gray-500">Status: <span className="font-medium">{app.status}</span></p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </>
  )
};

export default Dashboard;