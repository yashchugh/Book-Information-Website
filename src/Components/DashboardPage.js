import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../images/Main.css';

const DashboardPage = () => {
  return (
    <div>
      <div
        className="content"
        style={{
          backgroundSize: 'cover',
          // background: 'linear-gradient(to bottom, #ffff8d 0%, #e040fb 100%)',
          backgroundImage: `url(${process.env.PUBLIC_URL + "/4.png"})`,
          padding: '320px',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dashboard content */}
        <h2 style={{ color: 'white', position: 'relative', left: '30x', top: '-320px' }}>Dashboard Page</h2>
        <p style={{ color: 'white', position: 'relative', left: '30x', top: '-320px' }}>Welcome to the dashboard! This is the protected area of your app.</p>

        <h2 style={{ color: 'white', marginTop: '-300px' }}>Full Calendar </h2>
        <FullCalendar style={{ position: 'absolute', top: '30px' }}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: 'Lecture', date: '2023-08-20' },
            { title: 'Book Reading', date: '2023-08-30' },
          ]}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
