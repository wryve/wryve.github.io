import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const progressData = [
    { feature: 'Documentation & Concepts', status: '🚧 In Progress' },
    { feature: 'Authorization', status: '⏳ Planned' },
    // { feature: 'Database Setup', status: '✅ Completed' },
    { feature: 'Messaging System', status: '⏳ Planned' },
    { feature: 'Media Storage Integration', status: '⏳ Planned' },
    { feature: 'Notifications Integration', status: '⏳ Planned' },
    { feature: 'Federation Support', status: '⏳ Planned' },
    { feature: 'Administration Panel', status: '⏳ Planned' },
];

export default function DevelopmentProgress() {
    return (
        <section className={clsx('container', styles.progressSection)}>
            <h2 className={styles.title}>📈 Development Progress</h2>
            <p className={styles.description}>
                Stay updated with the latest development progress of Wryve Messenger.
            </p>
            <ul className={styles.progressList}>
                {progressData.map((item, index) => (
                    <li key={index} className={styles.progressItem}>
                        <span className={styles.feature}>{item.feature}</span>
                        <span className={styles.status}>{item.status}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}