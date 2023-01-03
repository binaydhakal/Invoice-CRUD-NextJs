export const getStatusColor = (status: string | undefined) => {
    switch (status) {
        case 'paid': return 'paid_status';
        case 'pending': return 'pending_status';
        case 'draft': return 'draft_status';
    }
}

export const getBackgroundColorForDot = (status: string | undefined) => {
    switch (status) {
        case 'paid': return '--paid-status-color';
        case 'pending': return '--pending-status-color';
        case 'draft': return '--small-text-color';
    }
}

export const formatDate = (date: string) => {
    const date_split = date.split('-');
    const formattedDate = `${date_split[2]} ${getMonthName(date_split[1])} ${date_split[0]}`
    return formattedDate
}

const getMonthName = (monthNumber: string) => {
  const date = new Date();
  date.setMonth(parseInt(monthNumber, 10) - 1);

  return date.toLocaleString('en-US', { month: 'short' });
}

export const getRandomUniqueId = () => {
    const random_number = Math.floor(1000 + Math.random() * 9000);
    const unique_id = `${randomDoubleString()}${random_number}` 
    return unique_id;
}

const randomDoubleString = () => {
    return `${randomString()}${randomString()}`.toUpperCase()
}

const randomString = () => {
    return String.fromCharCode(0|Math.random()*26+97);
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