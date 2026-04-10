import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function DailyTrend() {
    const data = [
        { month: 'Jan', potholes: 45, waterlogging: 12 },
        { month: 'Feb', potholes: 52, waterlogging: 18 },
        { month: 'Mar', potholes: 38, waterlogging: 8 },
        { month: 'Apr', potholes: 61, waterlogging: 22 },
        { month: 'May', potholes: 48, waterlogging: 15 },
        { month: 'Jun', potholes: 74, waterlogging: 35 },
    ];
  return (
    <div style={{ width: '420px', height: '320px' }}>
        <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 80]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="potholes" stroke="#ef4444"
              strokeWidth={2} dot={{ r: 5, fill: '#ef4444' }} />
            <Line type="monotone" dataKey="waterlogging" stroke="#3b82f6"
              strokeWidth={2} dot={{ r: 5, fill: '#3b82f6' }} />
        </LineChart>
    </ResponsiveContainer>
    </div>
    
  )
}

export default DailyTrend
