import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';

function EditApplication() {
  const {id} = useParams();

  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('Applied');
  const [applicationDate, setApplicationDate] = useState('');
  const [salary, setSalary] = useState('');
  const [nextAction, setNextAction] = useState('');
  const [website, setWebsite] = useState('');
  const [contactName, setContactName] = useState('');
  const [notes, setNotes] = useState('');

  const [fetchLoading, setFetchLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {

    const fetchApplication = async () => {

      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/applications/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        const application = await response.json();
        if (!response.ok) {
          throw new Error(application.error || 'Failed to fetch application');
        }

        setCompanyName(application.companyName || '');
        setPosition(application.position || '');
        setStatus(application.status || 'Applied');
        setApplicationDate(application.applicationDate ? application.applicationDate.split('T')[0] : '');
        setSalary(application.salary || '');
        setNextAction(application.nextAction || '');
        setWebsite(application.website || '');
        setContactName(application.contactName || '');
        setNotes(application.notes || '');

      } catch (error) {
          setError(error.message);
          console.error('Error:', error.message);
      } finally {
          setFetchLoading(false);
      }

    };

    fetchApplication();

  }, [id]);

  const handleSubmit = async (e) => {

    e.preventDefault();
    setLoading(true);
    setError('');

    try {

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/applications/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          companyName,
          position,
          status,
          applicationDate: applicationDate || undefined,
          salary: salary || undefined,
          nextAction: nextAction || undefined,
          website: website || undefined,
          contactName: contactName || undefined,
          notes: notes || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update application');
      }

      alert('Application updated successfully!');
      navigate("/");

    } catch (error) {
      setError(error.message);
      console.error('Error:', error.message);
    } finally {
      setLoading(false);
    }

  }

  if (fetchLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-4xl mx-auto mt-10 p-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Edit Existing Application</h1>
          {error && (<div className="mb-4 px-4 py-2 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 rounded-md text-red-600 dark:text-red-300 text-sm">⚠️ {error}</div>)}
          <form className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow" onSubmit={handleSubmit}>
                <div className="mt-4">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Company Name</label>
                <input type="text" placeholder="E.g., Google" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-blue-500 rounded px-3 py-2 mt-1" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required/>
              </div>
              <div className="mt-4">
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Position</label>
                <input type="text" placeholder="E.g., Software Engineer" id="position" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-blue-500 rounded px-3 py-2 mt-1" value={position} onChange={(e) => setPosition(e.target.value)} required/>
              </div>
              <div className="mt-4">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
                <select id="status" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-blue-500 rounded px-3 py-2 mt-1" value={status}onChange={(e) => setStatus(e.target.value)}>
                  <option value="Applied">Applied</option>
                  <option value="Interviewed">Interviewed</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              <div className="mt-4">
                <label htmlFor="applicationDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Application Date</label>
                <input type="date" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-blue-500 rounded px-3 py-2 mt-1" id="applicationDate" value={applicationDate} onChange={(e) => setApplicationDate(e.target.value)}/>
              </div>
              <div className="mt-4">
                <label htmlFor="salary" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Salary</label>
                <input type="text" placeholder="E.g., €95,000" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-blue-500 rounded px-3 py-2 mt-1" id="salary" value={salary} onChange={(e) => setSalary(e.target.value)}/>
              </div>
              <div className="mt-4">
                <label htmlFor="nextAction" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Next Action</label>
                <input type="text" placeholder="E.g., Prepare Interview" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-blue-500 rounded px-3 py-2 mt-1" id="nextAction" value={nextAction} onChange={(e) => setNextAction(e.target.value)}/>
              </div>
              <div className="mt-4">
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Website</label>
                <input type="url" placeholder="E.g., www.google.com" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-blue-500 rounded px-3 py-2 mt-1" id="website" value={website} onChange={(e) => setWebsite(e.target.value)}/>
              </div>
              <div className="mt-4">
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Contact Name</label>
                <input type="text" placeholder="E.g., Adam Lee" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-blue-500 rounded px-3 py-2 mt-1" id="contactName" value={contactName} onChange={(e) => setContactName(e.target.value)}/>
              </div>
              <div className="mt-4">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Notes</label>
                <textarea placeholder="Any extra notes..." className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-blue-500 rounded min-h-11 px-3 py-2 mt-1" id="notes" rows="3" value={notes} onChange={(e) => setNotes(e.target.value)}/>
              </div>
              <button type="submit" className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50" disabled={loading}>{loading ? 'Editing application...' : "Update Application"}</button>
              <button type="button" className="w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition" onClick={() => navigate('/')}>Cancel</button>
          </form>
      </div>
    </div>
  )
};

export default EditApplication;