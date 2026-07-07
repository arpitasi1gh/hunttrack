import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function AddApplication() {
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('Applied');
  const [applicationDate, setApplicationDate] = useState('');
  const [salary, setSalary] = useState('');
  const [nextAction, setNextAction] = useState('');
  const [website, setWebsite] = useState('');
  const [contactName, setContactName] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/v1/applications', {
        method: 'POST',
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
        throw new Error(data.error || 'Failed to create application');
      }

      alert('Application created successfully!');    
      const navigate = useNavigate();
      navigate("/");

    } catch (error) {
      alert('Error:', error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
        <div className="max-w-4xl mx-auto mt-10 p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Application</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="mt-4">
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input type="text" placeholder="E.g., Google" className="w-full border border-gray-300 rounded px-3 py-2 mt-1" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
                </div>
                <div className="mt-4">
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position</label>
                  <input type="text" placeholder="E.g., Software Engineer" id="position" className="w-full border border-gray-300 rounded px-3 py-2 mt-1" value={position} onChange={(e) => setPosition(e.target.value)}/>
                </div>
                <div className="mt-4">
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                  <select id="status" className="w-full border border-gray-300 rounded px-3 py-2 mt-1" value={status}onChange={(e) => setStatus(e.target.value)}>
                    <option value="Applied">Applied</option>
                    <option value="Interviewed">Interviewed</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label htmlFor="applicationDate" className="block text-sm font-medium text-gray-700">Application Date</label>
                  <input type="date" className="w-full border border-gray-300 rounded px-3 py-2 mt-1" id="applicationDate" value={applicationDate} onChange={(e) => setApplicationDate(e.target.value)}/>
                </div>
                <div className="mt-4">
                  <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
                  <input type="text" placeholder="E.g., €95,000" className="w-full border border-gray-300 rounded px-3 py-2 mt-1" id="salary" value={salary} onChange={(e) => setSalary(e.target.value)}/>
                </div>
                <div className="mt-4">
                  <label htmlFor="nextAction" className="block text-sm font-medium text-gray-700">Next Action</label>
                  <input type="text" placeholder="E.g., Prepare Interview" className="w-full border border-gray-300 rounded px-3 py-2 mt-1" id="nextAction" value={nextAction} onChange={(e) => setNextAction(e.target.value)}/>
                </div>
                <div className="mt-4">
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
                  <input type="url" placeholder="E.g., www.google.com" className="w-full border border-gray-300 rounded px-3 py-2 mt-1" id="website" value={website} onChange={(e) => setWebsite(e.target.value)}/>
                </div>
                <div className="mt-4">
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">Contact Name</label>
                  <input type="text" placeholder="E.g., Adam Lee" className="w-full border border-gray-300 rounded px-3 py-2 mt-1" id="contactName" value={contactName} onChange={(e) => setContactName(e.target.value)}/>
                </div>
                <div className="mt-4">
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
                  <textarea placeholder="Any extra notes..." className="w-full border border-gray-300 rounded px-3 py-2 mt-1" id="notes" rows="3" value={notes} onChange={(e) => setNotes(e.target.value)}/>
                </div>
                <button type="submit" className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50" disabled={loading}>{loading ? 'Creating application...' : "Create Application"}</button>
            </form>
        </div>
    </>
  )
};

export default AddApplication;