export const getStatusColor = (status: string) => {
    switch (status) {
        case 'paid': return 'bg-[var(--paid-status-bg)] text-[var(--paid-status-color)]';
        case 'pending': return 'bg-[var(--pending-status-bg)] text-[var(--pending-status-color)]';
        case 'draft': return 'bg -[var(--draft-bg)] text-[--paid-status-color]';
        case 'paid': return 'bg -[var(--paid-status-bg)] text-[--paid-status-color]';
        case 'paid': return 'bg -[var(--paid-status-bg)] text-[--paid-status-color]';
        default: return 'bg -[var(--paid-status-bg)] text-[--paid-status-color]';
    }
}