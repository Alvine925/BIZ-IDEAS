// Home.jsx (User-Facing Site)
import { useState, useMemo } from 'react';
import ideas from '../data/ideas';
import industries from '../data/industries';
import { jsPDF } from 'jspdf';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [openMap, setOpenMap] = useState({});

  const filtered = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return ideas.filter(i => {
      const combined = `${i.idea} ${i.description} ${i.industry}`.toLowerCase();
      return query === '' || combined.includes(query);
    }).filter(i => filter === 'All' || i.industry.toLowerCase() === filter.toLowerCase());
  }, [filter, searchTerm]);

  const toggle = (idx) => {
    setOpenMap(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const downloadIdea = (ideaObj) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(ideaObj.idea, 10, 10);
    doc.setFontSize(12);
    doc.text(`Industry: ${ideaObj.industry}`, 10, 20);
    doc.text('Description:', 10, 30);
    doc.setFontSize(10);
    doc.text(ideaObj.description, 10, 40, { maxWidth: 180 });
    doc.save(`${ideaObj.idea.replace(/\s+/g, '_')}.pdf`);
  };

  return (
    <div>
      <div style={{
        backgroundColor: '#8B0000',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: '2rem',
        marginBottom: '1rem',
      }}>
        <h1>Explore Business Ideas</h1>
        <p>Discover curated plans across various industries</p>
      </div>

      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        borderRadius: '10px',
        border: '2px solid #007BFF',
        marginBottom: '2rem'
      }}>
        <input
          type="text"
          placeholder="Search keyword (e.g. AI, Garden)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '12px', fontSize: '16px', border: '2px solid black', borderRadius: '10px' }}
        />

        <div style={{
          display: 'flex',
          overflowX: 'auto',
          marginTop: '1rem',
          gap: '10px',
          paddingBottom: '1rem'
        }}>
          {industries.map((ind, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(ind.label)}
              style={{
                flex: '0 0 auto',
                padding: '10px 20px',
                borderRadius: '10px',
                border: '2px solid black',
                backgroundColor: filter === ind.label ? '#007BFF' : 'white',
                color: filter === ind.label ? 'white' : '#333',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              {ind.label}
            </button>
          ))}
        </div>
      </div>

      <div className="container">
        {filtered.map((ideaObj, idx) => (
          <div
            key={idx}
            style={{
              border: '3px solid blue',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem'
            }}
          >
            <div onClick={() => toggle(idx)} style={{ cursor: 'pointer' }}>
              <span style={{ color: '#8B0000', fontWeight: 'bold' }}>{ideaObj.idea}</span>
            </div>

            {openMap[idx] && (
              <>
                <p style={{ marginTop: '1rem' }}>{ideaObj.description}</p>
                <p><em>{ideaObj.industry}</em></p>
                <div style={{ marginTop: '0.5rem' }}>
                  <button
                    onClick={() => downloadIdea(ideaObj)}
                    style={{ backgroundColor: '#007BFF', color: 'white', border: 'none', padding: '0.5rem 1rem' }}
                  >
                    Download
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}