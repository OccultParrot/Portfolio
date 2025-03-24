import { useState, useEffect } from 'react';
import { BackendUrl } from '../config.tsx';
import { IMessage } from '../types.ts';

interface IncomingMessage extends IMessage {
  id: number;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<IncomingMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await fetch(BackendUrl + '/Contacts', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data: IncomingMessage[] = await response.json();
      setMessages(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      console.error('Failed to fetch messages:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []); // Empty dependency array means this effect runs once on mount

  const handleDelete = async (id: number) => {
    try {
      setLoading(true);
      const response = await fetch(`${BackendUrl}/Contacts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // Update messages by filtering out the deleted one
      setMessages(messages.filter(message => message.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete message');
      console.error('Failed to delete message:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading messages...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500 mb-4">Error: {error}</p>
        <button
          onClick={() => fetchMessages()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-12! text-center text-gray-800">
        Messages
      </h2>

      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((message) => (
            <li key={message.id} className="border p-4 rounded-lg shadow">
              <p className="text-xs text-gray-400">ID: {message.id}</p>
              <h2 className="font-semibold text-center">{message.name}</h2>
              <p className="text-sm text-gray-500 text-center">{message.email}</p>
              <p className="mt-2">{message.message}</p>
              <div className="text-center mt-4">
                <button
                  onClick={() => handleDelete(message.id)}
                  type="button"
                  className="inline-flex justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  disabled={loading}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}