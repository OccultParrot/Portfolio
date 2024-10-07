function Error() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-4">Oops!</h2>
        <p className="text-lg text-gray-700 mb-6">An error has occurred!</p>
        <p className="text-gray-500 mb-8">We're sorry for the inconvenience. Please try again later.</p>
        <a href="/" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-300">
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default Error;
