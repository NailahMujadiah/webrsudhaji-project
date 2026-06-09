import { useEffect, useState } from 'react';

interface ToastProps {
    message: string;
}

export default function Toast({ message }: ToastProps) {
    const [visible, setVisible] = useState(true);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFading(true);
            setTimeout(() => setVisible(false), 400);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div style={{
            position: 'fixed',
            top: '1.5rem',
            right: '1.5rem',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderLeft: '4px solid #22c55e',
            borderRadius: '0.5rem',
            padding: '1rem 1.25rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            minWidth: '18rem',
            transition: 'opacity 0.4s ease',
            opacity: fading ? 0 : 1,
        }}>
            {/* Icon */}
            <div style={{ color: '#22c55e', flexShrink: 0 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
            </div>

            {/* Teks */}
            <div>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#0f172a', margin: 0 }}>Berhasil</p>
                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>{message}</p>
            </div>

            {/* Tombol tutup */}
            <button onClick={() => setVisible(false)} style={{
                marginLeft: 'auto',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#94a3b8',
                padding: 0,
                lineHeight: 1,
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
        </div>
    );
}