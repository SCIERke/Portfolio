import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setStatus('success');
            setFormData({ email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 text-sm flex flex-col gap-4 w-full h-full justify-center">
            
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="p-2 rounded-md border border-neutral-200 dark:border-neutral-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all"
                    placeholder="your@email.com"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="subject" className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="p-2 rounded-md border border-neutral-200 dark:border-neutral-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all"
                    placeholder="What's this about?"
                />
            </div>

            <div className="flex flex-col gap-1 grow">
                <label htmlFor="message" className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="p-2 rounded-md border border-neutral-200 dark:border-neutral-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all resize-none h-32"
                    placeholder="Your message here..."
                />
            </div>

            <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`p-2 rounded-md font-medium text-white transition-all ${
                    status === 'success' 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : status === 'error'
                        ? 'bg-red-500 hover:bg-red-600'
                        : 'bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : status === 'error' ? 'Retry' : 'Send Message'}
            </button>
            
            {errorMessage && (
                <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}
        </form>
    );
};

export default ContactForm;
