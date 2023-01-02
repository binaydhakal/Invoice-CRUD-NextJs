export const getStatusColor = (status: string | undefined) => {
    switch (status) {
        case 'paid': return 'bg-[var(--paid-status-bg)] text-[var(--paid-status-color)]';
        case 'pending': return 'bg-[var(--pending-status-bg)] text-[var(--pending-status-color)]';
        case 'draft': return 'bg -[var(--draft-bg)] text-[--paid-status-color]';
        case 'paid': return 'bg -[var(--paid-status-bg)] text-[--paid-status-color]';
        case 'paid': return 'bg -[var(--paid-status-bg)] text-[--paid-status-color]';
        default: return 'bg -[var(--paid-status-bg)] text-[--paid-status-color]';
    }
}

export const getWindowDimension = () => {
    const hasWindow = typeof window !== 'undefined';
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
}

export const initialInvoice = {
    id: '',
    createdAt: '',
    senderAddress: {
        city: '',
        postCode: '',
        country: '',
        street: '',
    },
    clientAddress: {
        city: '',
        postCode: '',
        country: '',
        street: '',
    },
    paymentDue: '',
    description: '',
    status: '',
    paymentTerms: '',
    clientEmail: '',
    clientName: '',
}

export const getRandomId = () => {
    return `${Math.random()}`
}